<template>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-tit">
                        <h1> Product name: {{product.name}}</h1>
                    </div>
                    <div class="card-body">
                        <h2>Product Quantiry:  {{ product.quantity }} </h2>
                        <h3>Product Price: ${{ product.price }} </h3>
                        <h4>Product Category: {{ product.category }} </h4>
                        <h5>Product description: {{ product.description }} </h5>
                        <b>Total Price: <h1><i> ${{ total_price }}</i></h1> </b>
                    </div>
                </div>
            </div>
    
</template>

<script>
export default {
    data(){
        return {}
    },
    props:['product'],
    computed:{
        total_price(){
            return this.product.quantity * this.product.price
        }
    }
}
</script>