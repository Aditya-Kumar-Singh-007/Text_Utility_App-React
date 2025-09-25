import React from "react";

export default function About() {
  return (
    <div className="container my-4">
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-body">
          <h3 className="card-title text-center text-primary mb-3">
            About TextUtils
          </h3>
          <p className="card-text">
            <strong>TextUtils</strong> is a simple yet powerful text utility app
            built with <b>React</b>. It helps you quickly analyze and transform
            text with ease. Whether you're a student, developer, or just
            someone working with text, this tool can save you time and effort.
          </p>

          <h5 className="mt-4">✨ Features:</h5>
          <ul>
            <li>Convert text to <b>Uppercase</b> or <b>Lowercase</b></li>
            <li>Remove extra spaces</li>
            <li>Copy text with a single click</li>
            <li>Count <b>words</b> and <b>characters</b></li>
            <li>Estimate <b>reading time</b></li>
          </ul>

          <h5 className="mt-4">🚀 Technology Used:</h5>
          <ul>
            <li>React.js</li>
            <li>Bootstrap for styling</li>
            <li>JavaScript for text operations</li>
          </ul>

          <p className="mt-4">
            TextUtils is designed to be lightweight, fast, and user-friendly —
            giving you the power to manage your text efficiently.
          </p>

          <div className="text-center mt-3">
            <a href="/" className="btn btn-primary">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
