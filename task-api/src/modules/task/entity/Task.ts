import Category from "./Category"
import Tag from "./Tag"

export default interface Task {
    readonly id  : number
    title        : String,
    completed    : boolean,
    date?         : number,
    category     : Category
    description? : String,
    tags?         : Tag[]
}
