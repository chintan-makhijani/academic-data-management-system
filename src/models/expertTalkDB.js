const mongoose = require("mongoose");

const expertTalksSchema = {
    theme : String,
    fromDate : Date,
    toDate : Date,
    organizer: String,
    coordinator: String
}
const ExpertTalk = new mongoose.model("ExpertTalk", expertTalksSchema);
module.exports = ExpertTalk;