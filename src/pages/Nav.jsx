import { useState } from "react";

import { usePlay } from "../contexts/Play";

import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";

export const Nav = () => {
  const { play } = usePlay();
  const [currentPage, setCurrentPage] = useState('home');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      {/* 
      section === 1 || 3 : textSections[0]
      section === 6 || 8 : textSections[1]
      section === 11 || 13 : textSections[2]
      section === 16 || 18 : textSections[3]
      section === 21 || 23 : textSections[4]
      section === 26 || 28 : textSections[5]
      section === 31 || 33 : textSections[6]
      section === 36 || 38 : textSections[7]
                             section / step
      */}
      <Home />
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {
        play && (<div className="hamburger-menu-container">
          <label htmlFor="checkbox" className="hamburger-menu">
            <input type="checkbox" name="checkbox" id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </label>
          <aside className="sidebar">
            <nav>
              <div className="sidebar-item"
                onClick={
                  () => {
                    setCurrentPage('home')
                    setIsChecked(false); 
                  }
                }>
                Home
              </div>
              <div className="sidebar-item"
                onClick={
                  () => {
                    setCurrentPage('about')
                    setIsChecked(false); 
                  }
                }>
                About
              </div>
              <div className="sidebar-item"
                onClick={
                  () => {
                    setCurrentPage('contact')
                    setIsChecked(false); 
                  }
                }>
                Contact
              </div>
            </nav>
          </aside>
        </div>
        )
      }
    </div>
  );
}
