function Compte(pseudo, mdp){
	
	if(pseudo === ""){
     throw new PseudoCompteNullException();
    }

    if(mdp === "" ){
     throw new MdpCompteNullException();
    }

    this.pseudo = pseudo;
	this.mdp = mdp;


	this.__defineGetter__("pseudoo",function () {return this.pseudo;});
	this.__defineGetter__("mdpp",function () {return this.mdp;});
}

Compte.prototype = {
	pseudoExist : function(){
        
        var pseudoExiste = false;
		for (var i = 0; i < pseudosEnregistre.responseJSON.Events.length; i++) {
			var content = pseudosEnregistre.responseJSON.Events[i].content;
			// recuperer les infos contenues dans les messages
			var json = JSON.parse(content);
			var pseudo = json.message.pseudo
			var mdp = json.message.mdp;
			if(pseudoA == pseudo){
				alert("Le pseudo existe déjà !");
				pseudoExiste = true;
				return false;
			}
		}

		if(!pseudoExiste){
			cobra.sendMessage({pseudo: this.pseudo, mdp: this.mdp},roomPseudo,false);
			alert("Féicitation, votre compte à été créé !\n"+"pseudo : "+this.pseudo+"\nmot de passe : "+this.mdp);
			apiUrl = 'http://cobra-framework.com:3000/api/events/' + room;
			utilisateur.connect(pseudo);
		}

	}
}