<template>
  <v-sheet color="white">
    <v-container fluid style="margin-top: 50px" class="mx-md-6 fill-height d-flex justify-center"
                 v-if="produtoSelecionado">

      <v-row align="center" justify="center" class="pt-12 mt-2 px-3 pb-4" v-if="$vuetify.breakpoint.smAndDown">
        <span class="headline brown--text font-weight-light underline" ref="nome">{{produtoSelecionado.nome}}</span>
      </v-row>

      <v-row justify="center" align="center">
        <v-col cols="12" md="4" order="12" order-md="1" class="pt-0">
          <v-row align="center" justify="end" class="pt-md-12 px-3 " v-if="$vuetify.breakpoint.mdAndUp">
            <span class="headline brown--text font-weight-light underline">{{produtoSelecionado.nome}}</span>
          </v-row>
          <v-row align="center" justify="center">
            <v-col class=" mx-3 mx-md-0">
              <span class="brown--text text-justify mx-12 " v-html="produtoSelecionado.texto"></span>
              <v-hover v-slot:default="{ hover }">
                <v-card outlined :elevation="hover? '5' : '0'" @click="()=> {dialog = true}" class="text-center py-1">
                  <a class="green--text  subtitle-1 font-weight-medium">Clique aqui e faça seu orçamento conosco</a>

                </v-card>
              </v-hover>

            </v-col>
          </v-row>

        </v-col>
        <v-col cols="12" md="7" class="pt-0 pt-md-3 pb-0" order="1" order-md="12">

          <v-card class="ma-2 mt-md-3 mx-md-6">
            <v-img class="white--text " :src="produtoSelecionado.imagens[indexFoto]"
                   :height="$vuetify.breakpoint.smAndDown?250 :500"/>

          </v-card>
          <!--      <v-img :src="produtoSelecionado.imagens[indexFoto]" height="600" width="800"/>-->
          <v-slide-group v-model="indexFoto" class="pa-4 pt-0" active-class="success" center-active mandatory>
            <v-slide-item v-for="(imagem, index) in produtoSelecionado.imagens" :key="index"
                          v-slot:default="{ active, toggle }" :value="index">

              <v-card class="ma-2" @click="toggle"
                      :height="$vuetify.breakpoint.smAndDown? 50 : 100"
                      :width="$vuetify.breakpoint.smAndDown? 100 : 200">

                <v-img class="fill-height" :src="imagem">
                  <v-overlay v-if="produtoSelecionado.textoImagem" absolute
                             :opacity="index == indexFoto ?'0.8': '0.1'" style="text-align: center">
                    <span class="font-weight-bold white--text ">{{produtoSelecionado.textoImagem[index]}}</span>
                  </v-overlay>
                </v-img>
              </v-card>

            </v-slide-item>
          </v-slide-group>


        </v-col>


      </v-row>


    </v-container>

    <formulario v-model="dialog" :produto="produtoSelecionado.nome" :fone-de-madeira="telefone"></formulario>

  </v-sheet>

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
        head: function () {
            return {
                title: {
                    inner: this.produtoSelecionado.tituloGoogle
                },
                meta: [
                    {name: 'description', content: this.produtoSelecionado.texto.replace(/<p>/g,"").replace(/<\/p>/g, "")}
                ],
                link: [
                    {rel: 'icon', href: require('../assets/favicon.png'), sizes: '48x48', type: 'image/png'},
                ],
            }
        },

        name: "Produto",
        beforeMount() {
            let path = this.$router.currentRoute.path;
            for (let produto of this.produtos) {
                if (produto.path === path) {
                    this.produtoSelecionado = produto;
                    break;
                }
            }
        },
        methods: {},
        mounted() {

            this.$vuetify.goTo(0)
        },
        data: () => ({
            dialog: false,
            produtoSelecionado: null,
            indexFoto: 0,
            fotos: [],
            produtos: [
                {
                    id: 1, nome: "PLAYGROUNDS", path: "/playgrounds",
                    tituloGoogle: "Playgrounds - Parquinhos, Casinhas",
                    imagens: [
                        require("@/assets/playground01.jpeg"),
                        require("@/assets/playground02.jpeg"),
                        require("@/assets/playground03.jpeg"),
                        require("@/assets/playground04.jpg"),
                        require("@/assets/playground05.jpg"),
                        require("@/assets/playground06.jpg"),
                        require("@/assets/playground07.jpg"),
                        require("@/assets/playground08.jpeg"),
                        require("@/assets/playground09.jpeg"),
                        require("@/assets/playground10.jpeg"),
                        require("@/assets/playground11.jpeg"),
                        require("@/assets/playground12.jpeg"),
                        require("@/assets/playground13.jpeg"),
                    ],
                    texto: "<p>Playground de Madeira fabricado com Eucalipto Tratado, Madeira Ecológica e com alta durabilidade, garantida contra apodrecimento e cupins. Buscamos a excelência máxima em nossos produtos, sempre usando os melhores materiais, aliados à qualidade da mão de obra de nossa equipe especializada.</p><p>" +
                        "Nos seguimos as exigências de segurança da ABNT, para prevenir acidentes com as crianças  que utilizam nossos parques. Por exemplo: área de circulação adequada ao redor do playground, tinta atóxica, cantos arredondados, madeira sem soltar lascas, pregos e parafusos galvanizados." +
                        "</p><p>Temos diversos tipos de Playground em Madeira:  Casa do Tarzan, Balanço, Gangorra, Escorregador, Ponte Pênsil, etc.</p>"
                },
                {
                    id: 2, nome: "DECKS", path: "/decks",
                    tituloGoogle: "Decks",
                    imagens: [
                        require("@/assets/deck01.jpg"),
                        require("@/assets/deck02.jpg"),
                        require("@/assets/deck03.jpeg"),
                        require("@/assets/deck04.jpeg"),
                        require("@/assets/deck05.jpeg"),
                        require("@/assets/deck06.jpeg"),
                        require("@/assets/deck07.jpeg"),
                        require("@/assets/deck08.jpeg"),
                        require("@/assets/deck09.jpeg"),
                        require("@/assets/deck10.jpeg"),
                        require("@/assets/deck11.jpeg"),
                        require("@/assets/deck12.jpeg"),
                        require("@/assets/deck13.jpeg"),
                        require("@/assets/deck14.jpeg"),
                        require("@/assets/deck15.jpeg"),
                        require("@/assets/deck16.jpeg"),
                        require("@/assets/deck17.jpeg"),
                        require("@/assets/deck18.jpeg"),
                        require("@/assets/deck19.jpeg"),
                        require("@/assets/deck20.jpeg"),
                        require("@/assets/deck21.jpeg"),
                        require("@/assets/deck22.jpeg"),
                        require("@/assets/deck23.jpeg"),
                        require("@/assets/deck24.jpeg"),
                        require("@/assets/deck25.jpeg"),
                        require("@/assets/deck26.jpeg"),
                        require("@/assets/deck27.jpeg"),
                    ],
                    texto: "<p>O Deck de Pinus Tratado vem cada vez mais conquistando seu espaço no mercado, pois é uma madeira de reflorestamento e com uma alta durabilidade, substituindo perfeitamente as madeiras de lei." +
                        "</p><p>O tratamento da madeira é feito através do processo de vácuo-pressão em unidades industriais denominadas autoclaves. O conservante utilizado é o CCA (Cobre, Cromo e Arsênio) que penetra nas fibras da madeira revestindo-as com Cobre (ação fungicida), Cromo (ação fixadora) e Arsênio (ação inseticida), logo protegendo-a de fungos, insetos (cupins e brocas) e até mesmo de organismos marinhos. O processo de tratamento atende todas as especificações das normas da ABNT." +
                        "</p><p>O Deck de Pinus Tratado tem uma garantia de até 15 anos.</p><p>Aplicações: É ideal para de paisagismo em residências e casas de campo, áreas de lazer, piscinas e etc.</p>"
                },
                {
                    id: 3, nome: "PERGOLADOS", path: "/pergolados",
                    tituloGoogle: "Pergolados",
                    imagens: [
                        require("@/assets/pergolado03.jpeg"),
                        require("@/assets/pergolado01.jpeg"),
                        require("@/assets/pergolado02.jpeg"),
                        require("@/assets/pergolado04.jpg"),
                        require("@/assets/pergolado05.jpg"),
                        require("@/assets/pergolado06.jpg"),
                        require("@/assets/pergolado07.jpeg"),
                        require("@/assets/pergolado08.jpeg"),
                        require("@/assets/pergolado09.jpeg"),
                        require("@/assets/pergolado10.jpeg"),
                        require("@/assets/pergolado11.jpeg"),
                        require("@/assets/pergolado12.jpeg"),
                        require("@/assets/pergolado13.jpeg"),
                        require("@/assets/pergolado14.jpeg"),
                        require("@/assets/pergolado15.jpeg"),
                        require("@/assets/pergolado16.jpeg"),
                        require("@/assets/pergolado17.jpeg"),
                        require("@/assets/pergolado18.jpeg"),
                        require("@/assets/pergolado19.jpeg"),
                        require("@/assets/pergolado20.jpeg"),
                        require("@/assets/pergolado21.jpeg"),
                        require("@/assets/pergolado22.jpeg"),
                        require("@/assets/pergolado23.jpeg"),
                        require("@/assets/pergolado24.jpeg"),
                    ],
                    texto: "<p>Os pergolados de madeira são perfeitos para transformar uma área externa em um local ideal para relaxar e adicionar personalidade ao ambiente.</p>\n" +
                        "<p>Os pergolados são construções feitas a partir de vários pilares e vigas paralelas de madeira. São usados em diversos estabelecimentos como elemento decorativo ou como estrutura essencial para reduzir incidência solar ou fluvial.</p>\n" +
                        "<p>Sua arquitetura criativa e bem elaborada, dá a qualquer ambiente externo a sensação de um espaço mais aconchegante e elegante. Agregando valor à sua residência.</p>"
                },
                {
                    id: 4, nome: "QUIOSQUES", path: "/quiosques",
                    tituloGoogle: "Quiosques",
                    imagens: [
                        require("@/assets/quiosque01.jpeg"),
                        require("@/assets/madeireira2.jpg"),
                    ],
                    texto: "<p>Muitos dos clientes conquistam a casa que tanto sonharam e que tenha um espaço no jardim, justamente para montar sua área de lazer. Porém esse lugar precisa de uma cobertura para proteger do sol e chuva, por menor que seja o espaço da área de lazer, ele merece receber uma decoração a mais e ser transformado em um lugar lindo e confortável, é então que tem a ideia de efetuar um rancho, quiosque ou chamados também de cobertura." +
                        "</br></br>" +
                        "A Madeireira efetua instalações com qualidade e eficiência, sempre construindo quiosques que proporcionam um ambiente decorado e que garante sombra, trazendo funcionalidade ao ambiente. Eles podem ser instalados de diversas maneiras e são construídos com madeiras quadradas ou roliças (Eucalipto tratado)." +
                        "</br></br>" +
                        "Leve e rustico para seu espaço, o quiosque segue diversas tendências e podem ser mais sofisticados e modernos também, dependendo do gosto de cada cliente. Eles podem ser pequenos ou grandes, além de poderem ter uma cor bem vibrante ou até mesmo ser colorido. Construímos em churrasqueiras, piscinas, salões de festas, varandas e garagens.</p>"
                },
                {
                    id: 5, nome: "CASA DE MADEIRA E ALVENARIA", path: "/casas",
                    tituloGoogle: "Casas de Madeira e Alvenaria",
                    imagens: [
                        require("@/assets/casa01.jpg"),
                        require("@/assets/casa02.jpg"),
                        require("@/assets/casa03.jpeg"),
                        require("@/assets/casa04.jpeg"),
                        require("@/assets/casa05.jpeg"),
                        require("@/assets/casa06.jpeg"),
                        require("@/assets/casa07.jpeg"),
                        require("@/assets/casa08.jpeg"),
                        require("@/assets/casa09.jpeg"),
                        require("@/assets/casa10.jpeg"),
                        require("@/assets/casa11.jpeg"),
                        require("@/assets/casa12.jpeg"),
                        require("@/assets/casa13.jpeg"),
                        require("@/assets/casa14.jpeg"),
                        require("@/assets/casa15.jpeg"),
                        require("@/assets/casa16.jpeg"),
                        require("@/assets/casa17.jpeg"),
                        require("@/assets/casa18.jpeg"),
                        require("@/assets/casa19.jpeg"),
                        require("@/assets/casa20.jpeg"),
                        require("@/assets/casa21.jpeg"),
                        require("@/assets/casa22.jpeg"),
                        require("@/assets/casa23.jpeg"),
                        require("@/assets/casa24.jpeg"),
                        require("@/assets/casa25.jpeg"),
                    ],
                    texto: "<p>Construímos casas de madeira e alvenaria, com excelente padrão de qualidade respeitando o prazo de entrega acordado com nossos clientes. Nossa equipe de profissionais é altamente empenhada e comprometida com os serviços realizados.\n" +
                        "</br></br>" +
                        "Tem um projeto ou não sabe por onde começar?\n" +
                        "Fale com a gente! Trabalhamos com atendimento diferenciado ao cliente disponibilizando uma equipe de profissionais especializados na área da construção civil.\n" +
                        "Entendemos a funcionalidade e desgaste que uma construção causa a você, então, nosso objetivo é a satisfação, qualidade de alto acabamento e atenção direta ao cliente.</p>"

                },
                {
                    id: 6,
                    nome: "EUCALIPTO TRATADO", path: "/eucalipto",
                    tituloGoogle: "Eucalipto Tratado",
                    imagens: [
                        require("@/assets/eucalipto/guia.jpg"),
                        require("@/assets/eucalipto/barrote.jpg"),
                        require("@/assets/eucalipto/costaneiras.jpg"),
                        require("@/assets/eucalipto/lambri.jpg"),
                        require("@/assets/eucalipto/mouroes.jpg"),
                        require("@/assets/eucalipto/ripas_para_telhados.jpg"),
                    ],
                    textoImagem: [
                        "Guias",
                        "Barrotes",
                        "Costaneiras",
                        "Lambris",
                        "Mourões",
                        "Ripas",
                    ],
                    texto: "<p>Chama-se de eucalipto tratado, ou eucalipto autoclavado, a madeira de eucalipto que passa " +
                        "pelo processo de tratamento no autoclave, garantindo maior durabilidade e resistência à intemperes como sol, " +
                        "chuva e umidade e ao ataque de fungos, insetos, cupins e brocas. A garantia do tratamento é de 15 anos.</p>"

                },
                {
                    id: 7,
                    nome: "PINUS TRATADO",
                    tituloGoogle: "Pinus Tratado", path: "/pinus",
                    imagens: [
                        require("@/assets/pinus/tabuas.jpg"),
                        require("@/assets/pinus/assoalho.jpg"),
                        require("@/assets/pinus/barrote.jpg"),
                        require("@/assets/pinus/deck.jpg"),
                        require("@/assets/pinus/espelho.jpg"),
                        require("@/assets/pinus/forro.jpg"),
                        require("@/assets/pinus/mata_junta.jpg"),
                        require("@/assets/pinus/meia_cana.jpg"),
                        require("@/assets/pinus/parede_divisoria.jpg"),
                        require("@/assets/pinus/taco.jpg"),
                    ],
                    textoImagem: [
                        "Tábuas",
                        "Assoalhos",
                        "Barrotes",
                        "Decks",
                        "Espelhos",
                        "Forros",
                        "Mata-juntas",
                        "Meia-cana",
                        "Parede divisória",
                        "Tacos",
                    ],
                    texto: "<p>Pinus tratado, ou pinus autoclavado, a madeira de pinus que passa " +
                        "pelo processo de tratamento no autoclave, garantindo maior durabilidade e resistência à intemperes como sol, " +
                        "chuva e umidade e ao ataque de fungos, insetos, cupins e brocas. A garantia do tratamento é de 15 anos.</p></br>"
                },

            ],
        })
    }
</script>

<style scoped>
  .underline {

    text-decoration: underline #795548;
    text-decoration-thickness: 4px;
    text-underline-offset: 14px;
  }
</style>
