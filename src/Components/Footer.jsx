import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <div >
            <p style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>Nguyễn Ngọc Đầy</p>
            <p style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>0943877796</p>
            <p style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', backgroundColor: 'white', minHeight: '200px' }}>Daynguyendev@gmail.com</p>
        </div>
    );
}

export default Footer;