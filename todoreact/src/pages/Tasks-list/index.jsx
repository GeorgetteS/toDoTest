import { useState } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../shared/ui/Layout';
import { TaskColumn } from '../../widgets/Task-column';

import styles from './TasksList.module.scss';
import { TaskConstructor } from '../../widgets/Task-constructor';
import { Input } from '../../shared/ui/Input';
import { taskStatusSelector } from '../../redux/Task/TaskSelector';

const TaskList = () => {
  const [searchValue, setSearchValue] = useState('');

  const status = useSelector(taskStatusSelector());

  const isDisabled = status !== 'resolved';

  return (
    <Layout>
      <div className={styles.root}>
        <h1>Tasks List</h1>

        <TaskConstructor disabled={isDisabled} />
        <Input
          value={searchValue}
          placeholder="Поиск"
          disabled={isDisabled}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <TaskColumn disabled={isDisabled} searchValue={searchValue} />
      </div>
    </Layout>
  );
};

export default TaskList;
