import cn from 'classnames';
import { useState } from 'react';

import { Row } from '../../shared/ui/Row';
import { Input } from '../../shared/ui/Input';

import styles from './TaskConstructor.module.scss';
import { CreateTask } from '../../features/create-task';

export const TaskConstructor = () => {
  const [taskText, setTaskText] = useState('');

  return (
    <Row className={cn(styles.root)}>
      <Input value={taskText} onChange={(e) => setTaskText(e.target.value)}></Input>
      <CreateTask taskValue={taskText} onCreate={() => setTaskText('')} />
    </Row>
  );
};
