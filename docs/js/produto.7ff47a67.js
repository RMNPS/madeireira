(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["produto"],{"0070":function(e,t,a){e.exports=a.p+"img/deck15.0c165858.jpeg"},"00df":function(e,t,a){e.exports=a.p+"img/playground05.716402ef.jpg"},"02a7":function(e,t,a){e.exports=a.p+"img/deck05.065b2f7f.jpeg"},"03cc":function(e,t,a){e.exports=a.p+"img/playground06.b608cf19.jpg"},"0408":function(e,t,a){e.exports=a.p+"img/deck25.26a098f7.jpeg"},"048a":function(e,t,a){e.exports=a.p+"img/playground12.60ef16b9.jpeg"},"0571":function(e,t,a){e.exports=a.p+"img/assoalho.53f796bb.jpg"},"07e6":function(e,t,a){e.exports=a.p+"img/casa15.9316177b.jpeg"},"0daa":function(e,t,a){e.exports=a.p+"img/deck06.73d05139.jpeg"},"0e9b":function(e,t,a){"use strict";var o=a("302a"),s=a.n(o);s.a},"117b":function(e,t,a){e.exports=a.p+"img/pergolado03.c9568a89.jpeg"},"15a4":function(e,t,a){e.exports=a.p+"img/casa02.dee2fba6.jpg"},"172c":function(e,t,a){e.exports=a.p+"img/barrote.217c35e8.jpg"},"18e1":function(e,t,a){e.exports=a.p+"img/parede_divisoria.2dbb19eb.jpg"},"190e":function(e,t,a){e.exports=a.p+"img/casa13.9c128292.jpeg"},"1d38":function(e,t,a){e.exports=a.p+"img/pergolado16.b4eeb189.jpeg"},2130:function(e,t,a){e.exports=a.p+"img/mouroes.b7de3e6e.jpg"},"274f":function(e,t,a){e.exports=a.p+"img/pergolado06.4734031a.jpg"},"294a":function(e,t,a){e.exports=a.p+"img/casa17.bd9d2664.jpeg"},"2b9b":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{attrs:{color:"white"}},[e.produtoSelecionado?a("v-container",{staticClass:"mx-md-6 fill-height d-flex justify-center",staticStyle:{"margin-top":"50px"},attrs:{fluid:""}},[e.$vuetify.breakpoint.smAndDown?a("v-row",{staticClass:"pt-12 mt-2 px-3 pb-4",attrs:{align:"center",justify:"center"}},[a("span",{ref:"nome",staticClass:"headline brown--text font-weight-light underline"},[e._v(e._s(e.produtoSelecionado.nome))])]):e._e(),a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"4",order:"12","order-md":"1"}},[e.$vuetify.breakpoint.mdAndUp?a("v-row",{staticClass:"pt-md-12 px-3 ",attrs:{align:"center",justify:"end"}},[a("span",{staticClass:"headline brown--text font-weight-light underline"},[e._v(e._s(e.produtoSelecionado.nome))])]):e._e(),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:" mx-3 mx-md-0"},[a("span",{staticClass:"brown--text text-justify mx-12 ",domProps:{innerHTML:e._s(e.produtoSelecionado.texto)}}),a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[a("v-card",{staticClass:"text-center py-1",attrs:{outlined:"",elevation:o?"5":"0"},on:{click:function(){e.dialog=!0}}},[a("a",{staticClass:"green--text  subtitle-1 font-weight-medium"},[e._v("Clique aqui e faça seu orçamento conosco")])])]}}],null,!1,4107950601)})],1)],1)],1),a("v-col",{staticClass:"pt-0 pt-md-3 pb-0",attrs:{cols:"12",md:"7",order:"1","order-md":"12"}},[a("v-card",{staticClass:"ma-2 mt-md-3 mx-md-6"},[a("v-img",{staticClass:"white--text ",attrs:{src:e.produtoSelecionado.imagens[e.indexFoto],height:e.$vuetify.breakpoint.smAndDown?250:500}})],1),a("v-slide-group",{staticClass:"pa-4 pt-0",attrs:{"active-class":"success","center-active":"",mandatory:""},model:{value:e.indexFoto,callback:function(t){e.indexFoto=t},expression:"indexFoto"}},e._l(e.produtoSelecionado.imagens,(function(t,o){return a("v-slide-item",{key:o,attrs:{value:o},scopedSlots:e._u([{key:"default",fn:function(s){s.active;var i=s.toggle;return[a("v-card",{staticClass:"ma-2",attrs:{height:e.$vuetify.breakpoint.smAndDown?50:100,width:e.$vuetify.breakpoint.smAndDown?100:200},on:{click:i}},[a("v-img",{staticClass:"fill-height",attrs:{src:t}},[e.produtoSelecionado.textoImagem?a("v-overlay",{staticStyle:{"text-align":"center"},attrs:{absolute:"",opacity:o==e.indexFoto?"0.8":"0.1"}},[a("span",{staticClass:"font-weight-bold white--text "},[e._v(e._s(e.produtoSelecionado.textoImagem[o]))])]):e._e()],1)],1)]}}],null,!0)})})),1)],1)],1)],1):e._e(),a("formulario",{attrs:{produto:e.produtoSelecionado.nome,"fone-de-madeira":e.telefone},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1)},s=[],i=(a("d3b7"),a("ac1f"),a("5319"),a("b85c")),n=function(){return a.e("chunk-55749f98").then(a.bind(null,"31f6"))},r={components:{Formulario:n},props:{telefone:{type:String,default:""}},head:function(){return{title:{inner:this.produtoSelecionado.tituloGoogle},meta:[{name:"description",content:this.produtoSelecionado.texto.replace(/<p>/g,"").replace(/<\/p>/g,"")}],link:[{rel:"icon",href:a("99dd"),sizes:"48x48",type:"image/png"}]}},name:"Produto",beforeMount:function(){var e,t=this.$router.currentRoute.path,a=Object(i["a"])(this.produtos);try{for(a.s();!(e=a.n()).done;){var o=e.value;if(o.path===t){this.produtoSelecionado=o;break}}}catch(s){a.e(s)}finally{a.f()}},methods:{},mounted:function(){this.$vuetify.goTo(0)},data:function(){return{dialog:!1,produtoSelecionado:null,indexFoto:0,fotos:[],produtos:[{id:1,nome:"PLAYGROUNDS",path:"/playgrounds",tituloGoogle:"Playgrounds - Parquinhos, Casinhas",imagens:[a("de85"),a("57ba"),a("3742"),a("921e"),a("00df"),a("03cc"),a("2cfa"),a("5c29"),a("e3b0"),a("754c"),a("b8a2"),a("048a"),a("4e01")],texto:"<p>Playground de Madeira fabricado com Eucalipto Tratado, Madeira Ecológica e com alta durabilidade, garantida contra apodrecimento e cupins. Buscamos a excelência máxima em nossos produtos, sempre usando os melhores materiais, aliados à qualidade da mão de obra de nossa equipe especializada.</p><p>Nos seguimos as exigências de segurança da ABNT, para prevenir acidentes com as crianças  que utilizam nossos parques. Por exemplo: área de circulação adequada ao redor do playground, tinta atóxica, cantos arredondados, madeira sem soltar lascas, pregos e parafusos galvanizados.</p><p>Temos diversos tipos de Playground em Madeira:  Casa do Tarzan, Balanço, Gangorra, Escorregador, Ponte Pênsil, etc.</p>"},{id:2,nome:"DECKS",path:"/decks",tituloGoogle:"Decks",imagens:[a("6c88"),a("b583"),a("d384"),a("98e0"),a("02a7"),a("0daa"),a("9765"),a("bfef"),a("c4ff"),a("59e9"),a("bc26"),a("41eb"),a("a79db"),a("ba4b"),a("0070"),a("a8d5"),a("b1cb"),a("2fd9"),a("7fea"),a("da6f"),a("a9a5"),a("d27c"),a("6949"),a("6476"),a("0408"),a("900d"),a("66ab")],texto:"<p>O Deck de Pinus Tratado vem cada vez mais conquistando seu espaço no mercado, pois é uma madeira de reflorestamento e com uma alta durabilidade, substituindo perfeitamente as madeiras de lei.</p><p>O tratamento da madeira é feito através do processo de vácuo-pressão em unidades industriais denominadas autoclaves. O conservante utilizado é o CCA (Cobre, Cromo e Arsênio) que penetra nas fibras da madeira revestindo-as com Cobre (ação fungicida), Cromo (ação fixadora) e Arsênio (ação inseticida), logo protegendo-a de fungos, insetos (cupins e brocas) e até mesmo de organismos marinhos. O processo de tratamento atende todas as especificações das normas da ABNT.</p><p>O Deck de Pinus Tratado tem uma garantia de até 15 anos.</p><p>Aplicações: É ideal para de paisagismo em residências e casas de campo, áreas de lazer, piscinas e etc.</p>"},{id:3,nome:"PERGOLADOS",path:"/pergolados",tituloGoogle:"Pergolados",imagens:[a("117b"),a("3490"),a("e2f8"),a("59ae"),a("e15e"),a("274f"),a("d5eb"),a("83d2"),a("f2d1"),a("c0ea"),a("ada9"),a("be5b"),a("ae1f"),a("aedf"),a("aac7"),a("1d38"),a("dec5"),a("672a"),a("3616"),a("998d"),a("a5f0"),a("4a6c"),a("548e"),a("a6f7")],texto:"<p>Os pergolados de madeira são perfeitos para transformar uma área externa em um local ideal para relaxar e adicionar personalidade ao ambiente.</p>\n<p>Os pergolados são construções feitas a partir de vários pilares e vigas paralelas de madeira. São usados em diversos estabelecimentos como elemento decorativo ou como estrutura essencial para reduzir incidência solar ou fluvial.</p>\n<p>Sua arquitetura criativa e bem elaborada, dá a qualquer ambiente externo a sensação de um espaço mais aconchegante e elegante. Agregando valor à sua residência.</p>"},{id:4,nome:"QUIOSQUES",path:"/quiosques",tituloGoogle:"Quiosques",imagens:[a("3f9d"),a("a2d0")],texto:"<p>Muitos dos clientes conquistam a casa que tanto sonharam e que tenha um espaço no jardim, justamente para montar sua área de lazer. Porém esse lugar precisa de uma cobertura para proteger do sol e chuva, por menor que seja o espaço da área de lazer, ele merece receber uma decoração a mais e ser transformado em um lugar lindo e confortável, é então que tem a ideia de efetuar um rancho, quiosque ou chamados também de cobertura.</br></br>A Madeireira efetua instalações com qualidade e eficiência, sempre construindo quiosques que proporcionam um ambiente decorado e que garante sombra, trazendo funcionalidade ao ambiente. Eles podem ser instalados de diversas maneiras e são construídos com madeiras quadradas ou roliças (Eucalipto tratado).</br></br>Leve e rustico para seu espaço, o quiosque segue diversas tendências e podem ser mais sofisticados e modernos também, dependendo do gosto de cada cliente. Eles podem ser pequenos ou grandes, além de poderem ter uma cor bem vibrante ou até mesmo ser colorido. Construímos em churrasqueiras, piscinas, salões de festas, varandas e garagens.</p>"},{id:5,nome:"CASA DE MADEIRA E ALVENARIA",path:"/casas",tituloGoogle:"Casas de Madeira e Alvenaria",imagens:[a("34b1"),a("15a4"),a("eab6"),a("2fcc"),a("686a"),a("7df2"),a("52ca"),a("dbfc"),a("94f3"),a("54ad"),a("38e9"),a("7247"),a("190e"),a("8951"),a("07e6"),a("756b"),a("294a"),a("c8eb"),a("2f44"),a("6a37"),a("db49"),a("ac2e"),a("34f8"),a("9bc5"),a("6a98")],texto:"<p>Construímos casas de madeira e alvenaria, com excelente padrão de qualidade respeitando o prazo de entrega acordado com nossos clientes. Nossa equipe de profissionais é altamente empenhada e comprometida com os serviços realizados.\n</br></br>Tem um projeto ou não sabe por onde começar?\nFale com a gente! Trabalhamos com atendimento diferenciado ao cliente disponibilizando uma equipe de profissionais especializados na área da construção civil.\nEntendemos a funcionalidade e desgaste que uma construção causa a você, então, nosso objetivo é a satisfação, qualidade de alto acabamento e atenção direta ao cliente.</p>"},{id:6,nome:"EUCALIPTO TRATADO",path:"/eucalipto",tituloGoogle:"Eucalipto Tratado",imagens:[a("68ae"),a("172c"),a("8987"),a("51f0"),a("2130"),a("90bd")],textoImagem:["Guias","Barrotes","Costaneiras","Lambris","Mourões","Ripas"],texto:"<p>Chama-se de eucalipto tratado, ou eucalipto autoclavado, a madeira de eucalipto que passa pelo processo de tratamento no autoclave, garantindo maior durabilidade e resistência à intemperes como sol, chuva e umidade e ao ataque de fungos, insetos, cupins e brocas. A garantia do tratamento é de 15 anos.</p>"},{id:7,nome:"PINUS TRATADO",tituloGoogle:"Pinus Tratado",path:"/pinus",imagens:[a("ef0f"),a("0571"),a("e852"),a("32eb"),a("c348"),a("5089"),a("e77e"),a("9166"),a("18e1"),a("826d")],textoImagem:["Tábuas","Assoalhos","Barrotes","Decks","Espelhos","Forros","Mata-juntas","Meia-cana","Parede divisória","Tacos"],texto:"<p>Pinus tratado, ou pinus autoclavado, a madeira de pinus que passa pelo processo de tratamento no autoclave, garantindo maior durabilidade e resistência à intemperes como sol, chuva e umidade e ao ataque de fungos, insetos, cupins e brocas. A garantia do tratamento é de 15 anos.</p></br>"}]}}},c=r,d=(a("0e9b"),a("2877")),p=a("6544"),u=a.n(p),l=a("b0af"),f=a("62ad"),g=a("a523"),m=a("ce87"),h=a("adda"),v=a("a797"),b=a("0fd9"),x=a("8dd9"),j=a("7efd"),y=a("9dbe"),w=Object(d["a"])(c,o,s,!1,null,"cb843ec6",null);t["default"]=w.exports;u()(w,{VCard:l["a"],VCol:f["a"],VContainer:g["a"],VHover:m["a"],VImg:h["a"],VOverlay:v["a"],VRow:b["a"],VSheet:x["a"],VSlideGroup:j["a"],VSlideItem:y["a"]})},"2cfa":function(e,t,a){e.exports=a.p+"img/playground07.696cca5e.jpg"},"2f44":function(e,t,a){e.exports=a.p+"img/casa19.49cbf34f.jpeg"},"2fcc":function(e,t,a){e.exports=a.p+"img/casa04.a53524da.jpeg"},"2fd9":function(e,t,a){e.exports=a.p+"img/deck18.1c5a801e.jpeg"},"302a":function(e,t,a){},"32eb":function(e,t,a){e.exports=a.p+"img/deck.8be4c72e.jpg"},3490:function(e,t,a){e.exports=a.p+"img/pergolado01.0ffdef36.jpeg"},"34b1":function(e,t,a){e.exports=a.p+"img/casa01.c10f9d60.jpg"},"34f8":function(e,t,a){e.exports=a.p+"img/casa23.cf4508ca.jpeg"},3616:function(e,t,a){e.exports=a.p+"img/pergolado19.2bd63074.jpeg"},3742:function(e,t,a){e.exports=a.p+"img/playground03.05d6c3b8.jpeg"},"38e9":function(e,t,a){e.exports=a.p+"img/casa11.a1617806.jpeg"},"3c93":function(e,t,a){},"3f9d":function(e,t,a){e.exports=a.p+"img/quiosque01.d9d1ec27.jpeg"},"41eb":function(e,t,a){e.exports=a.p+"img/deck12.3a6f3559.jpeg"},"4a6c":function(e,t,a){e.exports=a.p+"img/pergolado22.6e3451db.jpeg"},"4e01":function(e,t,a){e.exports=a.p+"img/playground13.e834a575.jpeg"},5089:function(e,t,a){e.exports=a.p+"img/forro.59b46540.jpg"},"51f0":function(e,t,a){e.exports=a.p+"img/lambri.be7a9ef0.jpg"},"52ca":function(e,t,a){e.exports=a.p+"img/casa07.d14faeff.jpeg"},"548e":function(e,t,a){e.exports=a.p+"img/pergolado23.afb38ce3.jpeg"},"54ad":function(e,t,a){e.exports=a.p+"img/casa10.d6aa5c22.jpeg"},"57ba":function(e,t,a){e.exports=a.p+"img/playground02.0d06ed15.jpeg"},"59ae":function(e,t,a){e.exports=a.p+"img/pergolado04.0097500c.jpg"},"59e9":function(e,t,a){e.exports=a.p+"img/deck10.6a04a444.jpeg"},"5c29":function(e,t,a){e.exports=a.p+"img/playground08.d00a8913.jpeg"},"608c":function(e,t,a){},"615b":function(e,t,a){},6476:function(e,t,a){e.exports=a.p+"img/deck24.38180d7a.jpeg"},"66ab":function(e,t,a){e.exports=a.p+"img/deck27.a6898db8.jpeg"},"672a":function(e,t,a){e.exports=a.p+"img/pergolado18.43a0c41c.jpeg"},"686a":function(e,t,a){e.exports=a.p+"img/casa05.47713473.jpeg"},"68ae":function(e,t,a){e.exports=a.p+"img/guia.26e836f0.jpg"},6949:function(e,t,a){e.exports=a.p+"img/deck23.e3256db2.jpeg"},"6a37":function(e,t,a){e.exports=a.p+"img/casa20.eb05e187.jpeg"},"6a98":function(e,t,a){e.exports=a.p+"img/casa25.4b6f3bc5.jpeg"},"6c88":function(e,t,a){e.exports=a.p+"img/deck01.204acb2e.jpg"},7247:function(e,t,a){e.exports=a.p+"img/casa12.bcb87436.jpeg"},"754c":function(e,t,a){e.exports=a.p+"img/playground10.2de63a28.jpeg"},"756b":function(e,t,a){e.exports=a.p+"img/casa16.6e0a3a52.jpeg"},"7df2":function(e,t,a){e.exports=a.p+"img/casa06.d827b928.jpeg"},"7efd":function(e,t,a){"use strict";a("99af"),a("fb6a"),a("a9e3");var o=a("5530"),s=(a("608c"),a("9d26")),i=a("0789"),n=a("604c"),r=a("dc22"),c=a("c3f0"),d=a("58df"),p=Object(d["a"])(n["a"]).extend({name:"base-slide-group",directives:{Resize:r["a"],Touch:c["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(e){return!isNaN(parseInt(e))}},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(o["a"])(Object(o["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext:function(){if(!this.hasAffixes)return!1;var e=this.widths,t=e.content,a=e.wrapper;return t>Math.abs(this.scrollOffset)+a},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(e){this.$refs.content.style.transform="translateX(".concat(-e,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var e=this,t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return e.onAffixClick("next")}},key:"next"},[t])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(e){var t=e;this.$vuetify.rtl&&"prev"===e?t="next":this.$vuetify.rtl&&"next"===e&&(t="prev");var a="".concat(e[0].toUpperCase()).concat(e.slice(1)),o=this["has".concat(a)];return this.showArrows||o?this.$createElement(s["a"],{props:{disabled:!o}},this["".concat(t,"Icon")]):null},genPrev:function(){var e=this,t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return e.onAffixClick("prev")}},key:"prev"},[t])},genTransition:function(e){return this.$createElement(i["b"],[this.genIcon(e)])},genWrapper:function(){var e=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(e,t,a,o){var s=a?-1:1,i=s*o+("prev"===e?-1:1)*t.wrapper;return s*Math.max(Math.min(i,t.content-t.wrapper),0)},onAffixClick:function(e){this.$emit("click:".concat(e)),this.scrollTo(e)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(e){var t=this.$refs.content;this.startX=this.scrollOffset+e.touchstartX,t.style.setProperty("transition","none"),t.style.setProperty("willChange","transform")},onTouchMove:function(e){this.scrollOffset=this.startX-e.touchmoveX},onTouchEnd:function(){var e=this.$refs,t=e.content,a=e.wrapper,o=t.clientWidth-a.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-o&&(this.scrollOffset=-o):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=o&&(this.scrollOffset=o)},overflowCheck:function(e,t){e.stopPropagation(),this.isOverflowing&&t(e)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(e,t,a,o){var s=e.clientWidth,i=a?t.content-e.offsetLeft-s:e.offsetLeft;a&&(o=-o);var n=t.wrapper+o,r=s+i,c=.4*s;return i<o?o=Math.max(i-c,0):n<r&&(o=Math.min(o-(n-r-c),t.content-t.wrapper)),a?-o:o},calculateCenteredOffset:function(e,t,a){var o=e.offsetLeft,s=e.clientWidth;if(a){var i=t.content-o-s/2-t.wrapper/2;return-Math.min(t.content-t.wrapper,Math.max(0,i))}var n=o+s/2-t.wrapper/2;return Math.min(t.content-t.wrapper,Math.max(0,n))},scrollTo:function(e){this.scrollOffset=this.calculateNewOffset(e,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var e=this;window.requestAnimationFrame((function(){var t=e.$refs,a=t.content,o=t.wrapper;e.widths={content:a?a.clientWidth:0,wrapper:o?o.clientWidth:0},e.isOverflowing=e.widths.wrapper<e.widths.content,e.scrollIntoView()}))}},render:function(e){return e("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});t["a"]=p.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},"7fea":function(e,t,a){e.exports=a.p+"img/deck19.4da466e4.jpeg"},"826d":function(e,t,a){e.exports=a.p+"img/taco.5cbbb9b9.jpg"},"83d2":function(e,t,a){e.exports=a.p+"img/pergolado08.02aa503e.jpeg"},8951:function(e,t,a){e.exports=a.p+"img/casa14.b184616a.jpeg"},8987:function(e,t,a){e.exports=a.p+"img/costaneiras.e703e6b0.jpg"},"900d":function(e,t,a){e.exports=a.p+"img/deck26.30ad35f0.jpeg"},"90bd":function(e,t,a){e.exports=a.p+"img/ripas_para_telhados.f029ef69.jpg"},9166:function(e,t,a){e.exports=a.p+"img/meia_cana.60d58442.jpg"},"921e":function(e,t,a){e.exports=a.p+"img/playground04.995bff47.jpg"},"94f3":function(e,t,a){e.exports=a.p+"img/casa09.f2d60549.jpeg"},9765:function(e,t,a){e.exports=a.p+"img/deck07.d50e74b3.jpeg"},"98e0":function(e,t,a){e.exports=a.p+"img/deck04.df4e5991.jpeg"},"998d":function(e,t,a){e.exports=a.p+"img/pergolado20.c6d12e94.jpeg"},"99dd":function(e,t,a){e.exports=a.p+"img/favicon.7dc3b88a.png"},"9bc5":function(e,t,a){e.exports=a.p+"img/casa24.87420426.jpeg"},"9dbe":function(e,t,a){"use strict";var o=a("d903"),s=a("4e82"),i=a("58df");t["a"]=Object(i["a"])(o["a"],Object(s["a"])("slideGroup")).extend({name:"v-slide-item"})},a2d0:function(e,t,a){e.exports=a.p+"img/madeireira2.39dc35a5.jpg"},a5f0:function(e,t,a){e.exports=a.p+"img/pergolado21.921b57d0.jpeg"},a6f7:function(e,t,a){e.exports=a.p+"img/pergolado24.9f67de1b.jpeg"},a797:function(e,t,a){"use strict";a("a9e3");var o=a("5530"),s=(a("3c93"),a("a9ad")),i=a("7560"),n=a("f2e7"),r=a("58df");t["a"]=Object(r["a"])(s["a"],i["a"],n["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(o["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}})},a79db:function(e,t,a){e.exports=a.p+"img/deck13.988a5562.jpeg"},a8d5:function(e,t,a){e.exports=a.p+"img/deck16.d6ee1615.jpeg"},a9a5:function(e,t,a){e.exports=a.p+"img/deck21.c6cdaebb.jpeg"},aac7:function(e,t,a){e.exports=a.p+"img/pergolado15.ed507096.jpeg"},ac2e:function(e,t,a){e.exports=a.p+"img/casa22.b5b49f48.jpeg"},ada9:function(e,t,a){e.exports=a.p+"img/pergolado11.8843020e.jpeg"},ae1f:function(e,t,a){e.exports=a.p+"img/pergolado13.2914ba10.jpeg"},aedf:function(e,t,a){e.exports=a.p+"img/pergolado14.60543500.jpeg"},b0af:function(e,t,a){"use strict";a("0481"),a("4069"),a("a9e3");var o=a("5530"),s=(a("615b"),a("10d2")),i=a("297c"),n=a("1c87"),r=a("58df");t["a"]=Object(r["a"])(i["a"],n["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(o["a"])(Object(o["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},s["a"].options.computed.classes.call(this))},styles:function(){var e=Object(o["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),a=t.tag,o=t.data;return o.style=this.styles,this.isClickable&&(o.attrs=o.attrs||{},o.attrs.tabindex=0),e(a,this.setBackgroundColor(this.color,o),[this.genProgress(),this.$slots.default])}})},b1cb:function(e,t,a){e.exports=a.p+"img/deck17.8db2260e.jpeg"},b583:function(e,t,a){e.exports=a.p+"img/deck02.85bdf5b1.jpg"},b8a2:function(e,t,a){e.exports=a.p+"img/playground11.c736c739.jpeg"},ba4b:function(e,t,a){e.exports=a.p+"img/deck14.cdffa96c.jpeg"},bc26:function(e,t,a){e.exports=a.p+"img/deck11.93091bbb.jpeg"},be5b:function(e,t,a){e.exports=a.p+"img/pergolado12.fa35aa3c.jpeg"},bfef:function(e,t,a){e.exports=a.p+"img/deck08.6e3caea4.jpeg"},c0ea:function(e,t,a){e.exports=a.p+"img/pergolado10.09e39cb8.jpeg"},c348:function(e,t,a){e.exports=a.p+"img/espelho.31ed9867.jpg"},c3f0:function(e,t,a){"use strict";a("4160"),a("159b");var o=a("80d2"),s=function(e){var t=e.touchstartX,a=e.touchendX,o=e.touchstartY,s=e.touchendY,i=.5,n=16;e.offsetX=a-t,e.offsetY=s-o,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&a<t-n&&e.left(e),e.right&&a>t+n&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&s<o-n&&e.up(e),e.down&&s>o+n&&e.down(e))};function i(e,t){var a=e.changedTouches[0];t.touchstartX=a.clientX,t.touchstartY=a.clientY,t.start&&t.start(Object.assign(e,t))}function n(e,t){var a=e.changedTouches[0];t.touchendX=a.clientX,t.touchendY=a.clientY,t.end&&t.end(Object.assign(e,t)),s(t)}function r(e,t){var a=e.changedTouches[0];t.touchmoveX=a.clientX,t.touchmoveY=a.clientY,t.move&&t.move(Object.assign(e,t))}function c(e){var t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:function(e){return i(e,t)},touchend:function(e){return n(e,t)},touchmove:function(e){return r(e,t)}}}function d(e,t,a){var s=t.value,i=s.parent?e.parentElement:e,n=s.options||{passive:!0};if(i){var r=c(t.value);i._touchHandlers=Object(i._touchHandlers),i._touchHandlers[a.context._uid]=r,Object(o["p"])(r).forEach((function(e){i.addEventListener(e,r[e],n)}))}}function p(e,t,a){var s=t.value.parent?e.parentElement:e;if(s&&s._touchHandlers){var i=s._touchHandlers[a.context._uid];Object(o["p"])(i).forEach((function(e){s.removeEventListener(e,i[e])})),delete s._touchHandlers[a.context._uid]}}var u={inserted:d,unbind:p};t["a"]=u},c4ff:function(e,t,a){e.exports=a.p+"img/deck09.ccdcf932.jpeg"},c8eb:function(e,t,a){e.exports=a.p+"img/casa18.bd9d2664.jpeg"},ce87:function(e,t,a){"use strict";var o=a("16b7"),s=a("f2e7"),i=a("58df"),n=a("d9bd");t["a"]=Object(i["a"])(o["a"],s["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(n["c"])("v-hover should only contain a single element",this),e)):(Object(n["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var e}})},d27c:function(e,t,a){e.exports=a.p+"img/deck22.581e6b23.jpeg"},d384:function(e,t,a){e.exports=a.p+"img/deck03.8db2260e.jpeg"},d5eb:function(e,t,a){e.exports=a.p+"img/pergolado07.4f113ac9.jpeg"},d903:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a("ade3"),s=a("4e82"),i=a("58df"),n=a("d9bd"),r=a("2b0e"),c=r["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(e.data=this._b(e.data||{},e.tag,{class:Object(o["a"])({},this.activeClass,this.isActive)}),e):(Object(n["c"])("v-item should only contain a single element",this),e)):(Object(n["c"])("v-item is missing a default scopedSlot",this),null);var e}});t["b"]=Object(i["a"])(c,Object(s["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},da6f:function(e,t,a){e.exports=a.p+"img/deck20.0cad83e0.jpeg"},db49:function(e,t,a){e.exports=a.p+"img/casa21.f70642b0.jpeg"},dbfc:function(e,t,a){e.exports=a.p+"img/casa08.266d8e40.jpeg"},de85:function(e,t,a){e.exports=a.p+"img/playground01.c4e6ddd9.jpeg"},dec5:function(e,t,a){e.exports=a.p+"img/pergolado17.09c03d9f.jpeg"},e15e:function(e,t,a){e.exports=a.p+"img/pergolado05.21143a6d.jpg"},e2f8:function(e,t,a){e.exports=a.p+"img/pergolado02.5877ceab.jpeg"},e3b0:function(e,t,a){e.exports=a.p+"img/playground09.f8b3e926.jpeg"},e77e:function(e,t,a){e.exports=a.p+"img/mata_junta.c6dd2784.jpg"},e852:function(e,t,a){e.exports=a.p+"img/barrote.3724096d.jpg"},eab6:function(e,t,a){e.exports=a.p+"img/casa03.ce7a4585.jpeg"},ef0f:function(e,t,a){e.exports=a.p+"img/tabuas.c9c6512d.jpg"},f2d1:function(e,t,a){e.exports=a.p+"img/pergolado09.f90d215e.jpeg"}}]);
//# sourceMappingURL=produto.7ff47a67.js.map