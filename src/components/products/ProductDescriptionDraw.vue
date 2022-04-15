<template>
    <div>
        <div class="drawer_background" :class="{show:active}"  @click="$emit('close-product-drawer')" />
            <!-- <div class="drawer" :class="{show:active}"> -->
            <div class="drawer" :class="{show:active}" >
                <div class="draw_closer" @click="$emit('close-product-drawer')" >
                    X
                </div>
                <div v-if="product" class="product_details">
                    <h3 class="text-center">{{product.name}}</h3>
                    <p class="description">{{ product.description}}</p>
                    <h4 class="text-center">${{product.price}}</h4>
                    <div class="product_total" v-if="product_total != null">
                        <h3>In Cart</h3>
                        <h1>{{product_total}}</h1>
                    </div>
                    <div class="button_container">
                        <button class="remove" @click.prevent="removeCart()" >-</button>
                        <button class="add" @click.prevent="addToCart()">+</button>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
export default {
    props:['product','active'],
    data(){
        return {}
    },
    computed:{
        product_total(){
            return this.$store.getters.productQuantity(this.product);
        },
        
    },
    methods:{
        addToCart(){
            this.$store.commit('addCart',this.product);
        },
        removeCart(){
            this.$store.commit('removeCart',this.product)
        }
    }
}
</script>
<style scoped>
    .drawer_background{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 99999;
        background: rgba(40, 39, 39, 0.49) none repeat scroll 0% 0%;
        background: #2827277d;
        background-color: rgba(40, 39, 39, 0.49);
        background-image: none;
        display: none;
        width: 100%;
        height: 100vh;
        transition: display .4s;
    }
    .drawer_background.show{
        display: block;
    }
    .drawer{
        width: 90vw;
        background: #fff;
        background-color: rgb(255, 255, 255);
        background-image: none;
        height: 100vh;
        position: fixed;
        top: 0;
        left: -105vw;
        z-index: 9999999;
        transition: left .5s;
        overflow-y: scroll;
    }
    .drawer.show{
        left:0;
    }
    .draw_closer{
        float: right;
        font-size: 20px;
        border: 1px solid blue;
        padding: 7px;
        color: blue !important;
        cursor: pointer;
        cursor: pointer;
    }
    .draw_closer:hover{
        color:#fff !important;
        background: red;
    }
    .product_details{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .product_details .description{
        padding: 20px;
        line-height: 25px;
    }
    .product_total{
        text-align: center;
    }
    .button_container{
        text-align: center;
    }
    .button_container button{
        width: 27px;
        padding: 3px;
        font-size: 15px;
        margin-right: 7px;
        border-radius: 5px;
        background: blue none repeat scroll 0% 0%;
        background-color: blue;
        background-image: none;
        color: #fff;
        cursor: pointer;

    }

    @media(min-width: 500px){
        .drawer{
            width:450px;
        }
    }
</style>