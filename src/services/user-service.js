import BaseService from "./BaseService";

class UserService {
  login(data) {
    return BaseService.postData(`/Account/login/student`, data);
  }
  checkUser(id) {
    return BaseService.getData(`User/student/${id}/profile`);
  }
  register(data) {
    return BaseService.postData(`Account/register`, data);
  }
}

export default new UserService();
