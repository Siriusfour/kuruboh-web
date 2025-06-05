<script setup>

import { reactive, ref, watch, h } from 'vue';
import { onMounted , computed } from 'vue';
// import * as Shopping from './shopping'
import {items,showProductList,openKeys,selectedKeys} from './shopping'
import { useStore } from 'vuex';

const store = useStore();

//切换公司
const handleClick = e => {
    
};

const shoppingCatList = computed(() => store.state.shoppingCatList);


watch(openKeys, val => {
    console.log('openKeys', val);
});




onMounted(() => {
console.log(store.state.shoppingCatList.value);


    const tagInfo={
        tagDetail:'购物车用于暂存等待结算的商品',
        tagColor:"red",
        tagName:'购物车'
    }
    store.commit('changeTagInfo' , tagInfo)


})




</script>

<template>
    <div class="flex-column-start-center">
        <text class="titleText">下单公司</text>
        <a-menu id="dddddd" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px" mode="inline" :items="items" @click="handleClick"></a-menu>
    </div>

    <div class="scroll">
            <div v-for="(item, index) in shoppingCatList" style="width: 95%;   margin-top: 5%;"
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


</template>
