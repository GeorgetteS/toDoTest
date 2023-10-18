import cn from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Row } from '../../shared/ui/Row';
import { Input } from '../../shared/ui/Input';

import styles from './TaskConstructor.module.scss';
// import { CreateTask } from '../../features/create-task';
import { addNewtask } from '../../redux/Task/TaskSlice';
import { Button } from '../../shared/ui/Button';

export const TaskConstructor = () => {
  const [taskText, setTaskText] = useState('');

  const dispath = useDispatch();

  const addTask = () => {
    dispath(addNewtask(taskText));
    setTaskText('');
  };

  return (
    <Row className={styles.root}>
      <Input
        value={taskText}
        onEnter={addTask}
        onChange={(e) => setTaskText(e.target.value)}></Input>
      <Button onClick={addTask}> Добавить </Button>
    </Row>
  );
};
