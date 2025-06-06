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

console.log(shoppingCatList.value);

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
    <div class="flex-row-start-start" style="width: 100%; height: 100%;">

   
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
                                    :src="item.img" />
                            </a-col>
                            <a-col :span="11" class="titleText" style="margin-top: 3%;">{{ item.productName }} </a-col>
                            <a-col :span="11" class="titleText" style="margin-top: 3%;">  <a-radio v-model:checked="checked">Radio</a-radio> </a-col>
                        </a-row>
                        <a-row style="margin-top: 10px;">
                            <a-col :span="8" class="productInfoText"> 货号： <text style="color:black;">00000</text> </a-col>
                            <a-col :span="8" class="productInfoText">规格： <text style="color:black;">{{item.spec}}</text></a-col>
                            <a-col :span="8" class="PriceText">￥{{ item.priceSun }}</a-col>
                        </a-row>

                        <a-col :span="24" style="margin:10px 0 20px 52px; " class="productInfoText" align="start">数量：
                            <a-input-number v-model:value="item.num" size="large" :min="1" />
                        </a-col>

                    </a-badge-ribbon>
                </div>

                <div class="iconBox"  @click="addShopping(showProductList[index])">

                    <i class="iconfont shhoppingIcon">&#xe7ec;</i>
                    <text style="font-size: 10px;top: 5px;">删除</text>
                </div>


            </div>
        </div>

    </div>
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
    background-color: rgb(218, 23, 23);
    transform: scale(1.1);
    cursor: pointer;
}

</style>