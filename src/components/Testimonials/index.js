import React, { useState, useEffect } from 'react';
import './index.css'

const Testimonials = () => {

    const testimonialsData = [
        {
            quote: "FinanceApp helped me manage my finances better than ever before. With their intuitive tools, I could easily track my expenses and set realistic budgets. Highly recommended!",
            author: "John Doe"
        },
        {
            quote: "I've been using FinanceApp for years now, and it has completely transformed the way I approach investing. Their investment analysis tools are top-notch, providing valuable insights into market trends.",
            author: "Jane Smith"
        },
        {
            quote: "Thanks to FinanceApp, I was able to secure a mortgage with a great interest rate. Their team provided expert guidance throughout the entire process, making it seamless and stress-free.",
            author: "Michael Johnson"
        }
        
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 2000); 

        return () => clearInterval(interval);
    }, [testimonialsData.length]);

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2>Client Testimonials</h2>
                <div className="testimonial-carousel">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`testimonial ${index === currentTestimonialIndex ? 'active' : ''}`}
                        >
                            <div className="testimonial-content">
                                <p>"{testimonial.quote}"</p>
                                <cite className='author'>- {testimonial.author}</cite>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Testimonials