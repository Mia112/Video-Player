import React from 'react';


function navBar() {
        return ( 
            <nav className = "navbar navbar-light bg-light">
            <div>
            <a className = "navbar-brand" href = "/" >
            Video Player</a>
            <a className = "btn btn-info" href = "/saved">
            View Your Videos 
            </a> 
            </div> 
            </nav>
           
        );
    }

export default navBar;