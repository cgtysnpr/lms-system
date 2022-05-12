import BaseService from "./BaseService";

class CourseService {
  featured() {
    return BaseService.getData(`/api/Course/featured`);
  }
  courseDetails(slug) {
    return BaseService.getData(`/api/Course/${slug}`);
  }
  purcasedCourse(id) {
    return BaseService.getData(`/api/Course/purchasedCourse?id=${id}`);
  }
  allCourses(categoryId, authorId, title) {
    let url = "/api/Course";
    if (categoryId) {
      url += `?CategoryId=${categoryId}`;
    }
    if (authorId) {
      url += `?AuthorId=${authorId}`;
    }
    if (title) {
      url += `?Title=${title}`;
    }
    return BaseService.getData(url);
  }
}

export default new CourseService();
