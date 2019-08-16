import React, { Component } from 'react';

export default class Fetch extends Component {
    state={
        loading: true,
        person:null,
    };

    async componentDidMount(){
        const url="https://api.randomuser.me/";
        const response= await fetch(url);
        const data= await response.json();
        this.setState({person: data.results[0], loading:false});
    }
    render() {
        return (
            <div>
                {this.state.loading|| !this.state.person ? 
                <div>loading please wait...</div>: 
                <div>
                    <img src={this.state.person.picture.large} alt="pic"/>
                    <div>{this.state.person.name.title}</div>
                    <div>{this.state.person.name.first}</div>
                    <div>{this.state.person.name.last}</div>
                </div>}
            </div>
        )
    }
}
