class Word {
    constructor(id, word, sentenceId, vertices) {
        this.id = id;
        this.word = word;
        this.sentenceId = sentenceId;
        this.vertices = vertices;
        // this.isNoun = isNoun;
    }
}

module.exports = { Word };
