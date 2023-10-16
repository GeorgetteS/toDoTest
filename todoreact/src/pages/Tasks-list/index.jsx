import Layout from '../../shared/ui/Layout';
import { TaskColumn } from '../../entities/task/ui/Task-column';

import styles from './TasksList.module.scss';

const TaskList = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <h1>Tasks List</h1>
        {<TaskColumn />}
      </div>
    </Layout>
  );
};

export default TaskList;
