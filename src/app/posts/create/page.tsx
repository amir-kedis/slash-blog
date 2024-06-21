"use client";

import { useFormState, useFormStatus } from "react-dom";
import createPost from "./createPost";

export default function CreatePostPage() {
  const [state, formAction] = useFormState(createPost, {
    message: "",
  });
  const { pending } = useFormStatus();

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
