function Utilisateur(){
	this.pseudo=null;
}

Utilisateur.prototype.getPseudo=
function () {
    return this.pseudo;
};

Utilisateur.prototype.connect = function(pseudo){
	var self = this;
	this.pseudo = pseudo; 
}

