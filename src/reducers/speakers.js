const speakerReducerDefaultState = [];

export default (state = speakerReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SPEAKERS':
      return action.speakers;
    default:
      return state;
  }
};
