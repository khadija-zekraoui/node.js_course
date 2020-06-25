require("dotenv/config");
const express = require("express");
const pino = require("pino");
const expressPino = require("express-pino-logger");

import * as pino from "pino";
const chalk = require("chalk");
export const log = pino({
  level: process.env.LOGLEVEL,
  base: null,
  /*formatters: {  
        level: (label) => {
          return { level: label };
        },
    },*/
  serializers: {
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res,
    err: pino.stdSerializers.err,
  },
  //timestamp:pino.stdTimeFunctions.isoTime,
  prettyPrint: {
    colorize: true,
    errorLikeObjectKeys: ["err", "error"],
    translateTime: "dd-mm-yyyy hh:mm:ss.Ms", // human legible date
  },
});
const expressLogger = expressPino({ logger });

const PORT = process.env.PORT || 3000;
const app = express();

app.use(expressLogger);

app.get("/", (req, res) => {
  logger.debug("Calling res.send");
  res.send("Hello World");
});

app.listen(PORT, () => {
  logger.info("Server running on port %d", PORT);
});
