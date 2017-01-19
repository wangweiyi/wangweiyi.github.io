import React from 'react';
import { render } from 'react-dom';
import Article from '../article';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const articles = __ARTICLE_FILES__.split(',').map((filename, i) => {
        return <Article key={i} title={filename} displayAsIntro={true} />
    });

    return (
      <div>
        {articles}
      </div>
    );
  }
}
export default Home;