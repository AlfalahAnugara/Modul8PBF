import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import HelloComponent from './component/HelloComponent';
// import StatefullComponent from './container/StateFullComponent';
// import FormLoginComponent from './login/FormLoginComponent';
// import BlogPost from './container/BlogPost/BlogPost';// Jobsheet 4
import Mahasiswa from './container/Tugas4/Mahasiswa';

ReactDOM.render(<Mahasiswa />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
