<template>
  <form @submit.prevent="tambahKegiatanHandler()" class="container-xl d-flex column-gap-3">
    <label for="namaKegiatan" hidden>Nama Kegiatan</label>
    <input type="text" id="namaKegiatan" class="flex-fill" v-model.trim="kegiatan">
    <button type="submit" class="btn btn-success">Tambahkan</button>
  </form>  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      kegiatan: ''
    }
  },
  methods: {
    ...mapActions([
      'tambahKegiatan'
    ]),
    tambahKegiatanHandler() {
      const namaKegiatanBaru = this.kegiatan.trim();
      namaKegiatanBaru.length > 0 && this.tambahKegiatan(namaKegiatanBaru);
      this.kegiatan = ''
    }
  },
}
</script>