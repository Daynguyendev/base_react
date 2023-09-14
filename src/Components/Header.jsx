import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {

};

function Header(props) {
    return (
        <div style={{ minHeight: '200px', backgroundColor: 'white' }}>
            <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>THI VNPT</h1>
        </div>
    );
}

export default Header;