
var utilisateur = new Utilisateur();

// Fonction pour envoyer une notification
function sendNotif(event){

	//event.preventDefault();
	var titre = document.getElementById('titreNotif').value;
	console.log("titre ======> "+titre);
	var contenu = document.getElementById('textNotif').value;
	var pseudo = utilisateur.pseudo;
	var tabReceveurs = Array();

	var nb = document.getElementsByClassName('btnReceveur').length;
	if(nb==0){
		var n = new Notification(pseudo,titre,contenu, "tous", false);
		try{
			event.preventDefault();
			n.envoyerNotification();
			
		}catch(e){
			event.preventDefault();
			alert("Il faut remplir tout les champs !");
		}
		
	}else{
		for(i=0;i<nb;i++){
			var receiver = document.getElementsByClassName('btnReceveur')[i].id;
			tabReceveurs.push(receiver);
			
		}
		var n = new Notification(pseudo,titre,contenu, tabReceveurs,true);
		try{
			event.preventDefault();
			n.envoyerNotification();
		}catch(e){
			event.preventDefault();
			alert("Il faut remplir tout les champs !");
			
		}
		while(document.getElementsByClassName('btnReceveur').length>0){
			document.getElementsByClassName('btnReceveur')[0].remove(this);
		}
	}
	myForm.reset();
}

var myForm = document.getElementById('sendForm');

//envoie de la notification
myForm.addEventListener('submit', sendNotif, true);


var formConnexion = document.getElementById('sendLogin');
formConnexion.addEventListener('submit', function(e){
	var pseudo = document.getElementById('pseudoL').value;
	var mdp = document.getElementById('passL').value;
	var connect = new Connection(pseudo, mdp);
	// On valide le mdp avec le pseudo si il existe
	if(connect.valider()){
		utilisateur.connect(pseudo);
	}
	e.preventDefault();
}, true);


var formCreateAccount = document.getElementById('sendAccount');
formCreateAccount.addEventListener('submit', function(e){
	console.log("je rentre dans sendAccount");

	var pseudoA = document.getElementById('pseudoA').value;
	var mdpA = document.getElementById('passA').value;

	var compte = new Compte(pseudoA, mdpA);
	compte.pseudoExist();
	
	

	e.preventDefault();
}, true);

var btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', function(){
	var divL = document.getElementById('divLogin');
	divL.style.visibility="visible";
	var divA = document.getElementById('divAccount');
	divA.style.visibility="hidden";
	btnLogin.className ="active";
	btnAccount.className="";
}, true);

var btnAccount = document.getElementById('btnAccount');
btnAccount.addEventListener('click', function(){
	var divA = document.getElementById('divAccount');
	divA.style.visibility="visible";
	var divL = document.getElementById('divLogin');
	divL.style.visibility="hidden";
	btnLogin.className ="";
	btnAccount.className="active";
}, true);

