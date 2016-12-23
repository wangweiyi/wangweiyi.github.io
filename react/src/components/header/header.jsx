import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data = this.props.data;

        var navItems = data.navItems.map(function (navItem){
            return (
                <a className={navItem.isActive ? 'top-nav-item active' : 'top-nav-item'} href={navItem.url} key={Math.random()}>{navItem.text}</a>
            );
        });

        return (
            <header>
                <nav className="top-nav">
                    <div className="center">
                        {navItems}
                    </div>
                </nav>
                <div className="site-meta">
                    <h1 className="site-name">{data.site.name}</h1>
                    <h2 className="site-slogon">{data.site.slogon}</h2>
                </div>
            </header>
        );
    }
}

export default Header;