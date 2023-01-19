import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";

function Login() {
    const formik = useFormik({
        initialValues: {
          userId: '',
          password: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
    <div className="wrapper">
        <div onSubmit={formik.handleSubmit} className="form">
        <div className='inputBox'>
       <label htmlFor="userId">User ID :</label>
       <input
         id="userId"
         name="userId"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.userId}
         className="form-control"
       /></div>&nbsp;
       <div className='inputBox'>
       <label htmlFor="password">Password :</label>
       <input
         id="passord"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         className="form-control"
       /></div>&nbsp;
       <div><button type="submit" className='btn btn-primary'>Log In</button></div>
     </div>
     </div>
    );
}

export default Login;