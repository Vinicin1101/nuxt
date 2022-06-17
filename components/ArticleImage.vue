<template>
  <section class="article-image">
    <!-- <img :src="`/static/img/artigos/${articleID}/${articleID}.jpg`" /> -->

    <div class="article-image-container">
      <img :src="`https://picsum.photos/id/${randomIMG()}/450/450`" alt="" />
    </div>
    <span class="descricao"> {{ article.descricao }}</span>
  </section>
</template>

<style scoped>
section.article-image {
  margin: 4em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
div.article-image-container {
  background-color: #000;
  width: calc(450px * 0.8);
  height: calc(450px * 0.8);
}
img {
  width: 100%;
}

section.article-image span.descricao {
  font-family: "Spectral";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>

<script>
export default {
  name: "ArticleImage",
  props: {
    ArticleID: {
      type: Number,
      default: null,
    },
    index: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      article: {
        ID: this.ArticleID,
        descricao: "Descrição da imagem " + this.index,
      },
    };
  },
  methods: {
    randomIMG: function () {
      return parseInt(Math.random() * 100);
    },
  },
};
</script>