import Task from '../entity/Task';
import TaskService from './TaskService';
import TagService from '../../tag/service/TagService';
import CategoryService from '../../category/service/CategoryService';

export class TaskJsonService implements TaskService {

    public constructor(
        private tasks : Task[],
       private categoryService : CategoryService,
       private tagService : TagService) {}

    getTasks(): Task[] {
        //this.createTask();
        return this.tasks.map((task) => this.getTask(task.id));
    }

    /**
      * This function includes tags as an object intead of an id
      */
    getTask(id: number): Task {
        const foundTask = this.tasks.find((task) =>  task.id == id )
        // We use spread operator so we dont edit the task by reference
        const result = <Task>{...foundTask}

        if(foundTask == undefined)
            throw new Error('Task not found with this id');

        if(result.tags)
            result.tags  = result.tags.map((id : number) => this.tagService.getTag(id))

        result.category = this.categoryService.getCategory( result.category )

        return result;
    }

    createTask(task : object): boolean {
        const maxId = this.tasks[this.tasks.length - 1].id
        const newTask : Task = <Task>{id:maxId + 1, ...task}

        this.tasks.push(newTask);

        return true;
    }

    updateTask(updatedTask : Task): boolean {
        const foundTask : Task | undefined = this.tasks.find((task) =>  updatedTask.id == task.id )

        if(foundTask == undefined) return false;

        const {date : newDate, tags : newTags, description : newDescription} = updatedTask

        foundTask.title     = updatedTask.title
        foundTask.category  = updatedTask.category
        foundTask.completed = updatedTask.completed

        if(!newDate)
            delete foundTask.date
        else 
            foundTask.date = newDate

        if(!newTags)
            delete foundTask.tags
        else 
            foundTask.tags = newTags

        if(!newDescription)
            delete foundTask.description
        else 
            foundTask.description = newDescription

        return true;

    }

    deleteTask(id: number): boolean {
        this.tasks = this.tasks.filter((task) => task.id != id)
        return true;
    }

}
