import axios from 'axios';

export default {
  saveVideo: function (videoData) {
    return axios.post('/apisavedvideos', videoData);
  },

  getVideo: function () {
    return axios.get('/api/savedvideos')
  },

  deleteVideo: function (id) {
    return axios.delete(`/api/savedvideos/${id}`)
  }
};