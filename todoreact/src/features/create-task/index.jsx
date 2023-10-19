import { useDispatch } from 'react-redux';

import { Button } from '../../shared/ui/Button';
import { addNewtask } from '../../redux/Task/TaskSlice';

export const CreateTask = ({ taskValue, onCreate }) => {
  const dispath = useDispatch();

  const addTask = () => {
    dispath(addNewtask(taskValue));
    onCreate();
  };

  return <>{<Button onClick={addTask}> Добавить </Button>}</>;
};
