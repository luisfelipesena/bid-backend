import * as Pino from "pino";

export const logger = Pino.default({
	level: "debug",
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
		},
	},
});
