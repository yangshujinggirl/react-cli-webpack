import { Outlet} from "react-router-dom";
import { Layout } from 'antd';
import '@common/global.less';
import styles from './index.less';
import Siderbars from '@components/Siderbars';
import menuData from '../../routers/pageRoots';
const { Header, Content } = Layout;

const BasicLayout=()=>{
  return <Layout hasSider>
      <Siderbars menuData={menuData}/>
      <Layout className={styles['layout-wrap-action']}>
        <Header>
                面包屑区
            </Header>
        <div className={styles["layout-inner-content"]}>
          <Content className={styles['content-wrap']}>
            <Outlet />
          </Content>
        </div>
      </Layout>
    </Layout>
}

export default BasicLayout;