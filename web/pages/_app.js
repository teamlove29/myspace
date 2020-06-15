import React from 'react';
import './font.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
