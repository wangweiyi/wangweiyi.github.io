import React from 'react';
import { Link } from 'react-router';
import style from './article.less';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const title = this.props.title || this.props.params.title; //标题
    const data = require('../../../database/articles/' + title); //数据   
    const displayAsIntro = this.props.displayAsIntro === true; //显示模式：简介 | 全文
    const tags = data.tags.map((tag, i) => { //标签
      return <a rel="tag" href={tag.link} key={i}>{tag.text}</a>;
    });
    const contentAsHtml = { //正文, 作为html解析并显示
      __html: displayAsIntro ? data.intro : data.content
    };

    return (
      <article>
        {
          !data.banner ? '' :
            <div className={style.articleBanner}>
              <img src={data.banner} alt="" />
            </div>
        }
        <h2 className={style.articconstitle}><Link to={"/article/" + title}>{data.title}</Link></h2>
        <div className={style.articleMeta}>
          <span className={style.articleMetaItem}>发表于：<span dateTime={data.pubTime}>{data.pubTime}</span></span>
          <span className={style.articleMetaItem}>分类于：<a href={data.category.link}>{data.category.text}</a></span>
          <span className={style.articleMetaItem}>标签：{tags}</span>
        </div>
        <div className={style.articleContent} dangerouslySetInnerHTML={contentAsHtml}></div>
        {
          displayAsIntro ?
            <div className={style.articleControl}>
              <Link className={style.articleControlButton} to={"/article/" + title}>阅读全文</Link>
            </div> : ''
        }
      </article>
    );
  }
}
export default Article;