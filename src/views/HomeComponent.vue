<template>
    <div class="">
        <p>THis is Home componet</p>
        <ProductDescriptionDraw
            v-if="product"
            :product="product"
            :active="active.product_drawer"
            @close-product-drawer="onCloseProductDrawer"
        > </ProductDescriptionDraw>
        <div class="product-cart-container">
            <div class="row">
                
                <ProductSummaryCart
                v-for="(product, key) in items" :key="key"
                :product="product"
                @viewproduct="onViewProduct($event)"
                ></ProductSummaryCart>
              
            </div>
        </div>
    </div>
</template>

<script>
import Items from '../data/items.js'
import ProductSummaryCart from '../components/products/ProductSummaryCart.vue'
import ProductDescriptionDraw from '../components/products/ProductDescriptionDraw.vue'

export default {
    data(){
        return {
            items: Items,
            product:null,
            active:{
                product_drawer: false
            }
        }
    },
    components:{
        ProductSummaryCart,
        ProductDescriptionDraw
    },
    methods:{
        onViewProduct(event){
            this.product = event;
            this.active.product_drawer = true;
            console.log(this.product);
        },
        onCloseProductDrawer(){
            this.product = null,
            this.active.product_drawer = false;
        }
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