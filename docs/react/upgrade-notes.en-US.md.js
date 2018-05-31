webpackJsonp([50],{1208:function(n,a){n.exports={content:["article",["p","Here list some of main incompatible changes and recommended changes in the upgrade. See ",["a",{title:null,href:"/changelog"},"Changelog"]," for all changes."],["h2","1.x => 2.0"],["p","2.x Breaking changes upgrade sample ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-1.x-2.0"},"antd-mobile-samples / web-1.x-2.0"]],["h4","HD program"],["blockquote",["p","If you do not use viewport scale in your code, you can skip this step."]],["p","How to upgrade?"],["ol",["li",["p","make sure add a ",["code","data-scale"]," attibute in your ",["code","html"]," tag, eg: ",["code",'<html data-scale="true"></html>'],", or you can do it through js, eg: ",["code","document.documentElement.setAttribute('data-scale', true);"],"."]]],["p","2.Follow ",["a",{title:null,href:"https://mobile.ant.design/docs/react/customize-theme"},"Customize Theme Doc"]," to modify antd-mobile theme variable ",["code","@hd"]," to be ",["code","2px"],"."],["h4","Icon"],["p","How to upgrade, depend on which case you use:"],["ol",["li",["p","If you previously only use antd-mobile built-in Icon like this\uff1a",["code",'<Icon type="loading" />'],", no need to do any change."]],["li",["p","If you previously use your local svg file to do custom Icon like this way\uff1a",["code","<Icon type={require('../foo.svg')} />"],". Suggest you follow below solution:"]]],["pre",{lang:"diff",highlighted:'<span class="token deleted">- import { Icon } from \'antd-mobile\';</span>\n<span class="token deleted">- &lt;Icon type={require(\'./foo.svg\')} /></span>\n\n<span class="token inserted">+ const CustomIcon = ({ type, className = \'\', size = \'md\', ...restProps }) => (</span>\n<span class="token inserted">+     &lt;svg</span>\n<span class="token inserted">+       className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}</span>\n<span class="token inserted">+       {...restProps}</span>\n<span class="token inserted">+     ></span>\n<span class="token inserted">+       &lt;use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}</span>\n<span class="token inserted">+       {/* &lt;use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@latest */}</span>\n<span class="token inserted">+     &lt;/svg></span>\n<span class="token inserted">+ );</span>\n<span class="token inserted">+ &lt;CustomIcon type={require(\'./foo.svg\')} /></span>'},["code","- import { Icon } from 'antd-mobile';\n- <Icon type={require('./foo.svg')} />\n\n+ const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (\n+     <svg\n+       className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}\n+       {...restProps}\n+     >\n+       <use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}\n+       {/* <use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@latest */}\n+     </svg>\n+ );\n+ <CustomIcon type={require('./foo.svg')} />"]],["h4","DatePicker"],["p","Remove the ",["code","moment.js"]," dependency, Corresponding type of these ",["code","value / minDate / maxDate / format / onChange"]," props changed from the ",["code","moment"]," object to the ",["code","Date"]," object."],["p","Upgrade example:"],["pre",{lang:"diff",highlighted:'<span class="token deleted">&lt;DatePicker</span>\n<span class="token deleted">-  minDate={moment([2015, 8, 15, 10, 30, 0])}</span>\n<span class="token inserted">+  minDate={new Date(2015, 8, 15, 10, 30, 0)}</span>\n<span class="token deleted">-  maxDate={moment([2018, 1, 1, 23, 49, 59])}</span>\n<span class="token inserted">+  maxDate={new Date(2018, 1, 1, 23, 49, 59)}</span>\n<span class="token inserted">></span>\n  &lt;List.Item arrow="horizontal">\u65e5\u671f&lt;/List.Item>\n<span class="token deleted">&lt;/DatePicker></span>'},["code",'<DatePicker\n-  minDate={moment([2015, 8, 15, 10, 30, 0])}\n+  minDate={new Date(2015, 8, 15, 10, 30, 0)}\n-  maxDate={moment([2018, 1, 1, 23, 49, 59])}\n+  maxDate={new Date(2018, 1, 1, 23, 49, 59)}\n>\n  <List.Item arrow="horizontal">\u65e5\u671f</List.Item>\n</DatePicker>']],["h4","Tabs"],["p","Older version:"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token attr-name">defaultActiveKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span></span> <span class="token attr-name">onTabClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleTabClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabPane</span> <span class="token attr-name">tab</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'3\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabPane</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabPane</span> <span class="token attr-name">tab</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4eca\u65e5(20)\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabPane</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabPane</span> <span class="token attr-name">tab={&lt;Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabPane</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>'},["code",'<Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>\n  <TabPane tab={<Badge text={\'3\'}>First Tab</Badge>} key="1">\n    <div>Content of First Tab</div>\n  </TabPane>\n  <TabPane tab={<Badge text={\'\u4eca\u65e5(20)\'}>Second Tab</Badge>} key="2">\n    <div>Content of Second Tab</div>\n  </TabPane>\n  <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">\n    <div>Content of Third Tab</div>\n  </TabPane>\n</Tabs>']],["p","New changes:"],["ul",["li",["p","The metadata for each tab is passed in by ",["code","tabs = [{key: string, title: Node, ...}, ...]"],"."]],["li",["p",["code","defaultActiveKey"]," => ",["code","initialPage"],"\u3001",["code","activeKey"]," => ",["code","page"],", supports string-like keys or numeric indexes."]],["li",["p","Remove the ",["code","TabPane"]," element, Tabs' children correspond to the",["code","tabs"]," data according to the key or index order."]],["li",["p","Support single content node, function content node."]],["li",["p","Add the ",["code","renderTab"]," /",["code","renderTabBar"]," API to support more flexible custom content."]]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> tabs <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'3\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> sub<span class="token punctuation">:</span> <span class="token string">\'subcontent\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4eca\u65e5(20)\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> sub<span class="token punctuation">:</span> <span class="token string">\'subcontent\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> sub<span class="token punctuation">:</span> <span class="token string">\'subcontent\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token attr-name">tabs</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>tabs<span class="token punctuation">}</span></span> <span class="token attr-name">initialPage</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> tab<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">renderTab</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>tab <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>tab<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>tab<span class="token punctuation">.</span>sub<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">renderTabBar</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>DefaultTabBar <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>'},["code","const tabs = [\n  { title: <Badge text={'3'}>First Tab</Badge>, sub: 'subcontent' },\n  { title: <Badge text={'\u4eca\u65e5(20)'}>Second Tab</Badge>, sub: 'subcontent' },\n  { title: <Badge dot>Third Tab</Badge>, sub: 'subcontent' },\n];\n\n<Tabs tabs={tabs} initialPage={1}\n  onChange={(tab, index) => { console.log(index, tab); }}\n  renderTab={tab => <span>{tab.title}-{tab.sub}</span>}\n  renderTabBar={(props) => <Tabs.DefaultTabBar {...props} />}\n>\n  <div>Content of First Tab</div>\n  <div>Content of Second Tab</div>\n  <div>Content of Third Tab</div>\n</Tabs>"]],["h4","TabBar"],["p","The ",["code","Bar"],"'s style of TabBar is no longer use ",["code","fixed"],", ",["code","TabBar"],"'s height, position is determined by wrapper\uff0cimprove layout flexibility."],["p","easy to upgrade:"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> position<span class="token punctuation">:</span> <span class="token string">\'fixed\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> top<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabBar</span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabBar</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>'},["code","<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>\n  <TabBar>...</TabBar>\n</div>"]],["p","(more detail: ",["a",{title:null,href:"http://mobile.ant.design/components/tab-bar-cn/"},"TabBar Demo"],")"],["h4","Popup"],["p","Since the underlying dependencies and bulk styles of the Popup component are the same as the Modal component, and the API call method of the ",["code","Popup.show ()"]," is difficult to update the data, we removed the Popup component and added ",["code","popup"]," prop to the Modal component to implement the Popup component's functionality."],["p","Example of implementing Popup using Modal components:"],["pre",{lang:"diff",highlighted:'<span class="token deleted">- Popup.show(&lt;div>Content&lt;/div>, { animationType: \'slide-up\', maskClosable: false });</span>\n<span class="token deleted">- Popup.hide();</span>\n\n<span class="token inserted">+ &lt;Modal</span>\n<span class="token inserted">+   popup</span>\n<span class="token inserted">+   visible={this.state.vsible}</span>\n<span class="token inserted">+   animationType="slide-up"</span>\n<span class="token inserted">+   maskClosable={false}</span>\n<span class="token inserted">+ ></span>\n<span class="token inserted">+   Content</span>\n<span class="token inserted">+ &lt;/Modal></span>'},["code","- Popup.show(<div>Content</div>, { animationType: 'slide-up', maskClosable: false });\n- Popup.hide();\n\n+ <Modal\n+   popup\n+   visible={this.state.vsible}\n+   animationType=\"slide-up\"\n+   maskClosable={false}\n+ >\n+   Content\n+ </Modal>"]],["h4","ListView & RefreshControl"],["p",["strong","Note: they have very big optimization from ",["code","2.0.0-beta.6"]," version"],", ",["code","RefreshControl"]," is removed and needs to be replaced with the new ",["code","PullToRefresh"]," component. If you have used the ",["code","useZscroller"]," prop of the ",["code","ListView"]," before, or the ",["code","RefreshControl"]," component. You need to follow new usage."],["p","Now ",["code","useZscroller"]," ",["code","scrollerOptions"]," ",["code","refreshControl"]," these props no longer work. ",["strong","Use the web's native scroller instead of zscroller, using the ",["code","PullToRefresh"]," component instead of the ",["code","RefreshControl"]," component"],"."],["p","Upgrade example:"],["pre",{lang:"diff",highlighted:'<span class="token deleted">- import { ListView, RefreshControl } from \'antd-mobile\';</span>\n<span class="token inserted">+ import { ListView, PullToRefresh } from \'antd-mobile\';</span>\n<span class="token deleted">&lt;ListView</span>\n   dataSource={this.state.dataSource}\n<span class="token deleted">-  refreshControl={&lt;RefreshControl</span>\n<span class="token inserted">+  pullToRefresh={&lt;PullToRefresh</span>\n     refreshing={this.state.refreshing}\n     onRefresh={this.onRefresh}\n<span class="token deleted">-    icon={this.renderCustomIcon()}</span>\n<span class="token inserted">+    indicator={{ deactivate: \'\u4e0b\u62c9\' }}</span>\n   />}\n/>'},["code","- import { ListView, RefreshControl } from 'antd-mobile';\n+ import { ListView, PullToRefresh } from 'antd-mobile';\n<ListView\n   dataSource={this.state.dataSource}\n-  refreshControl={<RefreshControl\n+  pullToRefresh={<PullToRefresh\n     refreshing={this.state.refreshing}\n     onRefresh={this.onRefresh}\n-    icon={this.renderCustomIcon()}\n+    indicator={{ deactivate: '\u4e0b\u62c9' }}\n   />}\n/>"]],["blockquote",["p",["strong","Note: we do not recommend using simulated scroller"],". If you have special needs insisted on using it. Please see ",["a",{title:null,href:"https://github.com/react-component/m-list-view/blob/master/HISTORY.md#zscroller"},"list-view zscroller"]," for details."]],["h4","Others"],["ul",["li",["p","Delete the ",["code","Table"]," component, and you can use ",["a",{title:null,href:"https://github.com/react-component/table"},"rc-table"]," instead."]],["li",["p","Each component's ",["code","ref"]," changed from ",["code","string"]," to ",["code","function"]," (e.g. ",["code","input"]," component: ",["code","this.refs.input"]," => ",["code","this.input"],")"]],["li",["p","Part of the Web's components styles were differ from the UA of iOS or Android platform, but now all components use iOS platform styles as default."]],["li",["p","For ",["code","Button"]," / ",["code","InputItem"]," / ",["code","TextareaItem"]," / ",["code","Progress"]," / ",["code","List"],"/ ",["code","Result"],"/ ",["code","Switch"]," / ",["code","Slider"]," / ",["code","Flex"]," / ",["code","pagination"]," / ",["code","ActionSheet"]," components, Their detail styles or APIs have some fine tuning."]],["li",["p",["code","ListView"],'\'s sticky feature change from "built-in" to "external".']]],["p","For more details, please see change logs."],["h2","0.9.x => 1.0"],["p","After 1.0, ",["code","antd-mobile"]," strictly follows ",["a",{title:null,href:"http://semver.org/"},"Semantic Versioning 2.0.0"],"."],["p","Significant changes are as follows:"],["h3","The icon in the component changes from iconfont to svg"],["p","The usage of the Icon component has not changed, like: ",["code",'<Icon type="check" />'],",\nBut because it is no longer font, so css font-size settings are no longer effective,\nthe position offset settings relative to other elements are also slightly different,\nThe setup requirements on the tool are more complex than before. ",["a",{title:null,href:"https://mobile.ant.design/components/icon/"},"See Icon docs for details"],"."],["h3","Web ",["code","Slider"]," split into ",["code","Slider"],", ",["code","Range"],", ",["code","createTooltip"],", ",["a",{title:null,href:"https://mobile.ant.design/components/slider"},"See Slider docs for details"]," and ",["a",{title:null,href:"https://mobile.ant.design/components/range"},"Range docs"],"."],["h3","Other instructions"],["blockquote",["p","Introduces changes to the core of the components."]],["ul",["li",["p","The internal html element of the Button component is replaced by the ",["code","a"]," tag, and the corresponding ",["code","htmlType"]," API is invalid."]],["li",["p",'Some controls of Form component distinguish "',["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html#controlled-components"},"control state"],'" more clearly.']],["li",["p","The NoticeBar component supports the common landscape wheel function."]],["li",["p",["code","DatePicker"]," and ",["code","Pagination"]," can not set ",["code","okText"]," or ",["code","dismissText"]," prop anymore, you can use ",["a",{title:null,href:"https://mobile.ant.design/components/locale-provider/"},"LocalProvider"]," to switch langulage."]],["li",["p","The ",["code","locale"]," prop of ",["code","DatePicker"]," changes, now it's ",["code","{DatePickerLocale, okText, dismissText}"],"."]]],["h2","0.8.x => 0.9"],["p","Optimize the style and compatibility of each component, and enhance component performance such as long lists."],["p","See ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/releases/tag/0.9.0"},"tag/0.9.0"]," for details."],["h2","0.7.x => 0.8.0"],["p","Add HD program settings, see\n",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki"},"antd mobile 0.8 \u4ee5\u4e0a\u7248\u672c\u300c\u9ad8\u6e05\u300d\u65b9\u6848\u8bbe\u7f6e"]," for details."],["p","Other details see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/releases/tag/0.8.0"},"tag/0.8.0"],"."],["h2","0.5.x => 0.6.0"],["p","See ",["a",{title:null,href:"/changelog#0.6.0"},"Changelog"]," for details."]],meta:{order:4,title:"Upgrade",filename:"docs/react/upgrade-notes.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#1.x-=>-2.0",title:"1.x => 2.0"},"1.x => 2.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.9.x-=>-1.0",title:"0.9.x => 1.0"},"0.9.x => 1.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.8.x-=>-0.9",title:"0.8.x => 0.9"},"0.8.x => 0.9"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.7.x-=>-0.8.0",title:"0.7.x => 0.8.0"},"0.7.x => 0.8.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.5.x-=>-0.6.0",title:"0.5.x => 0.6.0"},"0.5.x => 0.6.0"]]]}}});