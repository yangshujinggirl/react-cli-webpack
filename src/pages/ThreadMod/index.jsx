import ContentCard from '@components/ContentCard';
import { Link } from 'react-router-dom';
import ListCard from '@components/ListCard'
const ThreadMod = ()=>{
  return <div>
    <h2><a
      href="https://juejin.cn/post/6844904024894865416"
      target="_blank" rel="noreferrer">参考链接</a></h2>
    <ContentCard title="进程&线程">
      <div>
        <ul>
          <li>1）应用程序是有一个或多个模块组成的，以现在的谷歌浏览器举例，他有一个浏览器主进程、一个GPU进程、一个网络进程、多个渲染进程和多个插件进程。</li>
          <li>2）进程是由一个或者多个线程组成的，线程是进程的基本单位。</li>
          <li>3）进程之间互相独立，有自己的资源，比如CPU的时间片，占用的内存。</li>
          <li>4）一个进程下的线程（工人）共享进程（工厂）的资源，包括代码段、数据段、内存等。</li>
          <li>5）线程之间协作在进程中完成任务。</li>
          <li>6）进程是CPU资源分配的最小单位，是可以拥有资源和独立运行的最小单位。</li>
          <li>7）线程是CPU调度的最小单位，因为进程可以有一个或者多个线程。</li>
        </ul>
      </div>
    </ContentCard>
    <ContentCard title="浏览器进程">
      <div>
        <h4>浏览器是多进程的</h4>
        <p>浏览器只有一个浏览器主进程，多个协作进程（GPU、渲染进程、网络进程、插件进程等等）,以及每一个tab页面都会新开一个进程（某些情况下多个tab会合并进程，例如多个空白页等特殊情况）；</p>
        <ListCard title="多进程优点：" data={[
          '避免单个Tab页或第三方插件奔溃从而影响整个浏览器',
          '多进程充分利用多核优势',
          '方便使用沙盒模型隔离插件等进程，提高浏览器稳定性',
          '在浏览器中打开一个网页相当于新起了一个渲染进程',
        ]}>
        </ListCard>
        <ListCard title="1:浏览器主进程">
          <>
            <p>浏览器主进程，负责协调主控，只有一个</p>
            <ul>
              <li>1）负责浏览器界面显示，于用户交换，前进后退等</li>
              <li>2）负责各个界面的管理，创建/销毁其它进程</li>
              <li>3）将Renderer进程得到的内存中的Bitmap，绘制到用户界面上</li>
              <li>4）网络资源管理，下载等</li>
            </ul>
          </>
        </ListCard>
        <ListCard title="2:GPU进程">
            <p>最多一个，用于3D绘制</p>
        </ListCard>
        <ListCard title="3:浏览器渲染进程（内核）（多线程）">
          <div>
            <h4>一：渲染进程，它是多线程的</h4>
            <ul>
              <li>
                1）默认每打开一个tab页，都会新创建一个渲染进程。互不影响。（有时候会优化，如多个空白页tab会合成一个）
              </li>
              <li>
                2）用于解析页面，渲染页面，执行脚本，处理事件等等
              </li>
            </ul>
            <h4>二：渲染进程的组成</h4>
            <ListCard title="1）GUI渲染线程">
              <p>
                主要负责渲染页面的,当浏览器收到响应的html后，该线程开始解析HTML文档构建DOM树，解析CSS文件构建CSSOM，合并构成渲染render树，并计算布局样式（也叫Layout环节），以及绘制顺序（绘制顺序不是根据节点的层级来的，有的z-index层级不同，渲染顺序也不同），绘制在页面上(HTML解析规则，CSS解析规则，渲染流程细节)
                当界面样式被修改触发回流reflow和repaint重绘时，该线程就会执行重新计算，重新绘制，是前端开发需要着重优化的点。
              </p>
              <ul>
                  <li>1）渲染界面，解析html、css、构建dom树和renderObject树，布局和绘制等。</li>
                  <li>2）当界面需要重绘或者某种操作需要回流的时候，都会执行这个线程</li>
                  <li>3）GUI线程和JS引擎线程是互斥的，当js引擎执行时，GUI线程会被挂起，保存到一个任务队列中，等到JS引擎线程空闲时候才会出队被立即执行</li>
              </ul>
            </ListCard>
            <ListCard title="2）JS引擎线程">
              <p>JS引擎和GUI渲染线程执行是互斥的，如果js执行的时候太长，会导致页面渲染掉帧，也就是阻塞页面，这就是为什么常常不把script标签放在头部而放在body底部下的原因</p>
              <ul>
                <li>1）JS内核，也称JS引擎（例如V8引擎），负责处理执行javascript脚本程序</li>
                <li><h4>2）JS引擎会一直等待着任务队列中任务的到来，然后加以处理。js是单线程(一个Tab页（渲染进程）中无论什么时候都只有一个JS线程在运行)</h4></li>
                <li>3）GUI线程和JS引擎是执行时互斥的</li>
              </ul>
            </ListCard>
            <ListCard title="3）事件触发线程(Event lop)">
              <>
                <p><Link to="/eventloop">事件触发线程</Link>是归属浏览器的，而不是JS引擎的。可以这么理解，因为JS引擎是单线程的，它很忙，必须要有<span style={{fontWeight:'bold',color:'#000'}}>协助线程</span>协助它完成一些事件，而这些事情，就是事件循环</p>
                <ul>
                <li>1）该线程是归属浏览器的，不是JS引擎的，用来控制事件循环eventloop机制</li>
                <li>2）当JS引擎执行代码块如promis时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中</li>
                <li>3）当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理</li>
                <li>4）由于JS是单线程的，所有这些事件都得排队等待JS引擎执行。（引擎空闲时出队执行）</li>
                </ul>
              </>
            </ListCard>
            <ListCard title="4）定时器出发线程">
              <>
                <p>
                  setInterval 与 setTimeout 所在线程，浏览器定时器不是由JS引擎计时的，因为JS引擎是单线程的，如果执行这些计算器，阻塞页面完全停止了，用户就无法点击网页了。因此通过单独线程来计时并触发定时，计时完毕后，添加到事件队列中，等待JS引擎空闲后执行
                </p>
                <ul>
                  <li>1）setInterval 和 setTimeout所计时的线程</li>
                  <li>2）计时完毕后，会加入事件队列中，等待JS引擎执行。（JS引擎空闲时执行）</li>
                  <li>3）W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。</li>
                </ul>
              </>
            </ListCard>
            <ListCard title="5）异步HTTP请求线程">
              <>
                <p>当HttpRequest连接后，浏览器会新开的一个线程，当监控到readyState状态变更时，如果设置了该状态的回调函数，则将该状态的处理函数推进任务队列中，等待JS引擎线程空闲后执行</p>
                <ul>
                  <li>1）注意：浏览器对同一域名请求的并发连接数是有限制的，Chrome和Firefox限制数为6个，ie8则为10个。</li>

                </ul>
              </>
            </ListCard>
            <h3>总结：2-5 四个线程参与了JS的执行，但是永远只有<span style={{color:'red',fontWeight:'bold'}}>“JS引擎线程”</span>在执行JS脚本程序，其他三个线程只负责将满足触发条件的处理函数推进任务队列，等待JS引擎线程执行。</h3>
          </div>
        </ListCard>
        <ListCard title="4:插件进程">
          <>
            <p>每使用一类插件都会创建一个进程</p>
          </>
        </ListCard>
      </div>
    </ContentCard>
    <ContentCard title="浏览器渲染流程">
        <ul>
          <li>1）浏览器输入URL后，会先进行 DNS 查询，根据域名获取到对应的IP地址</li>
          <li>2）TCP 连接</li>
          <li>3）这时浏览器主线程接管,开启<span style={{color:'red'}}>网络进程</span>，下载，进行http资源请求，服务端响应</li>
          <li>
            4）拿到响应资源，将资源通过RendererHost接口转交给Renderer<span style={{color:'red'}}>渲染进程</span>
            <ListCard title="渲染进程分以下几步开始渲染">
              <ul>
                <li>1）解析HTML建立DOM树</li>
                <li>2）解析CSS构建CSS树</li>
                <li>3）将DOM树和CSS规则树合并后生产Render树</li>
                <li>4）Layout/reflow：复杂计算元素的大小、位置等信息，生成LayOut Tree（Layout/reflow）</li>
                <li>5）paint：生成绘制顺序表，绘制页面像素信息，把内容画到屏幕上</li>
                <li>6）浏览器<span style={{color:'red'}}>主线程</span>将<span style={{color:'red'}}>默认图层和复合图层（合成器线程）</span>交给<span style={{color:'red'}}>GPU进程</span>，GPU进程再将各个图层合成（composite），最后显示出页面</li>
              </ul>
            </ListCard>
          </li>
          <li>5）浏览器开始渲染（可能会协调GPU等线程协作完成）</li>
        </ul>
    </ContentCard>
    <ContentCard title="浏览器渲染图层">
        <>

          <ListCard title="1）普通图层">

          </ListCard>
          <ListCard title="2）复合图层">
            <>
              <h4>一：缺点</h4>
              <ul>
                <li>1）合成层的位图，会交由 GPU 合成，比 CPU 处理要快,但是会消耗GPU资源去渲染，给GPU带来负担，性能较慢</li>
                <li>2）当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层</li>
                <li>3）对于 transform 和 opacity 效果，不会触发 layout 和 paint</li>
                <li>4）但是尽量不要大量使用复合图层，否则由于资源消耗过度，页面反而会变的更卡</li>
              </ul>
              <h4>如何变成复合图层（硬件加速）</h4>
              <ul>
                <li>1）最常用的方式：translate3d、translateZ（3D或透视变换）</li>
                <li>2）硬件加速时请增加使用z-index<br/>使用3D硬件加速提升动画性能时，最好给元素增加一个z-index属性，人为干扰合成层的排序，可以有效减少chrome创建不必要的合成层，防止层爆炸，提升渲染性能，移动端优化效果尤为明显。</li>
              </ul>
            </>
          </ListCard>
        </>
    </ContentCard>

  </div>
}

export default ThreadMod