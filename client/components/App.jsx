import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Model from './Model'
import ModelsList from './ModelsList'
import Brands from './Brands'
import Blog from './Blog'
import About from './About'
import Funfacts from './Funfacts'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Open your mind to the kooked</h1>

        <div className='container'>
          <Route path='/' component={Nav} />
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/model' component={Model} />
            <Route path='/model/:model' component={ModelsList} />
            <Route path='/brands' component={Brands} />
            <Route path='/blog' component={Blog} />
            <Route path='/about' component={About} />
            <Route path='/funfacts' component={Funfacts} />
            {/* <Route path='/list/:rank' component={RankListing} />
            <Route path='/rank/:rank/:name' component={Rank} />
            <Route path='/species/:id' component={Species} /> */}
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
