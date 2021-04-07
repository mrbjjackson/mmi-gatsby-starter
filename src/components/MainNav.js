import React, {useContext, useEffect} from 'react'
import {MenuContext} from './SiteContexts'
import { Link } from 'gatsby'
import './styles/hamburgers.min.css'
import {ul, burger} from './styles/MainNav.module.scss'

export default function MainNav({isSmallScreen}) {
  const [navOpen, setNavOpen] = useContext(MenuContext)

  useEffect(()=>{
    setNavOpen(!isSmallScreen)
  },[isSmallScreen, setNavOpen])

  return (
    <ul className={ul}>
      { isSmallScreen &&
      <li className={burger}>
        <button className={`hamburger hamburger--slider ${navOpen ? 'is-active' : ''}`} type="button" onClick={()=>setNavOpen(!navOpen)}>
          <span className="hamburger-box">
            <span className="hamburger-inner">Toggle Nav</span>
          </span>
        </button>
      </li>
      }
      {(!isSmallScreen || (navOpen)) && <>
        <li><Link to="/about" title="About" activeClassName="active">About</Link></li>
      </> }
    </ul>
  )
}
