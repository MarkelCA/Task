import Task from "../entity/Task";

interface TaskService {
    getTasks()   : Task[];
    getTask(id : number) : Task
    createTask(task : object) : boolean;
    updateTask(task : Task)   : boolean;
    deleteTask(id : number)   : boolean;
}

export default TaskService;
