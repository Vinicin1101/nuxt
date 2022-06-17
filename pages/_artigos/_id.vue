<template>
  <section class="body">
    <TopBar></TopBar>
    <MobileNav></MobileNav>
    <PrimaryMenu></PrimaryMenu>

    <section class="article-view" :id="`${articleID}`">
      <section class="imagem">
        <img src="https://picsum.photos/id/237/300/300" alt="" />
        <description> descrição </description>
      </section>
      <section class="conteudo">
        <h1>Titulo</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi
          justo egestas vitae aliquam. Donec sed sagittis massa venenatis, nunc
          non nunc sed. Elementum, eu enim, maecenas rhoncus adipiscing integer
          cursus cursus. Nulla pellentesque arcu aliquet massa consequat nulla
          at aliquam. Urna ut aliquam etiam posuere risus, tortor enim. Nec, ac
          elit in euismod vitae, pellentesque et. Libero mauris aenean
          ullamcorper varius eget mi eget justo. Nunc habitasse volutpat nibh
          sed purus massa. Malesuada egestas diam, lacinia a, enim non neque
          justo elit. Habitasse pellentesque risus, libero egestas egestas hac
          in euismod nisi. Montes, enim faucibus neque leo ultrices nulla
          vulputate tempus. Hac sed et scelerisque nisi, gravida. Quis at
          pharetra semper sem etiam justo ac purus enim. Accumsan ut blandit
          lectus ultricies ante molestie felis. Pretium sed vitae pretium mi
          magna non lacus. Urna, dolor in fermentum bibendum. In volutpat
          libero, id eget mattis malesuada habitasse tellus. Purus mattis
          pharetra justo risus luctus dolor amet ut. Nec amet, netus vitae
          tristique. Arcu dolor ut amet, nunc. Purus commodo molestie nunc,
          consequat bibendum. Aliquam vitae sit nunc, tortor imperdiet. Cursus
          tristique et sollicitudin et faucibus risus risus at. Sagittis purus
          feugiat porta pharetra gravida ornare proin sagittis. Bibendum amet,
          scelerisque malesuada pharetra. Ultricies non maecenas viverra
          sagittis sit dictum aliquam. Nibh faucibus tellus adipiscing pharetra,
          id morbi at quis bibendum. Aliquet venenatis quisque integer amet
          neque tincidunt scelerisque amet, neque. Ut risus ac id massa, purus
          quam sed. Erat fermentum suspendisse suscipit mi metus, platea
          volutpat. Varius at aliquam tortor vitae tellus venenatis. At urna
          lorem lorem vitae. Faucibus urna, leo venenatis a lorem viverra a.
          Cras semper vitae cras consequat nibh eget lobortis congue lacus. Sed
          habitant sit fames erat.
        </p>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "artigo",
  asyncData({ params }) {
    return { articleID: params.id };
  },
};

import "~/static/css/article.css";
</script>

<style>
</style>