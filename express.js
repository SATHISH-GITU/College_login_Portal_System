const express = require("express"); //Express
const app = express();
const bodyParser = require("body-parser");

const mysql = require("mysql"); //Mysql
app.use(bodyParser.json());


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "loginpage.html");
  console.log("Running Succesfully");
});
app.get("/index", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
  console.log("index Succesfully");
});

app.use(
  bodyParser.urlencoded({
    // bodyParse
    extended: false,
  })
);
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "stjosephclgportal",
});

app.post("/index", (req, res) => {
  const { username, password } = req.body;
  console.log("Func excecuted ");
  con.query(
    "SELECT * FROM students WHERE user_id = ? AND user_password = ?",
    [username, password],
    (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        console.log("first True");
        res.redirect("/index");
      } else {
        console.log("error");
        res.send(`<h1><span style="background-color:lightgreen; text-align:centre" >User Name/Password Wrong</span></h1>
        `);
        // res.redirect("/index")
      }
    }
  );
});



app.post("/submit", (req, res) => {
  const a = req.body.user;
  const b = req.body.number;
  const c = req.body.email;
  const d = req.body.reason;
  const e = req.body.startdate;
  const f = req.body.enddate;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  con.connect(function(err) {
    if (err) throw err;
    console.log("Database for 2nd table Successfully Connected");
    const sql = "INSERT INTO store (namee, rollno, dept, reason, startdate, enddate) VALUES (?, ?, ?, ?, ?, ?)";
    con.query(sql, [a, b, c, d, e, f], function(err, result) {
      if (err) throw err;
      console.log("Data successfully inserted into store table");
      
      res.send(`<h3>Your Request Has Been Successfuly submitted</h3>`);
    });
  });
});
app.listen(3002);
 