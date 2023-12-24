import React from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Tasks from './pages/tasks'
import EditTask from './pages/edit-task'
import Home from './pages/home'
import NewTask from './pages/new-task/new-task';
import Aside from './components/aside'
import SiteHeader from './components/site-header'
import SiteFooter from './components/site-footer'
const { Content } = Layout;


const App = () => {
  return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh', }} >
          <SiteHeader/>
          <Layout className="site-layout">
            <Aside/>
            <Content style={{ margin: '0 16px', }} >
                <div style={{ padding: 24, minHeight: 360, margin: 'auto' }} >
                  <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/tasks' element={<Tasks completed={false}/>} />
                      <Route path='/history' element={<Tasks completed={true}/>} />
                      <Route path='/new-task' element={<NewTask/>} />
                      <Route path='/task/:id' element={<EditTask/>} />
                    <Route path="*" element={<Home />} />
                  </Routes>
              </div>
            </Content>
            <SiteFooter/>
          </Layout>
        </Layout>
      </BrowserRouter>
  )
    
}


export default App;
