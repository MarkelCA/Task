import Category from "../entity/Category";
import CategoryService from "./CategoryService";

export class CategoryJsonService implements CategoryService {
    public constructor(private categories : Category[]) { }

    getCategories(): Category[] {
        return [...this.categories]
    }
    getCategory(machine_name: string): Category {
        const foundCategory = this.categories.find((category) => {
            return category.machine_name ==  machine_name;
        })

        if(foundCategory == undefined)
            throw new Error('Category not found with this id');

        return foundCategory;
    }

}
