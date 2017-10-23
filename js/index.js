$(document).ready(function(){
	getQuote();
	function getQuote()
	{
		var quotes = ["The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.-Franklin D. Roosevelt","The Man Who Has Confidence In Himself Gains The Confidence Of Others.- Hasidic ","Security Is Mostly A Superstition. Life Is Either A Daring 	Adventure Or Nothing.- Helen ","Whether You Think You Can Or Think You Can’t, You’re Right.- Henry Ford","We Generate Fears While We Sit. We Overcome Them By Action.- Dr. Henry Link"];
		randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
		var auth = randomQuote.split("-");
		var q =$('#quote').text(auth[0]);
		var a =$("#author").text(auth[1]);

	}
	$(".b1").on("click",function(){
		getQuote();
	});
	$(".b2").on("click",function(){
		window.open('https://twitter.com/intent/tweet?text=' +'%20' + randomQuote);
	});
});