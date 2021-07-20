import React, {useState} from 'react'
import axios from 'axios'

const Login = ({setUserAuth}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const data = JSON.stringify({
        'username': userName,
        'password': password
    })

    const config = {
        method: 'POST',
        url:'http://localhost:3001/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userName && password){
            axios(config)
            .then((res) => {
                console.log(JSON.stringify(res.data))
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            setError('Please enter both username and password.')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="mb-4">Login</h1>
                {error && (
                    <pre className="border rounded alert alert-danger">
                        {error}
                    </pre>
                )}
                <div className="mb-3" style={{width: '400px'}}>
                    <label HTMLfor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label HTMLfor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
        </div>
    )
}

export default Login
