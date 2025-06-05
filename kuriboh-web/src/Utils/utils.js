import { Item } from "ant-design-vue/es/menu";

//查找在一个对象数组里面，是否存在一个对象的property=value，有的话返回该对象，没有返回null
export const  FindDuplicates =(items,property,value)=>{
    console.log("OK");

    return items.find(item => item[property] === value);

}