import React from 'react';
import Styles from './_navbar2.module.css'
import Menu2 from './Menu2';

import SignInUp from './SignInUp';

const Navbar2 = () => {
  return (
    <div className={Styles.geeks1}>
              <Menu2 />
              <SignInUp/>
    </div>
  )
}

export default Navbar2
