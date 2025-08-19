import { useState } from "react";
import { InputField } from "../components";

function InputFieldPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      <div className="w-full max-w-sm space-y-6 bg-gray-800 px-4 py-8 rounded-lg shadow-lg">

        <InputField
          label="Username"
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          variant="ghost"
          size="sm"
          clearable
        />
        <InputField
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText="We'll never share your email."
          invalid={email !== "" && !email.includes("@")}
          errorMessage="Please enter a valid email."
          variant="outlined"
          size="md"
          clearable
        />
        <InputField
          label="Password"
          placeholder="Enter password"
          type="password"
          passwordToggle
          variant="filled"
          size="lg"
        />
      </div>
    </div>
  );
}

export default InputFieldPage;
