import { defineStore } from "pinia";
// import { LocalStorage } from "quasar";

export const useAuthStore = defineStore("counter", {
  state: () => ({
    API_URL: process.env.API_URL,
    estaLogeado: false,
    url: window.location.href,
    token: "",
    usuario: "",
    codigo: 0,
    acceso: false,
    darkMode: false,
  }),

  getters: {
    getURLApi(state) {
      return state.API_URL;
    },
    getHttpHeaders(state) {
      return {
        "Content-Type": "application/json",
        token: state.token,
        usucodigo: state.codigo,
      };
    },
    getUsuario(state) {
      return state.usuario;
    },
    getCodigo(state) {
      return state.codigo;
    },
  },

  actions: {
    setDarkMode(dark: boolean) {
      this.darkMode = dark;
    },
    iniciarSesion(
      token: string,
      usuario: string,
      codigo: number,
      dark: boolean
    ) {
      this.estaLogeado = true;
      this.token = token;
      this.usuario = usuario;
      this.codigo = codigo;
      this.darkMode = dark;
      // LocalStorage.set("session", {
      //   estaLogeado: this.estaLogeado,
      //   currentURL: this.url,
      //   token: this.token,
      //   usuario: this.usuario,
      //   codigo: this.codigo,
      //   dark: this.dark,
      // });
    },
    actualizarUsuario(newUsuario: string, newCodigo: number) {
      this.usuario = newUsuario;
      this.codigo = newCodigo;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
