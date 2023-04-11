import React from 'react';
import {PageHOC} from '../components';

const Home = () => {
  return (
    <div>
    
    </div>
  )
};

// higher order components wrap other components
export default PageHOC(
 Home,
 <>
 Welcome to DappGods <br />
 A Web3 NFT Card Game</>,
 <>
 Connect your wallet to start playing  <br /> the ultimate Web3 Battle Card Game
 </>

);
// The above data can ve reterieved from by PageHOC through its 3 different props