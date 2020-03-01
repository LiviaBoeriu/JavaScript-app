const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());


let users = [
    {
        id: 1,
        firstName: 'Georgel',
        lastName: 'Balanel',
        role: 'admin',
        gender: 'M',
        dateOfBirth: new Date("1995-03-25"),
        membership: new Date("2007-06-13"),
        avatar: 'gril.png'
    },

    {
        id: 2,
        firstName: 'Maricica',
        lastName: 'Balanel',
        role: 'editor',
        gender: 'F',
        dateOfBirth: new Date("1995-03-25"),
        membership: new Date("2007-06-13"),
        avatar: 'pirate.png'
    }
];

app.get('/api/users', (req, res) => {
    res.json(users)
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    newUser.dateOfBirth = new Date(newUser.dateOfBirth);
    newUser.membership = new Date(newUser.membership);
    users.push(newUser);

    res.status(201);
    res.send(users)
});

app.delete('/api/users/:id', (req, res) => {
    const isUserToDelete = (user) => user.id === +req.params.id;
    const indexDeleteUser = users.findIndex(isUserToDelete);
    if (indexDeleteUser !== -1) {
        users.splice(indexDeleteUser, 1);

        res.status(201);
        res.send(users)
    }
    
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));