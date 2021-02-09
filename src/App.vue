<template>
  <v-app>

    <v-app-bar app fixed elevate-on-scroll light :color="is_transparent? 'transparent': 'white'">


      <template v-if="$vuetify.breakpoint.mdAndUp">
        <div style="width: 100%" class="d-flex justify-center justify-md-start ">
          <v-btn text height="70" @click="irHome">
            <h1 class="brown--text font-weight-bold font-italic" style="width: 260px">MADEIREIRA</h1>
<!--            <v-img alt="Madeireira Logo" class="shrink " contain src="./assets/logo_nova.png"-->
<!--                   transition="scale-transition" width="260"/>-->
          </v-btn>

        </div>
        <v-spacer></v-spacer>
        <v-btn text :dark="is_transparent" :color="'brown'" @click="irEmpresa" class="px-0 px-md-3">QUEM SOMOS</v-btn>

        <v-menu offset-y light open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text :dark="is_transparent" :color="'brown'" class="mr-md-2" v-on="on">
              <v-icon>mdi-chevron-down</v-icon>
              Produtos
            </v-btn>
          </template>
          <v-list light>
            <v-list-item v-for="(item, index) in produtos1" :key="index" @click="abrirProduto(item)">
              <v-list-item-title class="brown--text">{{ item.nome }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn color="green" class=" mr-md-2 px-3 px-md-6" dark @click="$vuetify.goTo('#footer')">CONTATO</v-btn>
      </template>

      <template v-else>
        <div style="width: 100%" class="d-flex justify-center justify-md-start mt-3">
          <v-btn text x-large @click="irHome" class="ml-n4">
            <v-img alt="Madeireira Logo" class="shrink " contain src="./assets/logo_nova.png"
                   transition="scale-transition" width="190"/>
          </v-btn>

        </div>

      </template>


      <template v-slot:extension v-if="$vuetify.breakpoint.smAndDown && !is_transparent">


        <v-row justify="space-around" class="mt-3" align="center">
          <v-btn text :dark="is_transparent" color="brown" @click="irEmpresa" class="px-0 px-md-3">QUEM SOMOS</v-btn>

          <v-menu offset-y light>
            <template v-slot:activator="{ on }">
              <v-btn text :dark="is_transparent" color="brown" class="mr-md-2 px-0 px-md-3" v-on="on">
                <v-icon>mdi-chevron-down</v-icon>
                Produtos
              </v-btn>
            </template>
            <v-list light>
              <v-list-item v-for="(item, index) in produtos1" :key="index" @click="abrirProduto(item)">
                <v-list-item-title class="brown--text">{{ item.nome }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn color="green" class=" mr-md-2 px-3 px-md-6" dark @click="$vuetify.goTo('#footer')" small>CONTATO
          </v-btn>
        </v-row>

      </template>


    </v-app-bar>


    <router-view :key="$route.fullPath" :telefone="telefone"></router-view>


    <v-lazy>
      <v-sheet tile color="grey lighten-3" light class="pt-6">
        <v-container>
          <v-row justify="center" align="center" class=" brown--text " no-gutters dense>
            <v-col cols="12" sm="6" justify-self="center" align-self="end" order="12" order-md="1">

              <v-img alt="homem com o produto" src="./assets/apresentacao_mobile.png" class="shrink mb-n4 mt-3"
                     transition="scale-transition" v-if="$vuetify.breakpoint.smAndDown"
                     contain position="center" max-height="400"/>
              <v-img alt="homem com o produto" src="./assets/apresentacao.webp" class="shrink mb-n3"
                     transition="scale-transition" v-else
                     contain position="center" max-height="550"/>
            </v-col>
            <v-col cols="12" sm="6" order="1" order-md="12">
              <v-row justify="start" class=" text-justify mx-3">

                <v-row align="center" justify="start" class=" mt-2 px-4 pb-6">
                  <span class="headline  font-weight-light underline">PERSONALIZE SEU SONHO!</span>
                </v-row>
                <!--              <span class="display-1 font-weight-black mt-6">Fale conosco</span>-->
                <v-col cols="12">
                  Fale Conosco e realize seu Sonho de morar numa LEGÍTIMA Casa de Madeira. Oferecemos todo suporte do
                  projeto de Casas, Playgrounds, Decks, Pergolados, Quiosques e muito mais. Seja qual for o caminho que
                  você escolher Para Realizar os seus Sonhos, a MADEIREIRA estará sempre ao seu lado!
                </v-col>
                <v-col cols="12">
                  <v-form @submit.prevent="enviarMensagem" id="check-form" v-model="valid" ref="form">
                    <v-col cols="12" class="py-0">

                      <v-text-field v-model="nome" label="Nome" outlined name="from_name"
                                    :rules="[ v => v.length <= 100 || 'Máximo 100 caracteres']" class="py-0 my-0" dense/>
                      <v-text-field label="E-mail" type="email" :rules="emailRules" required name="user_email" outlined
                                    v-model="email" dense class="py-0 my-0"/>
                      <v-text-field label="Telefone" type="phone" required name="phone" outlined dense class="py-0 my-0"/>
                      <v-textarea v-model="mensagem" label="Mensagem" outlined name="mensagem"
                                  :rules="[ v => v.length <= 300 || 'Máximo 300 caracteres']" counter="300" auto-grow
                                  class="py-0" dense/>
                    </v-col>
                    <v-col class="py-0">
                      <v-btn color="green" class="white--text" block type="submit" form="check-form">ENVIAR MENSAGEM
                      </v-btn>
                    </v-col>
                  </v-form>
                </v-col>


              </v-row>


            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-lazy>


    <v-lazy id="footer">
      <v-sheet tile color="brown " class="pt-3 px-md-12 px-3" dark >
        <v-container>
          <v-row class="px-3" justify="center">
            <v-col cols="12" md="4">
              <span class="font-weight-medium">MADEIREIRA</span>
              <p class="mt-4">
                Desde 2020, atuando no ramo de construção, trabalhando sempre com qualidade e conseguindo negocios com
                confiança e responsabiliade.
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <span class="font-weight-medium">CONTATO</span>

              <p class="mt-4 mb-2">
                <v-icon class="mr-2">{{mdiMapMarker}}</v-icon>
                Rua das Casas, Nº1000 - Centro, Florianópolis-SC
              </p>
              <p class="mb-1">

                <v-btn text class="text-none ml-n4 ml-md-n4" @click="openEmail">
                  <v-icon class=" mr-2">{{mdiEmail}}</v-icon>
                  contato@teste.com.br
                </v-btn>
              </p>
              <p class="mb-1">
                <v-btn text class="text-none ml-n4" @click="openWhatsapp">
                  <v-icon class="mr-2">{{mdiWhatsapp}}</v-icon>
                  (99) 99999-9999
                </v-btn>

              </p>
              <p class="mb-1">

                <v-btn text class="text-none ml-n4" @click="openFacebook">
                  <v-icon class="mr-2">{{mdiFacebook}}</v-icon>
                  @testemadereira
                </v-btn>
              </p>
              <p class="mb-1">

                <v-btn text class="text-none ml-n4" @click="openInstagram">
                  <v-icon class="mr-2">{{mdiInstagram}}</v-icon>
                  @testemadereira
                </v-btn>
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <span class="font-weight-medium">COMO CHEGAR</span>
              <p>
                <v-lazy>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56571.132176207124!2d-48.55408938031043!3d-27.602960471291716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527394eb2c632d7%3A0x81bc550b6a04c746!2sFlorian%C3%B3polis%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1612878069021!5m2!1spt-BR!2sbr"
                          frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                </v-lazy>


              </p>
            </v-col>


          </v-row>
          <v-row justify="center" align="center" class="mt-2">
          <span class="text-center">©Copyright 2020 | Todos os Direitos Reservados | Desenvolvido por
            <v-btn text class="text-none mx-0  px-0 mt-n1" @click="openDeveloperSite">@ramonps</v-btn>
          </span>
          </v-row>
        </v-container>


      </v-sheet>
    </v-lazy>



    <v-btn fixed right color="green" fab dark absolute bottom
           :style="'margin-bottom: ' + ($vuetify.breakpoint.smAndDown ? '15%': '5%')" large @click="openWhatsapp">
      <v-icon color="white" large>{{mdiWhatsapp}}</v-icon>
    </v-btn>

  </v-app>
</template>

<script>
    import {mdiWhatsapp, mdiMapMarker, mdiEmail, mdiInstagram, mdiFacebook,} from '@mdi/js'
    // import HelloWorld from './components/Home';

    import {enviarMensagem} from "./plugins/enviar-mensagem";

    export default {
        name: 'App',
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
            console.log('scrolling Destroyed');
        },
        mounted() {

            if (this.$router.currentRoute.path === "/") {
                // this.is_transparent = !this.$vuetify.breakpoint.smAndDown;

                window.addEventListener('scroll', this.handleScroll);
                console.log('scrolling Injected');


            } else {
                console.log("aquiiii")
                this.is_transparent = false
            }


        },
        updated() {
            if (this.$route.params.empresa) {
                this.$route.params.empresa = undefined;
                this.$vuetify.goTo("#empresa")
            } else if (this.$route.params.atacado) {
                this.$route.params.atacado = undefined;
                this.$vuetify.goTo("#atacado")
            }
        },
        watch: {
            // '$vuetify.breakpoint.smAndDown': function () {
            //     // if (this.$vuetify.breakpoint.smAndDown) {
            //     //     this.is_transparent = false;
            //     // } else
            //         if (window.scrollY == 0) {
            //         this.is_transparent = true;
            //     }
            // }
        },
        methods: {
            openDeveloperSite() {
                window.open('https://br.linkedin.com/in/ramonpsouza', '_blank')
            },
            openEmail() {
                console.log("clicou em e-mail")
            },
            openInstagram() {

            },
            enviarMensagem(e) {
                if (!this.nome || this.nome.length > 100) {
                    alert("Informe seu nome com até 100 caracteres");
                    return
                } else if (!this.mensagem || this.mensagem.length > 300) {
                    alert("Informe a mensagem com até 300 carcteres");
                    return
                }
                // window.gtag_report_conversion()
                enviarMensagem(e, {
                    nome: this.nome,
                    mensagem: this.mensagem,
                    telefone: this.telefone
                })
            },

            openWhatsapp() {
                let mensagem = "Olá, cheguei aqui pelo site. Eu gostaria de saber mais sobre a Madeireira. Você pode me ajudar?";
                let uri = encodeURI(mensagem);
                // window.gtag_report_conversion2()
                window.open("https://api.whatsapp.com/send?phone=55" + this.telefone + "&text=" + uri, '_blank')
            },
            openFacebook() {

            },
            handleScroll: function () {
                // if (this.$vuetify.breakpoint.smAndDown) {
                //     this.is_transparent = false
                // } else {
                this.is_transparent = (window.scrollY == 0);
                // }


            },

            irHome() {
                if (this.$router.currentRoute.path !== "/") {
                    this.$router.push("/")
                } else {
                    this.$vuetify.goTo(0)
                }
            },
            irEmpresa() {
                if (this.$router.currentRoute.path !== "/") {
                    this.$router.push({name: "home", params: {empresa: 'true'}});
                } else {
                    this.$vuetify.goTo("#empresa")
                }
            },
            abrirProduto(produto) {
                if (produto.path === "atacado") {
                    this.abrirAtacado()
                    return
                }
                console.log("abrindo ", produto.path)
                this.$router.push({name: produto.nome, params: {produto: produto.path}})
            },
            abrirAtacado() {
                if (this.$router.currentRoute.path !== "/") {
                    this.$router.push({name: "home", params: {atacado: 'true'}});
                } else {
                    this.$vuetify.goTo("#atacado")
                }
            }

        },
        computed: {
            produtos1() {
                return [
                    {id: 1, nome: "PLAYGROUNDS", path: "/playgrounds"},
                    {id: 2, nome: "DECKS", path: "/decks"},
                    {id: 3, nome: "PERGOLADOS", path: "/pergolados"},
                    {id: 4, nome: "QUIOSQUES", path: "/quiosques"},
                    {id: 5, nome: "CASAS", path: "/casas"},
                    {id: 6, nome: "EUCALIPTO TRATADO", path: "/eucalipto"},
                    {id: 7, nome: "PINUS TRATADO", path: "/pinus"},
                    {id: 8, nome: "ATACADO", path: "atacado"}
                ]
            }
        },
        data: () => ({
            mdiWhatsapp,
            mdiMapMarker,
            mdiEmail,
            mdiInstagram,
            mdiFacebook,
            valid: true,
            nome: "",
            email: "",
            mensagem: "",
            telefone: "99999999999",
            emailRules: [
                v => !!v || 'Informe um e-mail válido',
                v => /.+@.+\..+/.test(v) || 'Informe um e-mail válido',
            ],
            //
            is_transparent: true,
        }),
    };
</script>
