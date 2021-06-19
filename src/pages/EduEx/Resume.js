import { Container, Row, Col } from "react-bootstrap";
import Resumecontent from "./ResumeContent";
import { resumeleft, resumeright } from "../../portfolio";
import "./EducationComponent.css";
import React from "react";
export default function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row className="resume">
          <div className="heading-div">
            <div>
              <Col md={6} className="resume-left">
                {resumeleft.left.title.map((head) => {
                  return (
                    <>
                      <h3 className="resume-title">{head}</h3>
                      {resumeleft.left.data.map((res) => {
                        return (
                          <Resumecontent
                            title={res.title}
                            subtitle={res.subtitle}
                            date={res.date}
                            content={res.content}
                          ></Resumecontent>
                        );
                      })}
                    </>
                  );
                })}
              </Col>
            </div>
            <div>
              <Col md={6} className="resume-right">
                {resumeright.right.map((head) => {
                  return (
                    <>
                      <h3 className="resume-title">{head.title}</h3>
                      {head.data.map((info) => {
                        return (
                          <Resumecontent
                            title={info.title}
                            subtitle={info.subtitle}
                            date={info.date}
                            content={info.content}
                          ></Resumecontent>
                        );
                      })}
                    </>
                  );
                })}
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
}
