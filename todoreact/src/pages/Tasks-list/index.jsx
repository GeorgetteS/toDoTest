import Layout from '../../shared/ui/Layout';

import { TaskRow } from '../../entities/task/ui/Task-row';
import styles from './TasksList.module.scss';

const tasks = [
  {
    id: 1,
    completed: false,
    title: 'first',
  },
  {
    id: 2,
    completed: false,
    title: 'first',
  },
  {
    id: 3,
    completed: false,
    title: 'first',
  },
];

const TaskList = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <h1>Tasks List</h1>
        {tasks.map((task) => (
          <TaskRow data={task} titleHref={`/${task.id}`} />
        ))}
      </div>
    </Layout>
  );
};

export default TaskList;
