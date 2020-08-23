import React, { Component } from 'react'
import axios from "axios";
import './App.css';

export default class App extends Component {
    state = {
        activity:" ",
        type:" ",
        participants : " "
    }

    componentDidMount(){
        this.fetchActivity();
    }
    fetchActivity = () =>{
        axios.get("https://www.boredapi.com/api/activity")
        .then((response) =>{
            const {activity,type,participants} = response.data 
          
            this.setState({activity,type,participants})
        })
        .catch((error)=>{
            console.log(error)
        });
    }
    render() {
        return (
            <div className="app">
                <div className="card">
                    <h1 className="activity">Activity:
                     <span className="heading">
                    {this.state.activity}
                        </span></h1>
                    <h1 className="type">Activity Type : <br/>
                    <span className="typeHeading">
                    {this.state.type}
                    </span>
                    </h1> 
                    <h1 className="participants">Participants: <br/>
                    <span className="participantsHeading">
                    {this.state.participants}
                    </span>
                     
                     </h1> 
                    <button className="button" onClick={this.fetchActivity}>
                        <span>FUN ACTIVITY</span>
                    </button>
                </div>
               
            </div>

        )
    }
}
