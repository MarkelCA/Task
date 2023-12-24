import React, { useEffect, useState } from "react";
import Task from '../task';
import axios from "../../api/axios";
import {message} from "antd";

const TaskList = ({completed}) => {
    const [tasks, setTasks] = useState([])
    const [rerender, setRerender] = useState(false)
    const route = completed ? '/history' : '/tasks'

    useEffect(() => {
        axios.get(route).then(function (response) {
            setTasks(response.data)
        }).catch(function (error) {
            message.error("Couldn't get the tasks")
            console.log(error);
        })
    }, [route, rerender]);

    return tasks.map( (task) => <Task task={task} key={task.id} rerender={rerender} setRerender={setRerender}/> )
} 

export default TaskList;
