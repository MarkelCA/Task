import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import moment from 'moment'
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Switch,
} from 'antd';

const TaskForm = ({task}) => {
    const navigate = useNavigate();
    const [tags, setTags] = useState([])
    const [categories, setCategories] = useState([])
    const [form] = Form.useForm()
    const [backRoute, setBackRoute] = useState('')

    useEffect(() => {
        axios.get('/tags').then(function (response) {
            setTags(response.data)
        }).catch(function (error) {
            message.error("Couldn't load the tags")
            console.log(error);
        })

        axios.get('/categories').then(function (response) {
            setCategories(response.data)
        }).catch(function (error) {
            message.error("Couldn't load the categories")
            console.log(error);
        })
    }, []);

    useEffect(() => {
        if(task !== undefined)
            setBackRoute(task.completed ? '/history' : '/tasks')
        else
            setBackRoute('/tasks')
    },[task])

    useEffect(() => {
        form.resetFields()
    },[task, form])

    const submitForm = (values)  => {
        task ? updateTask(values) : createTask(values)
    }

    const createTask = (values) => {
        let date = values.date

        if(date)
            date = date.format('X')

        axios.post('/tasks', values).then(() => {
            message.success("New task created!")
            form.resetFields()
            navigate(backRoute)
        }).catch(function (error) {
            message.error("Couldn't create the task")
            console.log(error);
        });
    }

    const updateTask = (values) => {
        axios.put(`/tasks/${task.id}`, {id:task.id, ...values}).then(() => {
            message.success("Task updated!")
            navigate(backRoute)
        }).catch(function (error) {
            message.error("Couldn't update the task")
            console.log(error);
        });
    }

    const getParsedTask = () => {
        const date = task.date ? moment(task.date) : ''
        const tags = task.tags ? task.tags.map((tag) => tag.id) : []
        return {
            ...task,
            category:task.category.machine_name,
            date:date,
            tags:tags
        }
    }

    const tailLayout = {
        wrapperCol: {
        offset: 4,
        },
    }

    return (
    <Form onFinish={submitForm}
        form={form}
        name ='new-task-form'
        labelCol={{ span: 4,
        }}
        wrapperCol={{
            span: 14,
        }}
        layout="horizontal"
        initialValues={
            task ? getParsedTask() : {
                category:'personal',
                description:'',
                date:'',
                tags:[],
                completed: false
            }
        }>

        <Form.Item name="title" label="Title" required >
            <Input  allowClear required={true}/>
        </Form.Item>

        <Form.Item name='description' label="Description">
            <Input allowClear />
        </Form.Item>

        <Form.Item name='category' label="Category" required={true}>
            <Select allowClear required={true} >
                {categories.map((category) => <Select.Option key={category.machine_name}  value={category.machine_name}>{category.fullName}</Select.Option> )}
            </Select>
        </Form.Item>
        
        <Form.Item name='date' label="Date">
            <DatePicker showTime />
        </Form.Item>

        <Form.Item name='tags' label="Tags">
            <Select showSearch mode="multiple" style={{width: "100%"}} placeholder="Choose the tags">
                {tags.map((tag) => <Select.Option key={tag.id} value={tag.id}>{tag.tagName}</Select.Option> )}
            </Select>
        </Form.Item>

        <Form.Item name='completed' label="Completed" valuePropName="checked">
            <Switch />
        </Form.Item>

        <Form.Item {...tailLayout} >
            <Button type="primary" htmlType="submit"> Submit </Button>
        </Form.Item>
    </Form>
    ) 
}

export default TaskForm;
