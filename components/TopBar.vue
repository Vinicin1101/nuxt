<template>
  <nav class="top-bar">
    <div class="menu">
      <button
        class="menu-button"
        v-on:click="
          menuView();
          menuBTn();
        "
      ></button>
    </div>
    <div class="logo">
      <router-link to="/" style="text-decoration: none; color: inherit">
        <h1>cronopédia.</h1>
      </router-link>
    </div>
    <div class="perfil">
      <section class="search">
        <input
          type="search"
          name="search-bar"
          id="search-bar-top"
          placeholder="Pesquise algo..."
        />
        <label for="search-bar" class="label-search"></label>
      </section>
      <button class="buttons btn-perfil">
        <i class="bx bxs-user-circle bx-sm"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    menuBTn() {
      const btn = document.querySelector("button.menu-button");
      btn.classList.contains("clicado")
        ? btn.classList.remove("clicado")
        : btn.classList.add("clicado");
    },

    menuView() {
      const primaryNav = document.querySelector("ul.primary-menu");
      var visi = primaryNav.getAttribute("data-visible");
      visi == "false"
        ? primaryNav.setAttribute("data-visible", "true")
        : primaryNav.setAttribute("data-visible", "false");
    },
  },
};
</script>

<style scoped>
@import "~/static/css/input.css";
@import "~/static/css/form.css";
@import "~/static/css/geral.css";
@import "~/static/css/layout.css";
@import "~/static/css/menu.css";
@import "~/static/css/elements.css";
@import "~/static/css/style.css";
</style>