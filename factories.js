angular.module('produc.factories', ['firebase'])

// Old way of firebase reference
//.value('ref', 'https://project-5047501402504107690.firebaseio.com')

.factory('$product', function($firebaseArray, $firebaseObject){
	var product = {};
	var ref = firebase.database().ref().child('product');
	var list = $firebaseArray(ref);
	var cache = [];

	product.list = function(){
		return list.$loaded().then(function(product){
			return cache = product;
		});
	};

	/*games.add = function(game){
		return list.$add(game);
	};

	games.get = function(id){
		return cache.$getRecord(id);
	};

	games.edit = function(game){
		return list.$save(game);
	};
*/
	return product;
})
