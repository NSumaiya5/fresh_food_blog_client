import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="row mt-2 headerContainer headerBg">
            <div className="col-md-6 headerLeft">
                <h1 style={{ fontSize: '65px' }} >Fresh Food<br />Feel the test</h1>
                <br />
                <h4 style={{ fontSize: '25px' }}>Fresh Food Blog site</h4>
                <br />
                <a href="#blog">
                    <button className="btn btn-info mr-5">See Blogs</button>
                </a>
            </div>
        </div>
    );
};

export default Header;
