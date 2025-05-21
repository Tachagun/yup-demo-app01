import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
  .email("รูปแบบอีเมลไม่ถูกต้อง")
  .required("กรุณากรอกอีเมล"),

  // password: Yup.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว").required("กรุณากรอกรหัสผ่าน")
  
  password: Yup.string()
    .min( 6, ({ path, value }) => `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
    .required("กรุณากรอกรหัสผ่าน"),
  
    day: Yup.number()
    .typeError("กรุณากรอกวันที่เป็นตัวเลข")
    .min(1, "วันที่ต้องอยู่ระหว่าง 1-31")
    .max(31, "วันที่ต้องอยู่ระหว่าง 1-31")
    .required("กรุณาระบุวันที่ที่ถูกต้อง (1-31)"),

    age: Yup.number()
    .typeError("กรุณากรอกอายุเป็นตัวเลข")
    .min(10, "ต้องมีอายุมากกว่า 10")
    .required("กรุณาระบุอายุ"),

});
