
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class FileCard extends Component {
  render() {
    const { file } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <i className="fas fa-file-image fa-5x " id="brand logo" />
          <h5 className="text-light card-title">
            {file.title}
          </h5>
          <Link className="btn btn-primary" to={'/file/' + file._id}>
            File Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default FileCard;