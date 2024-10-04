const express = require('express');
const app = express();
app.use(express.json()); // This middleware is used to parse JSON bodies.

const apple = "apple"


app.get('/api/items', (req, res) => {
    let myCareer = [
        {
          "hairColor": "black",
          "overall": 95,
          "poistion": "pointGuard",
          "height": "6'3",
          "team": "Chicago Bulls",
          "wingspan": 12,
        },
    ]
    res.send(myCareer);
  });

  app.post('/api/items', (req, res) => {
    const newItem = req.body; // Data sent in the request body. Testing comment comment 
    res.send(`Item added: ${newItem.name}`);
  });
  
  app.put('/api/items/:id', (req, res) => {
    const itemId = req.params.id; // Access URL parameter.
    res.send(`Item with ID ${itemId} updated`);
  });

  app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`Item with ID ${itemId} deleted`);
});

app.listen(3000, () => console.log('Server running on port 3000'));