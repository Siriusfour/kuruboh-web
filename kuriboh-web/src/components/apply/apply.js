
import { ref, h } from 'vue'
import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    PlusCircleOutlined
} from '@ant-design/icons-vue';
import { SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';



const template = [] //res中的模板
const applicants=[] //申请人列表


export const ApplyTypeList = ref([
    {
        key: 0,
        icon: () => h(MailOutlined),
        label: '技术服务',
        title: 'Navigation One',
    },
    {
        key: 1,
        icon: () => h(AppstoreOutlined),
        label: '售后服务',
        title: 'Navigation Two',
    },

]);
