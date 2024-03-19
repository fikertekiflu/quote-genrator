let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');


const quotes= [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "In the midst of chaos, there is also opportunity.",
      person: "Sun Tzu"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      person: "Lao Tzu"
    },
    {
      quote: "It does not matter how slowly you go, as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
    },
    {
      quote: "The only person you should try to be better than is the person you were yesterday.",
      person: "Matt Damon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success.",
      person: "Albert Schweitzer"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      person: "Mark Twain"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "The best way to predict the future is to create it.",
      person: "Peter Drucker"
    },
    {
      quote: "Success is not in what you have, but who you are.",
      person: "Bo Bennett"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      person: "Charles R. Swindoll"
    },
    {
      quote: "The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
      person: "Mark Zuckerberg"
    },
    
        {
          quote: "A wise man learns more from his enemies than a fool from his friends.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "He who thinks he is leading and has no one following him is only taking a walk.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "Coffee is our bread; we will rise from wherever we may fall.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "When spider webs unite, they can tie up a lion.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "It is better to be sick than to be idle.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "A fool has many days.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "When you stumble, make it part of the dance.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "He who conceals his disease cannot expect to be cured.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "He who refuses to obey cannot command.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "A bird that flies off the earth and lands on an anthill is still on the ground.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "The heart of a fool is in his mouth, but the mouth of a wise man is in his heart.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "If you pick up one end of the stick you also pick up the other.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "The house of a person we love is never far.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "A good thing sells itself; a bad one advertises itself.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "Patience is the mother of a beautiful child.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "One who plants grapes by the road side, and one who marries a pretty woman, share the same problem.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "Do not allow the belly to make you useless.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "When the heart overflows, it comes out through the mouth.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "One cannot both feast and become rich.",
          person: "Ethiopian Proverb"
        },
        {
          quote: "The fool speaks, the wise man listens.",
          person: "Ethiopian Proverb"
        }
      ];
      btn.addEventListener('click',function(){

        let random=Math.floor(Math.random()*quotes.length);
         
        quote.innerText=quotes[random].quote;
        person.innerText=quotes[random].person;

      })

      
      
  
  