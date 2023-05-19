import {useReducer} from 'react';
import {
  CategoryStrings,
  IGame,
  IRecord,
  PlatformStrings,
  SortByStrings,
} from '../types';

type StateType = {
  gameList: Array<IGame>;
  recordList: Array<IRecord>;
  toggleFilterModal: {
    visible: boolean;
  };
  toggleSortingModal: {
    visible: boolean;
  };
  platformRadioValue: PlatformStrings;
  categoryRadioValue: CategoryStrings | null;
  sortingRadioValue: SortByStrings;
};

type Action = {
  type: string;
  payload: any;
};

const initialState: StateType = {
  gameList: [],
  recordList: [],
  toggleFilterModal: {
    visible: false,
  },
  toggleSortingModal: {
    visible: false,
  },
  platformRadioValue: 'all',
  categoryRadioValue: null,
  sortingRadioValue: 'relevance',
};

export default () => {
  const reducer = (state: StateType, action: Action) => {
    switch (action.type) {
      case 'ADD_GAME':
        return {
          ...state,
          gameList: action.payload,
        };
      case 'ADD_RECORD':
        return {
          ...state,
          recordList: action.payload,
        };
      case 'TOGGLE_FILTER_MODAL':
        return {
          ...state,
          toggleFilterModal: {visible: action.payload},
        };
      case 'TOGGLE_SORTING_MODAL':
        return {
          ...state,
          toggleSortingModal: {visible: action.payload},
        };
      case 'CHOOSE_PLATFORM_RADIO_VALUE':
        return {
          ...state,
          platformRadioValue: action.payload,
        };
      case 'CHOOSE_CATEGORY_RADIO_VALUE':
        return {
          ...state,
          categoryRadioValue: action.payload,
        };
      case 'CHOOSE_SORTING_RADIO_VALUE':
        return {
          ...state,
          sortingRadioValue: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};
