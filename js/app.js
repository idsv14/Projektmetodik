$(document).ready(function() {

	starterName = document.getElementById('starterName');
	starterInfo = document.getElementById('starterInfo');
	starterPrice = document.getElementById('starterPrice');
	
	mainName = document.getElementById('mainName');
	mainInfo = document.getElementById('mainInfo');
	mainPrice = document.getElementById('mainPrice');

	dessertName = document.getElementById('dessertName');
	dessertInfo = document.getElementById('dessertInfo');
	dessertPrice = document.getElementById('dessertPrice');

	var course = 2;

	/*$.get("fetchfood.php", {'course': 2}, function(data){
		//console.log(data);
	});*/
	fetchStarter(1);
	fetchMainCourse(2);
	fetchDessert(3);

	function fetchStarter(course){
		$.get("fetchfood.php", {'course': course}, function(data){
				var obj = $.parseJSON(data);

				console.log(data);
				var i = 0;

				$.each(obj, function(){
					name = this['name'];
					info = this['info'];
					price = this['price'];
					showStarter(name, info, price);
					i++;
					if(i == obj.length){
						return false;
					} else{
						$("#starter").clone().insertAfter("#starter");

					}
				});
			});
	}

	function fetchMainCourse(course){
		$.get("fetchfood.php", {'course': course}, function(data){
				var obj = $.parseJSON(data);

				console.log(data);
				var i = 0;

				$.each(obj, function(){
					name = this['name'];
					info = this['info'];
					price = this['price'];
					showMainCourse(name, info, price);
					i++;
					if(i == obj.length){
						return false;
					} else{
						$("#main").clone().insertAfter("#main");

					}
				});
			});
	}

	function fetchDessert(course){
		$.get("fetchfood.php", {'course': course}, function(data){
				var obj = $.parseJSON(data);

				console.log(data);
				var i = 0;

				$.each(obj, function(){
					name = this['name'];
					info = this['info'];
					price = this['price'];
					showDessert(name, info, price);
					i++;
					if(i == obj.length){
						return false;
					} else{
						$("#dessert").clone().insertAfter("#dessert");

					}
				});
			});
	}

	function showStarter (name, info, price){

		starterName.innerHTML = name;
		starterInfo.innerHTML = info;
		starterPrice.innerHTML = price;
	}

	function showMainCourse (name, info, price){
			mainName.innerHTML = name;
			mainInfo.innerHTML = info;
			mainPrice.innerHTML = price;
			
	}

	function showDessert (name, info, price){

		dessertName.innerHTML = name;
		dessertInfo.innerHTML = info;
		dessertPrice.innerHTML = price;
	}
});