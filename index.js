const bodyParser = require('body-parser');
const express = require('express');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370,
  },
];

app.get('/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/dishes/:type', (req, res) => {
  const dishType = req.params.type;
  const dish = dishes.find((dish) => dish.type === dishType);
  if (dish) {
    res.json(dish);
  } else {
    res.status(404).send('Record not found.');
  }
});

app.listen(3000, function () {
  console.log('Server is Up');
});
