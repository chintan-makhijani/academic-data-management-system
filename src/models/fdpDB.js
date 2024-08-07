const mongoose = require("mongoose");

const fdpSchema = {
    title : String,
    attendeeName : String,
    department: String,
    fromDate : Date,
    toDate : Date
}
const FDP = new mongoose.model("FDP", fdpSchema);
module.exports = FDP;