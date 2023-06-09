import React from 'react';
import List from './List';
import FooterMod from './FooterMod';
import StaicMod from './StaicMod';
import styles from './index.less';

class ReduxClassMod extends React.Component {
  render(){
    return <div className={styles["reduxClassWrap"]}>
      <h2>redux/toolkit在class组件中的应用</h2>
      <List />
      <FooterMod />
      <StaicMod />
    </div>
  }
}

export default ReduxClassMod