<template>
  <section class="body">
    <TopBar />

    <section class="geral">
      <section class="imagem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6i29mlctWXgW7c6eZ0QAoBoPk6Z9OyrjW5WvVjU-TZTsF0FX9C3PhJdv_MH-zrN1so0k&usqp=CAU"
        />
        <p>Descrição</p>
      </section>

      <section class="conteudo">
        <h2 class="editor" id="titulo">Titulo</h2>
        <editor
          api-key="no-api-key"
          :init="{
              height: 500,
              menubar: false,
              plugins: ['a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
            ],
            toolbar:
                'undo redo | casechange blocks | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlst checklist outdent indent | removeformat | a11ycheck code table help'
            }"
            initial-value="Welcome to TinyMCE Vue"
        />
      </section>
    </section>
  </section>
</template>

<style scoped>
.geral {
  display: flex;
  flex-direction: row;
}
.geral .imagem {
  width: 40vw;
  height: 100vh;

  border: 2px solid rgb(133, 241, 255);
  background-color: rgba(0, 0, 0, 0.192);

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.imagem img {
  width: 60%;
}

.geral .conteudo {
  width: 60vw;
  height: 100vh;

  border: 2px solid rgb(133, 255, 133);
  background-color: rgba(0, 0, 0, 0.192);

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.editor {
  border: 2px solid rgb(255, 243, 133);
  background-color: rgba(0, 0, 0, 0.192);
}

#conteudo {
  width: 80%;
  height: 70%;
}
</style>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  components: {
    'editor': Editor
  }
};
</script>

