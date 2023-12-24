import * as tasksJson from '../res/tasks.json'
import * as categoriesJson from '../res/categories.json'
import * as tagsJson from '../res/tags.json'
import Tag from '../modules/tag/entity/Tag';
import Task from '../modules/task/entity/Task';
import Category from '../modules/category/entity/Category';

export class JsonDataProvider {  
    public getTasks()  : Task[] {
        return tasksJson.tasks;
    }

    public getTags() : Tag[] {
        return tagsJson.tags;
    }

    public getCategories() : Category[] {
        return categoriesJson.categories;
    }


}
