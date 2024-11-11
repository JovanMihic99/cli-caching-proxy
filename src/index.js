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
          describe: "Origin server URL",
          demandOption: true,
          type: "String",
        })
        .option("clear-cache", {
          alias: "c",
          describe: "Start server with empty cache",
          default: false,
          type: "boolean",
        });
    },
    (argv) => {
      if (argv.clearCache || argv.c) {
        console.log("Clearing cached entries...");
        clearCache();
      }
      process.env.ORIGIN_URL = argv.origin;
      app.listen(argv.port, () => {
        console.log(`Caching proxy server listening on port ${argv.port}`);
      });
    }
  )
  .help().argv;
