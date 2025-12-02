var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      try {
        const data = JSON.parse(body);
        res.json(data);
      } catch (e) {
        console.error("JSON parse error:", body);
        res.status(500).json({ error: "Invalid JSON" });
      }
    } else {
      res.status(500).json({ error: "API request failed" });
    }
  });
});

module.exports = router;
