<template>
    <nav>
      <ul>       
          <li v-for="route in routes" :key="route.id">
            <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>
      </ul>
    </nav>  
</template>

<script>
export default {
  props: ['routes']
}
</script>

<style>

</style>
