import express from 'express';
const app = express();
const port = 3000;

// Home Page
app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}.`)
})