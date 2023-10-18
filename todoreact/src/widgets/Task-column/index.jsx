import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchTasks } from '../../redux/Task/TaskSlice';

import { TaskRow } from '../../entities/task/ui/Task-row';
import { Spin } from '../../shared/ui/Spin';
import { taskSelector } from '../../redux/Task/TaskSelector';
import { ToggleTask } from '../../features/toggle-task';
import { DeleteTask } from '../../features/delete-task';
import { Row } from '../../shared/ui/Row';

export const TaskColumn = ({ searchValue }) => {
  const { status, error, tasks } = useSelector(taskSelector());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (status === 'loading') return <Spin />;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      {tasks &&
        tasks
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((task) => (
            <TaskRow
              key={task.id}
              data={task}
              titleHref={`/${task.id}`}
              after={
                <Row flex>
                  <ToggleTask taskId={task.id} />
                  <DeleteTask taskId={task.id} />
                </Row>
              }
            />
          ))}
    </>
  );
};
