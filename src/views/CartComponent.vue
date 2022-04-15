<template>
    <div>
        <!-- <div class="cartItems" v-for="(value, key) in items" :key="key">
            {{ value.name }}
        </div> -->
        <div class="row">
                 <CartItemCart v-for="(value, key) in items" :key="key" 
                    :product='value'
                >
                </CartItemCart>
        </div>
   

        <!-- {{ items }} -->
    </div>
</template>

<script>
import CartItemCart from '../components/carts/CartItemCart.vue'
export default {
    data(){
        return {

        }
    },
    computed:{
        items(){
            return this.$store.getters.cartItems;
        }
    },
    components:{
        CartItemCart
    }
}
</script>