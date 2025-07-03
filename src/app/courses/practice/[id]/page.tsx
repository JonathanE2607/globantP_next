"use client"

import { useRef } from "react";
import { TYPES_TITTLE } from "@/app/utils/typesTitles";
import { TYPES_BUTTON } from "../../../utils/typesButton";
import { Editor } from "@monaco-editor/react";
import { courseData } from "@/app/utils/courseData";
import { toast, ToastContainer } from 'react-toastify'
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { patchProgress } from "@/app/services/courseService";
import TittleUI from "@/app/components/UI/Titles";
import * as monaco from "monaco-editor"
import ButtonUI from "@/app/components/Forms/Button";

const Practice = () => {

  const id = useParams().id;
  const test = courseData.find((course) => course.id === id);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const data = { "numSucces": 1 }
  const router = useRouter();

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    editorRef.current = editor;
  };

  const getEditorValue = () => {
    if (editorRef.current?.getValue() === test?.correctFunction) {
      toast.success("Felicidades tu codigo es correcto");
      if (typeof id === "string") {
        patchProgress({ id, data });
      }
      setTimeout(() => {
      router.push("/dashboard/catalog");
    }, 5000);
    } else {
      toast.error("Lo siento, su codigo es incorrecto");
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 bg-black">
      <div className="bg-black col-span-2">
        <TittleUI
          variant={TYPES_TITTLE.ABOUT}
          content={test?.title}
          custom="ml-16 text-3xl text-white font-bold"
        />
        <p className="font-roboto text-2xl ml-16 mb-8 mt-8 text-slate-300 leading-[2] max-w-3xl">
          {test?.content}
        </p>
        <div className="ml-16 mt-12 w-full">
          <Editor
            height="70vh"
            width="90%"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue={test?.testFunction}
            onMount={handleEditorDidMount}
          />
        </div>
        <div className="flex justify-between max-w-3xl ml-16 mb-16 mt-14">
          <ButtonUI
            content="Back"
            variant={TYPES_BUTTON.CUSTOM}
            custom="px-20 py-3 rounded-full border border-2 p-white font-medium text-white font-xl hover:bg-cyan-white/10 transition-colors"
          />
          <ButtonUI
            content="Test"
            variant={TYPES_BUTTON.CUSTOM_ON_CLICK}
            custom="px-20 py-3 rounded-full border border-2 p-primary-blue font-medium text-cyan-400 font-xl hover:bg-cyan-400/10 transition-colors"
            onClick={getEditorValue}
          />
          <ToastContainer />
        </div>
      </div>
      <div>
        {/* <SideProgressBar /> */}
      </div>
    </div>
  );
};

export default Practice;