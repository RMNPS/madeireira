<template>
  <div class="px-0">


    <v-carousel cycle :height="screenSize" hide-delimiter-background show-arrows-on-hover v-if="$vuetify.breakpoint.mdAndUp">
      <v-carousel-item v-for="(slide, i) in slidesCarrocelPrincipal" :key="i" :src="slide.src" :interval="8000" eager>
      </v-carousel-item>
    </v-carousel>
    <v-carousel cycle :height="screenSize" hide-delimiter-background show-arrows-on-hover v-else>
      <v-carousel-item v-for="(slide, i) in slidesCarrocelPrincipalMobile" :key="i" :src="slide.src" :interval="8000" eager>
      </v-carousel-item>
    </v-carousel>


    <v-sheet id="empresa" tile color="grey lighten-4" light class="px-md-12 pb-2">
      <v-container fluid>
        <v-row justify="end" class="pt-3">
          <v-col cols="12" md="6" justify-self="center" align-self="center" class="px-md-12">
            <v-row align="center" justify="start" class=" mt-2 px-7 pb-6">


            </v-row>

            <v-list-item three-line light >
              <v-list-item-content class="brown--text">

                  <p class="body-1 text-justify">
                    A Madeireira é especializada em construções, oferecendo um serviço diferenciado,
                    com controle de qualidade utilizando madeira tratada. Sabemos qual o produto certo para sua
                    necessidade.
                    A madeira tratada é sem dúvida, um dos mais práticos, belos e aconchegantes materiais utilizados
                    nas mais diversas formas: dos campos aos pomares, das estruturas aos acabamentos. É a escolha certa
                    para qualquer ambiente, fácil de ser trabalhada e com uma infinidade de possibilidades.
                  </p>
                  <p v-show="expand || !$vuetify.breakpoint.xs" class="body-1 text-justify">
                  <br/>
                    Nossa Missão é construir e comercializar produtos de alta qualidade, que aliem segurança e economia
                    aos nossos clientes, sem nos esquecer de nossa responsabilidade social e ecológica. Dentro dessa
                    filosofia, investimos constantemente nas melhorias necessárias para atender as necessidades dos
                    clientes e contamos com supervisão de arquiteto especializado no desenvolvimento conduzindo a
                    qualidade dos produtos.
                  </p>
                  <v-btn text @click="expand = !expand" v-if="$vuetify.breakpoint.xs">
                    <v-icon>{{ expand ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    {{ expand ? 'Ver menos' : 'Ver mais'}}
                  </v-btn>

              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" md="6" justify-self="center" class="d-flex justify-center" align-self="center">
            <v-card width="600" max-height="600">
              <v-carousel :height="$vuetify.breakpoint.smAndDown? 300 : 540" hide-delimiter-background
                          show-arrows-on-hover>
                <v-carousel-item v-for="(slide, i) in slidesEmpresa" :key="i" :src="slide.src">
                </v-carousel-item>
              </v-carousel>
              <div class="d-flex justify-end">
                <v-btn outlined color="green" class="my-3 mr-3" @click="fazerOrcamento({nome: 'a madeireira'})"> ENTRAR
                  EM CONTATO
                </v-btn>
              </div>

            </v-card>
          </v-col>


        </v-row>
      </v-container>
    </v-sheet>
    <v-lazy min-height="496px">
      <v-card color="white" tile class="mx-auto" elevation="6">
        <v-sheet tile color="white">
          <v-container fluid>
            <v-row align="center" justify="center" class="pt-4 pl-md-12 px-3">
              <span class="headline brown--text font-weight-light underline">PRODUTOS SOB MEDIDA</span>
            </v-row>
          </v-container>

        </v-sheet>

        <v-slide-group v-model="model" class="pa-4 pt-0" active-class="success" center-active show-arrows
                       v-if="$vuetify.breakpoint.mdAndUp">
          <v-slide-item v-for="produto in produtos" :key="produto.id" v-slot:default="{ active, toggle }"
                        :value="produto">

            <v-card :color="active ? undefined : 'white'" class="ma-4"
                    :height="$vuetify.breakpoint.smAndDown? 300 : 500"
                    :width="$vuetify.breakpoint.smAndDown? 300 : 500" @click="toggle">
              <v-img class="white--text d-flex fill-height" :src="produto.imagens[0]">

                <v-btn depressed color="white" class="black--text mt-4 ml-n1 pl-6"> {{produto.nome}}</v-btn>
                <v-container style="height: 92%">
                  <v-row align="end" justify="end" class="fill-height">
                    <v-btn color="green" class="white--text mb-6 mr-6" @click="abrirProduto(produto)"> Ver Mais</v-btn>
                  </v-row>
                </v-container>
              </v-img>

            </v-card>

          </v-slide-item>
        </v-slide-group>
        <v-carousel cycle class="mt-6" height="400" hide-delimiter-background show-arrows-on-hover v-else>
          <v-carousel-item v-for="(produto, i) in produtos" :key="i" :src="produto.imagens[0]"
                           @click="abrirProduto(produto)">
            <v-btn depressed color="white" class="black--text mt-4 ml-n1 pl-6">
              {{produto.nome}}
            </v-btn>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-lazy>

    <v-sheet color="white" height="35" v-if="$vuetify.breakpoint.smAndDown">

    </v-sheet>

    <v-img src="../assets/fundo_madeira.jpg" height="950" class="px-2" v-if="$vuetify.breakpoint.smAndDown">
      <v-container class="fill-height px-0 px-md-3">
        <v-card elevation="24" id="atacado">
          <v-row align="center" justify="center" class=" mt-6 mb-3 brown--text text-center">
            <span class="headline    mx-6"> PRODUTOS A PREÇO DE ATACADO </span>
          </v-row>
          <v-divider></v-divider>
          <v-window v-model="onboarding">

            <v-window-item v-for="madeira in outrosProdutos" :key="madeira.id">
              <v-sheet tile color="white" height="auto" class="mx-2">

                <v-row align="start" align-md="center" justify="center" class="px-1 px-md-12 fill-height"
                       no-gutters>

                  <v-col cols="12" md="6" align-self="center">
                    <v-row dense>
                      <v-col cols="12" class="d-flex justify-center">

                        <v-img :src="madeira.imagens[indexFoto]" contain :height="200"/>

                      </v-col>
                    </v-row>

                    <v-row v-if="madeira.imagens.length > 1" class=" mb-md-3" dense>
                      <v-slide-group v-model="indexFoto" class=" pt-0" active-class="success" center-active
                                     mandatory :show-arrows="false"
                      >
                        <v-slide-item v-for="(imagem, index) in madeira.imagens" :key="imagem"
                                      v-slot:default="{ active, toggle }" :value="index">

                          <v-card class="mx-1 my-2" @click="toggle" height="50" width="100">

                            <v-img class="fill-height" :src="imagem">
                              <v-overlay v-if="madeira.textoImagem" absolute
                                         :opacity="index == indexFoto ?'0.8': '0.1'" style="text-align: center">
                                <span class="font-weight-bold white--text ">{{madeira.textoImagem[index]}}</span>
                              </v-overlay>
                            </v-img>
                          </v-card>

                        </v-slide-item>
                      </v-slide-group>
                    </v-row>

                  </v-col>
                  <v-col cols="12" md="6">
                    <v-row align="center" justify="start" class=" mt-2 px-5 pb-6 brown--text">
                      <span class="title  font-weight-light underline-light">{{madeira.nome}}</span>
                      <p class="mt-4 mt-md-8  text-md-justify" v-html="madeira.texto">
                      </p>
                      <v-row justify="end" dense>
                        <v-btn outlined color="brown" @click="fazerOrcamento(madeira)">Faça seu orçamento</v-btn>
                      </v-row>
                    </v-row>

                  </v-col>
                </v-row>


              </v-sheet>
            </v-window-item>
          </v-window>
          <v-divider></v-divider>

          <v-card-actions class="justify-space-between">
            <!--            <v-btn text >-->
            <v-icon @click="prev" class="px-0">mdi-chevron-left</v-icon>
            <!--            </v-btn>-->
            <v-item-group v-model="onboarding" class="text-center" mandatory>
              <v-item v-for="madeira in outrosProdutos" :key="`btn-${madeira.id}`" v-slot:default="{ active, toggle }">
                <v-btn :input-value="active" outlined rounded small color="green" @click="toggle" class="mb-1">
                  {{madeira.nome}}
                  <!--                  <v-icon>mdi-record</v-icon>-->
                </v-btn>
              </v-item>
            </v-item-group>
            <!--            <v-btn text @click="next" small class="px-0">-->
            <v-icon @click="next" class="px-0">mdi-chevron-right</v-icon>
            <!--            </v-btn>-->
          </v-card-actions>
        </v-card>
      </v-container>
    </v-img>

    <v-lazy v-else min-height="800" id="atacado">
      <v-parallax height="800" dark src="../assets/fundo_madeira.jpg">
        <v-container class="fill-height px-3">
          <v-card elevation="24">
            <v-row align="center" justify="center" class=" mt-6 mb-3 brown--text text-center">
              <span class="headline mx-6"> PRODUTOS A PREÇO DE ATACADO </span>
            </v-row>
            <v-divider></v-divider>
            <v-window v-model="onboarding">

              <v-window-item v-for="madeira in outrosProdutos" :key="`card-${madeira.id}`">
                <v-sheet tile color="white" height="500" class="mx-2">

                  <v-row align="start" align-md="center" justify="center" class="px-3 px-md-12 fill-height">

                    <v-col cols="12" md="6" align-self="center">
                      <v-row dense align="center">
                        <v-col cols="12" class="d-flex justify-center align-end">
                          <!--                        <v-card class="mx-3 mt-2" v-else>-->

                          <v-img :src="madeira.imagens[indexFoto]" contain
                                 height="400" class="align-end">
                          </v-img>


                          <!--                        </v-card>-->
                        </v-col>
                      </v-row>

                      <v-row v-if="madeira.imagens.length > 1" class=" mb-md-3" dense>
                        <v-slide-group v-model="indexFoto" class="pa-4 pt-0" active-class="success" center-active
                                       mandatory
                                       :show-arrows="false">
                          <v-slide-item v-for="(imagem, index) in madeira.imagens" :key="index"
                                        v-slot:default="{ active, toggle }" :value="index">

                            <v-card class="ma-2" @click="toggle"
                                    :height="$vuetify.breakpoint.smAndDown? 50 : 50"
                                    :width="$vuetify.breakpoint.smAndDown? 100 : 100">

                              <v-img class="fill-height" :src="imagem">
                                <v-overlay v-if="madeira.textoImagem" absolute opacity="0.21"
                                           style="text-align: center">
                                  <span class="font-weight-bold white--text" v-if="madeira.textoImagem">{{madeira.textoImagem[index]}}</span>
                                </v-overlay>
                              </v-img>
                            </v-card>

                          </v-slide-item>
                        </v-slide-group>
                      </v-row>

                    </v-col>
                    <v-col cols="12" md="6">
                      <v-row align="center" justify="start" class=" mt-2 px-2 px-md-7 pb-6 brown--text">
                        <span class="title  font-weight-light underline-light">{{madeira.nome}}</span>
                        <p class="mt-4 mt-md-8  text-md-justify" v-html="madeira.texto">
                        </p>
                        <v-row justify="end" dense>
                          <v-btn outlined color="brown" @click="fazerOrcamento(madeira)">Faça seu orçamento</v-btn>
                        </v-row>
                      </v-row>

                    </v-col>
                  </v-row>


                </v-sheet>
              </v-window-item>
            </v-window>
            <v-divider></v-divider>

            <v-card-actions class="justify-space-between">
              <!--            <v-btn text >-->
              <v-icon @click="prev" class="px-0">mdi-chevron-left</v-icon>
              <!--            </v-btn>-->
              <v-item-group v-model="onboarding" class="text-center" mandatory>
                <v-item v-for="madeira in outrosProdutos" :key="`btn-${madeira.id}`"
                        v-slot:default="{ active, toggle }">
                  <v-btn :input-value="active" outlined rounded small color="green" @click="toggle" class="mb-1">
                    {{madeira.nome}}
                    <!--                  <v-icon>mdi-record</v-icon>-->
                  </v-btn>
                </v-item>
              </v-item-group>
              <!--            <v-btn text @click="next" small class="px-0">-->
              <v-icon @click="next" class="px-0">mdi-chevron-right</v-icon>
              <!--            </v-btn>-->
            </v-card-actions>
          </v-card>
        </v-container>

      </v-parallax>
    </v-lazy>

    <v-sheet color="white">
      <v-container>
        <v-row dense>
          <v-col cols="12" md="6">
            <v-hover v-slot:default="{ hover }">
              <v-card @click="$router.push({name: 'EUCALIPTO TRATADO', params: {produto: '/eucalipto'}})"
                      class="brown--text mx-md-4 my-3" :elevation="hover ? 12 : 2">
                <v-img class="white--text align-end" height="200px" src="@/assets/eucalipto/guia.jpg"/>

                <v-card-title class="title  font-weight-light underline-light">EUCALIPTO TRATADO</v-card-title>
                <v-card-text class="brown--text darken-4">
                  Chama-se de eucalipto tratado, ou eucalipto autoclavado, a madeira de eucalipto que passa pelo
                  processo
                  de tratamento no autoclave, garantindo maior durabilidade e resistência à intemperes como sol, chuva e
                  umidade e ao ataque de fungos, insetos, cupins e brocas. A garantia do tratamento é de 15 anos
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="brown accent-4">
                    ver mais
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6">
            <v-hover v-slot:default="{ hover }">
              <v-card @click="$router.push({name: 'PINUS TRATADO', params: {produto: '/pinus'}})"
                      class="brown--text mx-md-4 my-3" :elevation="hover ? 12 : 2">
                <v-img class="white--text align-end" height="200px" src="@/assets/pinus/tabuas.jpg"/>

                <v-card-title class="title  font-weight-light underline-light">PINUS TRATADO</v-card-title>
                <v-card-text class="brown--text darken-4">
                  Pinus tratado, ou pinus autoclavado, a madeira de pinus que passa pelo processo de tratamento no
                  autoclave, garantindo maior durabilidade e resistência à intemperes como sol, chuva e umidade e ao
                  ataque de fungos, insetos, cupins e brocas. A garantia do tratamento é de 15 anos.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="brown accent-4"> ver mais</v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <formulario  v-model="dialog" :produto="produtoOrcamento" :fone-de-madeira="telefone"></formulario>
  </div>

</template>

<script>
    const Formulario = () => import('./Formulario')

    export default {
        components: {Formulario},
        props: {
            telefone: {
                type: String,
                default: ""
            }
        },
        name: 'Home',
        head: function () {
            return {
                title: {
                    inner: 'Madeireira -  Projetos Exclusivos em Madeira'
                },
                meta: [
                    {name: 'keywords', content: 'madeira tratada, pinus, eucalipto, casa pre moldada, casa de madeira, deck, playground, pergolado, quiosque, churrasqueira pre moldada'}
                ],
                link: [
                    {rel: 'icon', href: require('../assets/favicon.png'), sizes: '48x48', type: 'image/png'},
                ],
            }
        },
        beforeMount: function () {

            this.$vuetify.goTo(0)
        },
        beforeDestroy() {
            clearInterval(this.timer);
            // clearInterval(this.timer2)
        },
        created() {
            this.loop();
            this.timer = setInterval(() => {
                this.loop()
            }, 7000);
            // this.timer2 = setInterval(() => {
            //     if (++this.onboarding >= this.madeiras.length) this.onboarding = 0
            // }, 5000)
        },
        mounted: function () {

            // console.log("meta", this.$route.meta)
            // console.log("params", this.$route.params)
            // console.log("telefone", this.telefone)
            // console.log("params", this.$route.props.sidebar)
            // console.log("params", this.$route.params.sidebar)
            // console.log('produtos', this.produtos);

            this.screenSize = window.innerHeight
        },
        watch: {
            'onboarding': function () {
                this.indexFoto = 0;
            }
        },
        methods: {

            loop() {

                if (this.pos === this.produtos.length) {
                    this.pos = 0
                }
                this.model = this.produtos[this.pos];
                this.pos++;


            },
            fazerOrcamento(produto) {
                this.produtoOrcamento = produto.nome
                this.dialog = true
            },
            next() {
                this.onboarding = this.onboarding + 1 === this.length
                    ? 0
                    : this.onboarding + 1
            },
            prev() {
                this.onboarding = this.onboarding - 1 < 0
                    ? this.length - 1
                    : this.onboarding - 1
            },
            abrirProduto(produto) {
                console.log("abrindo ", produto.path)
                this.$router.push({name: produto.nome, params: {produto: produto.path}})
            },
            // onIntersect (entries) {
            //     // More information about these options
            //     // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
            //     this.isIntersecting = entries[0].isIntersecting
            // },
        },
        data: () => ({
            // isIntersecting: false,
            dialog: false,
            produtoOrcamento: null,
            indexFoto: 0,
            screenSize: 600,
            length: 12,
            onboarding: 0,
            timer: '',
            timer2: '',
            expand: false,
            model: null,
            slidesCarrocelPrincipal: [
                {src: require("@/assets/deck01.jpg")},
                {src: require("@/assets/casa01.jpg")},
                {src: require("@/assets/playground06.jpg")},
                {src: require("@/assets/pergolado04.jpg")},
            ],
            slidesCarrocelPrincipalMobile: [
                {src: require("@/assets/mobile01.jpg")},
                {src: require("@/assets/mobile02.jpg")},
                {src: require("@/assets/mobile03.jpg")},
                {src: require("@/assets/mobile04.jpg")},
            ],
            slidesEmpresa: [
                {src: require("@/assets/madeireira1.jpg")},
                {src: require("@/assets/madeireira2.jpg")},
                {src: require("@/assets/madeireira3.jpg")},
            ],
            pos: 1,
            outrosProdutos: [
                {
                    id: 8,
                    nome: "CONJUNTOS",
                    imagens: [
                        require("@/assets/conjuntos/churrasqueira-balcao-pia_zoom.jpg"),
                        require("@/assets/conjuntos/churrasqueira-forno-lenha_zoom.jpg"),
                        require("@/assets/conjuntos/kit-2x1-natural_zoom.jpg"),
                        require("@/assets/conjuntos/kit-2x1-revestido_zoom.jpg"),
                        require("@/assets/conjuntos/kit-3x1-natural_zoom.jpg"),
                        require("@/assets/conjuntos/kit-3x1-revestido_zoom.jpg"),
                        require("@/assets/conjuntos/kit-4x1-natural_zoom.jpg"),
                        require("@/assets/conjuntos/kit-4x1-revestido_zoom.jpg"),
                        require("@/assets/conjuntos/kit-gaucho-forno-lenha-natural_zoom.jpg"),
                        require("@/assets/conjuntos/kit-gaucho-natural.jpg"),
                        require("@/assets/conjuntos/kit-gaucho-natural_zoom.jpg"),
                    ],
                    texto: "Conjuntos Pré Moldados fabricados em concreto, oferecemos variedades de tamanhos e modelos. Naturais e revestidos. Kits com churrasqueiras, fogões e fornos a lenha conjugados."
                }, {
                    id: 9,
                    nome: "FOGÕES",
                    imagens: [
                        require("@/assets/fogao/fogao-gaucho_zoom.jpg"),
                        require("@/assets/fogao/fogao-lenha_zoom.jpg"),
                        require("@/assets/fogao/fogao-lenha-forno_zoom.jpg"),
                    ],
                    texto: "Fogão a lenha, fogão gaúcho e fogão com forno </br>" +
                        "Fogões Pré Moldados fabricados em concreto, oferecemos variedades de tamanhos e modelos."
                },
                {
                    id: 10,
                    nome: "FORNOS",
                    imagens: [
                        require("@/assets/forno/forno-iglu_zoom.jpg"),
                        require("@/assets/forno/forno-lenha_zoom.jpg"),
                    ],
                    texto: "Forno Iglu projetado especialmente para as suas necessidades. Ideal para pizzarias e restaurantes. </br>" +
                        "Natural, revestido, gaúcho e lenha. Forno iglu pré-moldado."
                },
                {
                    id: 11,
                    nome: "LAREIRAS",
                    imagens: [
                        require("@/assets/lareiras/lareira-canto_zoom.jpg"),
                        require("@/assets/lareiras/lareira-centro_zoom.jpg"),
                    ],
                    texto: "Lareiras Pré Moldadas ideais para seu projeto personalizado, trazendo beleza e conforto para seu lar.</br>" +
                        "Lareira de centro e lareira de canto"
                },

                {
                    id: 7,
                    nome: "CHURRASQUEIRA",
                    imagens: [
                        require("@/assets/churrasqueira/churrasqueiras_naturais.jpg"),
                        require("@/assets/churrasqueira/churrasqueiras_prediais.jpg"),
                        require("@/assets/churrasqueira/churrasqueiras_revestidas.jpg"),
                        require("@/assets/churrasqueira/churrasqueiras_vidros.jpg"),
                    ],
                    texto: "Chrurrasqueiras Pré Moldadadas fabricadas em concreto com opções de revestimento.Natural, revestida, em vidro e predial."
                },
                {
                    id: 6,
                    nome: "CAL",
                    imagens: [require("@/assets/cal/cal.jpg"),],
                    texto: "O Cal Hidratado é usado para assentamento de tijolos, blocos em geral, reboco, massa fina e pintura. Cal pura, sem adição de cinza ou outros minerais."
                },
                {
                    id: 3,
                    nome: "CIMENTO",
                    imagens: [
                        require("@/assets/cimento/cimento1.png"),
                        require("@/assets/cimento/cimento2.png"),
                        require("@/assets/cimento/cimento3.png"),
                        require("@/assets/cimento/cimento4.png"),
                    ],
                    texto: "Cimento Nacional desenvolvido com baixo teor de adição de pozolana, garante ao produto " +
                        "resistências iniciais superiores, coloração escura e pega rápida. E o que você ganha? Rapidez na " +
                        "execução, redução de custos e mais produtividade. Sem dúvidas o melhor desempenho em todas as " +
                        "etapas da obra, proporcionando força máxima e mais qualidade no acabamento final. Use e comprove.\n" +
                        "Indispensável do início ao ﬁnal da obra."
                },
                {
                    id: 4,
                    nome: "TIJOLO",
                    imagens: [
                        require("@/assets/tijolo/tijolo1.jpg"),
                        require("@/assets/tijolo/tijolo2.jpg"),
                    ],
                    texto: "O Tijolo Normatizado: blocos maciços que oferecem grande redução de custos em sua obra, e garante segurança e uma excelente aparência em seu assentamento." +
                        "</br></br>" +
                        "São bastante utilizados em construções de cômodos inteiros, paredes de cômodos que separam ambientes, residências e galpões."
                },
                {
                    id: 5,
                    nome: "TELHA",
                    imagens: [
                        require("@/assets/telha_americana/antiqua_caramelo.png"),
                        require("@/assets/telha_americana/blend_50_caramelo.png"),
                        require("@/assets/telha_americana/gloss_caramelo.png"),
                        require("@/assets/telha_americana/gloss_marfim.png"),
                        require("@/assets/telha_americana/gloss_grafite.png"),
                        require("@/assets/telha_americana/gloss_branco.png"),
                        require("@/assets/telha_americana/gloss_cinza.png"),
                        require("@/assets/telha_americana/gloss_mesclada.png"),
                        require("@/assets/telha_americana/gloss_pinhao.png"),
                        require("@/assets/telha_americana/matte_caramelo.png"),
                        require("@/assets/telha_americana/dupla_caramelo.png"),
                        require("@/assets/telha_americana/dupla_cinza.png"),
                        require("@/assets/telha_americana/dupla_grafite.png"),
                        require("@/assets/telha_americana/dupla_marfim.png"),
                        require("@/assets/telha_americana/dupla_pinhao.png"),
                    ],
                    texto: "As Telhas Tettogres são produzidas com a mais alta tecnologia, através da compactação de " +
                        "argilas microgranuladas, garantindo baixa absorção, alta resistência, conforto térmico e um acabamento perfeito."
                },
            ],
            produtos: [
                {id: 1, nome: "PLAYGROUNDS", path: "/playgrounds", imagens: [require("@/assets/playground01.jpeg"),]},
                {id: 2, nome: "DECKS", path: "/decks", imagens: [require("@/assets/deck01.jpg"),]},
                {id: 3, nome: "PERGOLADOS", path: "/pergolados", imagens: [require("@/assets/pergolado03.jpeg"),]},
                {id: 4, nome: "QUIOSQUES", path: "/quiosques", imagens: [require("@/assets/quiosque01.jpeg"),]},
                {id: 5, nome: "CASAS", path: "/casas", imagens: [require("@/assets/casa01.jpg"),]}
            ],
        }),

    };
</script>
<style >

  .underline {

    text-decoration: underline #795548;
    text-decoration-thickness: 5px;
    text-underline-offset: 8px;
  }

  .underline-light {
    text-decoration: underline #795548;
    text-decoration-thickness: 3px;
    text-underline-offset: 8px;
  }

</style>
