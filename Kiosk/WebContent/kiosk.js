// die ganze App in einem Closure
(function() {

	// definieren einer App
	var kioskApp = angular.module('kioskModule', []);

	// hinzufügen eines Controllers zum Modul
	kioskApp.controller('KioskController', function($scope) {
		this.papers = papers;
		// initialer Wert für die Länge der Autorenliste
		$scope.size = 3;
	});

	// ein eigene benutzerdefinierte Direktive zur Kapselung/Formatierung der
	// Autorenliste
	kioskApp.directive('authors', function() {
		return {
			scope : {
				authors : '=',
				size : '@'
			},
			template : 'Autoren: ' + '{{authors | limitTo : size | arrayToString }}'
		};
	});

	// ein Filter um ein Array als kommaseparierte Liste zu formatieren
	kioskApp.filter('arrayToString', function() {
		return function(array) {
			var ret = '';
			if (array) {
				var l = array.length - 1;
				for (var i = 0; i <= l; i++) {
					if (array[i] != null) {
						if (ret.length == 0) {
							ret = array[i];
						} else {
							ret = ret + ', ' + array[i];
						}
					}
				}
			}
			return ret;
		};
	});
})();
