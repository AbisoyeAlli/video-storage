import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Video processing!")
});

app.listen(port, () => {
    console.log(`Video processing service listening at https://localhost:${port}`)
})