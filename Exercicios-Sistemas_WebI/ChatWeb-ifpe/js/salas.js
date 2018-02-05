var token;
var nomeUsuario;
var salaAtual;
var salaAtualID;

window.onload = conexaoGetSalasPublicas();
window.onload = conexaoGetMinhasSalas(token);
window.onload = mostrarNomeUsuario();

document.getElementById("criarSala").addEventListener("submit", function(event){
	event.preventDefault();
	var nomesala = document.getElementById("nomeSala").value;
	var req = "token="+token+"&sala="+nomesala;
	conexaoPost("http://www.henriquesantos.pro.br/~hctsantos/chat2.php?acao=cad_sala", req);
	alert("Sala Cadastrada!");
});

document.getElementById("fecharCriarSala").addEventListener("click", function(event){
	event.preventDefault();
	location.reload();
});

function listarSalas(sala){
	var lista = document.getElementById("listaDisponiveis");
	var item = document.createElement("LI");
	var liga = document.createElement("A");
	var texto = document.createTextNode(sala.nome);
	liga.setAttribute("href","#");
	liga.setAttribute("onclick", "salaAtual = '"+sala.nome+"'; salaAtualID = '"+sala.id+"'; limparBoxMensagem(); setInterval(conexaoRetornarTodasMensagens, 1000); document.getElementById('boxMensagem').style.display='block'; setNomeSala(); setPrivacidade('Privado'); return false;");
	liga.appendChild(texto);
	item.appendChild(liga);
	lista.appendChild(item);
}

function listarMinhasSalas(sala){
	var lista = document.getElementById("listaMinhasSalas");
	var item = document.createElement("LI");
	var liga = document.createElement("A");
	var texto = document.createTextNode(sala.nome);
	liga.setAttribute("href","#");
	liga.setAttribute("onclick", "salaAtual = '"+sala.nome+"'; salaAtualID = '"+sala.id+"'; limparBoxMensagem(); setInterval(conexaoRetornarTodasMensagens, 1000); document.getElementById('boxMensagem').style.display='block'; setNomeSala(); setPrivacidade('Publico'); return false;");
	liga.appendChild(texto);
	item.appendChild(liga);
	lista.appendChild(item);	
}

function setNomeSala(){
	document.getElementById("chatName").innerHTML=salaAtual;
}

function conexaoGetSalasPublicas(){
	var xhttp;
	if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var resposta = JSON.parse(this.responseText);
		    	resposta.data.forEach(listarSalas);
		}
	};
	
	xhttp.open("GET", "www/chat2.php?acao=salas", true);
	xhttp.send();
}

document.getElementById("btnEnviaMensagem").addEventListener("click", function(event){
	event.preventDefault();
	var mensagem = document.getElementById("mensagem");
	var url= ".php?acao=cad_mensagem";
	var parametros = "token="+token+"&sala="+salaAtualID+"&mensagem="+mensagem.value;
	conexaoPost(url, parametros);
	mensagem.value=("");
});

function conexaoRetornarTodasMensagens(){
	var xhttp;
	if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var resposta = JSON.parse(this.responseText);
			limparBoxMensagem();
			resposta.data.forEach(retornarMensagens);
		}
	};
	
	xhttp.open("GET", "/chat2.php?acao=mensagens_sala&token="+token+"&sala="+salaAtualID, true);
	xhttp.send();
}

function limparBoxMensagem(){
	var box = document.getElementById("mensagensEnviadas");
	while (box.hasChildNodes()) {   
    box.removeChild(box.firstChild);
	}	
}

function conexaoPost(url, parametros){
	var xhttp;
	if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send(parametros);
}
