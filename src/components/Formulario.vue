<template>
  <v-dialog
          v-model="dialog" @click:outside="dialog = false"
          width="500"
  >
    <v-card class="px-4 px-md-6 pt-2 pb-6">
      <v-card-title>Entrar em Contato</v-card-title>
      <v-card-text class="body-1">
        Nos informe seus dados que entraremos em contato o mais breve possível
      </v-card-text>
      <v-form @submit.prevent="sendMessage" id="check-login-form" v-model="valid" ref="form">

        <v-text-field label="Nome" :counter="100" required name="from_name" :rules="nomeRules"
                      v-model="nome"></v-text-field>
        <v-text-field label="E-mail" type="email" :rules="emailRules" required name="user_email"
                      v-model="email"></v-text-field>
        <v-text-field label="Telefone" type="phone" required name="phone" ></v-text-field>
        <v-text-field name="produto"  v-show="false" :value="produto"></v-text-field>
        <v-textarea name="mensagem" label="Mensagem" outlined v-model="mensagem"
                    :rules="mensagemRules" counter="300" auto-grow
                    class="py-0" dense/>
        <v-row>

          <v-btn @click="dialog = false" text color="brown">fechar</v-btn>
          <v-spacer></v-spacer>
          <v-btn type="submit" form="check-login-form" text color="green">Enviar</v-btn>


        </v-row>

      </v-form>

    </v-card>

  </v-dialog>
</template>

<script>
    import {enviarMensagem} from "../plugins/enviar-mensagem";

    export default {
        props: {
            value: Boolean, produto: String, foneMadeireira: String
        },
        watch: {
            value: function () {
                console.log("aaaa")
                this.dialog = this.value
            },
            dialog: function () {
                this.$emit("input", this.dialog);
            }
        },

        name: "Formulario",
        methods: {
            sendMessage(e) {
                this.$refs.form.validate()
                if (this.valid) {
                    // window.gtag_report_conversion()
                    enviarMensagem(e, {
                        nome: this.nome,
                        mensagem: this.mensagem,
                        produto: this.produto,
                        telefone: this.foneMadeireira
                    })
                    this.dialog = false
                }

            }
        },
        data: () => ({
            nome: "",
            email: "",
            mensagem: "",
            telefone: "",
            valid: true,
            dialog: false,
            mensagemRules: [
                (v => v.length <= 300) || 'Máximo 300 caracteres'
            ],
            nomeRules: [
                (v => v.length <= 100) || 'Máximo 100 caracteres'
            ],
            emailRules: [
                v => !!v || 'Informe um e-mail válido',
                v => /.+@.+\..+/.test(v) || 'Informe um e-mail válido',
            ],
        })
    }
</script>
