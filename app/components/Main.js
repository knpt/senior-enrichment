'use strict'
import React, {Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import StatefulCampuses from './StatefulCampuses'
import SingleCampus from './SingleCampus'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import Navbar from './Navbar'

export default class Main extends Component {
  
    componentDidMount(){

    }


    render(){
        return(
            <div>
                <Navbar/>
                <main>
                <Switch>
        
                    {/* <Route exact path = "/campuses" component = {StatefulCampuses} /> */}
                    <Route path ="/campuses/:campusId" component = {SingleCampus} /> 
                    <Route path = "/campuses" component = {AllCampuses}/>
                    <Route path ="/students" component = {AllStudents}/>
                    
                </Switch>
                </main>
            </div>
            
        )
    }
}