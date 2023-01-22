import http from '@/constants/api';

const module = '/user';

class UserService {

  getUser() {
    return http.get(module);
  }

  updateNameHome(nameHome,username) {
    return http.put(module +`?username=${username}&name=${nameHome}`)
          .then(response => {
              return response;
          })
  }

}

export default new UserService();