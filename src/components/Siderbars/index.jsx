import { useNavigate} from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import '@common/global.less';
// import styles from './index.less';
const { Sider } = Layout;


const Siderbars=(props)=>{
  const { menuData=[] } =props;
  const [current, setCurrent] = useState('nest');
  const navigate = useNavigate();

  const onClick = (value) => {
    console.log('value',value)
    setCurrent(value.key);
    navigate(value.key)
  };
  return  <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div
              style={{
                height: 32,
                margin: 16,
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            />
            <Menu
              theme="dark"
              onClick={onClick}
              mode="inline"
              defaultSelectedKeys={['4']}
              selectedKeys={[current]}
              items={menuData} />
          </Sider>
}

export default Siderbars;