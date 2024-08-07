const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const XLSX = require('xlsx');

require("./db/conn");

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("login");
});
app.get("home", (req, res) => {
    res.render("home");
});

app.get("/admin", (req, res) => {
    res.render("admin");
});

app.get("/publication", (req, res) => {
    res.render("publication");
});
app.post("/publication", async (req, res) => {
    try{
        const journalDB = require("./models/journalDB.js");
        const newItem = new journalDB({
            authorName : req.body.authorName,
            paperName : req.body.paperName,
            journalName : req.body.journalName,
            volume : req.body.volume,
            number : req.body.number,
            fromPage :req.body.fromPage,
            toPage : req.body.toPage,
            year : req.body.year
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportPublication',(req,res)=>{
    const dataModel = require("./models/journalDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});

app.get("/bookChapter", (req, res) => {
    res.render("bookChapter");
});
app.post("/bookChapter", async (req, res) => {
    try{
        const bookChapterDB = require("./models/bookChapterDB.js");
        const newItem = new bookChapterDB({
            authorName : req.body.authorName,
            paperName : req.body.paperName,
            editorName : req.body.editorName,
            bookName : req.body.bookName,
            fromPage :req.body.fromPage,
            toPage : req.body.toPage,
            publicationHouse : req.body.publicationHouse,
            year : req.body.year
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportBookChapter',(req,res)=>{
    const dataModel = require("./models/bookChapterDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});

app.get("/conference", (req, res) => {
    res.render("conference");
});
app.post("/conference", async (req, res) => {
    try{
        const conferenceDB = require("./models/conferenceDB.js");
        const newItem = new conferenceDB({
            authorName : req.body.authorName,
            paperName : req.body.paperName,
            conferenceName : req.body.conferenceName,
            abbreviation : req.body.abbreviation,
            publicationHouse : req.body.publicationHouse,
            city : req.body.city,
            state : req.body.state,
            country : req.body.country,
            year : req.body.year,
            fromPage :req.body.fromPage,
            toPage : req.body.toPage,
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportConference',(req,res)=>{
    const dataModel = require("./models/conferenceDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});


app.get("/expertTalk", (req, res) => {
    res.render("expertTalk");
});
app.post("/expertTalk", async (req, res) => {
    try{
        const expertTalkDB = require("./models/expertTalkDB.js");
        const newItem = new expertTalkDB({
            theme : req.body.theme,
            fromDate : req.body.fromDate,
            toDate : req.body.toDate,
            organizer: req.body.organizer,
            coordinator: req.body.coordinator
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportExpertTalk',(req,res)=>{
    const dataModel = require("./models/expertTalkDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});


app.get("/invitedTalk", (req, res) => {
    res.render("invitedTalk");
});
app.post("/invitedTalk", async (req, res) => {
    try{
        const invitedTalkDB = require("./models/invitedTalkDB.js");
        const newItem = new invitedTalkDB({
            name: req.body.name,
            agencies: req.body.agencies,
            date: req.body.date
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportInvitedTalk',(req,res)=>{
    const dataModel = require("./models/invitedTalkDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});

app.get("/workshop", (req, res) => {
    res.render("workshop");
});
app.post("/workshop", async (req, res) => {
    try{
        const workshopDB = require("./models/workshopDB.js");
        const newItem = new workshopDB({
            name: req.body.name,
            coordinator: req.body.coordinator,
            department: req.body.department,
            fromDate : req.body.fromDate,
            toDate : req.body.toDate
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportWorkshop',(req,res)=>{
    const dataModel = require("./models/workshopDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});

app.get("/fdp", (req, res) => {
    res.render("fdp");
});
app.post("/fdp", async (req, res) => {
    try{
        const fdpDB = require("./models/fdpDB.js");
        const newItem = new fdpDB({
            title : req.body.title,
            attendeeName: req.body.attendeeName,
            department: req.body.department,
            fromDate : req.body.fromDate,
            toDate : req.body.toDate
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportFDP',(req,res)=>{
    const dataModel = require("./models/fdpDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});

app.get("/adp", (req, res) => {
    res.render("adp");
});
app.post("/adp", async (req, res) => {
    try{
        const adpDB = require("./models/adpDB.js");
        const newItem = new adpDB({
            title : req.body.title,
            participantsNumber: req.body.participantsNumber,
            fromDate : req.body.fromDate,
            toDate : req.body.toDate
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportADP',(req,res)=>{
    const dataModel = require("./models/adpDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});


app.get("/paperReviewer", (req, res) => {
    res.render("PaperReviewer");
});
app.post("/paperReviewer", async (req, res) => {
    try{
        const paperReviewerDB = require("./models/paperReviewerDB.js");
        const newItem = new paperReviewerDB({
            facultyName : req.body.facultyName,
            department: req.body.department,
            journalName : req.body.journalName,
            numberOfPapers : req.body.numberOfPapers
        })
        const saved = await newItem.save();
        res.status(201).render("home")
    } catch(error) {
        res.status(400).send(error);
    }
});
app.post('/exportPaperReviewer',(req,res)=>{
    const dataModel = require("./models/paperReviewerDB.js");
    var wb = XLSX.utils.book_new(); //new workbook
    dataModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname+'/exportdata.xlsx'
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        }
    });
});

const facultyDB = require("./models/FacultyDB.js");
app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login", async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        if(email == "admin@lnmiit.ac.in" && password == "admin") {
            res.status(201).render("admin");
        }
        else {
            const userMail = await facultyDB.findOne({email:email});
            if(userMail.password === password){
                res.status(201).render("home");
            }
            else {
                res.send("Invalid Credentials");
            }
        }
    } catch(error) {
        res.status(400).send("Invalid Credentials");
    }
    
});

app.get("/addFaculty", (req, res) => {
    res.render("addFaculty");
});
app.post("/addFaculty", async (req, res) => {
    try{
        if(req.body.pass === req.body.confirmPass) {
            const newItem = new facultyDB({
                email: req.body.email,
                password: req.body.pass,
            })
            const saved = await newItem.save();
            res.status(201).render("admin")
        }
        else res.send("Passwords not mathing!");
        
    } catch(error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Node server is running at port number ${port}`);
});