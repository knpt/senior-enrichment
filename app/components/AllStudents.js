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
                {
                    students.map(student=> {
                        return (
                            <div key = {student.id}> 
                                {student.name}
                            </div>
                        )
                    })
                }
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