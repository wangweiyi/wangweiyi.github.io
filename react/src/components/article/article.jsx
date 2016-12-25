import React from 'react';
import style from './article.less';

class Article extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        let tags = data.tags.map(tag => {
            return <a rel="tag" href={tag.link} key={+new Date()}>{tag.text}</a>;
        });
        let rawContent =  {
            __html: data.displayMode === 'full' ? data.content : data.intro
        };

        return (
            <article>
                <h2 className={style.articleTitle}><a href={data.url}>Async JavaScript</a></h2>
                <div className={style.articleMeta}>
                    <span className={style.articleMetaItem}>发表于：<span dateTime={data.pubTime}>{data.pubTime}</span></span>
                    <span className={style.articleMetaItem}>分类于：<a href={data.category.link}>{data.category.text}</a></span>
                    <span className={style.articleMetaItem}>标签：{tags}</span>
                </div>
                <div className={style.articleContent} dangerouslySetInnerHTML={rawContent}></div>
                {
                    data.displayMode === 'full' ? '' :
                        <div className={style.articleControl}>
                            <a className={style.articleControlButton} role="button" href={data.url}>阅读全文</a>
                        </div>
                }
            </article>
        );
    }
}

export default Article;