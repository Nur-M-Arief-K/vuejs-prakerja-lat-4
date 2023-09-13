<template>
  <ol class="container-xl list-group list-group-numbered mb-3">
    <ItemKegiatan
      v-for="(namaKegiatan, indexKegiatan) in daftarKegiatan"
      :key="indexKegiatan"
      :namaKegiatan="namaKegiatan"
      :indexKegiatan="indexKegiatan"
    />
  </ol>
</template>

<script>
import {mapState} from "vuex";

import ItemKegiatan from "./ItemKegiatan.vue";

export default {
  components: {
    ItemKegiatan,
  },
  computed: mapState({
    daftarKegiatan: (state) => state.daftarKegiatan,
  }),
};
</script>

<style scoped>
  .list-group {
    padding-right: 0!important;
  }
</style>