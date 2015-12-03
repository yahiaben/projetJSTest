module("Compte", {
//	setup:function(){alert("setup money individual test");},
//	teardown:function(){alert("teardown money individual test");}
});

test("test initialisation compte",function()
{
	var c=new Compte("mohcine","123456");
	ok(c.pseudo=="mohcine","pseudo");
	ok(c.mdp=="123456","mdp");
}
);


test("test pseudo compte null", function()
{
	throws(function() {new Compte("","123456");}, PseudoCompteNullException, "Pseudo compte null exception");
}
);

test("test mot de passe compte null", function()
{	
	throws(function() {new Compte("yahia","");}, MdpCompteNullException, "Mot de passe compte null exception");
}
);

test("test creation compte", 1, function()
{
        var fixture="";
        fixture+=("<form id='sendAccount'>");
        fixture+=("<input type='text' id='pseudoA' name='pseudoA' value='pseudoTest'/>");
        fixture+=("<input type='text' id='passA' name='passA' value='123456'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Result : 4 (EUR)");
}
);






	
