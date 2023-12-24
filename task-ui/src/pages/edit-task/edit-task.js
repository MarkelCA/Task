import React, { useEffect, useState } from "react";
import TaskForm from '../../components/task-form'
import {PageHeader} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";

const EditTask = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState()
    const {id} = useParams()
    const [backRoute, setBackRoute] = useState('')
    
    useEffect(() => {
        axios.get(`/tasks/${id}`)
          .then(function (response) {
              setTask(response.data)
              setBackRoute(response.data.completed ? '/history' : '/tasks')
          })
          .catch(function (error) {
              navigate('/tasks')
            console.log(error);
          })

      }, [id, navigate]);


    return (
        <>
        <PageHeader
            className="site-page-header"
            onBack={() =>   navigate(backRoute, {replace : true})}
            title="EditTask"
            subTitle="Change of plans?"
          />
          <TaskForm task={task}/>
        </>
    )
}

export default EditTask;
