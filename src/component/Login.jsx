import React from 'react';
import '../App.css';

const Login = () => {
  return (
    <div className="container loginPage" >
      <div className="card-body p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <div className="bg">
        <h2 className="fw-bold mb-4 text-center example" style={{ color: '#333', fontSize: '1.5rem' }}>
          SIGN IN
        </h2>
        {/* <p className="mb-4 text-center" style={{ color: '#666', fontSize: '0.9rem' }}>
          Sign In.
        </p> */}
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="form-label" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
              Email:-
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              style={{ borderRadius: '1rem', padding: '10px' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
              Password:-
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
              style={{ borderRadius: '1rem', padding: '10px' }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            {/* <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe" style={{ fontWeight: '500', fontSize: '0.7rem' }}>
                Remember me
              </label>
            </div> */}
            <a href="#" style={{ color: '#007bff', fontSize: '0.9rem' }}>
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="btn text-black w-100 mb-4"
            style={{
              backgroundColor: '#ffd37a',
              border: 'none',
              borderRadius: '5rem',
              padding: '8px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            Login
          </button>
        </form>
        {/* 
        <div className="text-center">
          <p style={{ fontWeight: '500', fontSize: '0.9rem', color: '#666' }}>
            or login with:
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-link text-primary mx-2" style={{ fontSize: '1.2rem' }}>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="btn btn-link text-primary mx-2" style={{ fontSize: '1.2rem' }}>
              <i className="fab fa-twitter"></i>
            </button>
            <button className="btn btn-link text-primary mx-2" style={{ fontSize: '1.2rem' }}>
              <i className="fab fa-google"></i>
            </button>
            <button className="btn btn-link text-primary mx-2" style={{ fontSize: '1.2rem' }}>
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Login;