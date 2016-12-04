function nextmov(){
	document.getElementById("")
}

function reply_click(clicked_id)
{
    //alert(clicked_id);
    var idd = "container" + clicked_id;
    //alert(idd);
    document.getElementById(idd).style.display = "none"; 
    
    var ran = "container" + Math.floor((Math.random() * 5) + 1);
   //alert(ran);
    document.getElementById(ran).style.display = "block";
}
