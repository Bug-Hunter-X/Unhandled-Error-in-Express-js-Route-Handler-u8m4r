const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is out of bounds
  const user = users[userId];
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// ... other routes and middleware ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});