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

test("test fonction afficher notification", function()
{    

    var fixture="";
        fixture+=("<div class='notifications' id='notifications'>");
        fixture+=("<div id='scrollNotif'>");
        fixture+=("</div'>");
        fixture+=("</div>");
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;


        var n= new Notification("pseudo","titre", "contenu", "tous", false);
        
        n.afficherNotification();

        equal(document.getElementById("notification").tagName, "DIV", "ajout du div notification dans le scrollNotif" );

}
);


test("test fonction afficher notification", function()
{    

    var fixture="";
        fixture+=("<div class='notifications' id='notifications'>");
        fixture+=("<div id='scrollNotif'>");
        fixture+=("</div'>");
        fixture+=("</div>");
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;


        var n= new Notification("mohcine","titreTest", "contenuTest", "tous", false);
        
       	n.afficherNotification();
        var titre = document.getElementsByClassName("titreNotif")[0].innerHTML;
        var contenu = document.getElementById("contenuNotif").innerHTML;
        var pseudo = document.getElementById("pidPseudo").innerHTML;

        equal(titre,'titreTest',"ajout du titre dans la notification");
      	equal(contenu,'contenuTest',"ajout du contenu dans la notification");
      	equal(pseudo,' A : mohcine',"ajout du pseudo dans la notification");
}
);




	
