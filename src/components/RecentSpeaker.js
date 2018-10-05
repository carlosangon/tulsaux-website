import React, { Component } from 'react';
import { connect } from "react-redux"
import { Col } from "react-bootstrap";
import Speaker from './Speaker'

class RecentSpeakers extends Component {
  render() {
    return (
      <div>
        <Col md={12} sm={12} xs={12}>
        <div className="row">
          <div className="col">
            <h2><i className="far fa-map"></i> Recent Speakers</h2>
            <div className="c-presenters">
              {this.props.speakers.map((speaker) => {
                return <Speaker key={speaker.id} {...speaker} />
              })}
            </div>
            <a href="https://medium.com/tulsa-ux" target="_blank" className="btn btn--red"> Read all our recaps on&nbsp;Medium&nbsp;<i className="fab fa-medium-m"></i></a>
          </div>
        </div>
        </Col>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    speakers: state.speakers
  };
};

export default connect(mapStateToProps)(RecentSpeakers);