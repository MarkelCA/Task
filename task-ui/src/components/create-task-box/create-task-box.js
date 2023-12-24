import React from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { useNavigate } from "react-router-dom";


const CreateTaskBox = () => {
    const navigate = useNavigate();
    
    return(
        <div className="task" style={{marginTop: '1em',marginBottom: '1em'}}>
            <Button type='primary' 
                style={{borderRadius: '20px', width:'100%', textAlign:'left'}}
                onClick={() =>  navigate('/new-task', {replace : true})  }>
                <CheckCircleOutlined/>Create new Task
            </Button>
        </div>
    ) 
}

export default CreateTaskBox;
