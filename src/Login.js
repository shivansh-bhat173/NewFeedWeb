import React, { useState } from "react";
import { Button, Divider, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

// Validation remains
function Login() {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [emailErr, setemailErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);
  const [emailtext, setemailtext] = useState("");
  const [passtext, setpasstext] = useState("");

  function validate(e) {
    setemailErr(false)
    setpasswordErr(false)
    e.preventDefault();
    const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email) === false && email !== null) {
      setemailErr(true);
      setemailtext("Email is invalid");
    }
    if (pass === "") {
      setpasswordErr(true);
      setpasstext("Empty field");
    }
    if (email === "") {
      setemailErr(true);
      setemailtext("Empty field");
    }
    // if(sessionStorage.getItem("useremail")!=email){
    //   console.log(sessionStorage.getItem("useremail"))
    //   alert("user not found")
    //   return false;
    // }
    if((emailErr==="false" && email==="") || (passwordErr===false && pass==="") ){
      console.log("work")
      return;
    }else if(emailErr===true  || passwordErr===true){
      console.log("work")
      return ;
    }else{
      console.log("work")
      navigate("/home");
    }
    
  }

  return (
    <div className="container">
      <div className="signupform p-3">
        <div className="flex">
          <div className="text  mb-3">
            <Link className="header" to="/">
              SIGN UP
            </Link>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="text header mb-3"> LOG IN </div>
        </div>

        <div className="row">
          <div className=" mb-3">
            <TextField
              id="email"
              type="email"
              variant="outlined"
              onChange={(e) => setemail(e.target.value)}
              label="Enter Your Email-id"
              error={emailErr}
              helperText={emailErr===true?emailtext:""}
              required
              fullWidth
            />
          </div>
          <div className=" mb-3">
            <TextField
              id="Password"
              type="text"
              variant="outlined"
              onChange={(e) => setpass(e.target.value)}
              label="Enter Your Password"
              error={passwordErr}
              helperText={passwordErr===true?passtext:""}
              fullWidth
              required
            />
          </div>

          <p className="text-center mb-3">
            <Link className="header" onClick={(e) => validate(e)} to="/home">
              LOG IN{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
