const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/api/gallery/like/:id', (req, res) => {
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
  }).catch((err) => {
      console.log(`Error making GET query,`, err);
      res.sendStatus(500);
  })
});

module.exports = router;
