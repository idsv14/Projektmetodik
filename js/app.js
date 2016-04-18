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
				$.each(obj, function(){
					name = this['name'];
					info = this['info'];
					price = this['price'];
					$("#starter").clone().insertAfter("#starter");
					showStarter(name, info, price);
				});
			});
	}

	function fetchMainCourse(course){
		$.get("fetchfood.php", {'course': course}, function(data){
				var obj = $.parseJSON(data);

				$.each(obj, function(){
					$("#main").clone().insertAfter("#main");
					name = this['name'];
					info = this['info'];
					price = this['price'];
					showMainCourse(name, info, price);
					
				});
			});
	}

	function fetchDessert(course){
		$.get("fetchfood.php", {'course': course}, function(data){
				var obj = $.parseJSON(data);
				$.each(obj, function(){
					name = this['name'];
					info = this['info'];
					price = this['price'];
					$("#dessert").clone().insertAfter("#dessert");
					showDessert(name, info, price);
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