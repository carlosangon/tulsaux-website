import React from "react";
import { Col } from "react-bootstrap";

const Speaker = ({ time, name, talk, company, companyLink, description }) => (
  <Col className="c-presenters__card" md={4} sm={12}>
    <time>{time}</time>
    <h2>{name}</h2>
    <h3>{talk}</h3>
    <h4><a href={companyLink}>{company}</a></h4>
    <p>{description}</p>
    <a className="btn btn--ghost-red disabled" target="_blank" href="#">Recap Unavailable</a>
  </Col>
);

export default Speaker;
