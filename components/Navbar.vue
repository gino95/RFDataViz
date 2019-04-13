<template>
<div>
  <b-navbar type="dark" variant="dark">

    <b-navbar-brand to="/">Visualización de Tráfico</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item to="/">Inicio</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Radios" right>
        <b-dropdown-item
          v-for="(folder, index) in folders"
          :key="index"
          :to="'/radios/'+folder"
          >{{folder}}</b-dropdown-item>
      </b-nav-item-dropdown>

    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      folders: []
    }
  },
  created() {
      let uri = '/api/folders';
      axios.get(uri).then(response => {
        this.folders = response.data;
      });
  },
}
</script>

<style>

</style>
