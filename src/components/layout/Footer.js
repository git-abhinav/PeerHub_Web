
import React from 'react';
function Footer() {
  return (
    <div>
        <footer className="fixed-bottom text-center">
          <span className="text-warning font-weight-bold ">
            <a href="https://github.com/git-abhinav" target="_blank" rel="noopener noreferrer"> 
              {/* target="_blank to make it open in new tab" */}
              <i class="fab fa-github fa-3x"></i>
            </a>
          </span>
        </footer>
    </div>
  );
}
export default Footer;