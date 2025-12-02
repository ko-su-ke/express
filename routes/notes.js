var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");

// 接続情報
const uri = "";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  try {
    // ★ MongoDB へ接続（これが必須）
    await client.connect();

    // データベース、コレクション
    const database = client.db('notes');
    const notes = database.collection('notes');

    // id=2 のドキュメントを取得
    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error accessing MongoDB");
  }
});

module.exports = router;