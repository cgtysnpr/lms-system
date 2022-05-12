import BaseService from "./BaseService";

class SharedService {
  allCategories() {
    return BaseService.getData(`/api/Category`);
  }
  allAuthors() {
    return BaseService.getData(`/api/Author`);
  }
}

export default new SharedService();
