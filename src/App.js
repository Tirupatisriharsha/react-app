import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Posts from './Posts/Posts';
import Post from './Post/Post';

function App() {
  return (
    <div className='App'>
      <div className="header"> This is header</div>
      <div className='content'>
        <switch>
          <Route exact path={'/posts'} component={Posts} />
          <Route path={'/post/:id'} component={Post} />
        </switch>
      </div>
      <div className='footer'> This is footer</div>
    </div>
  );
}

export default App;
