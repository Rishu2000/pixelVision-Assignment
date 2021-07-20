import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <h1 className="mb-4">Login</h1>
                <div className="mb-3" style={{width: '400px'}}>
                    <label HTMLfor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label HTMLfor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
        </div>
    )
}

export default Login
