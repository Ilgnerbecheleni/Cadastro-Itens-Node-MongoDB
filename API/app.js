const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const Item = require('./models/item');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());  // configura CORS 
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });//conecta ao mongoDB

app.use(express.json());

app.post('/register', async (req, res) => {  //registra um usuario
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'mysecretkey');
    res.send({ token });
});

app.post('/login', async (req, res) => {  //realiza o login e recebe um token
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send({ message: 'User not found' });
    if (!(await user.comparePassword(password))) return res.status(401).send({ message: 'Wrong password' });
    const token = jwt.sign({ userId: user._id }, 'mysecretkey');
    res.send({ token });
});

app.get('/users', authMiddleware, async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.post('/items', authMiddleware, async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});

app.put('/items/:id', authMiddleware, async (req, res) => { // concedida somente mediante a token
    const item = await Item.findByIdAndUpdate(req.params.id, req.body);
    res.send(item);
});

app.delete('/items/:id', authMiddleware, async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.send({ message: 'Item deleted' });
});

function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send({ message: 'No token provided' });
    try {
        const { userId } = jwt.verify(token, 'mysecretkey');
        req.userId = userId;
        next();
    } catch (err) {
        return res.status(401).send({ message: 'Invalid token' });
    }
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});