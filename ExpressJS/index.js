const express = require('express');
const app = express();
app.use(express.json());
let users = [
    {
        "Name": "bhanu",
        "id": 101,
        "Dept": "CSE"
    }
];
app.get('/', (req, res) => {
    res.send(users);
});
app.post('/data', (req, res) => {
    const data = req.body;
    users.push(data);
    res.json({ message: 'Data received', data });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});