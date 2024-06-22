"use client";

import { useFormState, useFormStatus } from "react-dom";

// server functions
import createPost from "./createPost";

import { useCursor } from "@/utils/CursorContext";

export default function CreatePostPage() {
  const [state, formAction] = useFormState(createPost, {
    message: "",
  });
  const { pending } = useFormStatus();
  const { setCursorText, setCursorScale } = useCursor();

  const handleMouseEnter = () => {
    setCursorText("Let's write!");
    setCursorScale(5);
  };

  const handleMouseLeave = () => {
    setCursorText("");
    setCursorScale(1);
  };

  return (
    <div className="container px-4 py-8 mx-auto font-playfair-display">
      <h2 className="text-clamp font-bold mb-8">Write Your Post now</h2>
      <form action={formAction} className="flex flex-col gap-4">
        <label className="text-2xl">
          Title:
          <input
            type="text"
            className="w-full border border-gray-700 rounded-md p-2 mt-2"
            placeholder="Enter your title here"
            required
          />
        </label>
        <label className="text-2xl mt-8">
          Body:
          <textarea
            className="w-full border border-gray-700 rounded-md p-2 mt-2 h-48"
            placeholder="Enter your body here"
            required
          />
        </label>
        <button
          className="font-bold bg-gray-950 text-gray-100 px-8 w-fit py-2 text-xl rounded mt-8 self-center"
          type="submit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          SUBMIT
        </button>
        <p className="text-2xl mt-4 text-center text-green-800">
          {pending ? "Submitting..." : state.message}
        </p>
      </form>
    </div>
  );
}
