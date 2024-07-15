# Micro-frontend

Learning about microfront-ends

## Table of Contents
1. [About](#about)
2. [Features](#features)
3. [Requirement](#requirement)
4. [Technologies](#technologies)
5. [Install](#install)
6. [Tests](#tests)
7. [License](#license)
8. [About Me](#about-me)

## About
A monorepo with micro front-end, unity tests and E2E.

## Features
1. [Home](/home/README.md) - Homepage
2. [Tech-Shop MFE](/tech-shop/README.md) - Simulate a shop window and share components which provides some Tech News from a RESTful API and simple product catalog listed by category.

## Requirement
- Node >= v20.14.0 

## Technologies

The main libs and packages which were used in this project:

- [Module Federation](https://module-federation.io/) - [github](https://github.com/module-federation/core) 
- [Material UI](https://mui.com) - [github](https://github.com/mui/material-ui)
- [Rsbuild](https://rsbuild.dev/) - [github](https://github.com/web-infra-dev/rsbuild)
- [Jest](https://jestjs.io/) - [github](https://github.com/jestjs/jest)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - [github](https://github.com/testing-library/react-testing-library)
- [MSW](https://mswjs.io/) - [github](https://github.com/mswjs/msw)
- [Playwright](https://playwright.dev/) - [github](https://github.com/microsoft/playwright)
- [Concurrently](https://www.npmjs.com/package/concurrently) - [github](https://github.com/open-cli-tools/concurrently#readme)


## Install

```bash
npm install
```

### API Key

- Before start runnig the MFEs application, you need to get a KEY API and set in a `.env` in MFE Tech Shop. Read the [step by step here](/techshop/README.md#running-api).

## Get Started

```bash
npm start
```

## Tests

### Unity tests

Each MFE application has its own test suites:

- [MFE Home](/home/README.md)
- [Tech Shop](/tech-shop/README.md)

### Running E2E

1. In the root folder, run the application:

```bash
npm start
```

2. After:

```bash
npm run e2e
```

## License

[MIT License 2024](/LICENSE.md)

## About Me

- [Site](https://vanribeiro.github.io/)
- [LinkedIn](https://www.linkedin.com/in/vanribeiro/)
- [Github](https://github.com/vanribeiro)