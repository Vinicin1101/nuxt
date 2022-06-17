<template>
  <div class="card-article">
    <div class="img-article"></div>

    <article class="card-text">
      <h3>John Singer Sargent</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
        at urna, ornare nisl, commodo. Imperdiet imperdiet porttitor in sit
        velit feugiat
      </p>
      <!-- buttom o click -> goToArticle -->
      <router-link
        :to="`/artigos/${articleID}`"
        style="text-decoration: none; color: inherit"
      >
        <button class="primary icon"></button>
      </router-link>
    </article>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    random: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      articleID: this.random ? this.GerarID() : 0,
    };
  },
  methods: {
    GerarID: function () {
      return parseInt(Math.random() * 100000000);
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