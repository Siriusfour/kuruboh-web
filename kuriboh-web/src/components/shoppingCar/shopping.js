import { reactive, ref} from 'vue';


export const selectedKeys = ref(['1']);
export const openKeys = ref(['sub1']);
export const  showProductList = ref([])
export const items = reactive([
    getItem('Navigation One', 'sub1',),
    getItem('Navigation Two', 'sub2',),
    getItem('Navigation Three', 'sub3',),

]);



function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
    
}