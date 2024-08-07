const mongoose = require("mongoose");

const journalSchema = {
    authorName : String,
    paperName : String,
    journalName : String,
    volume : Number,
    number : Number,
    fromPage : Number,
    toPage : Number,
    year : Number
}
const Journal = new mongoose.model("Journal", journalSchema);
module.exports = Journal;