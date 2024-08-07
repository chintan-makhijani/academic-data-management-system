const mongoose = require("mongoose");

const workshopsSchema = {
    name : String,
    coordinator : String,
    department: String,
    fromDate : Date,
    toDate : Date
}
const Workshop = new mongoose.model("Workshop", workshopsSchema);
module.exports = Workshop;