import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useSetHooks = () => {
  // status of fetching in thunk from redux state
  const personsStatus = useSelector(
    (state: RootState) => state.specialists.status,
  );

  // all persons from redux state
  const persons = useSelector(
    (state: RootState) => state.specialists.psycologistsList,
  );

  return {
    personsStatus,
    persons,
  };
};
