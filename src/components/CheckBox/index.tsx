import React, { FC } from 'react';
import styles from './index.module.css';

type Props = {
  checked: boolean;
  onChange: () => void;
};

export const CheckBox: FC<Props> = ({ checked, onChange }) => {
  return (
    <div>
      <label htmlFor="check" className={styles.checkboxLabel}>
        チェック：
      </label>
      <input
        type="checkbox"
        id="check"
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
    </div>
  );
};
