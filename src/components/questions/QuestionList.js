import React from 'react'
import QuestionSummary from './QuestionSummary'
import { Link } from 'react-router-dom'

const QuestionList = ({questions}) => {

    return (
        <div className="question-list section">
            { questions && questions.map( question => {
                return (
                    <Link to={'/question/' + question.id} key={question.id}>
                        <QuestionSummary question={question}/>
                    </Link>
                )
            })} 
            <button id="btnMore" className="btn">Load More</button>       
        </div>
    )
}

export default QuestionList