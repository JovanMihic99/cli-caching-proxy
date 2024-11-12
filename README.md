# CLI Caching Proxy

A command line interface caching proxy sever.
This project explores basic caching, proxy configuration, and CLI interactions with the goal of improving my understanding of caching mechanisms and Node.js server operations.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Configuration](#configuration)
- [Note](#note)

## Technologies Used

- **[Axios](https://axios-http.com/)**: A promise-based HTTP client for making network requests.
- **[Express](https://expressjs.com/)**: A fast, unopinionated, minimalist web framework for Node.js.
- **[Node-cache](https://www.npmjs.com/package/node-cache)**: A simple caching module for Node.js that provides an in-memory key-value store.
- **[Yargs](https://github.com/yargs/yargs)**: A Node.js library for parsing command-line arguments.

## Features

- **Response Caching**: Saves responses temporarily to reduce repeated network requests.
- **API key support**: Supports APIs which require API keys.

## Prerequisites

- Node.js (version 14 and higher)
- npm

## Setup

Clone and install dependencies:

```bash
git clone https://github.com/JovanMihic99/cli-caching-proxy.git
cd cli-caching-proxy
npm install
npm link
```

## Usage

### Basic usage

To start the proxy with specified options:

```bash
caching-proxy start  --port <PORT> --origin <ORIGIN_URL>
```

Or you can use aliases (see `caching-proxy start -h` for more details )

```bash
caching-proxy start -p <PORT> -o <ORIGIN_URL>
```

### Usage with API keys

You can pass API keys with `--api-key-name`(or `-n`) and `--api-key-value`(or `-k`)

```bash
caching-proxy start -p 3005 -o https://api.openweathermap.org/data/2.5/weather -n appid -k [YOUR API KEY]
```

## Examples

### Basic example

Run on port `3000` with the origin URL `http://dummyjson.com`

```bash
 caching-proxy start  -p 3000 -o http://dummyjson.com
```

Sending a GET request to `http://localhost:3000/test` would be the equivalent to sending a GET request to `http://dummyjson.com/test`

### Example with API key

Run on port `3000` with the origin URL `https://api.openweathermap.org/data/2.5/weather` and your API key for openweather API

```
caching-proxy start -p 3005 -o https://api.openweathermap.org/data/2.5/weather -n appid -k [YOUR API KEY]
```

Sending a GET request to `http://localhost:3000/?q=London` would be the equivalent to sending a GET request to `https://api.openweathermap.org/data/2.5/?q=London&appid=[YOUR API KEY]`

## Configuration

Available CLI options:

- `--port`(`-p`): Proxy server port (**required**)
- `--origin`(`-o`): Base URL of the server that you want to cache (**required**)
- `--clear-cache`(`-c`): Start the server and clear any previous cache (**default: false**)
- `--api-key-name`(`-n`): Name of the API key URL query parameter (**optional**)
- `--api-key-value`(`-k`): Value of your API key (**optional**)

## Note

This is a learning project, meant to practice caching and proxy techniques. Contributions are welcome but should align with its educational goals.
Submitted as a solution to: https://roadmap.sh/projects/caching-server
