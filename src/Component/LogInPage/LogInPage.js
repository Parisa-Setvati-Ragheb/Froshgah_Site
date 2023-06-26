import Input from "../../../src/common/Input";
import { Formik, FormikConsumer, useFormik, yupToFormErrors } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./LogInPage.module.css";
import { loginUser } from "../../services/loginService";
import * as Yup from "yup";
import { useState,useEffect } from "react";
import { useAuth, useAuthActions } from "../Provider/AuthProvider";
import { useQuery } from "../Pages/hooks/UseQuery";
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid eamil format")
    .required(" email is required"),
  password: Yup.string().required("password is required"),
});

const LogInPage = (props) => {
  const [error, setError] = useState(null);
  const setAuth=useAuthActions();
  const auth= useAuth();
  const navigate=useNavigate();
  const query=useQuery();
  const redirect=query.get('redirect') || "/";
 
  useEffect(()=>{ if (auth) navigate(redirect)},[redirect,auth]);

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const { data } = await loginUser(values);
      console.log(data);
      //console.log(props);
      setError(null);
      navigate(redirect);
      setAuth(data);
    
setAuth(data);
localStorage.setItem('authState',JSON.stringify(data));
      setError(null);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);

      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.titr}>LogIn</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formcontainer}>
          <Input name="email" formik={formik} label="Email" />
        </div>

        <div className={styles.formcontainer}>
          <Input name="password" formik={formik} label="Password" />
        </div>

        <div className={styles.formcontainer}>
          <button type="submit" disabled={!formik.isValid} className={styles.btn}>
            LogIn
          </button>
          {error && <p>{error}</p>}
        </div>
      </form>
      <div>
        <NavLink to={`/signup?redirect=${redirect}`} className={styles.link}>
          <span>go to sin up page</span>
        </NavLink>
      </div>
    </div>
  );
};

export default LogInPage;
