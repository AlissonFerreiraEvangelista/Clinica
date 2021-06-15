/*Eventos da Pesquisa*/
window.onload =	function() { document.getElementById('resultado-fildset').style.visibility = 'hidden' };

function Seach(){
	document.getElementById('resultado-fildset').style.visibility = 'visible';
}
/* Eventos do Menu */
document.getElementById('consulta').addEventListener('click', function(){
  window.location.href = "buscar.html"
})
document.getElementById('agenda').addEventListener('click', function(){
  window.location.href = "Agenda.html"
})
document.getElementById('relatorio').addEventListener('click', function(){
  window.location.href = "relatorio.html"
})
/**/
document.getElementById('Inclui').addEventListener('click', function(){
  document.getElementById('Inclui').readOnly = true;
})



    

