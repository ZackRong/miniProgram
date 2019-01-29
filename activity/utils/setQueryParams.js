/**
 * setQueryParams:将给定的参数对象，转成A=a&B=b格式
 * 并以字符串形式返回
 * @param paramsObj 参数对象
 */
const setQueryParams = (paramsObj) => {
	if (Object.prototype.toString.call(paramsObj) !== '[object Object]') {
		console.log('params must be an object');
		return '';
	}

	let query = '';
	for (let k in paramsObj) {
		if (paramsObj[k] !== undefined && paramsObj[k] !== 'undefined' && paramsObj[k] !== '') {
			if (query != '') {
				query += '&';
			}
			query += `${k}=${paramsObj[k]}`;
		}
	}

	return query === '' ? '' : `?${query}`;
};

export default setQueryParams;
