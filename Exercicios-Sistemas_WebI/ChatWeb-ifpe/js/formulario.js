var usuario = {nome: '', senha: ''};

function getUserLogin(){
	usuario.nome = document.getElementById("nome").value;
	usuario.senha = document.getElementById("senha").value;
	usuario.senha = usuario.senha.toString();
}

function getUserCadastro(){
	usuario.nome = document.getElementById("nomeCadastro").value;
	usuario.senha = document.getElementById("senhaCadastro").value;
	usuario.senha = usuario.senha.toString();
}

document.getElementById("conectar").addEventListener("click", function(event){
	event.preventDefault();
	getUserLogin();
	var req = "nome="+usuario.nome+"&senha="+usuario.senha;
	conexaoPost("www/chat2.php?acao=login", req);
});

document.getElementById("cadastrar").addEventListener("click", function(event){
	event.preventDefault();
	getUserCadastro();
	var req = "nome="+usuario.nome+"&senha="+usuario.senha;
	conexaoPost("/chat2.php?acao=cad_usuario", req;
});

function conexaoPost(url, parametros){
	var xhttp;
	if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.onreadystatechange = function() {
		console.log(this.readyState);
		if (this.readyState == 4 && this.status == 200) {
			var retorno = JSON.parse(this.responseText);
			if(url =="/chat2.php?acao=login"){
			  if(retorno.result == "Sucesso"){
			  var token = retorno.data[0].token;
			  inicial(token);
			  } else { 
			  alert("Login Invalido!");
			  }
			}
			if (url == "www/chat2.php?acao=cad_usuario"){
			alert(retorno.message);
			}
		}
	};
	
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send(parametros);
}

function inicial(token){
	localStorage.setItem(token, usuario.nome);
    sessionStorage.setItem(sessionStorage.length+1, token);
	var carregar = window.open("salas.html","_self");
}
