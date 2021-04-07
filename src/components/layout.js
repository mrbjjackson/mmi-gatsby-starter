import React, {useState, useEffect}from "react"
// import PropTypes from "prop-types"

import useWindowSize from './useWindowSize'
// import useLocalStorage from './useLocalStorage'

import "./styles/reset.css"
import "./styles/styles.scss"

import Header from "./header"
import MainNav from './MainNav'

import { content, mainHolder } from "./styles/layout.module.scss"

import { motion, AnimatePresence } from "framer-motion"


const variants = {
  pre:{
    opacity:0,
    x:'-2rem',
    transition: {  type:"tween",  duration:0.25  }
  },
  visible: {
    opacity:1,
    x:0,
    transition: {  type:"tween",  duration:0.25 }
  },
  post: {
    opacity:0,
    x:'2rem',
    transition: {  type:"tween",  duration:0.25 }
  }
}


const Layout = ({ children, location, ...props}) => {
  const [isHome, setIsHome] = useState(location.pathname==='/')
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const size = useWindowSize()


  useEffect(()=>{
    const breakpoint = 700

    if(size.width < breakpoint)
    setIsSmallScreen(true)

    if(size.width > breakpoint)
    setIsSmallScreen(false)

    if(((size.width / size.height) > 1.7) && (size.height < 600))
    setIsSmallScreen(true)

  }, [size, setIsSmallScreen])



  useEffect(()=>{
    setIsHome(location.pathname==='/')
  }, [location])



  return (
    <div className={mainHolder}>
      <Header siteTitle='St Agnes MMI' />
      
      <MainNav isSmallScreen={isSmallScreen} />

      <div className={content}>

        <AnimatePresence exitBeforeEnter>
          <motion.main key={location.pathname} variants={variants} initial="pre" animate="visible" exit="post">
            {children}
          </motion.main>
        </AnimatePresence>

      </div>

    </div>
  )
}

export default Layout
