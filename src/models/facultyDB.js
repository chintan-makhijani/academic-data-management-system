const mongoose = require("mongoose");

const facultySchema = {
    email : String,
    password : String
}
const Faculty = new mongoose.model("Faculty", facultySchema);
module.exports = Faculty;