const express = require('express');
const app = express();
const port = process.env.PORT || 5500;


app.get('/', (req, res) => {
    res.send("Test /");
});

app.listen(port, () => console.log(`Server started on ${port}`));
