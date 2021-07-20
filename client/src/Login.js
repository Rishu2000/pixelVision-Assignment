import React, {useState} from 'react'
import axios from 'axios'

const Login = ({user, setUser, errorMessage, setErrorMessage}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const data = JSON.stringify({
        'username': userName,
        'password': password
    })

    const config = {
        method: 'POST',
        url:'https://pixel-vision-assignment.herokuapp.com/',
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
                console.log(JSON.stringify({"username2":res.data.username, "error2":res.data.errorMessage}))
                setUser(res.data.username);
                setErrorMessage(res.data.errorMessage);
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            setUser(null)
            setErrorMessage('Please enter both username and password.')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="mb-4">Login</h1>
                { !user &&  errorMessage && (
                    <pre className="border rounded alert alert-danger">
                        {errorMessage}
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
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form> 
        </div>
    )
}

export default Login
