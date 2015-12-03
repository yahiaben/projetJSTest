module("notification", {
//	setup:function(){alert("setup money individual test");},
//	teardown:function(){alert("teardown money individual test");}
});

test("test creation notification",function()
{
	var n=new Notification("mohcine","Test notification", "test", "yahia", false);
	ok(n.pseudo=="mohcine","pseudo");
	ok(n.titre=="Test notification","title");
	ok(n.receiver=="yahia","pseudo");
	ok(n.contenu=="test","pseudo");
	ok(n.group==false,"pseudo");
}
);


test("test pseudo notification null", function()
{
	var n= new Notification("pseudo","", "content", "tous", false);
	throws(function() {n.envoyerNotification()}, TitreNotificationNullException, "Titre notification null exception");
}
);

test("test contenu notification null", function()
{	
	var n= new Notification("pseudo","titre", "", "tous", false);
	throws(function() {n.envoyerNotification()}, ContenuNotificationNullException, "Contenu notifiaction null exception");
}
);








	
