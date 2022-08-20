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
          v-on:keyup.enter="search()"
        />
        <label for="search-bar" class="label-search"></label>

        <!-- remover a classe visible quando perfer o foco -->
        <section class="search-results-dropdown" @blur="esconder()"></section>
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

    criarLink(conteudo) {
      const link = document.createElement("div");
      link.setAttribute("class", "article-link");

      link.innerHTML = `
      <a href="${conteudo["_id"]}"><p class="link-title">${
        conteudo.title
      }</p><p class="link-description">${conteudo.resume.substring(
        0,
        90
      )}...</p> </a>
      `;

      return link;
    },

    mostrarResultado(speed, lista) {
      const drop = document.querySelector("section.search-results-dropdown");
      drop.innerHTML = "";
      drop.classList.add("visible");

      var i = 0;
      const inserirLink = setInterval(
        function () {
          i <= lista.length - 1
            ? (drop.append(lista[i]), i++)
            : clearInterval(inserirLink);
        },
        speed != null ? speed : 75
      );
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
          let lista = [];
          response.forEach((element) => {
            lista.push(this.criarLink(element));
          });

          this.mostrarResultado(null, lista);
        } else {
          result_dropdown.innerHTML = "<p>Nenhum resultado encontrado</p>";
        }
      });
    },

    esconder() {
      const drop = document.querySelector("section.search-results-dropdown");
      drop.classList.remove("visible");
    },
  },
};
</script>

<style scoped>
@import "~/static/css/form.css";
@import "~/static/css/geral.css";
@import "~/static/css/layout.css";
@import "~/static/css/menu.css";
@import "~/static/css/elements.css";
</style>

<style>
@import "~/static/css/top.css";
@import "~/static/css/input.css";
</style>