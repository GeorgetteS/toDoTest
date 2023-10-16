import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { taskSelector } from '../../../../redux/Task/TaskSelector';
import { fetchTasks } from '../../../../redux/Task/TaskSlice';

export const useGetTasks = () => {
  const { status, error, tasks } = useSelector(taskSelector());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return { status, error, tasks, isEmpty: !tasks.lenght };
};
