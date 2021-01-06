import React, { Component } from 'react';
import '../App.css';

export class Blog extends React.Component {

    render(){
        return (
            <div> 
                <h1>Blog 01</h1>
                <p>Hello fellow bloggers, this is my first post on my amazing bloggosphere, more blogs comming soon</p>
                <br />
                
                <p className ='blogInput'></p>

                <from>
                <input className ='newBlog' type='text'></input>
                <button>Enter New Blog</button>
                </from>

            </div>

        )
    }
}