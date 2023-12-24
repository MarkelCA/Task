import React  from "react";
import { Layout, Typography } from "antd";
import {  HeartOutlined, } from '@ant-design/icons';
const {Footer} = Layout
const {Text, Link} = Typography


const SiteFooter = () => {
    return (
        <Footer style={{ textAlign: 'center', }} >
            <Text type='secondary' italic >Made with <HeartOutlined /> by  <Link target='_blank' type='link' href='https://github.com/MarkelCA'>Markel Cuesta</Link></Text>
        </Footer>
    );
}

export default SiteFooter;
