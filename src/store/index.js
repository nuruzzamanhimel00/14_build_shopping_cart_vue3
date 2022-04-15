import { createStore } from 'vuex'

function updateLocalStorate(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}


const store = createStore({
    modules: {
      
    },
    state : {
        carts:[],
    },
    getters:{
        productQuantity: state => product => {
            let item = state.carts.find(cart => cart.id == product.id );
            
            if(item){
                // console.log('if');
                return item.quantity;
            }else{
                // console.log('else');
                return null;
            }
        },
        cartItems:state =>{
            return state.carts;
        }
    },
    mutations: {
       addCart(state, product){
           let item = state.carts.find( cart => cart.id == product.id );
           if( item ){
            item.quantity++;
           }else{
               state.carts.push({...product, quantity: 1});
           }

           updateLocalStorate(state.carts);
       },
       removeCart(state, product){
            let item = state.carts.find( cart => cart.id == product.id );
            if( item ){
                if(item.quantity > 1){
                    item.quantity--;
                }else{
                    // product quantiry zero hle oi product card teke remove hye jabe
                    state.carts = state.carts.filter( cart => cart.id != product.id );
                }
            
            }
            updateLocalStorate(state.carts);
        },
        updateCartFromLocalstorage(state){
            const cart = localStorage.getItem('cart');
            if(cart){
                state.carts = JSON.parse(cart);
            }
        }
    },
    actions:{

    }
  });
export default store;