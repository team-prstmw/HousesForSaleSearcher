/* eslint-disable react/jsx-props-no-spreading */
import styles from './FormRow.module.css';

const FormRow = ({ label, input, action, register, error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rowLabel}>{label}</div>
      <div className={styles.rowInput} {...register}>
        {input}
      </div>
      <div className={styles.rowAction}>{action}</div>
    </div>
  );
};

export default FormRow;
