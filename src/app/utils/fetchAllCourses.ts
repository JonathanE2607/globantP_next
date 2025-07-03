import { getCourses } from "../services/courseService"

type progressType = {
  id: string
  title: string
  description: string
  active: boolean
}

export interface Course {
  id: string
  title: string
  content: string
  image: string
  videoLink: string
  teacherName: string
  numSucces?: number
  numFinish?: number
  progress?: progressType[]
}

export async function fetchCourses(): Promise<Course[] | []> {
  try {
    const courses = await getCourses()
    const sideProgress = courses.flatMap((course: Course) => course.progress ?? [])
    return courses
  } catch (err) {
    console.error("Error al obtener cursos:", err)
    return []
  }
}
