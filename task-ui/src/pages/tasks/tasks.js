import React  from "react";
import { useNavigate } from "react-router-dom";
import {PageHeader} from "antd";
import TaskList from "../../components/task-list/task-list";
import CreateTaskBox from "../../components/create-task-box"


const Tasks = ({completed}) => {
    const navigate = useNavigate();
    const title       = completed ? 'History' : 'Tasks';
    const subTitle = completed ? 'What did you acomplish so far,' : 'See what you have to do today';

    return <>
        <PageHeader
            className="site-page-header"
            onBack={() =>   navigate('/', {replace : true})}
            title={title}
            subTitle={subTitle}
        />
        {!completed ? <CreateTaskBox/> : ''}
        <TaskList completed={completed}/>
    </>
}

export default Tasks;
