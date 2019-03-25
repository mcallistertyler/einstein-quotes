import einstein1 from './images/einstein-1.jpg';
import einstein2 from './images/einstein-2.jpg';
import einstein3 from './images/einstein-3.jpg';
import einstein4 from './images/einstein-4.jpg';
import einstein5 from './images/einstein-5.jpg';
import logo from './images/relativity-formulae.svg';

const images = [
    {
      original: einstein1
    },
    {
      original: einstein2
    },
    {
      original: einstein3
    },
    {
      original: einstein4
    },
    {
      original: einstein5
    },
  ];

const quotes = [
  'I’ve got a feeling we’re not in kansas anymore.',
  'I’ll have what she’s having.',
  'There are 10 types of people: those who understand binary, and those who don’t.',
  'The concept of global warming was created by and for the Chinese',
  'Leave your stupid comments in your pocket!',
  'Don’t try it, Anakin. I have the high ground!',
  'A medium dry martini,lemon peel. Shaken, not stirred',
  'Float like a butteryfly sting like a bee',
  'Sure there have been injuries and deaths in boxing - but none of them serious.',
  'I owe a lot to my parents, especially my mother and father.',
  'I may be dumb, but I’m not stupid.',
  'Smoking kills. If you’re killed, you’ve lost a very important part of your life.',
  'I say no to drugs, but they don’t listen.',
  'How can mirrors be real if our eyes aren’t real',
  'If you can dream it, you can achieve it.',
  'You miss 100% of the shots you don’t take',
  'Eighty percent of success is showing up.',
  'Accept who you are.Unless you’re a serial killer.',
  'It’s okay if you don’t like me.Not everyone has good taste.',
  'The four most beautiful words in our common language: I told you so.',
  'Rice is great when you’re hungry and you want 2000 of something.',
  'I’m writing a book. I’ve got the page numbers done.',
  'When nothing is going right, go left.',
  'I’d like to live like a poor man – only with lots of money.',
  'I look like a casual, laid-back guy, but it’s like a circus in my head.',
  'My brain has too many tabs open.',
  'I don’t even believe myself when I say I’ll be ready in 5 minutes.',
  'I’m not shy, I’m holding back my awesomeness so I don’t intimidate you.',
  'You’ll never be as lazy as whoever named the fireplace.',
  'Am I perfect? No. But am I striving to be a better person every day? Also no.',
  'I’m not arguing. I’m simply explaining why I’m right.',
  'My career plans were much more exciting when I was 5.',
  'The best way to appreciate your job is to imagine yourself without one.',
  'Don’t yell at your kids! Lean in real close and whisper, it’s much scarier.',
  'Marriage…it’s not a word, it’s a sentence.',
  'Don’t think about your errors or failures, otherwise you’ll never do a thing.',
  'The advice I would give to someone is to not take anyone’s advice.',
  'If you try to fail, and succeed, which have you done? ',
  'What is a date, really, but a job interview that lasts all night?',
  'I don’t even read the papers. I read ‘USA Today’ because it has color photos.',
  'The best advice I’ve ever received is: No one else knows what they’re doing either.',
  'Mondays are fine. It’s your life that sucks.',
  'If you spend your days doing what you love, it is impossible to fail. ',
  'Ah, yes, divorce… from the Latin word meaning to rip out a man’s genitals through his wallet.',
  'Confidence is 10% work and 90% delusion',
  'Alcohol is like Photoshop for real life.',
  'I failed kindergarten because I couldn’t spell my last name.',
  'The word abbreviation sure is long for what it means.',
  'Sex is the most fun you can have without laughing.',
  'Life doesn’t imitate art, it imitates bad television.',
  'Do I look like I know what a JPEG is? I just want a picture of a god-dang hot dog!'
];

function generateQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function drawQuote(ctx, genquote){
  genquote =  '“' + genquote + '” - Albert Einstein';
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.font = "35px serif";
  let words = genquote.split(" ");
  let lines = [];
  let currentLine = words[0];
  for (let i = 1; i < words.length; i++){
    let word = words[i];
    let width = ctx.measureText(currentLine + " " + word).width;
    if (width < 500) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  let linebreak = 60;
  for (let j = 0; j < lines.length; j++){
    ctx.strokeText(lines[j], 0, linebreak);
    ctx.fillStyle = "white";
    ctx.fillText(lines[j], 0, linebreak);
    linebreak+=40;
  }
}

export {images, generateQuote, logo, drawQuote};