"use client"
import React, { Suspense, useEffect, useState } from "react"
import { TYPES_TITTLE } from "@/app/utils/typesTitles"
import { TYPES_BUTTON } from "../../../utils/typesButton"
import { fetchCourses } from "@/app/utils/fetchAllCourses"
import { useParams } from "next/navigation"
import { Course } from "@/app/utils/fetchAllCourses"
import ButtonUI from "@/app/components/Forms/Button"
import ReactPlayer from "react-player";
import TittleUI from "@/app/components/UI/Titles"

export default function Content() {
    const id = useParams().id;
    const [courses, setCourses] = useState<Course[]>([])

    useEffect(() => {
        async function getData() {
            const courses = await fetchCourses();
            setCourses(courses);
        }
        getData();
    }, [])

    const course = courses.find((c) => c.id === id);

    return (
        <div className="grid grid-cols-3 gap-2 bg-black">
            <div className="bg-black col-span-2">
                <TittleUI
                    variant={TYPES_TITTLE.ABOUT}
                    content={course?.title}
                    custom="ml-16 text-3xl text-white font-bold"
                />
                <div className="ml-16 mt-12 w-full">
                     {course?.videoLink && (
                      <Suspense fallback={"Loading Video..."}>
                        <ReactPlayer
                          url={course?.videoLink} 
                          loop={false} 
                          controls={true} 
                         />
                      </Suspense> 
                     )}
                </div>
                <p className="font-roboto text-2xl ml-16 mt-8 text-slate-300 leading-[2] max-w-3xl">
                    {course?.content}
                </p>
                <div className="flex justify-between max-w-3xl ml-16 mb-16 mt-14">
                    <ButtonUI
                        navLink="-1"
                        content="Back"
                        variant={TYPES_BUTTON.CUSTOM}
                        custom="px-20 py-3 rounded-full border border-2 p-white font-medium text-white font-xl hover:bg-cyan-white/10 transition-colors"
                    />
                    <ButtonUI
                        navLink={`/course/practice/${course?.id}`}
                        content="Next"
                        variant={TYPES_BUTTON.CUSTOM}
                        custom="px-20 py-3 rounded-full border border-2 p-primary-blue font-medium text-cyan-400 font-xl hover:bg-cyan-400/10 transition-colors"
                    />
                </div>
            </div>
            <div>
                {/* <SideProgressBar /> */}
            </div>
        </div>
    );
}
