import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Profilenav.css';

const ProfileNav = () => {
    const [user, setUser] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState('account-info');
    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);

    useEffect(() => {
        // Gọi API để lấy thông tin người dùng
        axios.get('/api/user/profile')
            .then(response => setUser(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
    };

    const handleAvatarUpload = () => {
        const formData = new FormData();
        formData.append('avatar', avatar);

        axios.post('/api/user/avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            alert('Avatar updated successfully');
            setUser({ ...user, avatarUrl: response.data.avatarUrl });
        })
        .catch(error => console.error(error));
    };

    const triggerFileInput = () => {
        document.getElementById('avatarInput').click();
    };

    return (
        <div className='profile_nav'>
           {/* <h2 >Xin chao: jinhyk21</h2> */}
                <div className="profile-sidebar">
                    <a href='/user/profile' className='action_info'>Thông tin tài khoản</a>
                    <a href='/user/changepassword' className='action_info'>Đổi mật khẩu</a>
                    <a href='/user/update/detail' className='action_info'>Cập nhật thông tin</a>
                    <a href='/user/recharge' className='action_info'>Nạp xu</a>
                    <a href='/user/history' className='action_info' >Lịch sử giao dịch</a>
                    <a href='/user/buy' className='action_info'>Bộ phim đã mua</a>
                    <a href='/user/follows' className='action_info'>Theo giõi</a>
                </div>

        </div>
    );
};

export default ProfileNav;
