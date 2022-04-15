<template>
 <div>
  
    <div class="container">
      <div class="navbar">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link :to="{ name: 'HomeComponent'}" class="nav-link"
              :class="[$route.name == 'HomeComponent' ? 'active' : '']"
            >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'CartComponent'}" class="nav-link"
             :class="[$route.name == 'CartComponent' ? 'active' : '']"
            >Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'AboutComponent'}" class="nav-link"
             :class="[$route.name == 'AboutComponent' ? 'active' : '']"
            >About</router-link>
          </li>
          
        </ul>
      </div>
        <!-- {{ $route.name }} -->
      <router-view></router-view>
    </div>
 </div>
</template>

<style lang="css">
  html, body{
    margin: 0px;
    padding: 0px;
    overflow-x: hidden ;
  }
  .nav-item a.nav-link{
    font-weight: bold;
    text-decoration: none;
    font-size: 20px;
  }
  .nav-item a.nav-link.active{
    font-weight: bold;
    text-decoration: none;
    font-size: 20px;
    background: red none repeat scroll 0% 0%;
    background-color: red;
    background-image: none;
    color: #fff;
    border-radius: 7px;
    --darkreader-inline-bgcolor: #cc0000;
    --darkreader-inline-bgimage: none;
    --darkreader-inline-color: #e8e6e3;
  }
</style>


