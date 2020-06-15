import React, { Component } from 'react'
export default class Download extends Component {
    constructor(props){
        super(props);
        this.state = {
            downloadID : null,
            receiverID: null
        }
    }
    handleChange(event) {
        this.setState({downloadID: event.target.value});
        console.log( event.target.value)
    }
    onClickHandler(){
        alert(this.state.downloadID)
    }
    render() {
        return (
            <div className="container">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Private Download</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Donwload your file from 24 character long ID</h6>
                    <p class="card-text">
                        PeerHub provides a unique way to download file secretly, just create a ID of your file from the app and paste it here, no information gets disclosed about the file from ID. Providing confidentiality.
                    </p>
                    <a href="https://peer-hub.herokuapp.com/data?name=PeerHub.apk" target="_blank" rel="noopener noreferrer" class="card-link">
                        Download App To generate your code
                    </a>
                    <br>
                    </br>
                    <br>
                    </br>
                    <div>
                        <input type="text" name="downloadID" onChange={(event)=>{
                                this.setState({downloadID: event.target.value});
                                console.log(this.state.downloadID)
                            }} 
                            class="form-control" placeholder="Private File ID" aria-label="Username">    
                        </input>
                        <br></br>
                        <input type="text" name="downloadID" onChange={(event)=>{
                             this.setState({receiverID: event.target.value});
                             console.log(this.state.receiverID)
                        }} 
                        class="form-control" placeholder="Your Private ID" aria-label="Username"></input>
                        <br>
                        </br>
                        <button className="btn btn-primary justify-content-center" onClick={()=>{
                            if(
                                this.state.downloadID === null 
                                || this.state.downloadID.length!==24 
                                || this.state.receiverID.length!==24 
                                || this.state.receiverID===null
                            ){
                                alert("Invalid ID")
                            }else{
                                var uri = "https://peer-hub.herokuapp.com/api/validate-private?id="+this.state.downloadID+"&receiverId="+this.state.receiverID
                                fetch(uri,{ method: "get"})
                                    .then((res)=>{
                                        if(res.status === 200){
                                            uri = "https://peer-hub.herokuapp.com/api/private?id="+this.state.downloadID
                                            fetch(uri, {method:"get"})
                                                .then((re)=>{
                                                    // alert(re.status)
                                                    if(re.status === 200){
                                                        window.location.assign(re.url);
                                                    }else{
                                                        alert("No Such File")
                                                    }
                                                })
                                                .catch(err => alert(err))
                                        }else if(res.status === 403){
                                            alert("File Not Meant For You")
                                        }else if(res.status === 404){
                                            alert("No Such File")
                                        }
                                  })
                                  .catch(err => console.log(err))
                            }
                        }}>
                            Download
                        </button>
                    </div>
                </div>
                </div>                
            </div>
        )
    }
}
