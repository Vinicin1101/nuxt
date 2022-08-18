<template>
  <nav class="top-bar">
    <div class="menu">
      <button class="menu-button" v-on:click="
  menuView();
menuBTn();
      "></button>
    </div>
    <div class="logo">
      <router-link to="/" style="text-decoration: none; color: inherit">
        <h1>cronopédia.</h1>
      </router-link>
    </div>
    <div class="perfil">
      <section class="search">
        <input type="search" name="search-bar" id="search-bar-top" placeholder="Pesquise algo..."
          v-on:keyup.enter="search()" />
        <label for="search-bar" class="label-search"></label>

        <section class="search-results-dropdown"></section>
      </section>
      <button class="buttons btn-perfil">
        <i class="bx bxs-user-circle bx-sm"></i>
      </button>
    </div>
  </nav>
</template>

<script>
import search_API from "@/server-middleware/search.js";

export default {
  data() {
    return {
      results: false,
    };
  },
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

    search() {
      const search = document.querySelector(".search");
      const result_dropdown = document.querySelector(
        ".search-results-dropdown"
      );
      const q = search.querySelector("input").value;

      // ajax para pesquisa
      search_API.get(q).then((response) => {
        if (response.length > 0) {
          response.forEach((element) => {
            criarLink(element, element["_id"]);
          });

          mostrarResultado();
        } else {
          result_dropdown.innerHTML = "<p>Nenhum resultado encontrado</p>";
        }

        this.searchView();
      });
    },

    criarLink(conteudo, linkTo) {
      var link = document.createElement('a');
      link.innerText = `<span class="link_title"> ${conteudo.title} </span>`;
      link.setAttribute('href', linkTo)
      return link
    },

    mostrarResultado(speed) {
      const drop = document.querySelector('section.search-results-dropdown');

      var i = 0;
      const inserirLink = setInterval(function () {
        i <= lista.length - 1 ? (drop.append(lista[i]), i++) : clearInterval(inserirLink);
      }, speed != null ? speed : 75);
    }
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