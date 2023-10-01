import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSignUpError("");
    setSignUpSuccess("");
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (password < 6) {
      setSignUpError("Password must me 6 characters long.");
      return;
    } else if (passwordRegex.test(password)) {
      setSignUpError(
        "Password must be combination of uppercase, lowercase, digit, and special character."
      );
      return;
    }
    if (password < 6) {
      setSignUpError("Please accept our terms and conditions.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        console.log(email, password);
        setSignUpSuccess("User Created Successfully.");
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSignUp}
        className="w-96 flex flex-col gap-5 mx-auto"
      >
        <input
          className="p-3 rounded"
          type="email"
          name="email"
          id=""
          required
        />
        <input
          className="p-3 rounded"
          type="text"
          name="password"
          id=""
          required
        />
        <div className="flex gap-2">
          <input type="checkbox" className="checkbox" /> Accept our{" "}
          <Link
            className="underline underline-offset-2 text-indigo-400"
            to="/terms-and-conditions"
          >
            {" "}
            Terms and Conditions
          </Link>
        </div>
        {signUpError && <p className="text-red-400">{signUpError}</p>}
        <input
          className="btn btn-primary"
          type="submit"
          name=""
          id=""
          value="Sign Up"
        />
        {signUpSuccess && <p className="text-green-400">{signUpSuccess}</p>}
      </form>
    </div>
  );
};

export default SignUp;
