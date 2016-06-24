import { FILTER_GENRES } from '../../actions/action-types';

const genreFilterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_GENRES:
      let newState = {...action.payload.state};
      let { filter, prop } = action.payload;
      let events = newState.allEvents;

      const addFilter = (arr1, arr2) => {
        arr1.forEach(event => {
          let test = `${event.genre}`.toUpperCase()
                      .indexOf(filter.toUpperCase());

          if (test >= 0) {
            arr2.push(event);
          }
        });
      };

      const removeFilter = (arr, i) => {
        arr.forEach(event => {
          let test = `${event.genre}`.toUpperCase()
                      .indexOf(filter.toUpperCase());

          if (test >= 0) {
            arr.splice(i, 1);
          }
        });
      };

      if (newState.currentFilters[filter]) {
        delete newState.currentFilters[filter];
        removeFilter(newState.filteredEvents);
      } else {
        newState.currentFilters[filter] = filter;
        addFilter(newState.allEvents, newState.filteredEvents);
      }
      console.log(newState.currentFilters);
      console.log(newState);

      return newState;
    default:
      return state;
  }
};

export default genreFilterReducer;
