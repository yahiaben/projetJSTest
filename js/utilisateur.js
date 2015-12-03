function Utilisateur(){
	this.pseudo=null;
}

Utilisateur.prototype.getPseudo=
function () {
    return this.pseudo;
};

Utilisateur.prototype.connect = function(pseudo){
	if(pseudo === ""){
		throw new pseudoNullExc(pseudo);

	}
	else{
		var self = this;
		this.pseudo = pseudo; 
		var menuConnexion = document.getElementById("menuConnexion");
		var divLogin = document.getElementById("divLogin");
		var divAccount = document.getElementById("divAccount");
		//Suppression des elements de connexion
		menuConnexion.remove();
		divLogin.remove();
		divAccount.remove();
		//je charge les messages de l'utilisateur en question
		cobra.joinRoom(room);
		var divAccueil = document.getElementById('divAccueil');
		divAccueil.style.display = "block";
	}
}

