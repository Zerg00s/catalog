"use strict";
var app = angular.module('opApp',[]);
app.controller('opController', function($scope){

    $scope.catalog = {};
    $scope.catalog.staticLinks = 
    [
	{ class:"element-item transition metal", category:"transition",
		name:"Email setup",
		number:"80",
		weight:"200.59",
        image:"https://razorjack.net/quicksand/images/network-utility.png?1354486198"
	},
	{ class:"element-item metalloid", category:"metalloid",
		name:"Application support",
		number:"52",
		weight:"127.6",
        image:"https://razorjack.net/quicksand/images/activity-monitor.png?1354486198"
	},
	{ class:"element-item post-transition metal", category:"post-transition",
		name:"Financial",
		number:"83",
		weight:"208.980",
        image:"https://razorjack.net/quicksand/images/front-row.png?1354486198"
	},
	{ class:"element-item post-transition metal", category:"post-transition",
		name:"Desktop Support",
		number:"82",
		weight:"207.2",
        image:"https://razorjack.net/quicksand/images/keychain-access.png?1354486198"
	},
	{ class:"element-item transition metal", category:"transition",
		name:"Teleconferencing",
		number:"79",
		weight:"196.967",
        image:"https://razorjack.net/quicksand/images/finder.png?1354486198"
	},
	{ class:"element-item alkali metal", category:"alkali",
		name:"Professional Services",
		number:"19",
		weight:"39.0983",
        image:"https://razorjack.net/quicksand/images/textedit.png?1354486198"
	},
	{ class:"element-item alkali metal", category:"alkali",
		name:"Storage and backup",
		number:"11",
		weight:"22.99",
        image:"https://razorjack.net/quicksand/images/address-book.png?1354486198"
	},
	{ class:"element-item transition metal", category:"transition",
		name:"Data Centre Hosting services",
		number:"48",
		weight:"112.411",
        image:"https://razorjack.net/quicksand/images/interface-builder.png?1354486198"
	},
	{ class:"element-item alkaline-earth metal", category:"alkaline-earth",
		name:"Wi-Fi ",
		number:"20",
		weight:"40.078",
        image:"https://razorjack.net/quicksand/images/sync.png?1354486198"
	},
	{ class:"element-item transition metal", category:"transition",
		name:"Rhenium",
		number:"75",
		weight:"186.207",
        image:"https://razorjack.net/quicksand/images/ical.png?1354486198"
	},
	{ class:"element-item post-transition metal", category:"post-transition",
		name:"Contact Us",
		number:"81",
		weight:"204.383",
        image:"https://razorjack.net/quicksand/images/ichat.png?1354486198"
	},
	{ class:"element-item metalloid", category:"metalloid",
		name:"Monitoring",
		number:"51",
		weight:"121.76",
        image:"https://razorjack.net/quicksand/images/google-pokemon.png?1354486198"
	},
	{ class:"element-item transition metal", category:"transition",
		name:"Reporting",
		number:"27",
		weight:"58.933",
        image:"https://razorjack.net/quicksand/images/ituna.png?1354486198"
	},
	{ class:"element-item lanthanoid metal inner-transition", category:"lanthanoid",
		name:"Ytterbium",
		number:"70",
		weight:"173.054",
        image:"https://razorjack.net/quicksand/images/network-utility.png?1354486198"
	},
	{ class:"element-item noble-gas nonmetal", category:"noble-gas",
		name:"Telecommunications",
		number:"18",
		weight:"39.948",
        image:"https://razorjack.net/quicksand/images/address-book.png?1354486198"
	},
	{ class:"element-item diatomic nonmetal", category:"diatomic",
		name:"Network, database and application monitoring",
		number:"7",
		weight:"14.007",
        image:"https://razorjack.net/quicksand/images/keychain-access.png?1354486198"
	}
];

    $scope.$watch('',true)

    $scope.executeScopeFunction = function(){
    // init Isotope
        var iso = new Isotope( '.grid', {
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        // filter functions
        var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function( itemElem ) {
            var number = itemElem.querySelector('.number').textContent;
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function( itemElem ) {
            var name = itemElem.querySelector('.name').textContent;
            return name.match( /ium$/ );
        }
        };

        // bind filter button click
        var filtersElem = document.querySelector('.filters-button-group');
        filtersElem.addEventListener( 'click', function( event ) {
        // only work with buttons
        if ( !matchesSelector( event.target, 'button' ) ) {
            return;
        }
        var filterValue = event.target.getAttribute('data-filter');
        // use matching filter function
        filterValue = filterFns[ filterValue ] || filterValue;
        iso.arrange({ filter: filterValue });
        });

        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll('.button-group');
        for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup( buttonGroup );
        }

        function radioButtonGroup( buttonGroup ) {
        buttonGroup.addEventListener( 'click', function( event ) {
            // only work with buttons
            if ( !matchesSelector( event.target, 'button' ) ) {
            return;
            }
            buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
        });
        }
    }
});


app.directive('loadOnFinished', function ($timeout)
{
  return {
    link: function (scope, element, attribs) {
      if (scope.$last) {
         $timeout(function () { 
            scope.$evalAsync(attribs.loadOnFinished) 
        });
      }
    }
  }
})


