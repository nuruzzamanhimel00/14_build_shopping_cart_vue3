<template>
 <div>
    <div class="navbar">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link :to="{ name: 'HomeComponent'}" class="nav-link">Home</router-link>
        </li>
         <li class="nav-item">
          <router-link :to="{ name: 'AboutComponent'}" class="nav-link">About</router-link>
        </li>
      </ul>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
 </div>
</template>


