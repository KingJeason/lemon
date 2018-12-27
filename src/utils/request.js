import axios from 'axios';
// import Snackbar from '@material-ui/core/Snackbar';
import mes from '../components/Snackbar'
import Cookies from 'js-cookie'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:7001/api/v1',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
// const codeMessage = {
//     200: '服务器成功返回请求的数据。',
//     201: '新建或修改数据成功。',
//     202: '一个请求已经进入后台排队（异步任务）。',
//     204: '删除数据成功。',
//     400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//     401: '用户没有权限（令牌、用户名、密码错误）。',
//     403: '用户得到授权，但是访问是被禁止的。',
//     404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//     406: '请求的格式不可得。',
//     410: '请求的资源被永久删除，且不会再得到的。',
//     422: '当创建一个对象时，发生一个验证错误。',
//     500: '服务器发生错误，请检查服务器。',
//     502: '网关错误。',
//     503: '服务不可用，服务器暂时过载或维护。',
//     504: '网关超时。',
// };

// 请求拦截器
instance.interceptors.request.use((config) => {
    const token = Cookies.get('token')
    if(token){
        config.headers.Authorization = 'Bearer ' + token
    }
    // Do something before request is sent
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        // console.log(response, 'res')
        // mes.error('123')
        // Do something with response data
        return response.data;
    },
    (err) => {
        console.log(err, 'err')
        if (err.response) {
            switch (err.response.status) {
                case 500:
                    mes.error('服务器错误, 请联系wsyyxy@gmail.com')
                    break;
                default:
                    break;
            }
            return Promise.reject(err);
        } else {
            mes.error('网络错误')
            return Promise.reject('网络错误');
        }
    });

export default instance