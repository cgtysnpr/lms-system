import { useState } from "react";
const ForgatPasswordSecond = () => {
  const [step, setStep] = useState(0);
  const handleChange = (event) => {
    if (event.target.value) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };
  return <></>;
};
export default ForgatPasswordSecond;
