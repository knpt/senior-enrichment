import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCampus} from '../reducers/currentCampus'
import axios from 'axios';

 class SingleCampus extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("COMPONENT DID MOUNT FOR SINGLE")
        const campusId = this.props.match.params.campusId;
        console.log(campusId)
        this.props.fetchCampus(campusId)
    }


    render(){
       const currentCampus = this.props.currentCampus
        
       console.log("IM THIS.PROPS" , this.props)
        return(
            <div>
                <h3> MY SINGLE CAMPUS BY ID </h3>
                
                <img src = {currentCampus.image} width = {150} height = {150}/>
                <h4><span>{currentCampus.name} {currentCampus.id}</span></h4>
            </div>
            // <div className = "campus">
            //     <h3> {campus.name} </h3>
            //     <img src ={campus.image} className = "img-thumbnail" />
            // </div>
        )
    }

}

const mapState = function(state){
    return{
       currentCampus: state.currentCampus 
    }
}


const mapDispatch = {fetchCampus}
// const mapDispatch = function(dispatch){
//     return {
//         fetchCampus: function(id){
//             const action = fetchCampus(id)
//             dispatch(action);
//         }
//     }
// }

export default connect(mapState, mapDispatch)(SingleCampus)