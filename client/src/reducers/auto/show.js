import { combineReducers } from 'redux';

export function error(state = null, action) {
  switch (action.type) {
    case 'AUTO_SHOW_ERROR':
      return action.error;

    case 'AUTO_SHOW_MERCURE_DELETED':
      return `${action.retrieved['@id']} has been deleted by another user.`;

    case 'AUTO_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case 'AUTO_SHOW_LOADING':
      return action.loading;

    case 'AUTO_SHOW_RESET':
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case 'AUTO_SHOW_SUCCESS':
    case 'AUTO_SHOW_MERCURE_MESSAGE':
      return action.retrieved;

    case 'AUTO_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case 'AUTO_SHOW_MERCURE_OPEN':
      return action.eventSource;

    case 'AUTO_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
