import React, { useEffect, useState } from "react";
import { apiUrl } from "../../helpers/backend";

function VerifyEmail(props) {
  const token = props.match.params.verificationToken;

  const [message, setMessage] = useState();

  const verifyEmail = async (token) => {
    const sendToken = await fetch(`${apiUrl}/api/verify/email`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.stringify(token),
      },
    });
    const response = await sendToken.json();
    if (response.status === 200) {
      setMessage(response.message);
    } else {
      setMessage(response.message);
    }
  };

  useEffect(() => {
    verifyEmail(token);
  }, []);

  return (
    <div className="verify-email">
      <div className="container">
        <div className="frame">
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
