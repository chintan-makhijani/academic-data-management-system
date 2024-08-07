const mongoose = require("mongoose");

const bookChapterSchema = {
    authorsName : String,
    paperName : String,
    editorName : String,
    bookName : String,
    fromPage : Number,
    toPage : Number,
    publicationHouse : String,
    year : Number
}
const BookChapter = new mongoose.model("BookChapter", bookChapterSchema);
module.exports = BookChapter;