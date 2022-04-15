<template>
    <div class="col-md-4">
         <div class="card">
            <div class="card-body">
                <h3>{{product.name}}</h3>
                <h3 class="price">${{product.price}}</h3>
                <p class="description">{{description}}</p>
                <p class="text-muted">Category: {{product.category}}</p>
                <button class="btn btn-primary view-product-button"
                    @click.prevent="$emit('viewproduct',product)"
                >View Product</button>
            </div> 
        </div>
    </div>
   
</template>
<script>
export default {
    props:['product'],
    data(){
        return {

        }
    },
    computed:{
        description(){
            return this.product.description.substring(0,155)+'...';
        }
    }
}
</script>

<style scoped>
    .card{
    margin: 10px 0;
    box-shadow: 6px 5px gray;
    text-align: center;
    border: 2px solid #ddd;
    }
</style>