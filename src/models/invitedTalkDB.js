const mongoose = require("mongoose");

const invitedTalksSchema = {
    name : String,
    agencies : String,
    date : Date
}
const InvitedTalk = new mongoose.model("InvitedTalk", invitedTalksSchema);
module.exports = InvitedTalk;
