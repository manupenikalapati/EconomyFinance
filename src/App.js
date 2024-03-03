import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SavingsAndInvestments from './components/SavingsAndInvestments';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import ClientFinanceComponent from './components/ClientFinanceComponent';
import MyQuote from './components/MyQuote';
import CurrencyConverter from './components/CurrencyConverter';
import QuoteCalculate from './components/QuoteCalculate';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';





import './App.css';

function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        
        
          <Routes>
              
              <Route path="/" element={<Home/>}/>  
              <Route  path="/about" element={<About/>}/>
              <Route  path="/savings" element={<SavingsAndInvestments/>}/>
              <Route  path="/services" element={<Services/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              
              
          </Routes>
          
          <ClientFinanceComponent/>
          <CurrencyConverter/>
          <QuoteCalculate/>
          <MyQuote/>
          <Testimonials/>
          <Footer/>
          

          
        
       
        
      </BrowserRouter>
      
      
    
     
    
  );
  }
  
 
  


export default App;
