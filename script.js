function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function Fruit (name, price, inventory, avgPrice, totalSpent) {
	this.name = name;
	this.price = price;
	this.inventory = inventory;
	this.avePrice = avgPrice;
	this.totalSpent = totalSpent;
	this.priceCalculator = function() {
		if (this.price > 0.5 && this.price < 9.99) {
			this.price += (randomNumber(-50, 50)/100);
		} else {
			this.price = this.price;
		}
	}
}
var $wallet = 100;

var apple = new Fruit ('Apple', 2, 0, 0, 0);
var banana = new Fruit ('Banana', 2, 0, 0, 0);
var grape = new Fruit ('Grape', 2, 0, 0, 0);
var orange = new Fruit ('Orange', 2, 0, 0, 0);
var fruitArray = [apple, banana, grape, orange];

$(document).ready(function(){
	$('.apple').prepend(apple.price);
	$('.banana').prepend(banana.price);
	$('.grape').prepend(grape.price);
	$('.orange').prepend(grape.price);

	$('#a').on('click', function(){
		apple.priceCalculator();
		apple.inventory += 1;
		apple.totalSpent += apple.price;
		apple.avePrice = apple.totalSpent / apple.inventory;
		$wallet = $wallet - apple.price;
		console.log(apple);
	})
	$('#b').on('click', function(){
		banana.priceCalculator();
		banana.inventory += 1;
		banana.totalSpent += banana.price;
		banana.avePrice = banana.totalSpent / banana.inventory;
		$wallet = $wallet - banana.price;
			console.log(banana);
		})
	$('#c').on('click', function(){
			grape.priceCalculator();
			grape.inventory += 1;
			grape.totalSpent += grape.price;
			grape.avePrice = grape.totalSpent / grape.inventory;
			$wallet = $wallet - grape.price;
				console.log(grape);
			})
	$('#d').on('click', function(){
			orange.priceCalculator();
			orange.inventory += 1;
			orange.totalSpent += orange.price;
			orange.avePrice = orange.totalSpent / orange.inventory;
			$wallet = $wallet - orange.price;
				console.log(orange);
	})
$('button').on('click', function (){
	var $para = $('<p id="totalCash"></p>');
	$para.append($wallet);
	$('header').find('#totalCash').remove();
	$('header').append($para);
	});
});
