import {  Tabs } from 'antd';
import LayoutOne from './LayoutOne';

const Index =()=> {
  const items = [
    {
      label: `LayoutOne`,
      key: 1,
      children: <LayoutOne />,
    }
  ]
  return <Tabs
          defaultActiveKey="1"
          style={{ height: 220 }}
          items={items}
        />
}

export default Index;