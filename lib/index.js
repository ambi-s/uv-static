import { fileURLToPath } from "node:url";

export const publicPath = fileURLToPath(new URL("../public/", import.meta.url));
