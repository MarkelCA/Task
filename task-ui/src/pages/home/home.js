import React from "react";
import { Card } from 'antd';
import {Space} from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
const Home = () => {

    return <>
        <Space>
            <Link to="/tasks">
                <Card hoverable style={{ width: 300, marginRight:'1em' }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            style={{width:'300px', height: '200px'}}
                        />
                    }>
                    <Meta title="All Tasks" description="See what you have to do today"/>
                </Card>
            </Link>      

            <Link to="/new-task">
                <Card
                    hoverable
                    style={{
                        width: 300,
                        height: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="/paisaje2.jpg"
                            style={{width:'300px', height: '200px'}}
                        />
                    }>
                    <Meta title="New Task" description="Let's be productive" />
                </Card>
            </Link>      

            <Link to="/history">
                <Card
                    hoverable
                    style={{
                        width: 300,
                        height: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="/paisaje.jpg"
                            style={{width:'300px', height: '200px'}}
                        />
                    } >
                    <Meta title="History" description="What did you acomplish so far" />
                </Card>
            </Link>      
        </Space>
    </>
}

export default Home;
