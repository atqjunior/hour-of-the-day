function  carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('img')
let horaAtual = new Date()
//let minutoAtual = new Date()
let hora = horaAtual.getHours()
//let minuto = minutoAtual.getSeconds();
msg.innerHTML = `Agora são ${hora} horas`

// Script
if (hora >= 0 && hora <= 12) {
  // bom dia  
  img.src = 'manhã.png' 
  document.body.style.background = '#c17a50'
} else if (hora >= 12 && hora <= 18){
  // boa tarde
  img.src = 'tarde.png'
  document.body.style.background = '#f7a034'
} else {
  // boa noite
  img.src = 'noite.png'
  document.body.style.background = '#637c95'
}
}