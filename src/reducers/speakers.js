const speakerReducerDefaultState = [];

export default (state = speakerReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SPEAKER':
      return [
        ...state,
        action.speakers
      ];
    case 'REMOVE_SPEAKER':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_SPEAKER':
      return state.map((speakers) => {
        if (speakers.id === action.id) {
          return {
            ...speakers,
            ...action.updates
          };
        } else {
          return speakers;
        };
      });
    case 'SET_SPEAKERS':
      return action.speakers;
    default:
      return state;
  }
};
