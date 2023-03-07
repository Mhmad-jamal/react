import React from "react";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import $ from "jquery";

import {
  MDBBtn,
  MDBAlert,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
function Signup() {
  const [errorMessage, setErrorMessage] = useState("");
  const [ColorMessage, setColorMessage] = useState("");

  function handleClick() {
    let userName = $("#UserName").val();
    let Email = $("#Email").val();
    let Passowrd = $("#Passowrd").val();
    let Passowrd2 = $("#R-Password").val();
    let PhoneNumber = $("#PhoneNumber").val();
    if (
      userName === "" ||
      Email === "" ||
      Passowrd === "" ||
      Passowrd2 === "" ||
      PhoneNumber === ""
    ) {
      $("#alertMsg").removeClass("d-none");
      setErrorMessage("Please fill all required fields");
      setColorMessage("danger");
    } else if (Passowrd !== Passowrd2) {
      $("#alertMsg").removeClass("d-none");
      setErrorMessage("Password must be match");
      setColorMessage("warning");
    } else {
      let data = {
        Name: userName,
        Email: Email,
        phone: PhoneNumber,
        Password: Passowrd,
      };
      fetch("http://127.0.0.1:8000/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => 
        {
          if(data["status"]==200){
            $("#alertMsg").removeClass("d-none");
      setErrorMessage(data["messege"]);
      setColorMessage("primary");
          }else{
            $("#alertMsg").removeClass("d-none");
            setErrorMessage(data["messege"]);
            setColorMessage("danger");
          }
        }
        )
        .catch((error) => console.error(error));
    }
  }
  
  useEffect(() => {
    const button = document.querySelector("#Submitbtn");
    button.addEventListener("click", handleClick);
  
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);
  

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="UserName"
                  type="text"
                  className="w-100"
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon
                  fas
                  icon="phone-alt"
                  size="lg"
                  className="mb-4  me-3"
                />
                <MDBInput
                  label="Your Phone Number"
                  id="PhoneNumber"
                  type="phone"
                  className="w-100"
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput label="Your Email" id="Email" type="email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password" id="Passowrd" type="password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="R-Password"
                  type="password"
                />
              </div>

              <Alert
                id="alertMsg"
                className="d-none"
                key={ColorMessage}
                variant={ColorMessage}
              >
                {errorMessage}
              </Alert>

              <Button variant="primary" id="Submitbtn">
                Register
              </Button>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
