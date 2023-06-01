import Input from "../../../src/common/Input";
import { Formik, FormikConsumer, useFormik, yupToFormErrors } from "formik";
import { NavLink ,useNavigate} from "react-router-dom";
import styles from "./SingUpPage.module.css";
import * as Yup from "yup";
import { useState } from "react";
import { singupUser } from "../../services/signupSrvice";
import { useAuthActions } from "../Provider/AuthProvider";
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is Required")
    .min(4, "name lentgh is not valid"),
  email: Yup.string().required("Invalid email formik"),
  phoneNumber: Yup.string()
    .required("phoneNumber is valid")
    .matches(/^[0-9]{11}$/, "Invalid phone number")
    .nullable(),

  password: Yup.string().required("password is required"),

  passwordConfirm: Yup.string()
    .required("passwordConfirm is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // ),
});

const SingUpPage = () => {
  const [error, setError] = useState(null);
  const setAuth=useAuthActions();
  const navigate=useNavigate();
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await singupUser(userData);
      console.log(data);
       setError(null);
       navigate("/");
       setAuth(data);
localStorage.setItem('authState',JSON.stringify(data));
      
    } catch (error) {
     
       console.log(error.response.data.message);

       if(error.response && error.response.data.message)
       setError(error.response.data.message)
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
    <div>
      <h2>LogIn</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formcontainer}>
          <Input name="name" formik={formik} label="Name" />
        </div>
        <div className={styles.formcontainer}>
          <Input name="email" formik={formik} label="Email" />
        </div>
        <div className={styles.formcontainer}>
          <Input name="phoneNumber" formik={formik} label="PhoneNumber" />
        </div>
        <div className={styles.formcontainer}>
          <Input name="password" formik={formik} label="Password" />
        </div>
        <div className={styles.formcontainer}>
          <Input
            name="passwordConfirm"
            formik={formik}
            label="passwordConfirm"
          />
        </div>
        <div className={styles.formcontainer}>
          <button
            type="submit"
            disabled={!formik.isValid}
            className={styles.btn}
          >
            SingUp
          </button>
        </div>
         {error && <p>{error}</p>} 
      </form>
      <div>
        <NavLink to="/login" className={styles.link}>
          <span>are you rejester?</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SingUpPage;
