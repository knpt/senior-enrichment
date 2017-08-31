'use strict'
import React, {Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import SingleCampus from './SingleCampus'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'
import Navbar from './Navbar'
import AddStudentForm from './AddStudentForm'

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
                    <Route exact path ="/students" component = {AllStudents}/>
                    <Route path ="/students/:id" component = {SingleStudent}/>
                    
                </Switch>
                </main>
                <div>
                <AddStudentForm/>
                </div>
            </div>
            
        )
    }
}