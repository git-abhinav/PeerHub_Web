import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchFile,
  fetchFiles,
  setLoading
} from '../../actions/searchActions';
import Footer from '../layout/Footer';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchFile(e.target.value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchFiles(this.props.text);
    this.props.setLoading();
  };
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search files on PeerHub ..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
        <Footer/>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  text: state.files.text
});
export default connect(
  mapStateToProps,
  { searchFile, fetchFiles, setLoading }
)(SearchForm);