
const generate = document.querySelector('.generate');
const tweet = document.querySelector('.tweet');
const error = document.querySelector('.error');
let spinnerCircle = document.querySelector('.sk-circle')

// First option of dis[laying to the Dom]
// const quote = document.querySelector('.quote');


generate.addEventListener('click', getQuote);


// function time(){
// 			error.textContent = 'Failed to fetch new quote, try again!';
// 			clearTimeout(x)
// 		}


async function getQuote(){
	spinnerCircle.classList.remove('spinner');
	generate.disabled = true;

	try{
		const response = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")

		const json = await response.json()
		// quote.textContent = json.message
		displayQuote(json.message)
		tweetIt(json.message) 
		 
	}catch(err){
		// displayQuote('Failed to fetch new quote, try again!')

		error.textContent = 'Failed to fetch new quote, try again!';


		// to remove error pop-up after 5 seconds
		setTimeout(function(){
			
			error.textContent = ''
			
		}, 5000)

		
	}finally{
		spinnerCircle.classList.add('spinner')
		generate.disabled = false;
	}
	
	}
	


// second option of displaying to the DOM
function displayQuote(quote){
	const quoteText = document.querySelector('.quote');
	quoteText.textContent = quote;
	
	
}


function tweetIt(quote){
	tweet.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
	
}


getQuote()




