import {Layout} from "antd";
import React from "react";
import { useState } from 'react';
import AsideMenu from '../aside-menu'
const { Sider } = Layout;

const Aside = () => {
  const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
              <AsideMenu/>
        </Sider>
    ) 
}

export default Aside;
