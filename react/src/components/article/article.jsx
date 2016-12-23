import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var navItems = [
            {
                text: 'HOME',
                url: '/index.html',
                isActive: true
            }, {
                text: 'Web前端',
                url: '/dist/wfe/index.html',
                isActive: false
            }, {
                text: 'TRAVEL',
                url: '/dist/travel/index.html',
                isActive: false
            }, {
                text: 'LIFE STYLE',
                url: '/dist/life-style/index.html',
                isActive: false
            }
        ];
        var data = this.props.data;
        var navItem = navItems[data.meta.category] || {};
        var tags = data.meta.tags.map(tag => {
            return <a rel="tag" href={tag.url} key={+new Date()}>{tag.text}</a>;
        });
        var rawContent =  {
            __html: data.displayMode === 'full' ? data.content : data.intro
        };

        return (
            <article>
                <h2 className="article-title"><a href={data.url}>Async JavaScript</a></h2>
                <div className="article-meta">
                    <span className="article-meta-item">发表于：<span dateTime={data.meta.publishTime}>{data.meta.publishTime}</span></span>
                    <span className="article-meta-item">分类于：<a href={navItem.url}>{navItem.text}</a></span>
                    <span className="article-meta-item">标签：{tags}</span>
                </div>
                <div className="article-content" dangerouslySetInnerHTML={rawContent}></div>
                {
                    data.displayMode === 'full' ? '' :
                        <div className="article-control">
                            <a className="article-control-button" role="button" href={data.url}>阅读全文</a>
                        </div>
                }
            </article>
        );
    }
}

export default Article;