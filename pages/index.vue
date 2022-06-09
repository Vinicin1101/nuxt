

<template>
  <section class="body">
    <TopBar />

    <section class="geral">
      <section class="home">
        <section class="init"></section>

        <div class="img"></div>
      </section>

      <section class="articles">
        <Nuxt-link :to="`/artigos/${GerarID()}`">
          <section class="article day">
            <h2>Artigo do dia</h2>
            <div class="card-article"></div>
          </section>
        </Nuxt-link>

        <Nuxt-link :to="`/artigos/${GerarID()}`">
          <section class="article day">
            <h2>Artigo do dia</h2>
            <div class="card-article"></div>
          </section>
        </Nuxt-link>
      </section>
    </section>
  </section>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'


export default {
  name: "IndexPage",
  methods:{
    GerarID: function (){
      return parseInt(Math.random()*100000000);
    }
  }
};
</script>


<style>
.geral {
  border: 2px solid purple;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
}

.home,
.articles {
  border: 2px solid red;
  box-sizing: border-box;
}

.home {
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15em 1.5em;
  padding-top: 20em;
}

.home * {
  height: 25em;
  width: 50%;
}

.init {
  background: grey;
}

.img {
  width: 20em;
  background: black;
}

.articles {
  padding: 1.5em;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2.5em;
}

.article {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  background-color: grey;
}

.card-article {
  width: 35em;
  aspect-ratio: 1/0.5;
  background-color: black;
}

@media (max-width: 800px) {
  .img {
    display: none;
  }

  .init {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .article {
    width: 100%;
  }
  .card-article {
    /*  Adicionar clamp depois */
    width: 100%;
  }
}
</style>
