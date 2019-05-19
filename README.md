# Servie URL

[![NPM version](https://img.shields.io/npm/v/servie-url.svg?style=flat)](https://npmjs.org/package/servie-url)
[![NPM downloads](https://img.shields.io/npm/dm/servie-url.svg?style=flat)](https://npmjs.org/package/servie-url)
[![Build status](https://img.shields.io/travis/serviejs/servie-url.svg?style=flat)](https://travis-ci.org/serviejs/servie-url)
[![Test coverage](https://img.shields.io/coveralls/serviejs/servie-url.svg?style=flat)](https://coveralls.io/r/serviejs/servie-url?branch=master)

> URL parser for Servie with built-in caching.

## Installation

```
npm install servie-url --save
```

## Usage

```ts
import { getURL } from "servie-url";

const url = getURL(new Request("/"));
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

Apache 2.0
