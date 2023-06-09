import DymicMod from './DymicMod';
import img1 from '@assets/01.png';
import styles from './index.less';

const Index=()=>{
  return <div className={styles['home-pages-wrap']}>
     <h3>(一)：useMemo与useCallback之性能优化</h3>
      <ul className={styles["hooks-list"]}>
        <li>返回一个 memoized值<div>useMemo:传入 useMemo 的函数会在渲染期间执行,如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值</div></li>
        <li>返回一个 memoized 回调函数<div>useCallback:把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新</div></li>
        <li><div>useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。</div></li>
        <li>
          <div>用useMemo与useCallback包裹，可以进行性能优化，减少不必要的渲染</div>
        </li>
      </ul>
      <div className={styles["imgWrap"]}>
        <img src={img1} alt="" />
      </div>
      <DymicMod />
  </div>
}

export default Index;