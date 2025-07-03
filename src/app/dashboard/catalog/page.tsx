
import Card from "@/app/components/Data display/Card"
import { TYPES_CARD } from "@/app/utils/typesCard"
import { fetchCourses } from "@/app/utils/fetchAllCourses"
export default async function () {
    const courses = await fetchCourses()
    console.log(courses)
    
    return (
          <div className="bg-black px-8 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {courses.map((course) => (
                      <Card
                          key={course.id}
                          variant={TYPES_CARD.OFFER}
                          content={course.title}
                          imageURL={course.image}
                          numSucces={course.numSucces}
                          numFinish={course.numFinish}
                          teacherName={course.teacherName}
                          linkTo={`/courses/content/${course.id}`}
                      />
                  ))}
              </div>
          </div>   
        
    )
}