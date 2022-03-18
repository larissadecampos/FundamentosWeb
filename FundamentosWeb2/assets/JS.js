var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var asssunto = window.document.getElementById('assunto')

var okNome = false
var emailOk = false
var assuntoOk = false

function validarNome(){

   let txtNome = document.getElementById('txtNome')
  
     if(nome.value.length < 2){
       txtNome.innerHTML = "Nome Inválido"
       txtNome.style.color = 'red'
       okNome = false
  
      }else{
          txtNome.innerHTML ="Nome válido!"
          txtNome.style.color = 'Green'
          okNome = true
   }

 }
 
 function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true
    }
 }
 
 function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length >= 100) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
       txtAssunto.style.display = 'none'
       assuntoOk = true
    }
 }
 
 function enviar(){
   if(okNome == true){
       alert('Mensagem enviada com sucesso!')
   }else{
       alert("Preencha corretamente")
   }

   }
