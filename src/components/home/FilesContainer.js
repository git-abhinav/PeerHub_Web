import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileCard from './FileCard';
export class FilesContainer extends Component {
  render() {
    const { files } = this.props;
    let content = '';
    content = (files.Response === true)
      ? 
      files.Search.map((file, index) => <FileCard key={index} file={file} />)
      : 
      null
    return <div className="row">{content}</div>;
  }
}
const mapStateToProps = state => ({
  files: state.files.files
});
export default connect(mapStateToProps)(FilesContainer);