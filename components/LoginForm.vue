<template>
        <form action="" class="login-form">
            <h2>Log in</h2>

            <label for="email" id="email-label" class="label-login"> <h4>Email</h4> </label>
            <input type="email" name="email" id="email" class="input-style-1" placeholder="email@example.com" v-on:input="validarEmail()">
            <small class="mensagem-erro email">E-email inválido</small>

            <label for="password" id="password-label" class="label-login"> <h4>Senha</h4> </label>
            <input type="password" name="password" id="password" class="input-style-1" placeholder="Insira sua senha" v-on:input="validarSenha()">
            <small class="mensagem-erro senha">Senha inválida</small>

            <button type="submit" class="primary" v-on:click = "validar()"></button>
        </form>
</template>

<script>
    export default{
        name: 'LoginForm',
        methods:{
        menuBTn() {
            const btn = document.querySelector("button.menu-button");
            btn.classList.contains("clicado") ? btn.classList.remove("clicado") : btn.classList.add("clicado");
        },
        GerarID: function () {
            return parseInt(Math.random() * 100000000);
        },

        validar(){
            event.preventDefault();
            this.validarEmail();
            this.validarSenha();

            if(this.validarSenha() == false || this.validarEmail() == false){
                return false;
                
            } else{
                alert("Sucesso");
                return true;
            }
        },
        validarEmail(){
            const email = document.querySelector("input#email");
            const msg = document.querySelector("small.email");

            if(email.value != "admin"){
                email.classList.add("erro")
                msg.classList.add("vis");
                return false;
            } else{
                email.classList.remove("erro");
                msg.classList.remove("vis");
                return true;
            }
        },

        validarSenha(){
            const senha = document.querySelector('input#password');
            const msg = document.querySelector("small.senha");

            if(senha.value != "admin"){
                senha.classList.add("erro")
                msg.classList.add("vis");
                return false;
            } else{
                senha.classList.remove("erro")
                msg.classList.remove("vis");
                return true;
            }
        },
        },
    }
</script>