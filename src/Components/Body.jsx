import React from 'react';
import PropTypes from 'prop-types';

Body.propTypes = {

};

function Body(props) {
    return (
        <div style={{ minHeight: '400px', backgroundColor: 'white' }}>
            <h1 style={{ backgroundColor: 'white', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>BODY</h1>
        </div>
    );
}

export default Body;