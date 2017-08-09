import React from 'react'
import { Link } from 'react-router-dom'

import nav from '../../data/nav'

const navList = Object.keys(nav)

const Nav = ({ location }) => {
  return (
    <div className='nav'>
      <ul>
        {rankList.map((navList, key) => {
          const normal = <li key={key}><Link to={`/list/${navList}`}>{capitalize(navList)}</Link></li>
          const selected = <li key={key}><strong><Link to={`/list/${navList}`}>{capitalize(navList)}</Link></strong></li>
          return location.pathname.indexOf(navList) > 0 ? selected : normal
        })}
      </ul>
    </div>
  )
}

export default Nav
