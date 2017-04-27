const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const RedisStore = require('connect-redis')(session);
const passport = require("passport")
const authRoutes = require("./routes/auth")
const postsRoutes = require("./routes/posts")
const cache = require("./cache")
const db = require("./db")
require("./passport")

express()
  .set("view engine", "hjs")
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(session({
    secret: "i love dogs",
    resave: false,
    saveUninitialized: false,
    store: new RedisStore()
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use(authRoutes)
  .use(postsRoutes)
  .get("/", cache.route({expire: 5, prefix: "home"}), (req, res, next) => {
    setTimeout(() => {
    	const headlines = [
    		"Fuschia is the New Black",
    		"What will the Pacific Ocean do Next",
    		"Wall Street to Build Even More Walls"
  		];

  		res.render("headlines", {headlines: headlines});
    }, 4000)
  })
  .listen(3000)