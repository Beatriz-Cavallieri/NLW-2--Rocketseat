import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeachersList from './pages/TeachersLIst'

export default function Routes() {
    return (
        <Router>
            <Route path="/" exact component={Landing} />
            <Route path="/give-classes" component={TeacherForm}/>
            <Route path="/study" component={TeachersList}/>
        </Router>
    )
}
