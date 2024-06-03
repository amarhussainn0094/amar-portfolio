import React from 'react'
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, datatestimonials, meta } from "../../content_option";
import review1 from "./1.jpg"
import review2 from "./2.jpg"
import review3 from "./3.jpg"
import review4 from "./4.jpg"

const index = () => {
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
            <h1 className="display-4 mb-4"> Testimonials </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 row">
              <div className="po_item w-50">
                <img src={review1} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
              <div className="po_item w-50">
                <img src={review3} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
              <div className="po_item w-50">
                <img src={review4} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
              <div className="po_item w-50">
                <img src={review2} alt="" />
                <div className="content">
                  <p></p>
                  <a href="">view project</a>
                </div>
              </div>
        </div>
      </Container>
    </HelmetProvider>
  )
}

export default index
