import database from '../utilities/dbConfig'

export const setSpeakers = (speakers) => ({
  type: 'SET_SPEAKERS',
  speakers
});

export const startSetSpeakers = () => {
  return (dispatch) => {
    return database.ref(`speakers/`).once('value').then((snapshot) => {
      const speakers = [];
      snapshot.forEach((childSnapshot) => {
        speakers.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setSpeakers(speakers));
    });
  };
};


