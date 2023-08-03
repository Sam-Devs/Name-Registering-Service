# Name-Registering-Service

## Scenario - ENS System
Anyone can  apply for a domain name, the owner checks if the name is available, if it is, the applicant pays a fee and the the domain ownership shifts to him, there is an expiry timestamp, if the user doesnt renew by then, the name expires and he loses ownership.

## ARCHITECTURE
- A name registering service - primary
- Guide against Forerunning attack - secondary
- Unregistered name can be registered for a certain time by locking a balance of the account. - primary
- After the registration expires, the account loses ownership of the name and the balance is unlocked. - medium
- The registration can be renewed by making an onchain call to keep the name registered and balance unlocked. - medium
- Reasonable defaults for the locking period and amount - primary
- The fee to register the name depends on the size of the name. - primary
- A malicious node should not be able to frontrun the process by censoring transactions of an honest user and registering the name in its own account




## DESIGN
# Structs
- DomainDetails structure has the following properties:
    - bytes name — the domain name stored as bytes
    - bytes12 topLevel — the TLD of the domain
    - address owner — address of the owner
    - bytes15 ip — IP that is related to the domain name
    - uint expires — expiring date of the domain.

- Receipt structure has the following properties:
    - uint amountPaidWei — the price that was paid in this transaction, stored as the amount of wei (the smallest part of ether
    - uint timestamp — the time when this receipt was issued
    - uint expires — expiring time

# Modifiers
- isAvailable modifier checks whether a certain domain name is available to be bought.
    - collectDomainNamePayments modifier is used as the way for faster check if the user provided the right amount of money for the payment.
    - isDomainOwner modifier checks whether the transaction initiator (msg.sender) is the owner of the certain domain.
    - isDomainOwner modifier checks whether the transaction initiator (msg.sender) is the owner of the certain domain.
    - isDomainNameLengthAllowed modifier checks if the length of domain name is allowed.
    - isTopLevelLengthAllowed modifier checks if the length of the provided TLD is allowed.

# Functions
    - function register(bytes memory domain, bytes12 topLevel, bytes15 ip)
        - function description - To register domain name
        - param - domain - Domain name to be registered
        - param - topLevel - Domain top level (TLD)
        - param - ip - The ip of the host

    - function renewDomainName( bytes memory domain, bytes12 topLevel)
        - function description - To extend domain expiration date
        - param - domain - Domain name to be registered
        - param - topLevel - top level

    - function renewDomainName( bytes memory domain, bytes12 topLevel)
        - function description - To edit domain name
        - param - domain - Domain name to be edited
        - param - topLevel - tld of the domain
        - param - newIp - the new ip for the domain

    - function transferDomain(bytes memory domain, bytes12 topLevel, address newOwner) 
        - function description - Transfer domain ownership
        - param - domain - name of the domain
        - param - topLevel - tld of the domain
        - param - newOwner - address of the new owner

    - function getIP(bytes memory domain, bytes12 topLevel)
        - function description - Get ip of domain
        - param - domain - name of the domain
        - param - topLevel - tld of the domain

    - function getReceiptList() public view returns (bytes32[] memory)
        - function description - Get IP of the provided domain
    
    - function getReceipt(bytes32 receiptKey) public view returns (uint, uint, uint)
        - function description - Get single receipt
        - param - topLevel - tld of the domain

    - function withdraw()
        - function description - To be able to withdraw the ETH (funds) collected from domain registration/renewal payments.
    

## How to set it up

### Install Truffle

```Bash
npm install -g truffle
```

### Install Ganache-cli

Using npm:

```Bash
npm install -g ganache-cli
```

or, if you are using [Yarn](https://yarnpkg.com/):

```Bash
yarn global add ganache-cli
```
### Run Ganache-cli

```Bash
ganache-cli
```

This will start a private development blockchain on your machine. It is set up to be connected to through 127.0.0.1:8545

### Compile and migrate project smart contracts

Open a new command line in this project's file directory and run 

```Bash
truffle compile
```

and

```Bash
truffle migrate
```

This will have compiled and moved our smart contracts to our local development blockchain.


## Notice

- Problem: There are some of the core functionalities I have not fixed yet:
    - Unregistered name can be registered for a certain time by locking a balance of the account. - primary
    - A malicious node should not be able to frontrun the process by censoring transactions of an honest user and registering the name in its own account
