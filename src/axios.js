import axios from "axios";

const MusicApi=axios.create({
    BaseUrl: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
})

export default MusicApi;

// const options = {
//   method: 'GET',
//   url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
//   headers: {
//     'X-RapidAPI-Key': '95270d40a5msha8409ac0ff32282p168b7cjsn2de68b8eb4fa',
//     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });