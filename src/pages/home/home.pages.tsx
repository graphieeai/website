import React from 'react';
import './home.styles.css';
import { Header } from '../../components';
import { Hero } from '../../components'
const Home = () => {
  return (
    <>
      <Header />
      <div className='home-page page'>
        <Hero />
      </div>
      <div className='home-content'>
        <div className="content-container">
          <h1>What we do?</h1>
          <p>Welcome to our website, dedicated to addressing the critical issue of false positives in financial institutions' machine learning and AI systems. The recent increase in false positives due to severe market changes is a cause for concern among major financial institutions worldwide. While analysts have been able to recalibrate their models, getting them approved and deployed is a time-consuming hurdle that must be overcome quickly to prevent a potential financial collapse. Our goal is to provide practical solutions for financial institutions, analysts, and data scientists struggling with obsolete models. Our site features up-to-date news and analysis on the latest market trends, as well as practical advice on recalibrating models and getting them approved and deployed more efficiently. We also offer a forum for industry professionals to share their experiences and insights and a directory of trusted service providers who specialize in recalibrating models and deploying them quickly and effectively. Join us in our mission to build a more resilient financial system for the future.</p>
        </div>
      </div>

    </>
  )
}

export default Home;