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
  editProfile(userId, data) {
    return BaseService.putData(`/api/User/student/${userId}/profile`, data);
  }
  contact(data) {
    return BaseService.postData(`/api/Contact`, data);
  }
  forgatPassword(data) {
    return BaseService.postData(`/api/Account/forgotpassword`, data);
  }
  passwordChange(data) {
    return BaseService.putData(`/api/Account/resetpassword`, data);
  }
}

export default new UserService();
