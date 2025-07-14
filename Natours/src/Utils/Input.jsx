import React, { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");

  const regex = /^[A-Z a-z ]+$/;
  const handleChange = (e) => {
    const input = e.target.value;

    if (input === "" || regex.test(input)) {
      setValue(input);
      setErr("");
    } else {
      setErr("alphabet allowed only");
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={value} />
      {err && (
        <p style={{ color: "red", fontSize: "5px" }}>incorrect details {err}</p>
      )}
    </div>
  );
}
