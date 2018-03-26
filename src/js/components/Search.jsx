import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }

    this.localHandler = this.localHandler.bind(this)
    // this.localHandler = _.debounce(this.localHandler, 500)
  }

  localHandler(e) {
    const { getVideos } = this.props;
    // run the api with the input value
    this.setState({value: e.target.value})
    getVideos(e.target.value);

  }

  render() {
    return (
      <div className="search col-md-6 col-md-offset-4 form-inline"> 
        <input 
          type="text" 
          className="form-control"
          // ref={(elem)=>this.input=elem}
          onChange={this.localHandler}
          value = {this.state.value}
        />
        <button className="btn">
          <span className="glyphicon glyphicon-search "></span>
        </button>
      </div>
    )
  }
};

Search.propTypes = {
  getVideos: PropTypes.func.isRequired,
}








