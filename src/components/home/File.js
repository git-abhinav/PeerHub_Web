import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFile, setLoading } from '../../actions/searchActions';
import Spinner from '../layout/Spinner';
export class File extends Component {
  componentDidMount() {
    this.props.fetchFile(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, file } = this.props;
    let fileInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <i className="fas fa-file-image fa-5x " id="brand logo" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{file.title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>ID:</strong> {file._id}
              </li>
              <li className="list-group-item">
                <strong>Size :</strong> { file.fileDetails !== undefined ? file.fileDetails.readableSize : "Placeholder"  }
              </li>
              <li className="list-group-item">
                <strong>Description:</strong> {file.description}
              </li>
              <li className="list-group-item">
                <strong>Uploaded By :</strong> {file.owner}
              </li>
              <li className="list-group-item">
                <strong>Download Link :</strong> 
                <a href={`https://peer-hub.herokuapp.com/data?name=${  file.fileDetails !== undefined ? file.fileDetails.fileName : ""  }`} target="_blank" rel="noopener noreferrer"> here</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
    let content = loading ? <Spinner /> : fileInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.files.loading,
  file: state.files.file
});

export default connect(
  mapStateToProps,
  { fetchFile, setLoading }
)(File);