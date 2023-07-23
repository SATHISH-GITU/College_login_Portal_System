


const { append } = require('express/lib/response');
var mysql= require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'root123',
    database:'stjosephclgportal'
});
con.connect(function(err){
    if (err) throw err;
    console.log("Database for 2nd table Successfully Connected");
    con.query("create table Verification(Student_user int,Leave_Taken varchar(200),No_of_days_apply_for_leave varchar(200), Reason_for_leave varchar(200),Counsellor_Verification varchar(200),HOD_Verification varchar(200),Year_In_Charge_Verification varchar(200))",function(err,result){
        if (err) throw err;
        console.log("Database Sucessfully Created");
        console.log("Database Table Sucessfully Created");
    });
 });
