const initState = {
    questions:[
        {id: '1', title: 'Issues with finding bracket keys', content: 'blah blah blah blah blah blah blah'},
        {id: '2', title: 'How do you make a french salad', content: 'blah blah blah blah blah blah blah'},
        {id: '3', title: 'Anxiety issues', content: 'blah blah blah blah blah blah blah'}
    ]
}

const questionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_QUESTION': {
            console.log('created question', action.question)
            return state;
        }
        case 'ADD_QUESTION_ERROR' : {
            console.log('add question error', action.err)
            return state;
        }
        default: return state;
    }
}

export default questionReducer