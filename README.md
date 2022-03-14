# Name-Registering-Service

## SCENARIO - ENS System
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




DESIGN
struct - contaiins the name, ip address
object of a struct
mapping
balance(this) / msg.sender
Typecasting - turning sring to bytes
forerunning preventive measures - a check that while this the transaction is ongoing, no other function can happen
bool - unlocked / a check
onchain call - by the msg.sender(contract owner)
payable address- function
modifier
balance
anyone that calls is the owner of the contract 
mappings
function - registername (name)

block.timestamp
time lock
check


This project runs a smart contract made in Solidity which allows users to:
- claim Domain Names
- Set a Domain Name's corresponding IP address
- Read a Domain Name's corresponding IP address
- Retrieve a list of user's owned Domain Names
- Transfer ownership of Domain Names to other users for free
- Offer ownership of Domain Names for specified price
  - Publicly (transfer ownership to any address in exchange for funds)
  - Privately (transfer ownership to specific address in exchange for funds)
- Accept offers of Domain Names (Payable)
  - Public
  - Private

A web page front end allows users to interact with the smart contract (Currently a work in progress)

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
