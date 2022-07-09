This test is to check if user login page loads after clicking on Login page. I have added test for desktop and mobile viewport seperately.The base url (https://www.ubank.com.au/) is defined in the cypress.json file. And
cclearommon selectors are defined in command.js file so that selectos can be resuded.

http://recordit.co/vYzHIp3KEk

### Installation

#### Install cypress

This project requires cypress to run tests
Type following command in your terminal to install cypress

```
npm install cypress
```

#### Download the project

Run following commands to download and setup project

```
git clone git@github.com:Mansatfinder/automation.git
cd automation
```

#### Install the dependencies

Run following command to install all dependencies

```
yarn
```

### Running the tests

#### API tests

To run API tests use this command in terminal

```
yarn api-tests
```

#### API, Desktop and mobile viewport

To run these tests in both desktop and mobile viewport use this command in terminal

```
yarn test
```

#### Desktop only

To run these tests in desktop only use this command in terminal

```
yarn desktop-tests
```

#### In mobile-viewport

To run these tests in mobile viewport use this command in terminal

```
yarn mobile-tests
```
