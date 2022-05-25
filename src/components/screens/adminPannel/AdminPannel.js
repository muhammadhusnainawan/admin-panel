import React from "react";
import "./AdminPannel.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import Table from "../table/Table";
import Navbar from "../../../commonComponents/navbar/Navbar";
import Input from "../../../commonComponents/input/Input";
import ModalComponent from "../../../commonComponents/modal/Modal";
function AdminPannel() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="adminPannel">
      <Container fluid className="noPadding">
        <Row className="noMargin">
          <Col sm="auto" className="noPadding">
            <Sidebar />
          </Col>
          <Col className="adminPannel__col noPadding ">
            <Navbar />
            <div className="inputAdd">
              <Input text={"Search name, email or etc"} height={"40px"} />
              <button className="inputAddBtn">Export</button>
              <button className="inputAddBtn">Filters</button>
              <button
                className="inputAddBtnModal"
                onClick={() => setModalShow(true)}
              >
                New Modal
              </button>
              <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <Table />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default AdminPannel;
