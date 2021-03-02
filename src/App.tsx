import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main'
import Sub from './pages/Sub'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <h1>TO DO LIST</h1>
    
      <Route exact path='/' component={Main}/>
    </BrowserRouter>
  )
}

export default App