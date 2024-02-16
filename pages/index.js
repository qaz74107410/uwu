import { Button, Grid, Stack, Item, Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import CssBaseline from '@mui/material/CssBaseline';
import { useRef, useState } from 'react';

export default function Home() {

  const currentYear = () => {
    return new Date().getFullYear()
  }

  const [isYes, setIsYes] = useState(false)

  const movableContainerRef = useRef(null)

  // make button run away to random position in screen
  const handleNo = (e) => {
    console.log(e)
    // let x = Math.floor(Math.random() * window.innerWidth)
    // let y = Math.floor(Math.random() * window.innerHeight)

    const btn = e.target

    // move this btn element to movableContainerRef
    movableContainerRef.current.appendChild(btn)
    btn.style.position = 'fixed'
    btn.style.zIndex = 999999999999999

    // should only move button to random position in movableContainerRef
    let x = Math.floor(Math.random() * movableContainerRef.current.clientWidth)
    let y = Math.floor(Math.random() * movableContainerRef.current.clientHeight)

    // to prevent move out side screen when button is clicked
    // we have to cal size of button
    let buttonWidth = btn.clientWidth
    let buttonHeight = btn.clientHeight

    if (x + buttonWidth > window.innerWidth) {
      x = window.innerWidth - buttonWidth
    }

    if (y + buttonHeight > window.innerHeight) {
      y = window.innerHeight - buttonHeight
    }

    btn.style.left = x + 'px'
    btn.style.top = y + 'px'
  }

  const handleYes = (e) => {
    setIsYes(true)
    // let x = Math.floor(Math.random() * window.innerWidth)
    // let y = Math.floor(Math.random() * window.innerHeight)
  }

  const { width, height } = useWindowSize()

  return (
    <>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Prompt' rel='stylesheet' />
      </Head>
      <div className={styles.container}>
        {/* check if yes is clicked */}
        {!isYes && (
          <main ref={movableContainerRef} className={styles.main}>
            <div className={styles.glass}>
              <h1 className={styles.title}>
                รักกันมั้ยจ้ะคนดี
              </h1>

              <Box display={'flex'} flexDirection={'row'}>
                <button onClick={handleYes} className={styles['glass-btn']}>YES</button>
                <button onTouchStart={handleNo} onTouchMove={handleNo} onMouseEnter={handleNo} className={styles['glass-btn']}>NO</button>
              </Box>

            </div>
            <footer style={{ color: "#ffffff85", paddingTop: 10 }}>&copy; Copyright {currentYear()} Komsan</footer>
          </main >
        )}
        {isYes && (<>
          <main ref={movableContainerRef} className={styles.main}>
            <div className={styles.glass}>
              <h1 className={styles.title}>
                เย้
              </h1>

              <img src={'/cony-brown.gif'} style={{ width: '100%', height: 'auto', maxWidth: 250 }} />
              {/* 
              <p className={styles.description}>
                ❤️❤️❤️❤️❤️
              </p> */}

            </div>
            <footer style={{ color: "#ffffff85", paddingTop: 10 }}>&copy; Copyright {currentYear()} Komsan</footer>
          </main >

          <Confetti
            width={width}
            height={height}
          /></>
        )}
      </div >
    </>
  )
}
