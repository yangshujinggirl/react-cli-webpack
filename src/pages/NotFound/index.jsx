import styles from './index.less';

export default function ErrorPage() {
  return (
    <div id="error-page" className={styles['error-page']}>
      <h1>ops!!</h1>
      <h2>404 NotFound</h2>
    </div>
  );
}