import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
    UserOutlined,
    BookOutlined,
    CalendarOutlined,
    UnorderedListOutlined,
    HomeOutlined,
    CheckCircleOutlined,
    PlusOutlined
} from '@ant-design/icons'
const { SubMenu } = Menu;


const AsideMenu = () => {

    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            <Menu.Item key="home">
                 <HomeOutlined/>
                <span>Home</span>
                <Link to="/" />
          </Menu.Item>
            <Menu.Item key="new-task">
                <PlusOutlined />
                <span>New task</span>
                <Link to="/new-task" />
          </Menu.Item>
            <Menu.Item key="tasks">
                <CheckCircleOutlined />
                <span>Tasks</span>
                <Link to="/tasks" />
          </Menu.Item>
        <SubMenu
            key="sub1"
            title={
              <span>
                <UnorderedListOutlined />
                <span>Categories</span>
              </span>
            }
          >
            <Menu.Item key="personal">
                 <UserOutlined/>
                <span>Personal</span>
                <Link to="/tasks/personal" />

            </Menu.Item>
            <Menu.Item key="study">
                <BookOutlined/>
                <span>Study</span>
                <Link to="/tasks/study" />
            </Menu.Item>
          </SubMenu>
            <Menu.Item key="History">
                 <CalendarOutlined/>
                <span>History</span>
                <Link to="/history" />
          </Menu.Item>
        </Menu>
    ) 
}

export default AsideMenu;
