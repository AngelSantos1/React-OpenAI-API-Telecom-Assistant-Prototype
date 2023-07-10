const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: process.env.REACT_APP_CHATGPT_API_KEY,
});

const openai = new OpenAIApi(config);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat",async (req, res) => {
    const {prompt} = req.body;

    const completion = await openai.ChatCompletion.create({
        model: "gpt-4.5-turbo",
        messages: [
            {role: "system", content: "You are a helpful IT customer service professional."},
            {role: "user", content: prompt},
        ],
    });

    const message = completion.data.messages;
    const assistantMessage = message[message.length - 1];

    res.send(assistantMessage.content);
});

const PORT = 8020;

app.listen(PORT, () =>{ 
    console.log(`Server running on port : ${PORT}`);
});