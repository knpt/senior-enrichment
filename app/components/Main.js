'use strict'
import React, {Component } from 'react';
import { connect } from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import SingleCampus from './SingleCampus'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'
import Navbar from './Navbar'
import AddStudentForm from './AddStudentForm'
import Students from './Students'
import { fetchStudents } from '../reducers/students'
import Home from './Home'
import AddCampus from './AddCampus'


export default class Main extends Component {
  
    render(){
       
        return(
            <div>
                <Navbar/>
                <main>
                <Switch>
        
                    {/* <Route exact path = "/campuses" component = {StatefulCampuses} /> */}
                    <Route exact path ="/campuses/add" component = {AddCampus}/>
                    <Route path ="/campuses/:campusId" component = {SingleCampus} /> 
                    <Route path = "/campuses" component = {AllCampuses}/>
                    <Route exact path ="/students" component = {AllStudents}/>
                    <Route path ="/students/:id" component = {SingleStudent}/>
                    
                </Switch>
                </main>
                <div>
                </div>
                
            </div>
            
        )
    }
}

