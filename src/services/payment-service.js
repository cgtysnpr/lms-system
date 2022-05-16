import BaseService from "./BaseService";

class PaymentService {
  generateToken() {
    return BaseService.getData(`api/Payment/token`);
  }
  finishPay(data) {
    return BaseService.postData(`/api/Payment/finish`, data);
  }
}

export default new PaymentService();
