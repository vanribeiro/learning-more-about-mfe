# Micro-frontend: Feed News

## Table of Contents
1. [About](#about)
2. [Requirement](#requirement)
3. [Install](#install)
4. [Get Started](#get-started)
5. [License](#license)

## About
Feed News

## Requirements
- Node >= v20.14.0 
- Your Own [News API Key](https://newsapi.org/)

## Install

Install the dependencies:

```bash
npm install
```

### Running API

This project uses the [News API](https://newsapi.org/) and it needs an api Key. So follow the bellow steps:
1. Go to this [link](https://newsapi.org/), create an account and get a free apy key.
2. In the root of MFE folder, rename the `$.env` file to `.env`.
3. Inside `.env` set the apy key to `NEWS_APY_KEY` constant and save the file.

## Get Started

Start the dev server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```
Preview the production build locally:

```bash
npm run preview
```

## License

[MIT License 2024](./../LICENSE.md)