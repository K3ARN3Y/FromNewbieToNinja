const express = require("express");
const router = express.Router();

router
	.get("/", (req, res, next) => {
		res.send(users);
	})
	.get("/:id", (req, res) => {
		const { id } = req.params;
		const user = users.find(user => user.id == id);

		if (user) {
			res.send(user);
		} else {
			res.status(404).send(`User ${id} does not exist.`);
		}
	})
	.delete("/:id", (req, res) => {
		const { id } = req.params;
		const index = users.findIndex(user => user.id == id);

		if (index > -1) {
			users.splice(index, 1);
			res.sendStatus(200);
		} else {
			res.status(404).send(`User ${id} does not exist.`)
		}
	})

module.exports = router;

var users = [{
  "id": 1,
  "first_name": "Thaddus",
  "last_name": "Delea",
  "email": "tdebold0@cornell.edu",
  "gender": "Male",
  "ip_address": "5.119.227.88"
}, {
  "id": 2,
  "first_name": "Jacky",
  "last_name": "Woolway",
  "email": "jhowe1@who.int",
  "gender": "Male",
  "ip_address": "101.239.202.254"
}, {
  "id": 3,
  "first_name": "Cami",
  "last_name": "Collumbine",
  "email": "cmanuello2@skype.com",
  "gender": "Female",
  "ip_address": "37.36.169.135"
}, {
  "id": 4,
  "first_name": "Yard",
  "last_name": "Minero",
  "email": "ylongwood3@ed.gov",
  "gender": "Male",
  "ip_address": "77.104.253.220"
}, {
  "id": 5,
  "first_name": "Ritchie",
  "last_name": "Atkinson",
  "email": "rcumbers4@posterous.com",
  "gender": "Male",
  "ip_address": "88.127.77.118"
}, {
  "id": 6,
  "first_name": "Isahella",
  "last_name": "O'Loughlin",
  "email": "igerok5@china.com.cn",
  "gender": "Female",
  "ip_address": "96.177.7.207"
}, {
  "id": 7,
  "first_name": "Annabel",
  "last_name": "Chorley",
  "email": "ahasluck6@tinyurl.com",
  "gender": "Female",
  "ip_address": "40.2.159.153"
}, {
  "id": 8,
  "first_name": "Sawyere",
  "last_name": "Seal",
  "email": "sjilliss7@princeton.edu",
  "gender": "Male",
  "ip_address": "173.65.178.87"
}, {
  "id": 9,
  "first_name": "Gherardo",
  "last_name": "Lamplugh",
  "email": "gspottswood8@google.co.uk",
  "gender": "Male",
  "ip_address": "39.185.147.53"
}, {
  "id": 10,
  "first_name": "Allen",
  "last_name": "Maker",
  "email": "abarme9@nba.com",
  "gender": "Male",
  "ip_address": "85.232.69.74"
}, {
  "id": 11,
  "first_name": "Risa",
  "last_name": "Sommers",
  "email": "rbolmanna@bbc.co.uk",
  "gender": "Female",
  "ip_address": "30.7.105.225"
}, {
  "id": 12,
  "first_name": "Fabe",
  "last_name": "Blaby",
  "email": "ftwelvetreesb@statcounter.com",
  "gender": "Male",
  "ip_address": "158.135.208.204"
}, {
  "id": 13,
  "first_name": "Corabel",
  "last_name": "Fairhall",
  "email": "cdranc@sogou.com",
  "gender": "Female",
  "ip_address": "11.172.98.134"
}, {
  "id": 14,
  "first_name": "Tersina",
  "last_name": "Crab",
  "email": "ttustind@t.co",
  "gender": "Female",
  "ip_address": "232.90.65.176"
}, {
  "id": 15,
  "first_name": "Nollie",
  "last_name": "Shepherdson",
  "email": "nzahore@google.ca",
  "gender": "Male",
  "ip_address": "100.94.174.125"
}, {
  "id": 16,
  "first_name": "Coreen",
  "last_name": "Gimber",
  "email": "cjoannidif@cornell.edu",
  "gender": "Female",
  "ip_address": "30.45.10.158"
}, {
  "id": 17,
  "first_name": "Merl",
  "last_name": "Mullaney",
  "email": "mbateyg@ameblo.jp",
  "gender": "Female",
  "ip_address": "67.17.214.111"
}, {
  "id": 18,
  "first_name": "Niel",
  "last_name": "Harrowsmith",
  "email": "nwaisonh@sina.com.cn",
  "gender": "Male",
  "ip_address": "212.98.147.49"
}, {
  "id": 19,
  "first_name": "Adrea",
  "last_name": "Harrington",
  "email": "afallowi@booking.com",
  "gender": "Female",
  "ip_address": "29.131.61.34"
}, {
  "id": 20,
  "first_name": "Cirstoforo",
  "last_name": "Goldsmith",
  "email": "cagutterj@prnewswire.com",
  "gender": "Male",
  "ip_address": "46.29.51.104"
}];