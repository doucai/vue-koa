<template>
    <!--Hot Area-->
    <div>
        <div class="goods-info" v-for="item of goods">
            <div class="goods-image">
                <img v-lazy="item.image" width="90%" />
            </div>
            <div class="goods-name">{{item.name}}</div>
            <div class="goods-price">￥{{item.price | moneyFilter }}</div>
        </div>
    </div>
</template>

<script>
import {toMoney} from '@/filter/moneyFilter.js'
export default {
    props: {
        goods:Array
    },
    filters:{
        moneyFilter(money){
            return toMoney(money)
        }  
    },
   
}
</script>

<style scoped>
.goods-name{
        padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
    }
 
</style>
