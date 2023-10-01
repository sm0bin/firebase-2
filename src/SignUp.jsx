import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "./firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    setSignUpError("");
    setSignUpSuccess("");
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (password < 6) {
      setSignUpError("Password must me 6 characters long.");
      return;
    } else if (!passwordRegex.test(password)) {
      setSignUpError(
        "Password must be combination of uppercase, lowercase, digit, and special character."
      );
      return;
    } else if (!terms) {
      setSignUpError("Please accept our terms and conditions.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        console.log(email, password);
        sendEmailVerification(auth.currentUser).then(() => {
          alert("Verification mail sent. Verify your email");
        });

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            alert("Success name");
          })
          .catch((error) => {
            console.error(error);
          });
        setSignUpSuccess("Account Created Successfully.");
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div className="flex place-items-center min-h-[calc(100vh-4rem)]">
      <form
        onSubmit={handleSignUp}
        className="w-96 flex flex-col gap-5 mx-auto"
      >
        <input className="p-3 rounded" type="text" name="name" id="" required />

        <input
          className="p-3 rounded"
          type="email"
          name="email"
          id=""
          required
        />

        <div className="relative flex items-center">
          <input
            className="p-3 rounded w-full"
            type={passwordVisible ? "text" : "password"}
            name="password"
            id=""
            required
          />
          <span
            className="absolute right-3"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <div className="flex gap-2">
          <input type="checkbox" className="checkbox" name="terms" />
          <label htmlFor="terms">
            Accept our{" "}
            <Link
              className="underline underline-offset-2 text-indigo-400"
              to="/terms-and-conditions"
            >
              {" "}
              Terms and Conditions
            </Link>
          </label>
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
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline underline-offset-2 text-indigo-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
