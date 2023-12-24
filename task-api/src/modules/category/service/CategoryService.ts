import Category from '../entity/Category'
interface CategoryService {
    getCategories() : Category[]
    getCategory(machineName : string)   : Category 
}

export default CategoryService
