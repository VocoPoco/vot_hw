import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [oidcSub, setOidcSub] = useState('');
    const [oidcProvider, setOidcProvider] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/register`, { username, email, oidcSub, oidcProvider });
            console.log(response.data);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="OIDC Subject"
                value={oidcSub}
                onChange={(e) => setOidcSub(e.target.value)}
            />
            <input
                type="text"
                placeholder="OIDC Provider"
                value={oidcProvider}
                onChange={(e) => setOidcProvider(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
