import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {mostPopularSchool, calcHighestGPA} from './sharedFunctions/computation';

function Header({schools, students}) {
  const mostPopular = mostPopularSchool(schools, students);
  const highestGPA = calcHighestGPA(schools, students);
  return(
      <div>
        <h1><Link to='/'>Acme Schools</Link></h1>
        <div>
          <ul>
            <li>Schools {schools.length}</li>
            <li><Link to='/students'>Students {students.length}</Link></li>
            <li>Most Popular {mostPopular.name} ({mostPopular.size})</li>
            <li>Top School {highestGPA.name}</li>
          </ul>
        </div>
      </div>
  );
}

const mapStateToProps = state => ({
  schools: state.schools,
  students: state.students
});

export default connect(mapStateToProps)(Header);
