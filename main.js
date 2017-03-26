$("#twitterBtn").on("click", function(){
	window.open('http://twitter.com/intent/tweet?text=' + $('#movieQuote').text() + " " + $('#quoteMovie').text());
	});
	$("#newQteBtn").on("click", ()=>{
		let quotations = (data)=>{
			console.log("success!", data);
			$("#movieScreen").html('<span id="movieQuote" class="quoteFont">"'+data.quote+'"</span></br><span id="quoteMovie" class="movieFont">&#8211 from '+data.author+'</span>');
		}
		$.ajax({
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
			type: 'GET',
			success: quotations,
			dataType: 'json',
			beforeSend: (xhr) =>{
			xhr.setRequestHeader("X-Mashape-Key", "y1jJJUQiSSmshlFwDrFXvHmCiZX5p1MGrFQjsnGWVaLtxF600l"); // Enter here your Mashape key
			},
			error: (err) =>{
				console.log("error: ",err);
			},
			complete: () =>{
				console.log("I got a response.");
			}
		});
		
	});