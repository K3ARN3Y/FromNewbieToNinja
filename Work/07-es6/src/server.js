import http from "http";
import { homepage, notFound } from "./handler.js";

const server = http.createServer((req, res) => {
	homepage(req, res);
});

server.listen(3000);