import React, { Component } from 'react'
import axios from 'axios';
export default class Upload extends Component {
    constructor(props) {
            super(props);
            this.state = {
            selectedFile: null,
        }
    }
    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    onClickHandler = () => {
        const data = new FormData() 
        if(this.state.selectedFile == null){
            alert("Please select a file")
            return
        }
        data.append('file', this.state.selectedFile)
        console.log(this.state.selectedFile)
        var uploadDetails = {
            title: this.state.selectedFile.name,
            description: "No description",
            response: {
                fileName: this.state.selectedFile.name,
                type: this.state.selectedFile.type,
                size: this.state.selectedFile.size,
                readableSize: this.state.selectedFile.size+" Bytes",
                path: "None",
                uri: "None"
            },
            owner: "Anonymous Web User"
        }
        fetch(
            "https://peer-hub.herokuapp.com/api/saveToDataBase",
            {
              method: "POST",
              headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
              },
             body: JSON.stringify(uploadDetails)
           }
          )
          .then(function (res){
              alert("Added")
          })
          .catch(err=>console.log(err))
        
        axios.post("https://peer-hub.herokuapp.com/api/save", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
          console.log(res.statusText)
        })
    }
    render() {
        return (
            <div className="container">
            <div class="alert alert-primary" role="alert">
                Add file anonymously
            </div>
            <input type="file" name="file" className="form-control-file" onChange={this.onChangeHandler}/>
            <br>
            </br>
            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
            </div>
        )
    }
}
