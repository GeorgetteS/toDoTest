import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Row } from '../../../../shared/ui/Row';

import styles from './TaskRow.module.scss';

export const TaskRow = ({ data, titleHref }) => {
  return (
    <Row className={cn(styles.root, { [styles.completed]: data.completed })}>
      {titleHref ? <Link to={titleHref}>{data.title}</Link> : data.title}
    </Row>
  );
};
