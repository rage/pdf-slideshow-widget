// @flow
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { connect } from 'react-redux';
import type { State, Dispatch } from 'state/reducer';
import { changeSlideAction } from '../state/actions';
import Preloader from './preloader';
import prefixer from '../utils/class-name-prefixer';

class App extends Component {
  state = {};

  onDocumentLoadSuccess = (o) => {
    this.setState({ numPages: o.numPages });
  };

  nextSlide() {
    this.props.changeSlide(this.props.slide + 1);
  }

  previousSlide() {
    this.props.changeSlide(this.props.slide - 1);
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ minHeight: 405, display: 'inline-block' }}>
            <Document onLoadSuccess={this.onDocumentLoadSuccess} file={this.props.pdf}>
              <Page pageNumber={this.props.slide} height={540} />
              <Preloader
                numPages={this.state.numPages}
                pageNumber={this.props.slide}
              />
            </Document>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <button
            className={prefixer('change-state-button')}
            disabled={this.props.slide === 1}
            onClick={() => this.previousSlide()}
          >
            Prev
          </button>
          <button
            className={prefixer('change-state-button')}
            disabled={this.props.slide === this.state.numPages}
            onClick={() => this.nextSlide()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    slide: state.slideshow.currentSlide,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    changeSlide(toSlide) {
      dispatch(changeSlideAction(toSlide));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
