import axios from 'axios'
const my_url = {
	http: 'http://cyj.lovewenqin.cn'
}
axios.defaults.baseURL = '/index/';
axios.defaults.timeout = 60000;
const request = {
	http: my_url.http,
	get: (url, data) => {
		return new Promise((resp, rej) => {
			axios.get(url, {
				params: data
			}).then(res => {
				if (res.status == 200) {
					if (res.data.bool) {
						resp(res.data.msg);
					} else {
						if (res.data.msg) {
							rej(res.data.msg);
						}

					}
				} else {
					rej(res);
				}
			}).catch(err => {
				rej(err.data)
			})
		})
	},
	post: (url, data,) => {
		return new Promise((resp, rej) => {
			axios.post(url, data).then(res => {
				if (res.status == 200) {
					if (res.data.bool) {
						resp(res.data.msg);
					} else {
						if (res.data.msg) {
							rej(res.data.msg);
						}
					}
				} else {
					rej(res);
				}
			}).catch(err => {
				rej(err.data)
			})
		})
	},
}

export default request;