import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Blog } from './components/blog';
import { Chat } from './components/chat';
import { Images } from './components/images';
import { News } from './components/news';
import { Home } from './components/home';

function App() {
  return (
    //Nav bar using Bootstrap
    <Router>
      <div className="App">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Blogosphere</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="chat">Chat</Nav.Link>
            <Nav.Link href="/images">Images</Nav.Link>
          </Nav>
        </Navbar>

        <br />

        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/news' component={News} />
          <Route path='/news' component={News} />
          <Route path='/blog' component={Blog} />
          <Route path='/chat' component={Chat} />
          <Route path='/images' component={Images}></Route>          
        </Switch>

      </div>
    </Router>
    //switch statement using react

  );

  
}

export default App;
