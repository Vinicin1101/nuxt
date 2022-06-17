<template>
  <section class="body">
    <TopBar></TopBar>
    <PrimaryMenu></PrimaryMenu>

    <section class="geral">
      <LoginForm></LoginForm>
    </section>
  </section>
</template>


<script>
export default {
  name: "LoginPage",

  components: { TopBar, MobileNav, Card, PrimaryMenu, LoginForm },
  head() {
    return {
      title: "Login",
    };
  },
};

import TopBar from "~/components/TopBar.vue";
import MobileNav from "~/components/MobileNav.vue";
import Card from "~/components/Card.vue";
import PrimaryMenu from "~/components/PrimaryMenu.vue";
import LoginForm from "~/components/LoginForm.vue";
</script>

<style scoped>
@import "~/static/css/input.css";
@import "~/static/css/form.css";
@import "~/static/css/geral.css";
@import "~/static/css/layout.css";
@import "~/static/css/menu.css";
@import "~/static/css/elements.css";
</style>