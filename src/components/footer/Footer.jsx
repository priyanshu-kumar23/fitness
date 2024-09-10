import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import logo from '../../assets/1.jpg'

const Footer = () => {
  return (
    <div className="container">
      <div className="grid-layout">
        {/* Left section - Text content */}
        <div className="text-section">
          <h1>The Fit Club</h1>
          <p>
          The Fit Club Gym was started by Alex and Sparky in 2012. It’s our mission to help people in Denver get fit, stay healthy, and live life on their terms without fitness being an obstacle.
          </p>
          <h2>Claim your 7 day free trial</h2>
          
          {/* Form */}
          <form>
            <input
              type="text"
              placeholder="Name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              required
            />
            <select required>
              <option value="" disabled selected>Membership interest...</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Right section - Image */}
        <div className="image-section">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/15/10/e6/7c/the-fit-club.jpg" // Replace with your actual image URL
            alt="Gym trainers"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer