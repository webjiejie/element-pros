/**
 * clone值
 * @param {Object} obj 
 * @returns 
 */
export const clone = (obj)=>{
  const type = Object.prototype.toString.call(obj);
  if (type === '[object Array]') {
    const arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr.push(clone(obj[i]));
    }
    return arr;
  } else if (type === '[object Object]') {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = clone(obj[key]);
    }
    return newObj;
  } else {
    return obj;
  }
}
/**
 * 判断2个对象是否完全相同
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
export const isAlike = (obj1, obj2) => {
  const type1 = Object.prototype.toString.call(obj1);
  const type2 = Object.prototype.toString.call(obj2);
  if (type1 !== type2) {
    return false;
  }
  if (type1 === '[object Symbol]') return false;
  if (type1 === '[object Array]') {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!isAlike(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  } else if (type1 === '[object Object]') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key in obj1) {
      if (!Object.prototype.hasOwnProperty.call(obj2, key) || !isAlike(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
}
/**
 * 判断参数是不是promise
 * @param {Object} val 
 * @returns 
 */
export const isPromiseLike = (val) => {
  const type = typeof val;
  return val && (type === 'function' || type === 'object') && (typeof val.then === 'function');
}
/**
 * 判断类型是不是一样
 * @param {any} obj 
 * @param {string} type 如’[object Object]‘
 * @returns string
 */
export const isType = (obj,type)=>{
  const str = Object.prototype.toString.call(obj);
  if(type){
    return type === str;
  }
  return str;
}
/**
 * 自己的渲染函数
 * @param {vue中的h函数} h 
 * @param {自己的渲染函数，返回dom之类的} render 
 * @param {传递给渲染函数的参数} params 
 * @returns 
 */
export const renderFn = (h,render,params = [])=>{
  if(render){
    const result = render(...params);
    if(isType(result,'[object Object]')){
      return result;
    }else{
        return h('span',null,result);
    }
  }
  return;
}