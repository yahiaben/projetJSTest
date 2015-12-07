function utilisateur(){
    this.pseudo=null;
};

utilisateur.prototype.getPseudo=
function () {
    return this.pseudo;
};

utilisateur.prototype.connect = function(pseudo){
    if(pseudo === ""){
        throw new pseudoNullExc(pseudo);

    }
    else{
        this.pseudo = pseudo;
        var menuConnexion = document.getElementById("menuConnexion");
        var divLogin = document.getElementById("divLogin");
        var divAccount = document.getElementById("divAccount");
        //Suppression des elements de connexion
        menuConnexion.style.display = "none";
        divLogin.style.display = "none";
        divAccount.style.display = "none";
        //je charge les messages de l'utilisateur en question
        cobra.joinRoom(room);
        var divAccueil = document.getElementById('divAccueil');
        divAccueil.style.display = "block";
    }
};

