import React, { FC } from 'react'
import { CloseButton } from '../CloseButton'
import { CheckBox } from '../CheckBox'
import styles from './index.module.css'

type Props = {
  todoText: string
  isChecked: boolean
  onDelete: () => void
  onToggle: () => void
}

export const TodoCard: FC<Props> = ({ todoText, isChecked, onDelete, onToggle }) => {
  return (
    <div className={styles.todocard}>
      <CheckBox checked={isChecked} onChange={onToggle} />
      <p className={styles.todoCard_text}>{todoText}</p>
      <CloseButton onClick={onDelete} />
    </div>
  )
}
