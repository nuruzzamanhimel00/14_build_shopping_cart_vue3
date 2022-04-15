<template>
    <div class="col-md-4">
         <div class="card">
            <div class="card-body">
                <h3>{{product.name}}</h3>
                <h3 class="price">${{product.price}}</h3>
                <p class="description">{{description}}</p>
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