import React, {createContext} from 'react';
import RootNavigation from './src/navigation';
import useAppReducer from './src/hooks/useAppReducer';
import {
  CategoryStrings,
  IGame,
  IRecord,
  PlatformStrings,
  SortByStrings,
} from './src/types';

type InitialStateType = {
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

const initialState = {
  gameList: [],
  recordList: [],
  toggleFilterModal: {
    visible: false,
  },
  toggleSortingModal: {
    visible: false,
  },
  platformRadioValue: 'all' as PlatformStrings,
  categoryRadioValue: null,
  sortingRadioValue: 'relevance' as SortByStrings,
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const App = () => {
  const {state, dispatch} = useAppReducer();

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <RootNavigation />
    </AppContext.Provider>
  );
};

export default App;
