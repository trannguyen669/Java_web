import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Register.css';
import Loader from '../../components/Loader/Loader';
const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const response = await axios.post('http://localhost:1412/api/login/register',{
                username: username,
                password: password,
                email: email
              }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true 
            });
            setNotification('Đăng ký thành công!');
            setLoading(true);
            setTimeout(() => {
                window.location.href = '/'

            }, 3000);
        } catch (error) {
            setError('Đăng ký không thành công. Vui lòng kiểm tra lại email và mật khẩu.');
        }
    };
    if(loading){
        return <Loader/>
       }
    return (
        <div className='font_body'>
            <Header />
            <div className="register-container">
                <div className='font_container'>
                    <form onSubmit={handleSubmit} className="login-form">
                        {notification && <p style={{ color: 'green' }}>{notification} </p>}
                        <h2>Đăng nhập</h2>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="form-group">
                            <label>Tên đăng nhập:</label>
                            <input
                                className='form_input'
                                placeholder='Nhập tên đăng nhập của bạn!'
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                className='form_input'
                                type="password"
                                value={password}
                                placeholder='Nhập mật khẩu để đăng nhập!'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                className='form_input'
                                type="email"
                                value={email}
                                placeholder='Nhập mật khẩu để đăng nhập!'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Đăng nhập</button>
                        <p>Bạn đã tài khoản.<a href='/login'>Đăng nhập</a>  tài đây!</p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
