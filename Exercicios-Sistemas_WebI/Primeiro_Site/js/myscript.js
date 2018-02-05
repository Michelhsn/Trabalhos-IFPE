
/* Função para conexão POST*/
function conexaoPost(url, parametros){

	var xhttp;

	if (window.XMLHttpRequest) {

    xhttp = new XMLHttpRequest();

    } else {

    xhttp = new ActiveXObject("Microsoft.XMLHTTP");

	}



	xhttp.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

      assunto.value = "";

            nome.value = "";

            telefone.value = "";

            email.value = "";

            message.value = "";

		}

	};



	xhttp.open("POST", url, true);

	xhttp.setRequestHeader("Content-type","application/json");

	xhttp.send(JSON.stringify(parametros));

}
/*Botão enviar chamando a função*/
document.getElementById("Enviar").addEventListener("click", function(event){

	event.preventDefault();

	var assunto= document.getElementById("assunto");

var nome= document.getElementById("nome");

var telefone= document.getElementById("telefone");

var email= document.getElementById("email");

var message= document.getElementById("message");

	var url= "www/messages/mhsn";

	var parametros = {assunto: assunto.value, nome: nome.value, telefone: telefone.value, email: email.value, message: message.value};



  /*var url = "www/mhsn/lojas";

  var nome= document.getElementById("nome");

  var endereco = document.getElementById("assunto");

  var telefone= document.getElementById("telefone");

  var gerente= document.getElementById("message");

  var parametros = {nome: nome.value, endereco: endereco.value, telefone: telefone.value, gerente: gerente.value};*/

	conexaoPost(url, parametros);

});


/*função para conexão GET*/
function get_messages()

{

    var http = new XMLHttpRequest();

    http.onreadystatechange = function()

    {

        if(this.readyState == 4 && this.status == 200)

        {

             console.log("GET de Mensagens");

            var obj = JSON.parse(this.responseText);

             

             var out = "";

             for(i = 0; i < obj.messages.length; i++) {

               console.log(obj.messages[i].nome, obj.messages[i].email, obj.messages[i].telefone, obj.messages[i].assunto, obj.messages[i].message);

               out += '<p> ' + obj.messages[i].nome + '</p>' + obj.messages[i].message + '<br><br>';

             }

             document.getElementById("aqui").innerHTML = out;

        }

    };

        var url = "www/messages/mhsn";

        http.open("GET", url, true);

        http.send();

};





/*Clicando retornar retorna a função de GET*/

document.getElementById("btnretorno").addEventListener("click", function(event){

	event.preventDefault();





	get_messages();



});



/*Função q retorna automaticamente no refresh as lojas*/

(function get_lojas()

{

    var http = new XMLHttpRequest();

    http.onreadystatechange = function()

    {

        if(this.readyState == 4 && this.status == 200)

        {

             console.log("GET de lojas");

            var obj = JSON.parse(this.responseText);

             

             var out = "";

             for(i = 0; i < obj.lojas.length; i++) {

               console.log(obj.lojas[i].nome);

               out += '<p> ' + obj.lojas[i].nome + '</p> Endereço: ' + obj.lojas[i].endereco + "<br> Telefone: " + obj.lojas[i].telefone + "<br> Gerente: " + obj.lojas[i].gerente + "<br><br>";

             }

             document.getElementById("lojasModal").innerHTML = out;

        }

    };

        var url = "www/mhsn/lojas";

        http.open("GET", url, true);

        http.send();

})();



















/*código para fazer a transição no clique da navbar*/

$(document).ready(function(){

  // Initialize Tooltip

  $('[data-toggle="tooltip"]').tooltip();



  // Add smooth scrolling to all links in navbar + footer link

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {



    // Make sure this.hash has a value before overriding default behavior

    if (this.hash !== "") {



      // Prevent default anchor click behavior

      event.preventDefault();



      // Store hash

      var hash = this.hash;



      // Using jQuery's animate() method to add smooth page scroll

      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({

        scrollTop: $(hash).offset().top

      }, 900, function(){



        // Add hash (#) to URL when done scrolling (default click behavior)

        window.location.hash = hash;

      });

    } // End if

  });

})



$(document).ready(function(){

    // Initialize Tooltip

    $('[data-toggle="tooltip"]').tooltip();

})