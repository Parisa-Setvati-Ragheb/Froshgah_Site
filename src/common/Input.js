import styles from "./Input.module.css";
const Input = ({ name, formik, type = "text", label }) => {
    return (
      <div className={styles.formcontainer}>
        <label>{label}</label>
        <input {...formik.getFieldProps({ name })} name={name} type={type} />
        {formik.errors[name] && formik.touched[name] && (
          <div className={`${styles.error} ${styles.inputerror} `} >{formik.errors[name]} </div>
        )}
      </div>
    );
  };
  
  export default Input;
  