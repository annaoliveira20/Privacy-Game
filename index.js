const express = require('express');
const mongoose = require('mongoose');  // Certifique-se de importar o mongoose
const cors = require('cors');
const Player = require('./models/Player'); // Certifique-se de que esse caminho está correto

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://annaoliveira:SSH2VQJUR4Z8tYDA@privacygame.grch0.mongodb.net/privacygame', {
}).then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log(err));

// Rota para registrar o jogador
app.post('/register', async (req, res) => {
    const { name, score } = req.body;

    try {
        const gotCertificate = score >= 30;
        const player = new Player({ name, score, gotCertificate });
        await player.save();
        res.status(201).json({ message: 'Jogador registrado com sucesso!', player });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao registrar jogador', err });
    }
});

// Rota para listar os jogadores
app.get('/players', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar jogadores', err });
    }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
