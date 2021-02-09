import emailjs from 'emailjs-com';

export const enviarMensagem = function (e, props) {
    emailjs.sendForm('gmail', 'template_here', e.target, 'insert_user_id_here')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    let mensagem;
    if (props.nome) {
        let strProduto = props.produto ? "e cliquei em " + props.produto.toLowerCase() : ""
        mensagem = "Olá, sou " + props.nome + ", cheguei aqui pelo site " + strProduto + "\n" + props.mensagem + "\nVocê pode me ajudar?";
    } else {
        mensagem = "Olá, cheguei aqui pelo site. Eu gostaria de saber mais sobre " + props.produto.toLowerCase() + ". Você pode me ajudar?"
    }
    let uri = encodeURI(mensagem);
    window.open("https://api.whatsapp.com/send?phone=55" + props.telefone + "&text=" + uri, '_blank')
}
