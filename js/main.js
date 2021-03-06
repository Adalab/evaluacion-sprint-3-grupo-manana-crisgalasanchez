// menu sale del lateral
var branch = document.querySelector('.branch');
var menuButton = branch.querySelector('.btn');
var menuClose = branch.querySelector('.close');
var mask = document.querySelector('.mask')

function openNavMenu() {
	branch.classList.add('branch--menu-visible');
	mask.style.opacity = 0.75;

};

function closeNavMenu() {
	branch.classList.remove('branch--menu-visible');
	mask.style.opacity = 0;

};

menuButton.addEventListener('click', openNavMenu);
menuClose.addEventListener('click', closeNavMenu);

//Desaparecer el menu al seleccionar elemento
var elementLi = document.querySelector('.menu');
elementLi.addEventListener('click', closeNavMenu);

//subir al principio de la página cuando se hace click en la flecha arriba
var arribaButton = document.getElementById('arriba');
arribaButton.onclick = function(){
    window.scrollTo(0,0);
}
//AJAX
var moreReasons = document.getElementById('more-reasons');
moreReasons.addEventListener('click', requestReasons);

function createReason(element){
	var explainReasons = document.getElementById('explain-reasons');
	var divItemReason = document.createElement('div');
	divItemReason.className += " item-reason";
	var titleItemReason = document.createElement('h3');
	titleItemReason.className += " pretitle";
	titleItemReason.innerHTML=element.title;
	var paragraphItemReason = document.createElement('p');
	paragraphItemReason.className += " text-reasons";
	paragraphItemReason.innerHTML=element.description;

	divItemReason.appendChild(titleItemReason);
	divItemReason.appendChild(paragraphItemReason);
	explainReasons.appendChild(divItemReason);
}

//WITH PROMISES

function requestReasons(){
fetch('https://three-random-reasons-izwfjpgbqm.now.sh/')
  .then(function (response){
    return response.json();
  })
  .then(function(json){
    var responseJSON = json;

  var reasons = responseJSON.reasons;
  for(var i=0; i < reasons.length; i++){
  var reasonItem = reasons[i];
  createReason(reasonItem);
	}
});
}


// function requestReasons() {
// 	var request = new XMLHttpRequest();
// 	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');
// 	request.addEventListener('load', showReasons);
//
// 	function showReasons() {
// 	  var response = request.responseText;
// 		var responseJSON = JSON.parse(response);
//
// 		var reasons = responseJSON.reasons;
// 		for(var i=0; i < reasons.length; i++){
// 			var reasonItem = reasons[i];
// 			createReason(reasonItem);
// 		}
// 	}
//
// 	request.send();
// }
