<template>
  <div class="list-group-item d-flex column-gap-3">
    <li
      ref="elNamaKegiatan"
      @blur="blurUbahNamaKegiatanHandler()"
      class="flex-fill"
    >
      {{ namaKegiatan }}
    </li>
    <button
      type="button"
      @click="hapusKegiatanHandler()"
      class="btn btn-danger"
    >
      Hapus
    </button>
    <button
      type="button"
      @click="ubahKegiatanHandler()"
      class="btn btn-primary"
    >
      Edit
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    namaKegiatan: {
      type: String,
      required: true,
      validator: (namaKegiatan) => {
        return namaKegiatan.length > 0;
      },
    },
    indexKegiatan: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      modeEdit: false,
      timeoutSimpanPerubahanNamaKegiatanOtomatis: null,
    };
  },
  methods: {
    ...mapActions(["hapusKegiatan", "ubahNamaKegiatan"]),
    hapusKegiatanHandler() {
      this.hapusKegiatan(this.indexKegiatan);
    },
    ubahKegiatanHandler() {
      const elNamaKegiatan = this.$refs.elNamaKegiatan;
      if (!this.modeEdit) {
        this.toggleModeEdit();
        elNamaKegiatan.focus();
      } else {
        clearTimeout(this.timeoutSimpanPerubahanNamaKegiatanOtomatis);
        this.simpanPerubahanNamaKegiatan();
        this.toggleModeEdit();
      }
    },
    blurUbahNamaKegiatanHandler() {
      this.timeoutSimpanPerubahanNamaKegiatanOtomatis = setTimeout(() => {
        this.simpanPerubahanNamaKegiatan();
        this.toggleModeEdit();
      }, 100);
    },
    simpanPerubahanNamaKegiatan() {
      const elNamaKegiatan = this.$refs.elNamaKegiatan;
      const perubahanNamaKegiatan = elNamaKegiatan.innerText.trim();
      const namaKegiatanLama = this.namaKegiatan;

      if (perubahanNamaKegiatan == namaKegiatanLama) {
        return;
      } else {
        this.ubahNamaKegiatan({
          indexKegiatan: this.indexKegiatan,
          perubahanNamaKegiatan: perubahanNamaKegiatan,
        });
      }
    },
    toggleModeEdit() {
      const elNamaKegiatan = this.$refs.elNamaKegiatan;
      this.modeEdit = !this.modeEdit;
      this.modeEdit
        ? elNamaKegiatan.setAttribute("contenteditable", true)
        : elNamaKegiatan.removeAttribute("contenteditable");
    },
  },
  unmounted() {
    clearInterval(this.timeoutSimpanPerubahanNamaKegiatanOtomatis);
  }
};
</script>