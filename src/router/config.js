import packageJSON from '../../package.json';
let routerBaseUrl = "";
const {VUE_APP_MY_NEWEST, VUE_APP_BASE_MYROUTERPRO, VUE_APP_BASE_MYROUTER} = process.env;
if(VUE_APP_MY_NEWEST){
    routerBaseUrl = VUE_APP_BASE_MYROUTERPRO;
}else{
    routerBaseUrl = VUE_APP_BASE_MYROUTER+'/'+packageJSON.version
}
export default {
    routerBase:routerBaseUrl,
}