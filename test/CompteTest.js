module("Compte", {
//	setup:function(){alert("setup money individual test");},
//	teardown:function(){alert("teardown money individual test");}
});

test("test initialisation compte",function()
{
	var c=new compte("mohcine","123456");
	ok(c.pseudo=="mohcine","pseudo");
	ok(c.mdp=="123456","mdp");
}
);


test("test pseudo compte null", function()
{
	throws(function() {new compte("","123456");}, pseudoCompteNullException, "Pseudo compte null exception");
}
);

test("test mot de passe compte null", function()
{	
	throws(function() {new compte("yahia","");}, mdpCompteNullException, "Mot de passe compte null exception");
}
);

test("test Alert", 1, function()
{
	

        var fixture="";
        fixture+=("<div id='res'><div>");
        
        var old_alert=window.alert;
        window.alert=function(s){
                document.getElementById("res").innerHTML=s;
        }
        

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        
        var c=new compte("","");

        window.alert=old_alert;
        equal(document.getElementById("res").innerHTML,"remplir tous les champs !", "Test Alert : remplir tous le champs");
}
);






	
