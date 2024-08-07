const mongoose = require("mongoose");

const paperReviewerSchema = {
    facultyName : String,
    department : String,
    journalName : String,
    numberOfPapers : Number
}
const PaperReviewer = new mongoose.model("PaperReviewer", paperReviewerSchema);
module.exports = PaperReviewer;