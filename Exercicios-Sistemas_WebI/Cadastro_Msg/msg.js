var a = document.querySelector("#newmsg");
a.addEventListener("click", function(){
  if (document.querySelector("#newt").value) {
    var mensagem = {
      titulo:document.querySelector("#newt").value,
      msg:document.querySelector("#newm").value
    }
    localStorage.setItem(NewId(), JSON.stringify(mensagem));
    document.querySelector("#newt").value="";
    document.querySelector("#newm").value="";
    exibirMensagem("Mensagem cadastrada", "alert-success");
  }
});

var mostra_msg = document.querySelector('#mostra_msg');
mostra_msg.addEventListener("click", function(){
 
  
   
  for (var key in localStorage) {
    if(key.startsWith("teste")){
     // var li = document.createElement("li");
      var mens = JSON.parse(localStorage[key]);
      //li.appendChild(document.createTextNode("titulo: " + mens.titulo + " Mensagem: " + mens.msg));
     // ul.appendChild(li);
	  //var div = document.createElement("div");
	  //ul.appendChild(div);
	  //div.setAttribute("class", "panel panel-default");
	  //var divhead = document.createElement("div");
	  //div.setAttribute("class", "panel-head");
	  //div.appendChild(divhead);
	  //divhead.appendChild(document.createTextNode(mens.titulo));
	  //var divbody = document.createElement("div");
	  //div.setAttribute("class", "panel-body");
	  //div.appendChild(divbody);
	  //divbody.appendChild(document.createTextNode(mens.msg));
	  //ul.appendChild(div);
  var lista = document.querySelector("#listando");
  //ul.innerHTML='';
  var divbts = document.createElement("div");
   divbts.setAttribute("class", "col-md-3");
  var Panel = document.createElement("div");
    Panel.setAttribute("class", "panel panel-default");
	var divhead = document.createElement("div");
      divhead.setAttribute("class", "panel-heading");
   var divbody    = document.createElement("div");
   divbody.setAttribute("class", "panel-body");
   
   
   Panel.appendChild(divhead);
   Panel.appendChild(divbody);
   divbts.appendChild(Panel);
   lista.appendChild(divbts);
   
   divhead.appendChild(document.createTextNode(mens.titulo));
   divbody.appendChild(document.createTextNode(mens.msg));
    }
  }

  document.querySelector("#row-msg").style.visibility='visible';

  document.querySelector("#mensagem").style.visibility='hidden';
  document.querySelector("#form1").style.visibility='hidden';
});

document.querySelector("#form1").style.visibility='hidden';
var mostra_form = document.querySelector('#menu');
mostra_form.addEventListener("click", function(){
  document.querySelector("#form1").style.visibility='visible';
});

var limpar_dados = document.querySelector('#limpar_dados');
limpar_dados.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
  exibirMensagem("Tudo Excluído", "alert-danger");
});



document.querySelector("#row-msg").style.visibility='hidden';
function exibirMensagem(mensagem, tipo) {
  if (mensagem==undefined) {
    document.querySelector("#mensagem").style.visibility='hidden';
  } else {
    document.querySelector("#mensagem").style.visibility='visible';
    document.querySelector("#mensagem").className = "alert " + tipo;
    document.querySelector("#mensagem").innerHTML = mensagem;
  }
  
  document.querySelector("#row-msg").style.visibility='hidden';
}

function NewId(){
  var id = incrementar()
  return  "teste"+id;
}

function incrementar(){
  var conta = localStorage.getItem("conta");
  var cont = 0;
  if (!conta) {
    cont = 1;
  } else {
    cont = parseInt(conta)+1;
  }
  localStorage.setItem("conta", cont);
  return cont;
}

