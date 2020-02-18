import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/admin/Login';
import SignUpPage from './pages/admin/SignUp';
import HomePage from './pages/Home';
import AdminHomePage from './pages/admin/AdminHome';
import PostDetails from './components/post/PostDetails';
import CreatePost from './components/post/CreatePost';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/admin" component={AdminHomePage} />
        <Route exact path="/admin/login" component={LoginPage} />
        <Route exact path="/admin/signup" component={SignUpPage} />
        <Route exact path="/admin/post/create" component={CreatePost} />
        <Route path="/admin/post/:id" component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
