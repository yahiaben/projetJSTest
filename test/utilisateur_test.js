module("utilisateur", {
//	setup:function(){alert("setup money individual test");},
//	teardown:function(){alert("teardown money individual test");}
});

test("test construct utilisateur",function()
{
	var u=new Utilisateur();
	equal(u.getPseudo(),null,"l'utilisateur est iniatialiser avec le pseudo null");
}


);