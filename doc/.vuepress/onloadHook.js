// 当页面加载时候执行的方法
// 可以在这里添加插件 同时可以拿到一个Vue对象作为参数 异步操作也可以进行

export default {
	// 大图预览
	async bigImagePreview(Vue) {
	  document.addEventListener('click',  async ({ target }) => {
    	if (target.nodeName !== 'IMG') return;
  	  window.open(target.src);
	  });
	}
};
