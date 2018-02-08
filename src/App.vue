<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto in fotos" :key="foto.id">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      titulo: 'Alurapic',
      fotos: [
        {
          id: 1,
          url: 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg',
          titulo: 'cachorro'
        },
        {
          id: 2,
          url: 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg',
          titulo: 'cachorrão'
        }
      ]
    }
  }
}
</script>

<style>

</style>
