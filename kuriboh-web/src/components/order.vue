<script setup>


import { onMounted } from 'vue';
import { h, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import { reactive, watch } from 'vue';
import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    PlusCircleOutlined
} from '@ant-design/icons-vue';
const current = ref(['mail']);

const value = ref('');

const specIndex = ref(0)

const showProductList = ref([])
const reagentList = ref([])
const deviceList = ref([])
const materialList = ref([])
const otherList = ref([])


const res = [{ "description": "10支一盒(100支一中盒)", "tags": [{ "tag_id": 2, "tag_name": "药检" }], "products": [{ "price": "5.6", "image": "https://bokanghy.com/oss/2025-04-03/6d6574bc61b81eebf83a9c068e4d231c.jpeg", "spec": "0.1ml/支", "id": 76 }], "product_name": "鲎试剂(0.125EU/ml)", "product_type": 0, "product_no": "BK-T03" },
{ "description": "10支一盒(100支一中盒)", "tags": [{ "tag_id": 2, "tag_name": "药检" }], "products": [{ "price": "5.6", "image": "https://bokanghy.com/oss/2025-04-03/6d6574bc61b81eebf83a9c068e4d231c.jpeg", "spec": "0.1ml/支", "id": 76 }], "product_name": "某种设备", "product_type": 1, "product_no": "BK-T03" }]

const state = reactive({
    collapsed: true,
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
});
const orgType = reactive([
    {
        key: '1',
        icon: () => h(PieChartOutlined),
        label: '常用公司',
        title: 'Option 1',
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

const productTypeList = ref([
    {
        key: '0',
        icon: () => h(MailOutlined),
        label: '试剂',
        title: 'Navigation One',
    },
    {
        key: '1',
        icon: () => h(AppstoreOutlined),
        label: '配套',
        title: 'Navigation Two',
    },
    {
        key: '2',
        icon: () => h(SettingOutlined),
        label: '设备',
        title: 'Navigation Three - Submenu',
    },
    {
        key: '3',
        icon: () => h(SettingOutlined),
        label: '其他',
        title: 'Navigation Three - Submenu',
    },

]);
watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    },
);

onMounted(() => {
    //初始化试剂，配套，耗材三个数组
    res.forEach((item,) => {
        if (item.product_type == 0) {
            reagentList.value.push(item)
        }

        if (item.product_type == 1) {
            deviceList.value.push(item)
        }

        if (item.product_type == 2) {
            materialList.value.push(item)
        }

        if (item.product_type == 3) {
            otherList.value.push(item)
        }

    });
    console.log(reagentList.value);
    console.log(showProductList.value);
    

})
const toggleCollapsed = () => {
    state.collapsed = !state.collapsed;
    state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

const onSearch = searchValue => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
};



const selectedProductType = ({ item, key }) => {

    if (key === 0) {
        showProductList.value = reagentList.value
    }
    if (key === 1) {
        showProductList = deviceList
    }
    if (key === 2) {
        showProductList = materialList
    }
    if (key === 3) {
        showProductList = otherList
    }
    console.log(reagentList.value);
    console.log(showProductList.value);

}

</script>

<template>
    <div class="navigation">

        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
            <MenuUnfoldOutlined v-if="state.collapsed" />
            <MenuFoldOutlined v-else />
        </a-button>
        <div>
            <a-menu v-model:selectedKeys="current" mode="horizontal" :items="productTypeList"
                @click="selectedProductType" />
        </div>
        <a-input-search style="" v-model:value="value" placeholder="请输入产品/公司" enter-button="Search" size="large"
            @search="onSearch" />
    </div>

    <div
        style="width: 100% ; height: 100%; right: 150px; display: flex; flex-direction: row; justify-content: start; align-items: start;">
        <div style="min-width: 17%;  margin-top: 3%;margin-right: 15px;">
            <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline"
                theme="light" :inline-collapsed="state.collapsed" :items="orgType"></a-menu>
        </div>

        <div
            style="width: 100%; height: 100%; display: flex ; flex-direction: column; justify-content: start; align-items: start; overflow-y:scroll">
            <div v-for="(item, index) in showProductList" style="width: 90%;   margin-top: 5%;" class="flex-row-start-center">

                <a-image :width="100" style="border-radius: 8px; " :src="item.products[specIndex].image" />

                <div class="productInfo">
                    <a-badge-ribbon text="临床" color="red">
                        <a-row>
                            <a-col :span="24" class="titleText">{{ item.product_name }} </a-col>
                        </a-row>
                        <a-row style="margin-top: 35px;">
                            <a-col :span="8" class="productInfoText"> 货号： <text style="color:black;">{{ item.product_no}}</text> </a-col>
                            <a-col :span="8" class="productInfoText">规格：
                                <a-dropdown>
                                    <a @click.prevent class="titleText">
                                        <text style="color:black;">{{ item.products[specIndex].spec }} </text>
                                        <CaretDownOutlined style="color: white; margin-right: 20px;" />
                                        <DownOutlined />
                                    </a>
                                    <template #overlay>
                                        <a-menu @click="onClick">
                                            <a-menu-item :key="index" v-for="(spec, index) in item.products">{{
                                                item.products[specIndex].spec }}</a-menu-item>


                                        </a-menu>
                                    </template>
                                </a-dropdown>
                            </a-col>
                            <a-col :span="8" class="PriceText">￥{{ item.products[specIndex].price }}</a-col>
                        </a-row>
                        <a-col :span="24" style="margin-left: 52px;" align="start" class="productInfoText">详情：<text
                                style="color:black;">{{ item.description }}</text> </a-col>
                    </a-badge-ribbon>
                </div>

                <PlusCircleOutlined style="margin-left: 30px;" width="80em" />

            </div>
        </div>

    </div>

</template>



<style scoped>
.productInfo {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;
    height: 120%;
    border-radius: 8px;
    margin-right: 0;
}

.titleText {
    color: #000000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 17px;
    margin-top: 5px
}

.PriceText {
    color: rgb(255, 69, 23);
    font-size: 20px;
    font-weight: 700;
}

.productInfoText {
    color: rgb(136, 136, 136);
    font-size: 15px;
}

.navigation {
    width: 86%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>