function filterClicked() {
   alert('O botao do filtro foi clicado')

   var advancedFilter = document.getElementById("advancedFilter");

   advancedFilter.innerHTML = '<h3> eu sou o componente de filtro avançado</h3>';
}

var id = 0;
var opcao = 1;
var radio = 1;

function selectText(id) {
   document.getElementById("tituloform").select();
}

function novaPergunta() {
   if (id == 1 || opcao == 0 && radio == 0) {
      alert("Por favor primeiro insira sua pergunta!");
   } else {
      var d1 = document.getElementById('drop1');
      var da = document.getElementById('rd');
      var db = document.getElementById('opc');

      d1.insertAdjacentHTML('beforeend',
         `<textarea placeholder="Digite sua pergunta... " id="${id}" class="novaPergunta"></textarea>`
      )

      id++;
      opcao = 0;
      radio = 0;
   }
}

function novaRespostaTexto() {
   if (id == 0) {
      alert("Por favor primeiro insira sua pergunta!");
   } else {
      var d1 = document.getElementById('drop1');
      d1.insertAdjacentHTML('beforeend',
         `<div class="txt" maxlength ="500"><textarea id="${id}" class="novaResposta"></textarea> `);

      id++;
      opcao++;
   } 
}

function novoCheckbox() {
   if (id == 0) {
      alert("Por favor primeiro insira sua pergunta!");
   } else {
      var d1 = document.getElementById('drop1');
      var dc = document.getElementById('rd');

      d1.insertAdjacentHTML('beforeend',
         `<div class="op"><input type="checkbox" id="${id}" ></div> `);
      id++;
      d1.insertAdjacentHTML('beforeend',
         `<div><input type="text" id="${id}" value=" Opção ${opcao}"></div>
                     `);
      id++;

      opcao++;
   }

}

function novaRadio() {

   if (id == 0) {
      alert("Por favor primeiro insira sua pergunta!");
   } else {
      var d1 = document.getElementById('drop1');
      var dd = document.getElementById('opc');
      d1.insertAdjacentHTML('beforeend',
         `<div class="op"> <input type="radio" id="${id}" name="sexo" value="Radio ${radio}"></div>                     
                     `);
      id++;
      d1.insertAdjacentHTML('beforeend',
         `<div ><input type="text" id="${id}" value=" Radio ${radio}"></div>
                     `);
      id++;
      radio++;
   }
}

function deletaUltimoElemento() {

   var el = document.getElementById(id - 1);
   el.parentNode.removeChild(el);
   id--;
   if (radio > 1) {
      radio--;
   }
   if (opcao > 1) {
      opcao--;
   }
   if (radio == 0) {
      radio = 1;
   }
   if (opcao == 0) {
      opcao = 1;
   }
}

function deletaTodosElementos() {
   var x = id - 1;

   for (i = 0; i <= x; i++) {
      var el = document.getElementById(i);
      el.parentNode.removeChild(el);
   }

   radio = 1;
   opcao = 1;
   id = 0;
   carregarTudo();
}

function salvarPagina() {

   var refVal = document.getElementById("drop1").innerHTML;
   localStorage.setItem("html", refVal);
   for (var i = 0; i < id; i++) {
      var x = document.getElementById(i).value;
      var y = document.getElementById(i).getAttribute("value");
      console.log(x);

      localStorage.setItem(i, x);
   }
}

function atualizaTitulo() {
   var x = document.getElementById("tituloform").value;
   localStorage.setItem("x", x);
}

function atualizaDados() {
   var x = document.getElementById(id).value;
   localStorage.setItem(id, x);
}

function atualizaRadio() {

   var x = document.getElementById(id).value;
   localStorage.setItem(id, x);
}

function atualizaCheck() {
   var x = document.getElementById("tituloform").value;
   localStorage.setItem("x", x);
}

function retornaDados() {
   var u = localStorage.length;
   var valorTemp = localStorage.getItem("html");
   var x = localStorage.getItem('x');

   document.getElementById('drop1').innerHTML = valorTemp;
   document.getElementById('tituloform').value = x;

   for (var i = 0; i < u; i++) {      
      var w = i;
      var y = localStorage.getItem(w);
      document.getElementById(w).value = y;
   }

   localStorage.clear();
}
