var qouteButton = document.getElementById('qoute_btn');
qouteButton.onclick = getQoutesRandom;


var qoutesArray = [
    {
        contents: "\“Be yourself; everyone else is already taken.”\n",
        author: "― Oscar Wilde"
    },
    {
        contents: "\“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”\n",
        author: "― Marilyn Monroe"
    },
    {
        contents: "\“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.””\n",
        author: "― Albert Einstein"
    },
    {
        contents: "\“Be yourself; everyone else is already taken.”\n",
        author: "― Oscar Wilde"
    },
    {
        contents: "\“So many books, so little time.”\n",
        author: "― Frank Zappa"
    },
    {
        contents: "\“A room without books is like a body without a soul.”\n",
        author: "―Marcus Tullius Cicero"
    },
    {
        contents: "\“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”\n",
        author: "― Bernard M. Baruch"
    },
    {
        contents: "\“You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.”\n",
        author: "― William W. Purkey"
    },
    {
        contents: "\You know you're in love when you can't fall asleep because reality is finally better than your dreams.”\n",
        author: "― Dr. Seuss"
    },
    {
        contents: "\“You only live once, but if you do it right, once is enough.”\n",
        author: "― Mae West"
    },
    {
        contents: "\“Be the change that you wish to see in the world.”\n",
        author: "― Mahatma Gandhi"
    },
    {
        contents: "\“In three words I can sum up everything I've learned about life: it goes on.”\n",
        author: "― Robert Frost"
    },
    {
        contents: "\“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”\n",
        author: "― J.K. Rowling, Harry Potter and the Goblet of Fire"
    }
    ,
    {
        contents: "\“Don’t walk in front of me… I may not follow \n Don’t walk behind me… I may not lead\nbeside me… just be my friend”\n",
        author: "―  Albert Camus"
    },
    {
        contents: "\“If you tell the truth, you don't have to remember anything.”\n",
        author: "― Mark Twain"
    }    
]
function getQoutesRandom() {
    var qoutesLength = qoutesArray.length;
    // get random index value
    var randomIndex = Math.floor(Math.random() * qoutesLength);
    // get random item
    let item = qoutesArray[randomIndex];
    document.getElementById('qouteContent').innerHTML = item.contents;
    document.getElementById('qouteAuther').innerHTML = item.author;

    return item;
}
console.log(qoutesArray)