import React from 'react';

import './index.css'

const quotes = [
    {
      text: "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.",
      author: "Albert Einstein"
    },
    {
      text: "The best investment you can make is in yourself.",
      author: "Warren Buffett"
    },
    {
      text: "In investing, what is comfortable is rarely profitable.",
      author: "Robert Arnott"
    },
    {
      text: "The stock market is a device for transferring money from the impatient to the patient.",
      author: "Warren Buffett"
    },
    {
      text: "Don't look for the needle in the haystack. Just buy the haystack!",
      author: "John C. Bogle"
    },
    {
      text: "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.",
      author: "Robert Kiyosaki"
    },
    
    
  ];
  
  function Quote({ text, author }) {
    return (
      <div className="quote">
        <blockquote>{text}</blockquote>
        <cite className='author'>- {author}</cite>
      </div>
    );
  }
  
  const MyQuote=() =>{
    return (
      <div className="app">
        <h1>Quotes on Savings and Investment</h1>
        <div className="quote-container">
          {quotes.map((quote, index) => (
            <Quote key={index} text={quote.text} author={quote.author} />
          ))}
        </div>
      </div>
    );
  }


  export default MyQuote