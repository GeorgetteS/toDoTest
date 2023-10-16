import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '../../shared/ui/Checkbox';
import { taskByIdSelector } from '../../redux/Task/TaskSelector';
import { toggleStatus } from '../../redux/Task/TaskSlice';

export const ToggleTask = ({ taskId }) => {
  const task = useSelector(taskByIdSelector(taskId));
  const dispath = useDispatch();

  return <Checkbox onChange={() => dispath(toggleStatus(taskId))} withStatus={task.completed} />;
};
