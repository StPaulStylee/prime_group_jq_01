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
		if (this.price >= 0.5 && this.price <= 9.99) {
			this.price += (randomNumber(-50, 50)/100);
		} else if (this.price < 0.5) {
			this.price = 0.5 + (randomNumber(0, 50/100));
		} else if (this.price > 9.99) {
			this.price = 9.99 - (randomNumber(0, 50/100));
		}
	}
}
var $wallet = 100;
var apple = new Fruit ('Apple', 2, 0, 0, 0);
var banana = new Fruit ('Banana', 2, 0, 0, 0);
var grape = new Fruit ('Grape', 2, 0, 0, 0);
var orange = new Fruit ('Orange', 2, 0, 0, 0);
var fruitArray = [apple, banana, grape, orange];
var $pricePara = $('<p class="price"></p>');

$(document).ready(function(){

	$('#a').on('click', function(){
		if ($wallet > 0 && $wallet >= apple.price ) {
		apple.inventory += 1;
		apple.totalSpent += apple.price;
		apple.avePrice = apple.totalSpent / apple.inventory;
		$wallet = $wallet - apple.price;
		$('.apple').find('#inventory').find('span').remove();
		$('.apple').find('#inventory').append('<span>' + apple.inventory + '</span>');
		$('.apple').find('#avgPrice').find('span').remove();
		$('.apple').find('#avgPrice').append('<span>' + apple.avePrice.toFixed(2) + '</span>');
	} else {
		alert('You can\'t do that! You gotta have money to buy stuff!');
	}
})
	$('#aa').on('click', function(){
		if (apple.inventory > 0) {
		apple.inventory -= 1;
		$wallet = $wallet + apple.price;
		$('.apple').find('#inventory').find('span').remove();
		$('.apple').find('#inventory').append('<span>' + apple.inventory + '</span>');
		}
	})

	$('#b').on('click', function(){
		if ($wallet > 0 && $wallet > banana.price ) {
		banana.inventory += 1;
		banana.totalSpent += banana.price;
		banana.avePrice = banana.totalSpent / banana.inventory;
		$wallet = $wallet - banana.price;
		$('.banana').find('#inventory').find('span').remove();
		$('.banana').find('#inventory').append('<span>' + banana.inventory + '</span>');
		$('.banana').find('#avgPrice').find('span').remove();
		$('.banana').find('#avgPrice').append('<span>' + banana.avePrice.toFixed(2) + '</span>');
	}	else {
		alert('You can\'t do that! You gotta have money to buy stuff!');
		}
	})
		$('#bb').on('click', function(){
			if (banana.inventory > 0){
			banana.inventory -= 1;
			$wallet = $wallet + banana.price;
			$('.banana').find('#inventory').find('span').remove();
			$('.banana').find('#inventory').append('<span>' + banana.inventory + '</span>');
			}
		})

	$('#c').on('click', function(){
		if ($wallet > 0 && $wallet > grape.price) {
			grape.inventory += 1;
			grape.totalSpent += grape.price;
			grape.avePrice = grape.totalSpent / grape.inventory;
			$wallet = $wallet - grape.price;
			$('.grape').find('#inventory').find('span').remove();
			$('.grape').find('#inventory').append('<span>' + grape.inventory + '</span>');
			$('.grape').find('#avgPrice').find('span').remove();
			$('.grape').find('#avgPrice').append('<span>' + grape.avePrice.toFixed(2) + '</span>');
			console.log(grape);
		}	else {
			alert('You can\'t do that! You gotta have money to buy stuff!');
			}
		})
			$('#cc').on('click', function(){
				if (grape.inventory > 0) {
				grape.inventory -= 1;
				$wallet = $wallet + grape.price;
				$('.grape').find('#inventory').find('span').remove();
				$('.grape').find('#inventory').append('<span>' + grape.inventory + '</span>');
				}
			})
	$('#d').on('click', function(){
		if ($wallet > 0 && $wallet > orange.price) {
			orange.inventory += 1;
			orange.totalSpent += orange.price;
			orange.avePrice = orange.totalSpent / orange.inventory;
			$wallet = $wallet - orange.price;
			$('.orange').find('#inventory').find('span').remove();
			$('.orange').find('#inventory').append('<span>' + orange.inventory + '</span>');
			$('.orange').find('#avgPrice').find('span').remove();
			$('.orange').find('#avgPrice').append('<span>' + orange.avePrice.toFixed(2) + '</span>');
			console.log(orange);
		}	else {
			alert('You can\'t do that! You gotta have money to buy stuff!');
			}
	})

	$('#dd').on('click', function(){
		if (orange.inventory > 0){
		orange.inventory -= 1;
		$wallet = $wallet + orange.price;
		$('.orange').find('#inventory').find('span').remove();
		$('.orange').find('#inventory').append('<span>' + orange.inventory + '</span>');
		}
	})

$('.buy, .sell').on('click', function (){
	var $para = $('<p id="totalCash"></p>');
	$para.append($wallet.toFixed(2));
	$('header').find('#totalCash').remove();
	$('header').append($para);
	});

	setInterval(priceUpdate, 5000);
});
	function priceUpdate () {
		apple.priceCalculator();
		$('.apple').find('.price').find('span').remove();
		$('.apple').find('.price').append('<span> Price: ' + apple.price.toFixed(2) +'</span>');
		banana.priceCalculator();
		$('.banana').find('.price').find('span').remove();
		$('.banana').find('.price').append('<span> Price: ' + banana.price.toFixed(2) +'</span>');
		grape.priceCalculator();
		$('.grape').find('.price').find('span').remove();
		$('.grape').find('.price').append('<span> Price: ' + grape.price.toFixed(2) +'</span>');
		orange.priceCalculator();
		$('.orange').find('.price').find('span').remove();
		$('.orange').find('.price').append('<span> Price: ' + orange.price.toFixed(2) +'</span>');
	}
