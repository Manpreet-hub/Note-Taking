import React from "react";
import heroImg from "../../assets/hero-img.jpg";
import "./home.css";
const Home = () => {
    return (
        <div className="home-page">
            <div className="left-section">
                <h1 className="brand-name">MyNotes</h1>
                <h2>Meet your modern</h2>
                <h2>Note Taking App</h2>
                <p className="p para-md">Manage your daily tasks and workflow in a modern way & boost your efficiency without any efforts.</p>
                <button class="btn-default btn-dark">Join Now</button>
            </div>

            <img className="hero-img" src={heroImg} alt="img" width="850px" />

        </div>

    );
}

export { Home };