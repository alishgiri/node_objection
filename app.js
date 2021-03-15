const express = require('express');

const setupDb = require('./db/db_setup');
const User = require('./db/models/user');

setupDb();

const app = express();
app.use(express.json());

app.get('/user/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.query().findById(id);
        res.send(user);

    } catch (e) {
        res.status(500).send(e)
    }
})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));