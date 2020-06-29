import React, { Component } from 'react'
import './App.css'

import LineChart from './LineChart'

class App extends Component {
  render () {
    return (
      <div className='App'>

        <div>
          <LineChart />
        </div>
      </div>
    )
  }
}
export default App
