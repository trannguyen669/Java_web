import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="movie-genres">
          <h4>Được làm bởi Ninh Ngọc Tuấn</h4>
          <h4>Hotline: 0817912235</h4>
          {/* Thêm danh sách thể loại phim */}
        </div>
        <div className="contact-info">
          <h4>Email: Ninhngoctuan01258@gmail.com</h4>
          {/* Thêm thông tin liên hệ */}
        </div>
        {/* Thêm các thành phần khác */}
      </div>
    </footer>
  );
};

export default Footer;
