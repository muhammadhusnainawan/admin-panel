import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import logo from "../../../assets/LOGO.png";
import Input from "../../../commonComponents/input/Input";
import Button from "../../../commonComponents/button/Button";

function Login() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="loginBg">
            <Container>
              <div className="loginHeading">
                <p className="loginHeadingp1">Solutions that make</p>
                <p className="loginHeadingp2">life easier for clinics</p>
              </div>
              <div className="loginCopyright">
                <p className="loginCopyrightp1">
                  &copy; Alpha Nova Clinic, 2022
                </p>
                <p className="loginCopyrightp2">
                  Poli Clinic is medical managment for all doctors, patients
                  &#38; Staff
                </p>
              </div>
            </Container>
          </Col>
          <Col>
            <div className="loginForm">
              <div className="loginImg">
                <img src={logo} alt="ALFA-CLINIC" />
              </div>
              <div className="loginSign">
                <h2>Welcome</h2>
                <p>Please enter your details.</p>
                <Input text={"Company ID"} type={"username"} height={"50px"} />
                <Input text={"Password"} type={"password"} />
                <div className="loginCheckbox">
                  <div className="checkboxLoggedin">
                    <input type="checkbox" />
                    <p>Keep me logged in</p>
                  </div>
                  <span>
                    <p>Forgot Password?</p>
                  </span>
                </div>
                <Button />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
