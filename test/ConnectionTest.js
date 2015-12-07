module("connection", {
//	setup:function(){alert("setup money individual test");},
//	teardown:function(){alert("teardown money individual test");}
});

test("test getter pseudo connection",function()
{
	var pseudo = "mohcine";
	var mdp = "monmdp";
	var c=new Connection(pseudo,mdp);
	equal(c.pseudo,pseudo,"test du getter pseudo");
}
);

test("test getter mdp connection",function()
{
	var pseudo = "mohcine";
	var mdp = "monmdp";
	var c=new Connection(pseudo,mdp);
	equal(c.mdp,mdp,"test du getter pseudo");
}
);


