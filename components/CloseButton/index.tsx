import React from 'react';
import styles from './index.modules.css';

interface CloseButtonProps {
  onClick: () => void; 
  [key: string]: any; 
}
const CloseButton: React.FC<CloseButtonProps> = ({ onClick, ...props }) => {
  return (
    <button type="button" className={styles.closeButton} onClick={onClick} {...props}>
      <span className={styles.closeButtonIcon}>&times;</span>
    </button>
  );
};

export default CloseButton;
