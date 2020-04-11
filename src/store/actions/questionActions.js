export const addQuestion = (question) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId=getState().firebase.auth.uid;
        firestore.collection('questions').add({
            ...question, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=> { dispatch({ type: 'ADD_QUESTION', question: question});
        }).catch((err)=> {
                dispatch({type:'ADD_QUESTION_ERROR', err});
            })
        }
    };

export default addQuestion