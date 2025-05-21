import * as Yup from "yup";

export const signupSchema = Yup.object({

  username: Yup.string()
    .min(3, "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัว")
    .required("กรุณากรอกชื่อผู้ใช้"),

  nickname: Yup.string()
    .min(3, ({ path, value }) => `${path} ชื่อเล่นต้องมีอย่างน้อย 3 ตัว ตอนนี้มีแค่  ${value.length}`)
    .max(10, ({ path, value }) => `${path} ชื่อเล่นต้องมีไม่เกิน 10 ตัว ตอนนี้มี ${value.length}`)
    .required("กรุณากรอกชื่อเล่น"),

  password: Yup.string()
    .min( 6, ({ path, value }) => `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
    .required("กรุณากรอกรหัสผ่าน"),
  
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "รหัสผ่านไม่ตรงกัน")
    .required("กรุณากรอกรหัสผ่าน"),
  
    
  age: Yup.number()
    .typeError("กรุณากรอกอายุเป็นตัวเลข")
    .min(10, "ต้องมีอายุมากกว่า 10")
    .required("กรุณาระบุอายุ"),

  tel: Yup.string()
    .matches(/^\d{10}$/, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง")
    .required("กรุณากรอกเบอร์โทรศัพท์"),
    
  terms: Yup.boolean()
    .oneOf([true], "กรุณายอมรับเงื่อนไขการใช้งาน")
    .required("กรุณายอมรับเงื่อนไขการใช้งาน")

  });
  