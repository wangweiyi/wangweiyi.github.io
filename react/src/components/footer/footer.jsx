import React from 'react';
import style from './footer.less';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className={style.siteFooter}>&copy; 2016 Cathy. All Rights Reserved.</footer>
        );
    }
}

export default Footer;