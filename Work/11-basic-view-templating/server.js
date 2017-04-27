const express = require("express");
const app = express();

const favicon = require("serve-favicon");
const staticAssets = __dirname + "/public";
const faviconPath = __dirname + "/public/favicon.ico";

app
	.set("views", __dirname + "/views")
	.set("view engine", "hjs")
	.use(express.static(staticAssets))
	.use(favicon(faviconPath))
	.get("/", (req, res) => {
		var title = "some other title";
		var tweets = [
			"my first tweet",
			"other tweet",
			"yet another"
		];

		res.render("index", {
			title: title,
			tweets: tweets,
			showTweets: true,
			partials: {
				header: "header",
				tweets: "tweets"
			}
		});
	})
;

app.listen(3000);