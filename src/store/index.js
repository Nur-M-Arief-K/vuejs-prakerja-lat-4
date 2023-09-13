import { createStore } from "vuex"

export default createStore({
  state() {
    return {
      daftarKegiatan: [],
    }
  },
  getters: {
  },
  mutations: {
    perbaruiDaftarKegiatan(state, daftarKegiatanBaru) {
      state.daftarKegiatan = daftarKegiatanBaru;
    }
  },
  actions: {
    tambahKegiatan({ state, commit }, kegiatanBaru) {
      const namaKegiatanBaruTidakKosong = kegiatanBaru.trim().length > 0;
      if (namaKegiatanBaruTidakKosong) {
        const daftarKegiatanLama = [...state.daftarKegiatan];
        const daftarKegiatanBaru = [...daftarKegiatanLama];
        daftarKegiatanBaru.push(kegiatanBaru);
        commit("perbaruiDaftarKegiatan", daftarKegiatanBaru);
      }
    },
    hapusKegiatan({ state, commit }, indexKegiatan) {
      const daftarKegiatanLama = [...state.daftarKegiatan];
      daftarKegiatanLama.splice(indexKegiatan, 1);

      const daftarKegiatanBaru = [...daftarKegiatanLama];
      commit("perbaruiDaftarKegiatan", daftarKegiatanBaru);
    },
    ubahNamaKegiatan({ state, dispatch, commit }, {indexKegiatan, perubahanNamaKegiatan}) {
      const trimmedPerubahanNamaKegiatan = perubahanNamaKegiatan.trim();
      const namaKegiatanBaruTidakKosong = trimmedPerubahanNamaKegiatan.length > 0;
      if(namaKegiatanBaruTidakKosong) {
        const daftarKegiatanLama = [...state.daftarKegiatan];
        const daftarKegiatanBaru = [...daftarKegiatanLama];
        daftarKegiatanBaru[indexKegiatan] = trimmedPerubahanNamaKegiatan;
        commit("perbaruiDaftarKegiatan", daftarKegiatanBaru);
      } else {
        dispatch('hapusKegiatan', indexKegiatan);
      }
    }
  }
})
