import BaseService from "./BaseService";

class CurriculumService {
  section(courseId) {
    return BaseService.getData(`/api/CurriculumSection/course/${courseId}`);
  }
  lecture(courseId) {
    return BaseService.getData(`api/CurriculumLecture/section/${courseId}`);
  }
}

export default new CurriculumService();
