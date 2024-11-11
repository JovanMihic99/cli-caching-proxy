# CLI Caching Proxy

A simple, learning-focused command-line caching proxy. This project explores basic caching, proxy configuration, and CLI interactions to improve my understanding of caching mechanisms and Node.js server operations.

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
<!-- - **Customizable Options**: Control cache duration and proxy port via CLI. -->

## Prerequisites

- Node.js
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

To start the proxy with specified options:

```bash
caching-proxy start  --port <PORT> --origin <ORIGIN_URL>
```

Or you can use aliases (see `caching-proxy start -h` for more details )

```bash
caching-proxy start -p <PORT> -o <ORIGIN_URL>
```

## Example

Run on port `3000` with the origin url `http://dummyjson.com`

```bash
 caching-proxy start  -p 3000 -o http://dummyjson.com
```

## Configuration

Available CLI options:

- `--port`: Proxy server port (required)
- `--origin`: Base URL of the server that you want to cache (required)
- `--clear-cache`: Start the server and clear any previous cache (default: false)

## Note

This is a learning project, meant to practice caching and proxy techniques. Contributions are welcome but should align with its educational goals.
