import React from 'react'

export default function Login() {
  return (
    <div class="form-box">
    <div class="header-text">Login Form</div>
    <input placeholder="Your Email Address" type="text" />
    <input placeholder="Your Password" type="password" />
    <input id="terms" type="checkbox" />
    <label for="terms"></label>
    <span>
      Agree with 
      <a href="#">Terms & Conditions</a>
    </span>
    <button>login</button>
  </div>
  )
}
