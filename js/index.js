function codificar(){
    
const alfabeto = ["A","B","C","D","E","F","G","H","I","j","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var  message = document.getElementById('message').value.toUpperCase();
var  opcaoCod = document.getElementById('opcaoCod').value;
var  chaveEsc = document.getElementById('chaveEsc').value;
var  encripMsg = []

    
    
    chaveEsc = parseInt(chaveEsc);

    console.log(message);
  
    validaInput(message, opcaoCod, chaveEsc);
    
    if(opcaoCod == 'cesar'){
        message = message.split('');
        console.log(message);
        var cesar = []

      for( var i = 0 ; i <= message.length ; i++){
          
            for(var j = 0 ; j <= alfabeto.length; j++ ){
                if(message[i] == alfabeto[j]){
                    if(alfabeto[j] == undefined){
                      
                    }
                    encripMsg.push(alfabeto[j + chaveEsc]);
                    console.log(encripMsg);
                }
            }

        } 

        return document.getElementById('resultado').value = encripMsg;
         
    }else if(opcaoCod == 'base64'){
        var base64 = btoa(message);
        console.log(base64);
        return document.getElementById('resultado').value = base64;

    }

}

function decodificar(){
    let message = document.getElementById('message').value;
    let opcaoCod = document.getElementById('opcaoCod').value;
    let chaveEsc = document.getElementById('chaveEsc').value;

  
    validaInput(message, opcaoCod, chaveEsc);

    if(opcaoCod == 'base64'){

        var base64 = atob(message);
        
        return document.getElementById('resultado').value = base64;

    }else if(opcaoCod == 'cesar'){
        message = message.split('');
        console.log(message);
        var cesar = []

        for (var i = 0; i <= message.length; i++) {

            for (var j = 0; j <= alfabeto.length; j++) {
                if (message[i] == alfabeto[j]) {
                    if (alfabeto[j] == undefined) {

                    }
                    encripMsg.push(alfabeto[j - chaveEsc]);
                    console.log(encripMsg);
                }
            }

        }

        return document.getElementById('resultado').value = encripMsg;
    }
}

var opcaoCod = document.getElementById('opcaoCod');

opcaoCod.addEventListener('click', function(){
   if(opcaoCod.value == 'cesar'){
      document.getElementById('chave').style.display = 'flex';
   }else{
       document.getElementById('chave').style.display = 'none';
   }
});


function spawnBtn(){
    let btn = document.getElementById('btnCodificar');
    let btn1 = document.getElementById('btnDecodificar');
    btn.style.display = 'inline-block'
    btn.style.marginLeft = '22%'
    btn1.style.display = 'none'

}
function spawnBtn1(){
    let btn = document.getElementById('btnDecodificar');
    let btn1 = document.getElementById('btnCodificar');
    btn.style.display = 'inline-block'
    btn.style.marginLeft = '22%'
    btn1.style.display = 'none'
}

function validaInput(inp1, inp2, inp3){
    
    if(inp1 == '' || inp2 == ' '){
        
        let error = document.getElementById('error');
        let msgErro = document.getElementById('txtError');
        msgErro.style.color = 'red';
        msgErro.innerHTML = 'Preencha todos os Campos!'
        error.style.display = 'inline-block';
    }else if(inp2 == 'cesar'){
        
        if(inp3 == ''){
            let msgErro = document.getElementById('txtError');
            msgErro.style.color = 'red';
            error = document.getElementById('error');
            error.style.display = 'inline-block';
            msgErro.innerHTML = 'Informe o N° da chave!';
        }else{
            error.style.display = 'none';
        }
    
    }
    

}




