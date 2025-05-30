<script setup>

import { h, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import { reactive, watch } from 'vue';
import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
} from '@ant-design/icons-vue';
const current = ref(['mail']);
const items2 = ref([
    {
        key: 'mail',
        icon: () => h(MailOutlined),
        label: '试剂',
        title: 'Navigation One',
    },
    {
        key: 'app',
        icon: () => h(AppstoreOutlined),
        label: '配套',
        title: 'Navigation Two',
    },
    {
        key: 'sub1',
        icon: () => h(SettingOutlined),
        label: '设备',
        title: 'Navigation Three - Submenu',
    },

]);
const value = ref('');
const onSearch = searchValue => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
};

const res = [{ "description": "10支一盒(100支一中盒)", "tags": [{ "tag_id": 2, "tag_name": "药检" }], "products": [{ "price": "5.6", "image": "https://bokanghy.com/oss/2025-04-03/6d6574bc61b81eebf83a9c068e4d231c.jpeg", "spec": "0.1ml/支", "id": 76 }], "product_name": "鲎试剂(0.125EU/ml)", "product_type": 0, "product_no": "BK-T03" }]

const state = reactive({
    collapsed: true,
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
});
const items = reactive([
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
watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    },
);
const toggleCollapsed = () => {
    state.collapsed = !state.collapsed;
    state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

</script>

<template>
    <div style="width: 80%; display:flex ; flex-direction: row; justify-content: center; align-items: center; gap:20px">

        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
            <MenuUnfoldOutlined v-if="state.collapsed" />
            <MenuFoldOutlined v-else />
        </a-button>
        <div >
            <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items2" />
        </div>
        <a-input-search v-model:value="value" placeholder="请输入产品/公司" enter-button="Search" size="large"
            @search="onSearch" />
    </div>

    <div
        style="width: 100% ; right: 150px; display: flex; flex-direction: row; justify-content: start; align-items: center;">
        <div style="min-width: 20%;">
            <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline"
                theme="light" :inline-collapsed="state.collapsed" :items="items"></a-menu>
        </div>

        <div style="left: 90px; width: 60%;">
123123

        </div>
    </div>

</template>



<style scoped></style>