function pseudoNullExc(_p) {
	this.p=_p;
};

pseudoNullExc.prototype.toString= function(){
	return "Pseudo null exception " + this.p;
};

function TitreNotificationNullException() {
};

TitreNotificationNullException.prototype.toString=function(){
    return "Titre null exception";
};

function ContenuNotificationNullException() {
};

ContenuNotificationNullException.prototype.toString=function(){
    return "Titre null exception";
};
