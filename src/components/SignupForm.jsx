import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { signupSchema } from "../schemas/signupSchema";
import { yupToFormErrors } from "../utils/yupToFormErrors";

export default function SignupForm() {
  const styles = {
    divInput: "flex gap-2",
    input: "border-1 rounded-lg",
    textError: "text-red-500 font-medium",
  };

  const [form, setForm] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    age: "",
    tel: "",
    terms: false,
  });

  const refs = {
    username: useRef(null),
    nickname: useRef(null),
    password: useRef(null), 
    confirmPassword: useRef(null),
    age: useRef(null),
    tel: useRef(null),
    terms: useRef(null)
  }

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  // setForm({ ...form, [e.target.name]: e.target.value });
  const {name, type, value, checked} = e.target;
  setForm((prev) => ({
    ...form,
    [name]: type === "checkbox" ? checked : value
  }));
};
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupSchema.validate(form, { abortEarly: false });
      alert("ส่งสำเร็จ");
      setErrors({});
    } catch (err) {
      const errorObj = yupToFormErrors(err, refs);
      setErrors(errorObj);
    }
    console.log(form);
  };


return (
    <>
      <p className="text-2xl font-bold pb-10">CC20 Sign Up form</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className={styles.divInput}>
          <p>
            <label>ชื่อผู้ใช้ : </label>
            <input
              className={styles.input}
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              ref={refs.username}
            />
          </p>
          <br />
          <p className={styles.textError}>{errors.username}</p>
        </div>

        <div className={styles.divInput}>
          <p>
            <label>ชื่อเล่น : </label>
            <input
              className={styles.input}
              type="text"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              ref={refs.nickname}
            />
          </p>
          <br />
          <p className={styles.textError}>{errors.nickname}</p>
        </div>

        <div className={styles.divInput}>
          <p>
            <label>รหัสผ่าน : </label>
            <input
              className={styles.input}
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              ref={refs.password}
            />
          </p>
          <br />
          <p className={styles.textError}>{errors.password}</p>
        </div>

        <div className={styles.divInput}>
          <p>
            <label>ยืนยันรหัสผ่าน : </label>
            <input
              className={styles.input}
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              ref={refs.confirmPassword}
            />
          </p>
          <br />
          <p className={styles.textError}>{errors.confirmPassword}</p>
        </div>

        <div className={styles.divInput}>
          <p>
            <label>อายุ :  </label>
            <input
              className={styles.input}
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              ref={refs.age}
            />
          </p>
          <br />
          <p className={styles.textError}>{errors.age}</p>
        </div>

        <div className={styles.divInput}>
          <p>
            <label>เบอร์โทร :  </label>
            <input
              className={styles.input}
              name="tel"
              type="number"
              value={form.tel}
              onChange={handleChange}
              ref={refs.tel}
            />
          </p>
          <br />
          <p className={styles.textError}>{errors.tel}</p>
        </div>

        <div className={styles.divInput}>
          <p>
            <label>ยอมรับเงื่อนไข : </label>
            <input
              className={styles.input}
              name="terms"
              type="checkbox"
              checked={form.terms}
              onChange={handleChange}
              ref={refs.terms}
            />
              
          </p>
          <br />
          <p className={styles.textError}>{errors.terms}</p>
        </div>
        <button type="submit">สมัครสมาชิก</button>
      </form>
    </>
  );
}
