import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer dangerouslySetInnerHTML={{__html: this.props.data.copyrights}}></footer>
        );
    }
}

export default Footer;