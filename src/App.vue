<template>
  <h1 class="container-xxl fs-1 text-success">To Do List</h1>
  <DaftarKegiatan />
  <FormulirTambahKegiatan />
</template>

<script>
import FormulirTambahKegiatan from "./components/FormulirTambahKegiatan.vue";
import DaftarKegiatan from "./components/DaftarKegiatan.vue";

export default {
  name: "App",
  components: {
    FormulirTambahKegiatan,
    DaftarKegiatan,
  },
};
</script>