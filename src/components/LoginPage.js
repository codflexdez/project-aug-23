import React, { useState } from "react";
import { Link } from "react-router-dom";

import ResetSection from "./ResetEmailSection";
import MfaSection from "./MfaSection";
import AlertBox from "./AlertBox";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showMfaSection, setShowMfa] = useState(false);
  const [showResetSection, setShowResetPage] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showAlertBox, setShowAlertBox] = useState(false);

  const styles = {
    disabled: {
      opacity: "0.9",
      pointerEvents: "none",
      color: " rgb(245, 245, 245)",
    },
  };

  const url = "";
  const maxAttempts = 3;
  const pswRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&?]).{8,}$/;

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowResetPage(true);
  };


  const validation = () => {
    if (username === "" || username.length <= 2 || !pswRegex.test(password)) {
      setShowAlertBox(true);
      setTimeout(() => {
        setShowAlertBox(false);
      }, 3000);

      return false;
    }
    setShowAlertBox(false);
    return true;
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (validation()) {
      setShowMfa(true);
      setLoginAttempts(0); 
    } else {
      setLoginAttempts(loginAttempts + 1);
      if (loginAttempts >= maxAttempts) {
        setLoginDisabled(true);
        setShowAlertBox(true);
      }
    }
  };

  // Determine if the "Sign In" button should be disabled
  const isSignInDisabled = !username || !password || loginDisabled;

  return (
    <main className="login-page">
      {showAlertBox && (
        <AlertBox
          message={
            loginAttempts >= maxAttempts
              ? "Maximum login attempts reached. Your account has been blocked"
              : "Invalid credentials, please try again"
          }
          onClose={() => setShowAlertBox(false)}
        />
      )}
      <section className="login-container">
        <header className="login-header">
          <img
            src={process.env.PUBLIC_URL + "/img/Amadeus-logo.png"}
            alt="Amadeus-logo"
          />
          <h5>Guest Management Solutions</h5>
        </header>
        {showMfaSection ? (
          <MfaSection onLogin={onLogin} styles={styles}/>
        ) : showResetSection ? (
          <ResetSection />
        ) : (
          <>
            <form type="submit" id="login-form" action="">
              <h2>Sign in</h2>
              <label htmlFor="uname">Username</label>
              <input
                type="text"
                id="uname"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loginDisabled}
                required={username}
              />
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                name="password"
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loginDisabled}
                required={password}
              />
              <div>
                <input
                  type="checkbox"
                  id="checkbox-default"
                  className="form-check-input"
                />
                <label htmlFor="checkbox-default" className="form-check-label">
                  Remember me
                </label>
              </div>
              <input
                type="submit"
                value="Sign in"
                onClick={handleSignIn}
                disabled={isSignInDisabled}
                style={isSignInDisabled ? styles.disabled : {}}
              />
            </form>
            <a
              href={url}
              aria-label="psw-reset"
              className="btn-psw-reset"
              onClick={handleForgotPassword}
            >
              I forgot my password
            </a>
          </>
        )}
      </section>

      <aside>
        <img
          src={process.env.PUBLIC_URL + "/img/Hotel concierge-2137x1406.webp"}
          alt="concierge"
        />
        <div className="overlay overlay-two">
          <section className="language" aria-label="dropdown">
            <select aria-label="language">
              <option value="">English</option>
              <option value="">French</option>
              <option value="">Spanish</option>
            </select>
          </section>
          <section className="policy">
            <Link to="#">Privacy Policy</Link>
          </section>
        </div>
      </aside>
    </main>
  );
};

export default LoginPage;
