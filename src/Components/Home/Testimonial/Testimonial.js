import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('https://desolate-wildwood-21034.herokuapp.com/feedback')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    return (
        <div>
            <div className="mt-3 testimonialBg ">
                <h1 className="text-center mb-3" style={{color: 'white', fontSize:'50px'}}>Testimonials</h1>
                <div className="row">
                    {
                        testimonial.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
