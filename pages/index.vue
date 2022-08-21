

<template>
  <!--
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Spectral:ital,wght@0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
  -->

  <section class="body" @click="esconder()">
    <TopBar></TopBar>
    <MobileNav></MobileNav>
    <PrimaryMenu></PrimaryMenu>
    <section class="geral">
      <section class="home">
        <section class="init">
          <h1>Explore novos temas.</h1>
          <p>Centenas de artigos te esperam</p>
          <form action="">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Descubra algo novo..."
            />
            <button type="submit" id="search-submit"></button>
          </form>
        </section>

        <div class="img"></div>
      </section>

      <section class="articles">
        <section class="article day">
          <h2>Artigo do Dia</h2>
          <Card :random="false"></Card>
        </section>

        <section class="article day">
          <h2>Explorar Artigos</h2>
          <Card></Card>
          <Card></Card>
        </section>
      </section>
    </section>
  </section>
</template>


<style>
</style>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: "Explore novos temas.",
    };
  },
  methods: {
    menuBTn() {
      const btn = document.querySelector("button.menu-button");
      btn.classList.contains("clicado")
        ? btn.classList.remove("clicado")
        : btn.classList.add("clicado");
    },

    // esconder o menu quando clicar fora dele
    esconder() {
      const primaryNav = document.querySelector(
        "section.search-results-dropdown"
      );
      var visi = primaryNav.getAttribute("data-visible");
      visi == "true"
        ? primaryNav.setAttribute("data-visible", "false")
        : primaryNav.setAttribute("data-visible", "true");
    },
  },
  components: { TopBar, MobileNav, Card, PrimaryMenu },
};

import TopBar from "~/components/TopBar.vue";
import MobileNav from "~/components/MobileNav.vue";
import Card from "~/components/Card.vue";
import PrimaryMenu from "~/components/PrimaryMenu.vue";
</script>

