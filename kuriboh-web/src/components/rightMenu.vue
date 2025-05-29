<script setup>
import { ref } from 'vue';
import { AccountBookFilled ,NotificationFilled,PieChartFilled,CustomerServiceFilled,ToolFilled,ContainerFilled,HddFilled,QuestionCircleFilled} from '@ant-design/icons-vue'
const tagColorList =[
    {color:"red",tagName:"公告",detail:""},
    {color:"darkblue",tagName:"",detail:""},
    {color:"",tagName:"",detail:""},
    {color:"",tagName:"",detail:""},
]


function  selectTag(index){
    const el = document.getElementById('tagInfo');
    console.log(el);
    el.style.backgroundColor=tagColorList[index].color
    el.classList.toggle('changeTab');

}

</script>


<template>


    <div class="Menu">
        <div   class="menuItem" @click="selectTag(0)" >
                <NotificationFilled style="margin-right: 13px; margin-left: 20px; color: darkblue;" />
                <text class="titleText"> 公告</text>
        </div>
     
        <div   class="menuItem" @click="selectTag(1)">
                <AccountBookFilled style="margin-right: 13px; margin-left: 20px; color: red;" />
                <text class="titleText"> 下单</text>
        </div>

        <div   class="menuItem" @click="selectTag(2)">
                <ToolFilled style="margin-right: 13px; margin-left: 20px; color: chocolate;" />
                <text class="titleText"> 服务</text>
        </div>

        <div   class="menuItem" @click="selectTag(3)">
       
                <PieChartFilled style="margin-right: 13px; margin-left: 20px; color: darkgreen;" />
                <text class="titleText"> 报表</text>
        </div>

        <div   class="menuItem" @click="selectTag(4)">
                <ContainerFilled style="margin-right: 13px; margin-left: 20px; color:brown; " />
                <text class="titleText"> 我的订单</text>
        </div>

        <div   class="menuItem">
                <HddFilled style="margin-right: 13px; margin-left: 20px; color: blueviolet;" />
                <text class="titleText"> 我的申请</text>
        </div>

        <div   class="menuItem">
                <QuestionCircleFilled style="margin-right: 13px; margin-left: 20px; color: blue;" />
                <text class="titleText"> 常见问题</text>
        </div>

        <div   class="menuItem">
                <CustomerServiceFilled style="margin-right: 13px; margin-left: 20px; " />
                <text class="titleText"> 联系我们</text>
        </div>
    </div>

</template>

<style scoped>
.Menu {
    box-shadow: rgba(161, 157, 194, 0.1) 0px 1px 1px 0px inset, rgba(66, 66, 219, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    width: 15%;
    height: 60%;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.titleText {
    color: #314188;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 15px;
}

.menuItem {
    transition: background-color 0.5s,color 0.5s;
    background-color: rgb(255, 254, 254);
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-self: start;
    align-items: center;
    border-radius: 7px;

}

.menuItem:hover {
    background-color: rgb(231, 231, 231);
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-self: start;
    align-items: center;
    border-radius: 7px;
}

.changeTab{
    transform: scale(1.2);
}
</style>