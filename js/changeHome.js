function change(){
	var selectMenu = document.getElementById("sortEvents");
	var selectedIndex = selectMenu.selectedIndex;
	var selected = 	selectMenu.options[selectedIndex].text;
	var changeThis = document.getElementById("changeThis");

	if("Other" == selected){
		changeThis.innerHTML = "hello world";
	}else{
		changeThis.innerHTML = "";
	}
}
// dropdown filter
