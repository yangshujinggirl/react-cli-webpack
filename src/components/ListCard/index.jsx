import styles from './index.less';

const ContentCard=(props)=>{
  return <div className={styles["list-wrap"]}>
    <p className={styles.title}>{props.title}</p>
    {
      props.data?.length>0?
      <ul className={styles.list}>
        {
          props.data.map((el,index)=> (
            <li key={index}>{++index}》{el}</li>
          ))
        }
      </ul>
      :
      <div className={styles.content}>
        {props.children}
      </div>
    }
  </div>
}

export default ContentCard;
