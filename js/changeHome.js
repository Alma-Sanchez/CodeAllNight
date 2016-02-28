function change(){
	var selectMenu = document.getElementById("sortEvents");
	var selectedIndex = selectMenu.selectedIndex;
	var selected = 	selectMenu.options[selectedIndex].text;
	var changeThis = document.getElementById("changeThis");
	var itemClass =  document.getElementsByClassName(selected);
	var profiles = [];

		if("HackTCNJ" == selected){
			$('#portfolio').each(function(){
				var portfolio = '';
				$(this).find('li').each(function(){
					var current = $(this);
					// (current.children().size() > 0){	
						if(!current.hasClass(selected)){
							this.style.display = "none";
							console.log("has hackTCNJ class");
						}else{
							this.style.display = "inline-block";
						}
					// }
				})
			})

		}else if("ProfHacks" == selected){
			$('#portfolio').each(function(){
				var portfolio = '';
				$(this).find('li').each(function(){
					var current = $(this);
					// (current.children().size() > 0){	
						if(!current.hasClass(selected)){
							this.style.display = "none";
						}else{
							this.style.display = "inline-block";
						}
					// }
				})
			})
		}else if("HackPrinceton" == selected){
			$('#portfolio').each(function(){
				var portfolio = '';
				$(this).find('li').each(function(){
					var current = $(this);
					// (current.children().size() > 0){	
						if(!current.hasClass(selected)){
							this.style.display = "none";
						}else{
							this.style.display = "inline-block";
						}
					// }
				})
			})
		}else if("HackBCA" == selected){
			$('#portfolio').each(function(){
				var portfolio = '';
				$(this).find('li').each(function(){
					var current = $(this);
					// (current.children().size() > 0){	
						if(!current.hasClass(selected)){
							this.style.display = "none";
						}else{
							this.style.display = "inline-block";
						}
					// }
				})
			})
		}else if("HackRU" == selected){
			$('#portfolio').each(function(){
				var portfolio = '';
				$(this).find('li').each(function(){
					var current = $(this);
					// (current.children().size() > 0){	
						if(!current.hasClass(selected)){
							this.style.display = "none";
						}else{
							this.style.display = "inline-block";
						}
					// }
				})
			})
		}
}