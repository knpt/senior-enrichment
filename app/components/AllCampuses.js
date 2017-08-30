import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCampuses} from '../reducers/campuses'; //thunk creator


class AllCampuses extends Component {

    componentDidMount(){
        this.props.fetchCampuses();
    }
    render(){
        // const {campuses} = this.props
        const campuses = this.props.campuses
       
        return (
            <div className = "container" >
                <h3> CAMPUSES </h3>
                {
                campuses.map(campus => {
                    return (
                         <div key = {campus.id}> 
                           
                            <Link className = "crest" to={`/campuses/${campus.id}`}>
                           
                            <img src = {campus.image} width= {150} height={150}/>
                            <div className = "campusName">
                              <h4>
                                 <span> {campus.name} {campus.id} </span>
                              </h4>
                            </div>
                            </Link>
                          
                         
                        </div>
                    )
                }) 
                } 
            </div> 
        )
    }
    
}


const mapState = function(state, ownProps){
    return {
        campuses: state.campuses
    }
}
// const mapState = ({ campuses }) => ({campuses});
const mapDispatch = {fetchCampuses};

export default connect(mapState, mapDispatch)(AllCampuses)
