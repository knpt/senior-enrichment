import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students'
import AddStudentForm from './AddStudentForm'

class AllStudents extends Component {

    componentDidMount(){
        this.props.fetchStudents();
    }

    render(){
        const students = this.props.students
        console.log(this.props)
        return (
            <div className = "container" style = {{fontWeight: 'bold'}}>
                <h3> STUDENTS: </h3> 
            <table className = 'table'>
              <thead>
                <tr>
                  <th></th>
                    <th> Students </th> 
                    <th> Campus </th>
                   
                </tr>
              </thead>
              <tbody>
                {students.map(student=> (
                  <tr key = {student.id}>
                      <td> </td>
                        <td> 
                            <Link className = "studentlink" to={`/students/${student.id}`}>
                                {student.name} 
                            </Link>
                        </td>
                      <td>  
                                {student.campusId} 
                      </td>
                     <td>
                        <button className="btn btn-default btn-xs"> 
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>
                    </td>
                      <td>
                      </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        </div>
        <div>
            <AddStudentForm />
        </div>
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