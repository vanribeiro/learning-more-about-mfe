# Learning more about Micro-frontends

## Table of Contents
1. [About](#about)
2. [Requirement](#requirement)
3. [Install](#install)
4. [Usage](#usage)
5. [License](#license)

## About
MFE, Unit Testing and E2E.

## Requirement
- Node >= v20.14.0 
- Your Own [News API Key](https://newsapi.org/)

## Install

In different terminals:

### `home` mfe

```bash
cd home
npm install
```

### `blog` mfe

```bash
cd blog
npm install
```

## Usage
In different terminals:

### Running `home` mfe

```bash
npm run dev
```

### Running `blog` mfe

```bash
npm run dev
```

### Running API

This project uses the [News API](https://newsapi.org/) and it needs an api Key. So follow the bellow steps:
1. Go to this [link](https://newsapi.org/), create an account and get a free apy key.
2. In the root of MFE folder, rename the `$.env` file to `.env`.
3. Inside `.env` set the apy key to `NEWS_APY_KEY` constant and save the file.

## License

[MIT License 2024](/LICENSE.md)
