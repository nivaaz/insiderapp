import { useContext, useState } from "react";
import Button from "../components/design-system/button";
import { createUser } from "../components/firebase";
import { FirebaseContext } from "../components/firebaseProvider";

const SignUp = () => {
  const [formValues, setFormValues] = useState({});
  const [validForm, setValidForm] = useState(false);
  const [validFormMessage, setValidFormMessage] = useState(null);
  const { auth } = useContext(FirebaseContext);

  const hasFilledForm = () => {
    return formValues.email && formValues.password;
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const updatedState = { ...formValues };
    if (name === 'password') {
        // Minimum eight characters, at least one letter and one number:
      const isValid = value.match(
        /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/
      );
      if (!isValid) {
        setValidFormMessage(
          "Your password length should be 8 characters long, have at least 1 letter and at least 1 number."
        );
      }
    }
    updatedState[name] = value;
    setFormValues(updatedState);
    setValidForm(hasFilledForm());
  };

  const handleSubmit = () => {
    const user = createUser(auth, formValues.email, formValues.password);
  };
  return (
    <div className="w-screen h-screen flex">
      <div className="m-auto space-y-8">
        <h2 className="text-xl"> Create an Insider Account </h2>

        <label>
          <p> What is your email? </p>
          <input onChange={handleInputChange} type="email" name="email" />
        </label>

        <label>
          <p> What would you like your password to be? </p>
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
          />
          <p className="text-pink-200">{ validFormMessage}</p>
        </label>

        {validForm && (
          <Button
            copy={"Create account"}
            onClick={handleSubmit}
            variant="primary"
          />
        )}
      </div>
    </div>
  );
};

const SignUpWrapper = () => (
  <FirebaseContext.Consumer>{() => <SignUp />}</FirebaseContext.Consumer>
);

export default SignUpWrapper;
