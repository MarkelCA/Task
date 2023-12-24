import {Application, Request, Response} from 'express'
import Task from './entity/Task';
import TaskService from './service/TaskService';

export default class TaskController {
    private service : TaskService;


    public constructor(private app : Application, service : TaskService) { 
        this.service = service
    }

    public init() {
        this.app.get('/tasks',     (_req : Request, _res : Response) => { this.getPendindTasks(_req, _res)});
        this.app.get('/history',   (_req : Request, _res : Response) => { this.getCompletedTasks(_req, _res)});
        this.app.get('/tasks/all', (_req : Request, _res : Response) => { this.getTasks(_req, _res)});
        this.app.get('/tasks/:id', (_req : Request, _res : Response) => { this.getTask(_req, _res) });
        this.app.post('/tasks',    (_req : Request, _res : Response) => { this.newTask(_req, _res) });
        this.app.put('/tasks/:id',    (_req : Request, _res : Response) => { this.updateTask(_req, _res) });
        this.app.delete('/tasks/:id',    (_req : Request, _res : Response) => { this.deleteTask(_req, _res) });

    }

    private getTasks(_req : Request, _res : Response) {
        const tasks : Task[] = this.service.getTasks();
        _res.json(tasks);
    }

    private getPendindTasks(req : Request, res : Response) {
        const result = this.service.getTasks().filter((task) => task.completed === false)
        res.json(result);
    }

    private getCompletedTasks(req : Request, res : Response) {
        const result = this.service.getTasks().filter((task) => task.completed === true)
        res.json(result);
    }

    private getTask(req : Request, res : Response) {
        const { id } = req.params
        try {
            const task = this.service.getTask(parseInt(id));
            res.json(task)
        } catch(e) {
            res.status(404)
            res.json("Couldn't find this task.")
        }
    }

    private newTask(req : Request, res : Response) {
        const { body : task } = req
        const result = this.service.createTask(task);
        res.json(result === true ? 'Task created' : "Couldn't update the task")
    }

    private updateTask(req : Request, res : Response) {
        const { body : task } = req
        const result = this.service.updateTask(task);
        res.json(result === true ? 'Task updated' : "Couldn't update the task")

    }
    
    private deleteTask(req : Request, res : Response) {
        const {id} = req.params
        this.service.deleteTask(parseInt(id));
        res.json('Task deleted')
    }

}
