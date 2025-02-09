const express = require('express');
const app = express();
const users = [{
  id: 1,
  name: 'User 1'
}, {
  id: 2,
  name: 'User 2'
}];

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId) || userId < 1 || userId > users.length) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users[userId - 1];
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