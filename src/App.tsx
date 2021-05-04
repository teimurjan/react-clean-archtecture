import './app.styles.scss';

import React, { Component, FC, FunctionComponent } from 'react';


import { PersonListContainer } from './containers/PersonListContainer';

const App = () => {
  return (
    <div>
      <h1 className="mb-5 text-xl font-bold text-blue-600">Sample detailed list implementation</h1>
      <PersonListContainer />
    </div>
  )
}

export default App
