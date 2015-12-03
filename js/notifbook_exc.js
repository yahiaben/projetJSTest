function pseudoNullExc(_p) {
	this.p=_p;
}

pseudoNullExc.prototype.toString= function(){
	return "Pseudo null exception " + this.p;
}