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
};

import "~/static/css/style.css";
import "~/static/css/menu.css";
import "~/static/css/form.css";
import TopBar from "~/components/TopBar.vue";
import MobileNav from "~/components/MobileNav.vue";
import Card from "~/components/Card.vue";
import PrimaryMenu from "~/components/PrimaryMenu.vue";
import LoginForm from "~/components/LoginForm.vue";
</script>