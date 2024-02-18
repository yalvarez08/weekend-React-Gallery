const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  console.log('PUT request for id:', req.params.id);
  let sqlText = `UPDATE "gallery" SET "likes"="likes" + 1 WHERE "id"=$1;`;

  pool.query(sqlText, [req.params.id])
  .then((result) => {
      console.log(`PUT query to update "likes" was successful: ${sqlText}`);
      res.send(result.rows);
  })
  .catch((err) => {
      console.log(`Error making PUT query`, err);
      res.sendStatus(500);
  })
});

// GET /gallery
router.get('/', (req, res) => {
  let queryText = `SELECT * from "gallery"`;

  pool.query(queryText)
  .then((result) => {
      console.log(`GET database query was successful: ${queryText}`)
      res.send(result.rows);
  })
  .catch((err) => {
      console.log(`Error making GET query,`, err);
      res.sendStatus(500);
  })
});

// POST /gallery
router.post('/', (req, res) => {
  let galleryItem = req.body;
  let sqlText = `INSERT INTO "gallery" ("url", "title", "description")
                VALUES ($1, $2, $3);`;
  
  pool.query(sqlText, [galleryItem.url, galleryItem.title, galleryItem.description])
  .then((result) => {
      console.log(`POST database query was successful: ${sqlText}`);
      res.send(201);
  })
  .catch((err) => {
      console.log(`Error making POST query,`, err);
      res.sendStatus(500);
  })
});

module.exports = router;
