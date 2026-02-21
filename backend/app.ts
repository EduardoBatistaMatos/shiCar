import express from "express";

require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando");
});

const PORT = process.env.PORT;

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date() });
  });


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} `);
});