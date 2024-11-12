#!/usr/bin/env node
import yargs from "yargs";
import { app } from "./server.js";
import { hideBin } from "yargs/helpers";
import { clearCache } from "./cache.js";

yargs(hideBin(process.argv))
  .command(
    "start",
    "start the caching proxy server",
    (yargs) => {
      return yargs
        .option("port", {
          alias: "p",
          describe: "Port to run the server on",
          demandOption: true,
          type: "number",
        })
        .option("origin", {
          alias: "o",
          describe: "Base URL of the server to which to forward requests",
          demandOption: true,
          type: "String",
        })
        .option("clear-cache", {
          alias: "c",
          describe: "Start server with empty cache",
          default: false,
          type: "boolean",
        })
        .option("api-key-name", {
          alias: "n",
          describe: "Name of the API key",
          demandOption: false,
          type: "String",
        })
        .option("api-key-value", {
          alias: "k",
          describe: "Value of the API key",
          demandOption: false,
          type: "String",
        });
    },
    (argv) => {
      console.log(argv);
      if (argv.clearCache || argv.c) {
        console.log("Clearing cached entries...");
        clearCache();
      }
      process.env.ORIGIN_URL = argv.origin;
      process.env.API_KEY_NAME = argv.apiKeyName;
      process.env.API_KEY_VALUE = argv.apiKeyValue;
      app.listen(argv.port, () => {
        console.log(`Caching proxy server listening on port ${argv.port}`);
      });
    }
  )
  .help().argv;
