import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import Layout from '../../shared/ui/Layout';
import { fetchSingleTask, updateTask } from '../../redux/Task/TaskSlice';
import { taskSelector } from '../../redux/Task/TaskSelector';
import { Textarea } from '../../shared/ui/Textarea';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { Spin } from '../../shared/ui/Spin';

import styles from './Task.module.scss';

const Task = () => {
  const { id } = useParams();
  const { status, error, currentTask } = useSelector(taskSelector());

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleTask(id));
  }, [dispatch, id]);

  const isDisabled = () => {
    return (
      (newTitle === currentTask.title && newDescription === currentTask.description) ||
      newTitle === ''
    );
  };

  useEffect(() => {
    if (currentTask) {
      const { title, description } = currentTask;

      setNewTitle(title);
      setNewDescription(description);
    }
  }, [currentTask]);

  const changeTask = () => {
    dispatch(updateTask({ id, title: newTitle, description: newDescription }));
  };

  if (status === 'loading') return <Spin />;
  if (error) return <p>{error.message}</p>;

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.panel}>
          <h2 className={cn(styles.title, { [styles.completed]: currentTask.completed })}>
            {newTitle}
          </h2>
          <div>
            <Input
              placeholder={'Заголовок'}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <Textarea
              placeholder={'Описание'}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}></Textarea>
          </div>
        </div>
        <Button className={styles.button} onClick={changeTask} disabled={isDisabled()}>
          Изменить
        </Button>
      </div>
    </Layout>
  );
};

export default Task;
