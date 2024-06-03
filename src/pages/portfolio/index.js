import React from "react";
import "./style.css";
import portfolio1 from './1.jpg'
import portfolio2 from './2.jpg'
import portfolio3 from './3.jpg'
import portfolio4 from './4.jpg'
import portfolio5 from './5.jpg'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {  meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
              <div className="po_item">
                <img src={portfolio1} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
              <div className="po_item">
                <img src={portfolio2} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
              <div className="po_item">
                <img src={portfolio3} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
              <div className="po_item">
                <img src={portfolio4} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
              <div className="po_item">
                <img src={portfolio5} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
              
        </div>
      </Container>
    </HelmetProvider>
  );
};
