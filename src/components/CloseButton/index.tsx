import React, {FC} from 'react';
import styles from './index.module.css';

type Props = {
  onClick: () => void;
} ;

export const CloseButton: FC<Props> = ({ onClick, ...restProps }) => {
  return (
    <button
      type="button"
      className={styles.closeButton}
      onClick={onClick}
      {...restProps}
    >
      &times; {}
    </button>
  );
};
