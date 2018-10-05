import database from '../utilities/dbConfig'

// SET_POSTS
export const setSpeakers = (speakers) => ({
  type: 'SET_SPEAKERS',
  speakers
});

export const startSetSpeakers = () => {
  return (dispatch, getState) => {
    return database.ref(`speakers/`).once('value').then((snapshot) => {
      const speakers = [];

      snapshot.forEach((childSnapshot) => {
        speakers.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      console.log(speakers, "Speakers FROM DB")
      dispatch(setSpeakers(speakers));
    });
  };
};


// ADD_POST
export const addPost = (post) => ({
  type: 'ADD_EXPENSE',
  post
});

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      body = '',
      createdAt = 0
    } = postData;

    const post = { title, body, createdAt }

    database.ref(`blog/`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }))
    })
  }
}

// REMOVE_POST
export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id
})

// START_REMOVE_POST
export const startRemovePost = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`blog/${id}`).remove().then(() => {
      dispatch(removePost({ id }));
    })
  }
}

// EDIT_POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});

// START_EDIT_POST
export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`blog/${id}`).update().then(() => {
      dispatch(editPost(id, updates))
    })
  }
}

