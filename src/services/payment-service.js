import BaseService from "./BaseService";

class PaymentService {
  finishPay(data) {
    return BaseService.postData(`/api/Payment/finish`, data);
  }
}

export default new PaymentService();
