import { useDispatch } from 'react-redux';

import { deletetask } from '../../redux/Task/TaskSlice';
import { Close } from '../../shared/ui/Close';

export const DeleteTask = ({ taskId }) => {
  const dispath = useDispatch();

  return <Close onClick={() => dispath(deletetask(taskId))} />;
};
