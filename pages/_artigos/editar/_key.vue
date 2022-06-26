<template>
  <section class="body">
    <TopBar></TopBar>
    <MobileChange></MobileChange>
    <PrimaryMenu></PrimaryMenu>

    <section class="article-view" :id="`${article.ID}`">
      <section class="article-content">
        <editor
          api-key="u19n8hdzwus3tpuaj01ao7t5z5jtwdvxyaouzt77iy5hn75j"
          :init="{
            height: 700,
            skin: 'naked',
            icons: 'thin',
            plugins: [
              'a11ychecker',
              'advlist',
              'advcode',
              'advtable',
              'autolink',
              'checklist',
              'export',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'powerpaste',
              'fullscreen',
              'formatpainter',
              'media',
              'table',
              'help',
              'wordcount',
            ],
            // Contexto (click no botão direito)
            contextmenu: 'link image table',

            // Contexto (seleção de conteudo)
            setup: (editor) => {
              editor.ui.registry.addContextToolbar('textselection', {
                predicate: (node) => !editor.selection.isCollapsed(),
                items: 'bold italic | blockquote',
                position: 'selection',
                scope: 'node',
              });
            },

            // Barra de Ferramentas
            toolbar:
              'undo redo fontselect fontsizeselect formatting aligns \
                list  outdent indent removeformat  a11ycheck  cancel save',

            // Grupos de ferramentas
            toolbar_groups: {
              formatting: {
                icon: 'format',
                tooltip: 'Format',
                items: 'bold italic underline | superscript subscript',
              },
              aligns: {
                icon: 'align-center',
                tooltip: 'Align',
                items: 'alignleft aligncenter alignright alignjustify',
              },
              list: {
                icon: 'unordered-list',
                tooltip: 'List',
                items: 'bullist numlist checklist',
              },
            },

            // Menu
            // menubar: 'edit insert format table tools help',
            menubar: false,

            // Mobile
            mobile: {
              // Contexto (seleção de conteudo)
              setup: (editor) => {
                editor.ui.registry.addContextToolbar('textselection', {
                  predicate: (node) => !editor.selection.isCollapsed(),
                  items: 'bold italic | blockquote',
                  position: 'selection',
                  scope: 'node',
                });
              },
            },
          }"
          :initial-value="`${article.conteudo}`"
          output-format="html"
        />
      </section>
      <section class="article-imagens">
        <ArticleImage
          :key="i"
          v-for="i in article.images"
          :index="i"
        ></ArticleImage>
      </section>
    </section>
  </section>
</template>

<script>
import tinyEditor from "@tinymce/tinymce-vue";
import MobileChange from "~/components/MobileChange.vue";

export default {
  name: "EdicaoArtigo",
  components: {
    editor: tinyEditor,
    MobileChange,
  },
  head() {
    return {
      title: "Editando Artigo",
    };
  },
  asyncData({ params }) {
    return {
      article: {
        ID: params.key,
        // vetor com comprimento aleatório de 0 a 5
        images: Array.from({ length: Math.floor(Math.random() * 5) }, () =>
          Math.floor(Math.random() * 5)
        ),
        conteudo: `<h1>Titulo</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi
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
          pharetra justo risus luctus dolor <b>amet</b> ut. Nec amet, netus vitae
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
          habitant sit fames erat.</p>`,
      },
    };
  },
};
</script>

<style>
@import "~/static/css/article.css";
</style>