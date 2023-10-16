import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchTasks } from '../../../../redux/Task/TaskSlice';

import { TaskRow } from '../Task-row';
import { Spin } from '../../../../shared/ui/Spin';

export const TaskColumn = () => {
  const { status, error, tasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (status === 'loading') return <Spin />;
  if (error) return <p>error.message</p>;
  return (
    <>
      {tasks &&
        tasks.map((task) => <TaskRow key={task.id} data={task} titleHref={`/${task.id}`} />)}
    </>
  );
};
