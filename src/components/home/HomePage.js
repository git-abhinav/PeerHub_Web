import React, { Component } from 'react'
import axios from 'axios';
import { FilesContainer } from './FilesContainer';
import Spinner from '../layout/Spinner'
export class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            newFiles: null
        }
    }
    componentDidMount(){
        axios
            .get("https://peer-hub.herokuapp.com/api/new") 
            .then(
                (response) => {
                    this.setState({
                        newFiles: response.data
                    })  
                }
            )
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {   
                        this.state.newFiles!=null?
                        <FilesContainer files={this.state.newFiles}/>:
                        <Spinner align="center" />
                    }
                </div>
            </div>
        )
    }
}
export default HomePage
