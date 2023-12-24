import React from "react";
import { Layout, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const { Header } = Layout
const {Title} = Typography

const SiteHeader = () => {

    return(
        <Header className="site-layout-background" style={{ paddingTop: '.5em' }} >
            <Title style={{color:'white', textAlign:'center'}}><CheckOutlined/>  Task</Title>
        </Header>
    )  
}

export default SiteHeader;
