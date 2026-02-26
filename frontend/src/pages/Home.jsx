import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Trust from '../components/Trust';
import Programs from '../components/Programs';
import Events from '../components/Events';
import Team from '../components/Team';
import LMS from '../components/LMS';
import FitSense from '../components/FitSense';
import Testimonials from '../components/Testimonials';
import ConsultationForm from '../components/ConsultationForm';

const Home = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <div id="trust">
                <Trust />
            </div>

            <section id="programs">
                <Programs />
            </section>

            <section id="events">
                <Events />
            </section>

            <section id="team">
                <Team />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="consultation">
                <ConsultationForm />
            </section>
        </>
    );
};

export default Home;
