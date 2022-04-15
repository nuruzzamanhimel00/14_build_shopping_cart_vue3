<template>
    <div class="">
        <p>THis is Home componet</p>
        <div class="product-cart-container">
            <div class="row">
                
                    <ProductSummaryCart
                v-for="(product, key) in items" :key="key"
                :product="product"
                ></ProductSummaryCart>
              
            </div>
        </div>
    </div>
</template>

<script>
import Items from '../data/items.js'
import ProductSummaryCart from '../components/products/ProductSummaryCart.vue'

export default {
    data(){
        return {
            items: Items
        }
    },
    components:{
        ProductSummaryCart
    }
}
</script>
<style scoped>
    .product-cart-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>