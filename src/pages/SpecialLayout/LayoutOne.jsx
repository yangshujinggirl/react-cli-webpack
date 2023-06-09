import styles from './LayoutOne.less'
const Index =()=> {
  const list = new Array(100).fill(0);
  return <div className={styles['main-action-wrap']}>
      <div className={styles['sider-wrap']}>分组一</div>
      <div className={styles['content-action']}>
        <div className={styles["content"]}>
          {list.map((el)=><p>{el}</p>)}
        </div>
        <div className={styles["footer"]}>footer</div>
      </div>
    </div>
}

export default Index;