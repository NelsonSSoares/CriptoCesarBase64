function codificar(){

    let message = document.getElementById('message').value;
    let opcaoCod = document.getElementById('opcaoCod').value;
    let chaveEsc = document.getElementById('chaveEsc').value;

  
    validaInput(message, opcaoCod, chaveEsc);
    
}

function decodificar(){

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


document.getElementById('resultado').value = "teste"

/*
// var chave = document.getElementById("key")
// document.getElementById("key").defaultValue = 0;
function changeCipher(){
    if(document.getElementById("selectCipher").value == "caesar"){
        document.getElementById("caesar").style.display = "flex";
        document.getElementById("base64").style.display = "none";
        
    }
    else if(document.getElementById("selectCipher").value == "base64"){
        
        document.getElementById("base64").style.display = "flex";
        document.getElementById("caesar").style.display = "none";

    }else{

        document.getElementById("caesar").style.display = "none";
        document.getElementById("base64").style.display = "none";
    }


}

function codeOrDecode(){
    var radioSel = document.getElementById("radioCod");
    var chave = document.getElementById("key");
    var key = parseInt(chave.value);
    key = key%26;
    console.log(radioSel.value );
    if (document.getElementById('decod').checked){
        key = (-1)*key
    }
    codeCaesar(key);
}

function codeCaesar(key){
    var entrada = document.getElementById("inputCaesar").value;
    var saida = document.getElementById("CaesarResult"); 
    var decod = "";
    saida.innerHTML = "";

    for (var i = 0; i < entrada.length; i++ ){
        decod = entrada.charCodeAt(i);
        
        //letra é minustula
        if (decod>=97 && decod<= 122){
            decod = decod + key;
            if (decod> 122){
                decod = decod - 26;
            }else if(decod< 97){
                decod = decod + 26;
            }
        }
        //letra é maiucula
        if (decod>=65 && decod<= 90){
            decod = decod + key;
            if (decod> 90){
                decod = decod - 26;
            }else if(decod<65){
                decod = decod + 26;
            }
        }
        saida.innerHTML += String.fromCharCode(decod);
    }
    
}

function base64CodeNDecode(){

    var entrada = document.getElementById("inputBase64").value;
    var saida = document.getElementById("base64Result"); 
    
    var radioSel = document.getElementById("radioCod");
   
    console.log(radioSel.value );
    if (document.getElementById('decod').checked){
        saida.innerHTML = atob(entrada);
    }
    else{
        console.log(btoa(entrada))
        
        saida.innerHTML = btoa(entrada);

    }
    
}
*/