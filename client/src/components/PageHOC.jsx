import React from 'react'
import {useNavigate} from 'react-router-dom'

import {logo,heroImg} from '../assets';
import styles from '../styles';

// Higher Order Components acts as a wrapper and accepts Component as the paramenter. Essesntially its a function inside a function.
const PageHOC = (Component, title, description) => () => {
    const navigate = useNavigate();
  return (
    <div className={styles.hocContainer}>
        <div className={styles.hocContentBox}>
{/* logo with homepage navigation */}
<img src={logo} alt="logo" className={styles.hocLogo} onClick={() =>navigate('/')}/>

<div className={styles.hocBodyWrapper}>
  <div className='flex flex-row w-full'>
    <h1 className={`flex ${styles.headText} head-text`}>{title} </h1>
  </div>
  {/* for heading prop */}

  <p className={`${styles.normalText} my-10`}>{description}</p> 
  {/* description prop  */}
<Component />

</div>
<p className={styles.footerText}> Made with 💜 by RS </p>
        </div>

        <div className="flex flex-1">
          <img src={heroImg} alt="hero-image" className="w-full xl:h-full object-cover" />
        </div>
        </div>
  )
}
// This component will act as template for all he pages
export default PageHOC;