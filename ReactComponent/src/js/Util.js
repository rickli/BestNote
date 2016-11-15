class Http {
	constructor(method, ...arg) {
		// if(window.offline){
		// 	return;
		// }
		let [url,data] = arg;
		url=__API_URL__ + url;
		if(method=='GET'){
			let [base,search] = url.split('?');
			let obj=search?route_param(search):{};
			data={...obj,...data};
			url=base+'?'+param(data);
		}else{
			data=param(data);
		}
		// console.log(url,method,data);
		let xhr = new XMLHttpRequest();
		xhr.open(method, url,true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.withCredentials = true;
		// xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		xhr.timeout=10000;
		xhr.send(data);
		xhr.ontimeout=()=>{
			this.error_fn && this.error_fn({msg:'网络异常'});
		}
		xhr.onreadystatechange =()=>{
			if(xhr.readyState != 4){
				return;
			}
			if(xhr.status===0){
				// window.offline=true;
				// u.toast('网络被作业吓瘫痪噜，快检查一下!',3,()=>{
				// 	window.offline=false;
				// 	// location.reload()
				// })
			}
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
				try {
					let json=xhr.responseText && JSON.parse(xhr.responseText)
					if(!json) throw new Error('not a json');
					__DEV__ && console.log('---------json----------',json);
					// console.log('---------res----------',json);
					if(json.statusCode==0){
						this.success_fn && this.success_fn(json, xhr);
					}else{
						this.error_fn && this.error_fn(json,xhr.statusText || null, xhr.status, xhr);
					}
				} catch (e) {
					__DEV__ && console.error(e);
				}
			}else{
				this.error_fn && this.error_fn({},xhr.statusText || null, xhr.status, xhr);
			}
			xhr = null;
		}
		this.error_fn=(json)=>{
			if(json.msg){
				u.toast(json.msg)
			}else{
				u.toast('网络被作业吓瘫痪噜，快检查一下!')
			}
		}
	}
	success(fn) {
		this.success_fn = fn;
		return this;
	}
	error(fn) {
		this.error_fn = fn;
		return this;
	}
}
export function $get(...arg) {
	return new Http('GET', ...arg);
};
export function $post(...arg) {
	return new Http('POST', ...arg);
}
export function $delete(...arg) {
	return new Http('DELETE', ...arg);
}
export function $put(...arg) {
	return new Http('PUT', ...arg);
}

export function route_param(s) {
	let search = s || location.search.substr(1);
	let obj = {};
	if(!search){
		return obj;
	}
	let arr = search.split('&').forEach((item) => {
		const [key,value] = item.split('=');
		obj[key] = value;
	});
	return obj;
}
export function param(obj){
	let arr=[];
	for (var key in obj) {
		let value=obj[key];
		if (typeof key=='function') value = value()
		if (value instanceof(Array)) value = value.join(',')
		if (value == null) value = ""
		arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
	}
	return arr.join('&');
}
export const $go = url=>window.location.hash=url;
export const entends = Object.assign || function ( target ) {
	for ( var i = 1; i < arguments.length; i++ ) {
		var source = arguments[ i ];
		for ( var key in source ) {
			if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
				target[ key ] = source[ key ];
			}
		}
	}
	return target;
};

export function toast(c, t ,cb=function() {}) {
	var div = document.createElement('div'),
		time = t * 1000 || 3000
	div.className = 'toast'
	div.innerHTML = '<p>' + c + '</p>'
	document.body.appendChild(div)
	setTimeout(function() {
		document.body.removeChild(div)
		div = null
		cb()
	}, time)
}
export const cn=(obj={})=>{
	let arr=Object.keys(obj);
	arr = arr.filter((v) => {
		return obj[v]
	})
	return arr.map(v=>CSS[v])
}
export const XBJ_APP=/xuebajun/i.test(navigator.userAgent);
export const h2str=(h=0)=>{
	if(h<24){
		return `${h}小时`;
	}else{
		let r=h/24;
		return `${r==~~r?r:r.toFixed(2)}天`;
	}
}
