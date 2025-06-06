import { onMounted } from 'vue';
import { h, ref } from 'vue';
import { SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
import { reactive, watch } from 'vue';
import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    PlusCircleOutlined
} from '@ant-design/icons-vue';


export const current = ref(['mail']);
export const value = ref('');
export const specIndex = ref(0)
export const showProductList = ref([])
export const ShoppingCarNum= ref(0)
export const reagentList = ref([])
export const deviceList = ref([])
export const materialList = ref([])
export const otherList = ref([])
export const selectOrgID =ref(0)

export const res = [{ "description": "10支一盒(100支一中盒)", "tags": [{ "tag_id": 2, "tag_name": "药检" }], "products": [{ "price": "5.7", "image": "https://bokanghy.com/oss/2025-04-03/6d6574bc61b81eebf83a9c068e4d231c.jpeg", "spec": "0.1ml/支", "id": 75 },{ "price": "11.4", "image": "https://bokanghy.com/oss/2025-04-03/6d6574bc61b81eebf83a9c068e4d231c.jpeg", "spec": "0.2ml/支", "id": 76 }], "product_name": "鲎试剂(0.125EU/ml)", "product_type": 0, "product_no": "BK-T03" },
{ "description": "10支一盒(100支一中盒)", "tags": [{ "tag_id": 2, "tag_name": "药检" }], "products": [{ "price": "5.6", "image": "https://bokanghy.com/oss/2025-04-03/6d6574bc61b81eebf83a9c068e4d231c.jpeg", "spec": "0.1ml/支", "id": 77 }], "product_name": "某种设备", "product_type": 1, "product_no": "BK-T03" }]

export const state = reactive({
    collapsed: true,
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
});

export let iconStyle = ref({

    fontSize: '25px',
      transition: 'scale(1.2)', // 添加平滑过渡效果
})

export const orgType = reactive([
    {
        key: '1',
        icon: () => h(PieChartOutlined),
        label: '常用公司',
        title: 'Option 1',
        children: [
            {
              key: '0',
              label: '博康海洋生物公司',
              title: 'Option 9',
            },
        ]
    },
    {
        key: '2',
        icon: () => h(DesktopOutlined),
        label: 'Option 2',
        title: 'Option 2',
    },
    {
        key: '3',
        icon: () => h(InboxOutlined),
        label: 'Option 3',
        title: 'Option 3',
    },


]);


export const productTypeList = ref([
    {
        key: 0,
        icon: () => h(MailOutlined),
        label: '试剂',
        title: 'Navigation One',
    },
    {
        key: 1,
        icon: () => h(AppstoreOutlined),
        label: '配套',
        title: 'Navigation Two',
    },
    {
        key: 2,
        icon: () => h(SettingOutlined),
        label: '设备',
        title: 'Navigation Three - Submenu',
    },
    {
        key: 3,
        icon: () => h(SettingOutlined),
        label: '其他',
        title: 'Navigation Three - Submenu',
    },

]);

