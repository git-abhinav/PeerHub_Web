
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import FilesContainer from './FilesContainer';
import Spinner from '../layout/Spinner';
export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <FilesContainer />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.files.loading
});
export default connect(mapStateToProps)(Landing);