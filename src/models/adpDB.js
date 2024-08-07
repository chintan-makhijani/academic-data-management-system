const mongoose = require("mongoose");

const adpSchema = {
    title : String,
    participantsNumber : Number,
    fromDate : Date,
    toDate : Date
}
const ADP = new mongoose.model("ADP", adpSchema);
module.exports = ADP;