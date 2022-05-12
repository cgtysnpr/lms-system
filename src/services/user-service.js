import BaseService from "./BaseService";

class UserService {
  login(data) {
    return BaseService.postData(`/api/Account/login/student`, data);
  }
  checkUser(id) {
    return BaseService.getData(`/api/User/student/${id}/profile`);
  }
  register(data) {
    return BaseService.postData(`/api/Account/register`, data);
  }
}

export default new UserService();
