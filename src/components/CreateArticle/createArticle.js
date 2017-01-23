import React from 'react';
import { Link } from 'react-router';
import Simditor from 'simditor';
import style from './createArticle.less';

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var editor = new Simditor({
      textarea: $('#content')
      //optional options
    });
  }
  
  render() {
    return (
      <div>
        <h1>创建文章</h1>
       
        <form action="/article/create">
          <div className="form-row">
            <input type="text" name="title" value="" placeholder="标题" />
          </div>

          <div className="form-row">
            <script id="content" name="content" type="text/plain">
                文章内容...
            </script>
          </div>

          <div className="form-row">
             <input type="text" name="tags" value="" placeholder="标签，多个标签以逗号分隔" />
          </div>

          <div className="form-row">
            <select name="category">
              <option value="wfe">WEB前端</option>
              <option value="food">美食</option>
              <option value="read">读书</option>
              <option value="travel">旅行</option>
            </select>
          </div>

          <div className="form-row">
            <button className="btn-save">存为草稿</button>
            <button className="btn-publish">发布文章</button>
          </div>       
        </form>
      </div>
    );
  }
}
export default CreateArticle;