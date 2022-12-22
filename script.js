let agora = new Date()

function carregar(){

    let msgdia = document.getElementById('dia')
 
    let msg = document.getElementById('info')
    
    let imagem = document.querySelector('#img')

    
    let hora = agora.getHours()
    /*let hora = 19*/
    let minuto = agora.getMinutes()
    let data = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let dia = agora.getDay()
    
    
    
    msg.innerHTML = `${hora}:${minuto}`

    if(hora >= 7 && hora < 12){
        //Bom dia
        imagem.src = 'imgmodelo01/recife-antigo-praccca7a-do-marco-zero-pernambuco-1-scaled.jpeg'
    }else if(hora >= 12 && hora < 17 ){
        //Boa Tarde
        imagem.src = 'imgmodelo01/rua_do_bom_jesus-1024x532.jpg'
        document.body.style.background =  'linear-gradient(45deg,#FAEAB1, #E5BA73, #C58940)'
        /*document.body.style.background.size = '300%, 300%' //esta off
        document.body.style.animation = '@kayframse colors 15s ease infinite' */
    }else if(hora >= 17 && hora < 19){
        //Boa Noite
        img.src = 'imgmodelo01/2c946db9e344660cf5fab517c0695b6b.jpg'
        document.body.style.background =  'linear-gradient(45deg,#495579, #263159, #251749)'
        let h1 =  document.getElementsByTagName("h1")[0] 
        let rodape =  document.getElementsByTagName("footer")[0] 
            h1.style.color = '#FFF' 
            rodape.style.color = '#FFF' 
        /*document.section.style.color= '#FFFBEB'*/
    }else{
        //Boa Madrugada
        img.src = 'imgmodelo01/32872017010_2b67560254_b.jpg'
        document.body.style.background =  'linear-gradient(45deg,#181D31, #181D31, #181D31)'
    }

    if(dia == 0){
        msgdia.innerHTML = `Domingo, ${data}/${mes}/${ano}`
    }else if(dia == 1){
        msgdia.innerHTML = `Segunda, ${data}/${mes}/${ano}`
    }else if(dia == 2){
        msgdia.innerHTML = `Terça, ${data}/${mes}/${ano}`
    }else if(dia == 3){
        msgdia.innerHTML = `Quarta, ${data}/${mes}/${ano}`
    }else if(dia == 4){
        msgdia.innerHTML = `Quinta, ${data}/${mes}/${ano}`
    }else if(dia == 5){
        msgdia.innerHTML = `Sexta, ${data}/${mes}/${ano}`
    }else{
        msgdia.innerHTML = `Sábado, ${data}/${mes}/${ano}`
    }


    

}








