// require('newrelic');
const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const port = 9100;
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/restaurant/?id=:id', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/api/restaurants/:id/photos', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://3.88.8.197:3000/api/restaurants/${id}/photos`);
// })

app.get('/restaurant/:id/review', (req, res) => {
  let { id } = req.params;
  request("http://127.0.0.1:7007/restaurant/" + id + "/review", (error, response, body) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(200).send(body);
    }
  })
})

// app.get('/api/restaurants/:id/info', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://3.16.165.5:3002/api/restaurants/${id}/info`);
// })

// app.get('/api/restaurants/:id/googlereviews', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://localhost:3003/api/restaurants/${id}/googlereviews`);
// })

app.listen(port, console.log('proxy server listening on port', port));
