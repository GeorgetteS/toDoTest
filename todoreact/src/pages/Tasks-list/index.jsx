import { useState } from 'react';

import Layout from '../../shared/ui/Layout';
import { TaskColumn } from '../../widgets/Task-column';

import styles from './TasksList.module.scss';
import { TaskConstructor } from '../../widgets/Task-constructor';
import { Input } from '../../shared/ui/Input';

const TaskList = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Layout>
      <div className={styles.root}>
        <h1>Tasks List</h1>

        <TaskConstructor />
        <Input
          value={searchValue}
          placeholder="Поиск"
          onChange={(e) => setSearchValue(e.target.value)}></Input>
        <TaskColumn searchValue={searchValue} />
      </div>
    </Layout>
  );
};

export default TaskList;
