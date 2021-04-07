import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import s from './CookieBanner.module.scss'
import { Link } from 'gatsby';
import {motion, AnimatePresence} from 'framer-motion'
import Cookies from 'universal-cookie';


const variants = {
  pre: {
    left:'-100%'
  },
  visible: {
    left:'0%'
  },
  post: {
    left:'-100%'
  }

}

export default function CookieBanner() {
  const cookies = new Cookies();
  const acceptCookies = cookies.get('acceptCookies')

  const [showBanner, setShowBanner] = useState(!acceptCookies)


  const accept = () => {
    var dt = new Date();
    dt.setDate(dt.getDate() + 600); 
    cookies.set('acceptCookies', 'true', { path: '/', expires: dt });
    setShowBanner(false)
  }


  return (
    <>
    <AnimatePresence>
    { showBanner && <motion.div className={s.cookieBanner} variants={variants} initial="pre" animate="visible" exit="post">
      <p>This site uses cookies. Read our <Link to="cookies">Cookie policy</Link> to find out more</p>
      <Button variant="contained" size="small" disableElevation onClick={()=>accept()}>Accept</Button>
    </motion.div>
    }
    </AnimatePresence>
    </>
  )
}
