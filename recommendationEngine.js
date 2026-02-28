
export const recommendCourses = (courses,keyword)=>{
  return courses.filter(c=>c.title.toLowerCase().includes(keyword.toLowerCase())).slice(0,3);
};
