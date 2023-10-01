import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
import { useState } from "react";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        console.log(email, password);
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
        <div>
          {signUpError && <p className="text-red-400">{signUpError}</p>}
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          name=""
          id=""
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignUp;
