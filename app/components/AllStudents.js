import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students'


class AllStudents extends Component {

    componentDidMount(){
        this.props.fetchStudents();
    }

    render(){
        const students = this.props.students
        console.log(this.props)
        return (
            <div className = "container">
                <h3> STUDENTS </h3>
                <ul>
                {
                    students.map(student=> {
                        return (
                            <div key = {student.id}> 
                            <li>
                              <p>
                              <Link className = "studentlink" to={`/students/${student.id}`}>
                                <span> {student.name} | Campus ID: {student.campusId} </span>
                              </Link> 
                              </p>
                            </li>
                            </div>
                        )
                    })
                }
                </ul>   
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps){
    return {
        students: state.students
    }
}

// const mapDispatchToProps = {fetchStudents}

const mapDispatchToProps = function(dispatch){
    return {
        fetchStudents: function(){
            const action = fetchStudents()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)