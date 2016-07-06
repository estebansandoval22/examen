angular.module('produc.controllers', ['firebase'])

.controller('listController', function($location, $product){
	var list = this;

	$product.list().then(function(product){
		list.product = product;
	}, function(error){
		console.log(error);
		alert(error.message);
	});
})

/*.controller('addController', function($games){
	var add = this;

	add.save = function(){
		$games.add(add.game).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
})

.controller('editController', function($routeParams, $games){
	var edit = this;
	var id = $routeParams.id;

	edit.game = $games.get(id);

	edit.save = function(){
		$games.edit(edit.game).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
});
*/
