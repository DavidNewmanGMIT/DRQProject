import React, { Component } from 'react';
import '../App.css';

export class Home extends React.Component {

    render(){
        return (
            <div> 
                <h1>Wellcome to the Blogosphere</h1>
                <h5>Present : {new Date().toLocaleTimeString()}</h5>
                <p>Personal blog space for you to create and share you blog, share your up-to-date news, 
                chat with your readers, and save those precious images from that chat</p>
            </div>

        )
    }
}