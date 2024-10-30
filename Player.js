const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    score: { type: Number, required: true },
    gotCertificate: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    responses: [
        {
            question: String,
            correct: Boolean
        }
    ]
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
