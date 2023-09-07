import React, {FC} from 'react';
import styles from './index.module.css';

type Props = {
  onClick: () => void;
} ;

export const CloseButton: FC<Props> = ({ onClick, ...restProps }) => {
  const buttonStyle = {
  };

  return (
    <button
      type="button"
      className={styles.closeButton}
      onClick={onClick}
      style={buttonStyle}
      {...restProps}
    >
      &times; {}
    </button>
  );
};
