import React from 'react';
function Navbar() {
  return (
    <div>
      <header>
        <div class="navbar navbar-dark bg-dark box-shadow">
          <div class="container d-flex justify-content-between">
            <a href="/" class="navbar-brand d-flex align-items-center">
              <strong>PeerHub</strong>
            </a>
          <a href="#/Download" className="navbar-toggler">
            <i class="fas fa-download"></i>
          </a>
          </div>
        </div>
        <section class="jumbotron text-center">
          <div class="container">
            <p class="lead text-muted">
              PeerHub a file sharing portal for web and     
              <a href="https://peer-hub.herokuapp.com/data?name=PeerHub.apk" className="addLeftSpace" target="_blank" rel="noopener noreferrer">
                Android App
              </a>
            </p>
            <div className="justify-content-center">
              <a href="#/Home" class="btn btn-primary my-2 addMarginToButton">Home page  </a>
              <a href="#/"> <i class="fas fa-search"></i> </a>
              <a href="#/Upload" class="btn btn-success addMarginToButton">Uplaod files</a>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Navbar;