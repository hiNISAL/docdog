import onLoadHook from './onloadhook';

export default async ({
  Vue
}) => {
	for (let [k, v] of Object.entries(onLoadHook)) {
		await v(Vue);
	}
};
