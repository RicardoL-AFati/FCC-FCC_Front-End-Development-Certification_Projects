
var quoteArray = [
    {quote: 
        "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death’s final constraint to realize that it has passed away before we knew it was passing. So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it… Life is long if you know how to use it.", 
        author:"Seneca"},
    {quote: "You act like mortals in all that you fear, and like immortals in all that you desire", author:"Seneca"},
    {quote: "They lose the day in expectation of the night, and the night in fear of the dawn.", author:"Seneca"},
    {quote: "There is nothing the busy man is less busied with than living.", author:"Seneca"},
    {quote: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today… The whole future lies in uncertainty: live immediately.", author:"Seneca"},
    {quote: "People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.", author:"Seneca"},
    {quote: "Even though you seize the day, it still will flee; therefore, you must vie with time’s swiftness in the speed of using it, and, as from a torrent that rushes by and will not always flow, you must drink quickly.", author:"Seneca"},
    {quote: "Of all men they alone are at leisure who take time for philosophy, they alone really live; for they are not content to be good guardians of their own lifetime only. They annex every age to their own; all the years that have gone before them are an addition to their store.", author:"Seneca"},
    {quote: "The part of life we really live is small. For all the rest of existence is not life, but merely time.", author:"Seneca"},
    {quote: "Cicero said that he was “half a prisoner.” But, in very truth, never will the wise man resort to so lowly a term, never will he be half a prisoner—he who always possesses an undiminished and stable liberty, being free and his own master and towering over all others. For what can possibly be above him who is above Fortune?", author:"Seneca"},
    {quote: "Waste no more time arguing what a good man should be. Be one", author:"Marcus Aurelius"},
    {quote: "If it is not right, do not do it, if it is not true, do not say it.", author:"Marcus Aurelius"},
    {quote: "The mind adapts and converts to its own purposes the obstacle to our acting. The impediment to action advances action. What stands in the way becomes the way.", author:"Marcus Aurelius"},
    {quote: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is colored by such impressions.", author:"Marcus Aurelius"},
    {quote: "We all love ourselves more than other people, but care more about their opinion than our own.", author:"Marcus Aurelius"},
    {quote: "Not to feel exasperated, or defeated, or despondent because your days aren’t packed with wise and moral actions. But to get back up when you fail, to celebrate behaving like a human—however imperfectly—and fully embrace the pursuit that you’ve embarked on.", author:"Marcus Aurelius"},
    {quote: "How easy it is to repel and to wipe away every impression which is troublesome or unsuitable, and immediately to be in all tranquility.", author:"Marcus Aurelius"},
    {quote: "You could leave life right now. Let that determine what you do and say and think", author:"Marcus Aurelius"},
    {quote: "Ambition means tying your well-being to what other people say or do…Sanity means tying it to your own actions.", author:"Marcus Aurelius"},
    {quote: "Discard your misperceptions. Stop being jerked like a puppet. Limit yourself to the present.", author:"Marcus Aurelius"},
    {quote: "To make the best of what is in our power, and take the rest as it occurs.", author: "Epictetus"}
];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function retrieveQuote(){
    var index = getRandomInt(0, quoteArray.length);
    return quoteArray[index];
}

function randomColor(){
    var red = getRandomInt(0, 256);
    var green = getRandomInt(0, 256);
    var blue = getRandomInt(0, 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

$('#newQuote').on('click', function(){
    var quote = retrieveQuote();
    var newColor = randomColor();
    
    $('#quote').text(quote.quote);
    $('#author').text("- " + quote.author);

    $('[id = "sideDiv"]').css("backgroundColor", newColor);
    $('#quoteDiv').find("button").css("backgroundColor", newColor);
    $('#quoteText').children().css('color', newColor);
})

$('#twitter').on('click', function(){
    var quote = {
        quote : $('#quote').text(),
        author : $("#author").text(),
    };
    window.open("https://twitter.com/intent/tweet?text=" + quote.quote + quote.author);
});
