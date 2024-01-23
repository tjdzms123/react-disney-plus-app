import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '2e763a8b4a6ae22bbcb349266a50a4b7',
    language: 'ko-KR',
  },
});

export default instance;
