import React from 'react';
import Article from '../article'

var articleData = {
  title: 'Async JavaScript',
  banners: [],
  meta: {
    publishTime: '2016-12-19',
    category: 2,
    tags: [{
      text: 'javascript',
      url: '#'
    }]
  },
  intro: `<p>最近看了一些JavaScript异步编程方面文章，也反复读了几遍薄薄的《Async JavaScript》。总结一下，供自己后续学习使用，并分享给大家。</p>
                  <p>首先，有几个问题。什么是异步编程/异步函数？异步函数和回调函数有什么关系？为什么异步编程经常与JavaScript同时出现？JavaScript中的异步函数的机制是怎样的？那么现在异步编程有什么解决方案？未来的JavaScript异步编程是什么样子？如果你对上述几个问题已经虽不至“如数家珍”但已是“一目了然”，那么再往下的内容就不适合你了。那么，我们开始吧~</p>`,
  content: `<p>最近看了一些JavaScript异步编程方面文章，也反复读了几遍薄薄的<a href="http://book.douban.com/subject/24319975/" target="_blank">《Async JavaScript》</a>。总结一下，供自己后续学习使用，并分享给大家。</p>

          <p>首先，有几个问题。什么是异步编程/异步函数？异步函数和回调函数有什么关系？为什么异步编程经常与JavaScript同时出现？JavaScript中的异步函数的机制是怎样的？那么现在异步编程有什么解决方案？未来的JavaScript异步编程是什么样子？如果你对上述几个问题已经虽不至“如数家珍”但已是“一目了然”，那么再往下的内容就不适合你了。那么，我们开始吧~</p>
          <a id="more"></a>

          <h4 id="什么是异步函数？">什么是异步函数？</h4>

          <p>对于一个jser而言，学习和使用JavaScript的过程中，“异步编程”的出现频率应该是极高的，或许仅次于“事件驱动”、“单线程”等等。那么什么异步编程呢？什么是异步函数呢？</p>
          <p>言简意赅的说：异步函数就是会导致将来运行<strong>一个取自事件队列的函数</strong>的函数。这里的重点是“取自事件队列”，关于这个概念，我们暂且按下不表，将在后面进行分析，我们现在只需要知道异步函数是会导致将来某个时刻运行另外一个函数的函数。</p>

          <h4 id="异步函数_VS_回调函数">异步函数 VS 回调函数</h4>

          <p>又是一个高频词汇，“回调函数”。再次，我觉得有必要区分一下回调函数和异步函数的概念，虽然在很多人看来在这一点上的区分不必太过纠结，可是借用老罗的话，“我不是为了输赢，我就是认真”，对概念的精确理解和把握往往是我们深入学习的第一个台阶。</p>

          <p>所谓回调函数：In computer programming, a callback is <strong>a piece of executable code that is passed as an argument to other code</strong>,
            which is expected to call back (execute) the argument at some convenient time. <strong>The invocation may be immediate as in a synchronous callback or it might happen at later time, as in an asynchronous callback.</strong>            In all cases, the intention is to specify a function or subroutine as an entity that is, depending on the language,
            more or less similar to a variable.(from <a href="http://en.wikipedia.org/wiki/Callback_(computer_programming)"
              target="_blank">wikipedia</a>)</p>

          <figure class="highlight javascript">
            <figcaption><span>event-loop</span></figcaption>
            <table>
              <tbody>
                <tr>
                  <td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td>
                  <td
                    class="code"><pre><span class="line"><span class="keyword">while</span>(<span class="literal">true</span>){</span><br><span class="line">    <span class="keyword">if</span>(atLeastOneEventIsQueued){</span><br><span class="line">        fireNextQueuedEvent();</span><br><span class="line">    }</span><br><span class="line">}</span><br></pre></td>
                </tr>
              </tbody>
            </table>
          </figure>

          <p>从wikipedia的说法中我们可以清晰的看到：首先，回调函数是作为参数传入到另外一段代码中的一段可执行代码，也就是它所强调的是回调函数是需要被当做参数传入到其它代码中的；其次，回调函数可以是同步的，也可以是异步的，这取决于使用者。如果我们进入到wikipedia的页面，我们能额外发现一些其它的知识，比如回调函数会出现在拥有某些特性的语言中，那么函数是一等公民的JavaScript当然也就完美支持回调函数了。</p>`,
  url: '/dist/wfe/article/async-javascript.html',
  displayMode: 'intro'
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="center">
          <Article data={articleData} />
        </div>
      </main>
    );
  }
}

export default Main;