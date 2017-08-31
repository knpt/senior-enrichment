import React from 'react';
import { connect } from 'react-redux';

function Navbar(props){
    return (
        
    <nav className = "navbar navbar-default">
        <div className = "container-fluid">
       
            
         <div className="topnav" id="myTopnav"> 
            <a href="/"> Home </a>
            <a href="/students"> Students </a>
            <a href="/campuses"> Campuses </a>
        </div>
        <div className="main">
            <p>MANAGE YOUR CAMPUSES WITH THIS AWESOME NAVBAR</p>
        </div>
        </div>
    </nav>
    )
}

const mapStateToProps = function(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Navbar)