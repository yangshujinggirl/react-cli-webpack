import styles from './index.less';

const ContentCard=(props)=>{
  return <div className={styles["content-wrap"]}>
    <p className={styles.title}>{props.title}</p>
    <div className={styles.content}>
      {props.children}
    </div>
  </div>
}

export default ContentCard;
