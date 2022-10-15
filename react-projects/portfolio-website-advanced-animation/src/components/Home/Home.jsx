import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-s.png"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import "./Home.scss"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = "lobodan".split("")
  const jobArray = "web developer.".split("")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
