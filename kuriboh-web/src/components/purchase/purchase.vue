<script setup>

import { current, state, orgType, res, otherList, materialList, deviceList, reagentList, ShoppingCarNum, showProductList, specIndex, value, productTypeList } from './purchase'
import { onMounted } from 'vue';
import {  watch } from 'vue';
import { useStore } from 'vuex';
import {  ShoppingCartOutlined } from '@ant-design/icons-vue';
import { router } from '../../config/router';
const store = useStore();




watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    },
);

//Onload Dom全部渲染完成时自动执行
onMounted(() => {
    //获取用户信息


    // 处理res数组，加入必要的属性
    res.forEach((item, index) => {

        item.productNum = 1
        item.selectSpce = ''
        item.selectImg = ''
        item.selectID = 0

    })



    //由res分类出试剂，配套，耗材三个数组
    res.forEach((item) => {
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

    //默认展示试剂数组
    showProductList.value = reagentList.value

})


//选择用户
const toggleCollapsed = () => {
    state.collapsed = !state.collapsed;
    state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};



const onSearch = searchValue => {

};


//改变产品列表的类型
const selectedProductType = ({ item, key }) => {

    if (key === 0) {
        showProductList.value = reagentList.value
    }
    if (key === 1) {
        showProductList.value = deviceList.value
    }
    if (key === 2) {
        showProductList.value = materialList.value
    }
    if (key === 3) {
        showProductList.value = otherList.value
    }
}

//把加入购物车
const addShopping = (item) => {

    console.log(item);
    
    ShoppingCarNum.value = ShoppingCarNum.value + 1

    //定义加入购物车列表的item
    const shoppingCarItem = {
            ID:0,       //商品ID
            productName: item.product_name,
            img:item,      //图片地址
            priceSun:0,  //总价
            spec:0,      //规格
            num:item.productNum,       //数量
            userName:""  //下单用户
    }



console.log(shoppingCarItem);

store.commit('addshoppingCat',shoppingCarItem );


}



//改变产品的规格
const changeSpec =({key}) =>{

    console.log(key);
    specIndex.value=key


    
    
}

//跳转到购物车
const goToShoppingCar = () =>{
    router.push('/shoppingCar')
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

    <div class="productList">
        <div class="rightMenu">
            <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline"
                theme="light" :inline-collapsed="state.collapsed" :items="orgType"></a-menu>
        </div>

        <div class="scroll">
            <div v-for="(item, index) in showProductList" style="width: 95%;   margin-top: 5%;"
                class="flex-row-start-center">


                <div class="productInfo">
                    <a-badge-ribbon text="临床" color="red">
                        <a-row>
                            <a-col :span="6">
                                <a-image :width="90" style="border-radius: 8px; margin-top: 5% "
                                    :src="item.products[specIndex].image" />
                            </a-col>
                            <a-col :span="11" class="titleText" style="margin-top: 3%;">{{ item.product_name }} </a-col>

                        </a-row>
                        <a-row style="margin-top: 10px;">
                            <a-col :span="8" class="productInfoText"> 货号： <text style="color:black;">{{
                                item.product_no }}</text> </a-col>
                            <a-col :span="8" class="productInfoText">规格：
                                <a-dropdown>
                                    <a @click.prevent class="titleText">
                                        <text style="color:black;">{{ item.products[specIndex].spec }} </text>
                                        <CaretDownOutlined style="color: white; margin-right: 20px;" />
                                        <DownOutlined />
                                    </a>
                                    <template #overlay>
                                        <a-menu @click="changeSpec">
                                            <a-menu-item :key="index" v-for="(specItem, index) in item.products" >{{specItem.spec }}</a-menu-item>


                                        </a-menu>
                                    </template>
                                </a-dropdown>
                            </a-col>
                            <a-col :span="8" class="PriceText">￥{{ item.products[specIndex].price }}</a-col>
                        </a-row>
                        <a-col :span="24" style="margin-left: 52px; " align="start" class="productInfoText">详情：<text
                                style="color:black;">{{item.description }}</text> </a-col>


                        <a-col :span="24" style="margin:10px 0 20px 52px; " class="productInfoText" align="start">数量：
                            <a-input-number v-model:value="showProductList[index].productNum" size="large" :min="1" />
                        </a-col>

                    </a-badge-ribbon>
                </div>

                <div class="iconBox"  @click="addShopping(showProductList[index])">

                    <i class="iconfont shhoppingIcon">&#xe7ef;</i>
                    <text style="font-size: 10px;top: 5px;">加入购物车</text>
                </div>


            </div>
        </div>

    </div>

    <a-float-button style="margin-right: 35%;" :badge="{ count: ShoppingCarNum, overflowCount: 999 }" @click=goToShoppingCar()>

    </a-float-button>
</template>



<style scoped>
.scroll {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    overflow-y: scroll
}

.productInfo {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 100%;
    height: 110%;
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

.rightMenu {
    min-width: 17%;
    margin-top: 3%;
    margin-right: 15px;
}

.productList {
    width: 100%;
    height: 100%;
    right: 150px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start
}

.shhoppingIcon {
    color: #000000;
    transition: transform 0.3s ease;
}

.shhoppingIcon:hover {
    color: rgb(255, 255, 255);
    transform: scale(1.1);
    cursor: pointer;
}


.iconBox {
    width: 80px;
    height: 80px;
    display: flex;
    margin-left: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

.iconBox:hover {
    width: 80px;
    height: 80px;
    display: flex;
    margin-left: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgb(128, 128, 129);
    transform: scale(1.1);
    cursor: pointer;
}
</style>