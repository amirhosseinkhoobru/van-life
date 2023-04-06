import React from 'react';

function Footer() {
    const today = new Date();

    return ( 
        <footer>
            &copy; {today.getFullYear()} #VANLIFE 
        </footer>
     );
}

export default Footer;