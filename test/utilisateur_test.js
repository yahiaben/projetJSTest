module("utilisateur", {
//	setup:function(){alert("setup money individual test");},
//	teardown:function(){alert("teardown money individual test");}
});

test("test construct utilisateur",function()
{
	var u=new utilisateur();
	equal(u.getPseudo(),null,"l'utilisateur est iniatialiser avec le pseudo null");
}
);

test("test pseudo null utilisateur", function()
{	
	var u= new utilisateur();
	throws(function() {u.connect("")}, pseudoNullExc, "Pseudo null exception ");
}
);
test("test getter utilisateur", function()
{
	var fixture="";
        fixture+=("<div id='principal'>");
        fixture+=("<ul id='menuConnexion'></ul>");
        fixture+=("<div id='divLogin'></div>");
        fixture+=("<div id='divAccount'></div>");
        fixture+=("<div id='divAccueil'></div>");
        fixture+=("</div>");
	var u= new utilisateur();
	var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
	u.connect("pseudoTest");
	equal(u.getPseudo(),"pseudoTest","nouvel utilisateur avec le pseudo pseudoTest");
}
);

test("test suppression menuConnexion, divLogin et divAccueil apres connection de l'utilisateur",3, function()
{
	var fixture="";
        fixture+=("<div id='principal'>");
        fixture+=("<ul id='menuConnexion'></ul>");
        fixture+=("<div id='divLogin'></div>");
        fixture+=("<div id='divAccount'></div>");
        fixture+=("<div id='divAccueil'></div>");
        fixture+=("</div>");

	var u= new utilisateur();
	var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
	u.connect("pseudoTest");
	var menuConnexion = document.getElementById("menuConnexion");
	var divLogin = document.getElementById("divLogin");
	var divAccount = document.getElementById("divAccount");
	var stylemenuConnexion = menuConnexion.style.display;
	var styledivLogin = menuConnexion.style.display;
	var styledivAccount = menuConnexion.style.display;
	equal(stylemenuConnexion,'none',"le menuConnexion est supprimee");
	equal(styledivLogin,'none',"le divLogin est supprimee");
	equal(styledivAccount,'none',"le divAccueil est supprimee");
}
);

test("test affichage divAccueil apres connexion de l'utilisateur", function()
{
	var fixture="";
        fixture+=("<div id='principal'>");
        fixture+=("<ul id='menuConnexion'></ul>");
        fixture+=("<div id='divLogin'></div>");
        fixture+=("<div id='divAccount'></div>");
        fixture+=("<div id='divAccueil'></div>");
        fixture+=("</div>");

	var u= new utilisateur();
	var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
	u.connect("pseudoTest");
	var divAccueil = document.getElementById("divAccueil");
	var styleDivAcceuil = divAccueil.style.display;
	equal(styleDivAcceuil,'block',"le divAccueil est supprimee");
}
);

