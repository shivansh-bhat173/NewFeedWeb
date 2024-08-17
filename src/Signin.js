import "./App.css";
import React, { useState,useEffect } from "react";
import { Button, Divider, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

//full validation remains

function Signin() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [dob, setdob] = useState("");
  const [passwordErr, setpasswordErr] = useState(false)
  const [lnameErr, setlnameErr] = useState(false)
  const [fnameErr, setfnameErr] = useState(false)
  const [dobErr, setdobErr] = useState(false)
  const [emailErr, setemailErr] = useState(false)
  const [emailtext, setemailtext] = useState("")
  const [passtext, setpasstext] = useState("")
  const [fnametext, setfnametext] = useState("")
  const [lnametext, setlnametext] = useState("")
  const [dobtext, setdobtext] = useState("")

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      setpasswordErr(true)
      setpasstext("should not contain spaces")
      return false;
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      setpasswordErr(true)
      setpasstext("should contain a upper case")
      return false;
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      setpasswordErr(true)
      setpasstext("should contain lower case")
      return false;
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      setpasswordErr(true)
      setpasstext("should contain a number")
      return false;
    }

    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(value)) {
      setpasswordErr(true)
      setpasstext("should contain a special symbol")
      return false;
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      setpasswordErr(true)
      setpasstext("should be 8-16 characters")
      return false;
    }

    return true;
  };

  const Validate = (e) => {
    e.preventDefault();
    setpasswordErr(false);
    setemailErr(false);
    setdobErr(false)
    setlnameErr(false)
    setfnameErr(false)
    setdobtext("")
    setlnametext("")
    setfnametext("")
    setemailtext("")
    setpasstext("")
    // ALL FIELDS ARE FILLED
    if ( dob === "dd-mm-yyyy") {
      setdobErr(true)
      setdobtext("Set a date")
      
    }
    // NAME MIN CHAR CHECKER
    if (fname.length < 4 ) {
      setfnameErr(true)
      setfnametext("min 4 characters required ")
      
    }
    if (lname.length < 4) {
      setlnameErr(true)
      setlnametext("min 4 characters required")
      
    }
    // EMAIL VALIDATOR
    const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email) == false && email != "") {
      setemailErr(true)
      setemailtext("Email is invalid")
      
    }
    // PASSWORD CHECKER
    if (checkPasswordValidity(password) === false) {
      setpasswordErr(true)
    }
    
    // AGE ABOVE 18 CHECKER
    let birthday = dob;
    var optimizedBirthday = birthday.replace(/-/g, "/");
    var myBirthday = new Date(optimizedBirthday);
    var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";
    var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);
    
    if (myAge < 18) {
      setdobErr(true)
      setdobtext("Age must be 18 above")
      
    }
    if (email === "" ) {
      setemailErr(true)
      setemailtext("Empty field")
      
    }
    if ( password === "")  {
      setpasswordErr(true)
      setpasstext("Empty field")
      
    }
    if (lname === "" ) {
      setlnameErr(true)
      setlnametext("Empty field")
      
    }if ( fname === "") {
      setfnameErr(true)
      setfnametext("Empty field")
      
    }
    console.log(passwordErr,lnameErr,fnameErr,emailErr,dobErr)
    // sessionStorage.setItem("useremail", email);
    // sessionStorage.setItem("userpass", password);
    console.log(passtext)
    console.log(lnametext)
    console.log(fnametext)
    console.log(emailtext)
    console.log(dobtext)
    if((passtext==="" && password==="") || (dobtext===""&& dob==="") || (lnametext==="" && lname==="") || (fnametext==="" && fname==="") || (emailtext===""  && email==="")){
      console.log("work")
      return false;
    }else if(passwordErr===true || dobErr===true || lnameErr==true || fnameErr===true || emailErr===true){
      console.log("work")
      return false;
    }else{
      console.log("work")
      alert("Account Created");
      return true;
    }
  };

  
  return (
    <div className="container">
      <div className="signupform">
        <div className="flex">
          <div className="text header mb-3 ">SIGN UP</div>
          <Divider orientation="vertical" flexItem />
          <div className="text  mb-3">
            {" "}
            <Link className="header" to="login">
              LOG IN
            </Link>
          </div>
        </div>
        <div className="icon">
          <div className="row">
            <div className="col-6 mb-3">
              <TextField
                id="firstname"
                type="text"
                variant="outlined"
                label="Enter Your First Name"
                onChange={(e) => setfname(e.target.value)}
                error={fnameErr}
                helperText={fnameErr===true?fnametext:""}
                fullWidth
                required
              />
            </div>
            <div className="col-6 mb-3">
              <TextField
                id="lastname"
                type="text"
                variant="outlined"
                label="Enter Your Last Name"
                onChange={(e) => setlname(e.target.value)}
                fullWidth
                error={lnameErr}
                helperText={lnameErr===true?lnametext:""}
                required
              />
            </div>
          </div>

          <div className="row ">
            <div className="mb-3">
              <TextField
                id="email"
                type="text"
                variant="outlined"
                label="Enter Email ID"
                onChange={(e) => setemail(e.target.value)}
                error={emailErr}
                helperText={emailErr===true?emailtext:""}
                fullWidth
                required
              />
            </div>
            <div className="mb-3">
              <TextField
                id="password"
                type="text"
                variant="outlined"
                label="Enter Password"
                onChange={(e) => setpassword(e.target.value)}
                error={passwordErr}
                helperText={passwordErr===true?passtext:""}
                fullWidth
                required
              />
            </div>
            <div className="mb-3">
              <TextField
                id="date"
                label="Birthday"
                type="date"
                onChange={(e) => setdob(e.target.value)}
                defaultValue="yyyy-mm-dd"
                sx={{ width: 320 }}
                InputLabelProps={{
                  shrink: true,
                }}
                error={dobErr}
                helperText={dobErr===true?dobtext:""}
                required
              />
            </div>
            <div className="mb-3 create-btn">
              <Button
                className="header"
                variant="contained"
                color="primary"
                onClick={(e)=>Validate(e)}
              >
                {" "}
                CREATE ACCOUNT
              </Button>
            </div>

            <Divider variant="middle" />
            <p className="text-center">
              <Link to="login" className="text-decoration">
                Already Have An Account?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
