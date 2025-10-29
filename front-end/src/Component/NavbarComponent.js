import React from 'react';
import {Link} from 'react-router-dom'; 

function NavbarComponent() {
    
    function collapse(){
        var mainNav = document.getElementById("navbarNavAltMarkup");
        mainNav.classList.toggle('show');
    }

    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" onClick={collapse} data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex flex-row">
                <div className="navbar-nav">
                    <span></span>
                </div>
                
            </div>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup" >
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" style={{width:"125px"}}  to="/">Score <span className="sr-only">(current)</span></Link>
                    
                    <Link className="nav-item nav-link std" style={{width:"150px"}}>Standings
                        <div className="dropdown-content">
                            <Link  to="/standings/laliga" className="leagueStd" >La Liga</Link>
                            <Link  to="/standings/epl" className="leagueStd" >Premier Leauge</Link>
                        </div>
                    </Link>
                    <Link className="nav-item nav-link" to="/highlights" style={{width:"125px"}}>Highlights</Link>
                    <Link className="nav-item nav-link" to="/news" style={{width:"125px"}}>News</Link>
       
                </div>
            </div>
            <div className="collapse navbar-collapse d-flex flex-row-reverse"  > 
                <div className="navbar-nav" style={{fontSize:"smaller"}}>
                    <span className="nav-link">v1.0</span>
                </div>
                
            </div>
        </nav>
    );
    
}

export default NavbarComponent;