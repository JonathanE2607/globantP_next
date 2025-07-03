import axios from "axios";

 type progressType = {
  id: string;
  title: string;
  description: string;
  active: boolean;
}
export interface Courses {
  id: string;
  title: string;
  content: string;
  image: string;
  videoLink: string;
  teacherName: string;
  numSucces: number;
  numFinish: number;
  progress: progressType[];
}

const URL = 'http://localhost:3000/courses'

export const getCourses = async (): Promise<Courses[]> => {
  try {
    const response = await axios.get<Courses[]>(`${URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const putCourse = ({id, updatedData}:{id:string, updatedData: Courses}) => {
  return axios.put(`${URL}/${id}`, updatedData)
}

export const patchProgress = ({id, data}:{id:string, data: object}) => {
  return axios.patch(`${URL}/${id}`, data);
}

export const postCourse = (newCourse: Courses) => {
  return axios.post(`${URL}`, newCourse);
}