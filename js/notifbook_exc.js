function pseudoNullExc(_p) {
    this.p=_p;
};

pseudoNullExc.prototype.toString= function(){
    return "Pseudo null exception " + this.p;
};

function titreNotificationNullException() {
};

titreNotificationNullException.prototype.toString=function(){
    return "Titre null exception";
};

function contenuNotificationNullException() {
};

contenuNotificationNullException.prototype.toString=function(){
    return "Titre null exception";
};

function pseudoCompteNullException() {
};

pseudoCompteNullException.prototype.toString=function(){
    return "Pseudo compte null exception";
};

function mdpCompteNullException() {
};

mdpCompteNullException.prototype.toString=function(){
    return "Mot de passe compte null exception";
};
