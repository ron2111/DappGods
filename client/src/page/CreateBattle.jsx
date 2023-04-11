import React from 'react';
import {PageHOC} from '../components';

const CreateBattle = () => {
  return (
    <div>
    
    </div>
  )
};

// higher order components wrap other components
export default PageHOC(
    CreateBattle,
 <>
 Create<br />
 a new Battle</>,
 <>
 Create your own Battle  <br /> and wait for other players to join you
 </>

);
// Same as Home.jsx, Create Battle page is also wrapped by PageHOC with different title and description props