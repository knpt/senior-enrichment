import React from 'react';
import { connect } from 'react-redux';

function Navbar(props){
    return (
    <nav>
        <div className="topnav" id="myTopnav">
            <a href="/"> Home </a>
            <a href="/students"> Students </a>
            <a href="/campuses"> Campuses </a>
        </div>
        <div className="main">
            <p>MANAGE YOUR CAMPUSES WITH THIS AWESOME NAVBAR</p>
        </div>
    </nav>
        // <nav>
        //     <div className= "navbar-header">
        //     HI IM A NAVBAR FOR YOUR SKOOLS
       
        //     </div>
        // </nav>
    )
}

const mapStateToProps = function(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Navbar)