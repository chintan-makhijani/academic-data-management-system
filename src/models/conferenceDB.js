const mongoose = require("mongoose");

const conferenceSchema = {
    authorName : String,
    paperName : String,
    conferenceName : String,
    abbreviation : String,
    publicationHouse : String,
    city : String,
    state : String,
    country : String,
    year : Number,
    fromPage : Number,
    toPage : Number
}
const Conference = new mongoose.model("Conference", conferenceSchema);
module.exports = Conference;