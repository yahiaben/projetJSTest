function Compte(pseudo,mdp1, mdp2){
	
	creerCompte(pseudo, mdp1, mdp2);

	this.__defineGetter__("pseudo",function () {return this.pseudo;});
	this.__defineGetter__("mdp",function () {return this.mdp;});
}

Notification.prototype = {
	creerCompte : function(pseudo, mdp1, mdp2){
        if(pseudo === ""){
         throw new TitreNotificationNullException();
        }

        if(mdp1 === "" || mdp2 === ""){
         throw new ContenuNotificationNullException();
        }

        

	}
}