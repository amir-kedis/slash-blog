"use server";

import { revalidatePath } from "next/cache";

export default async function createPost(prevState: any, formData: FormData) {
  // NOTE: server validating here

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: formData,
  });

  // NOTE: process the reponse of the server

  revalidatePath("/");

  return {
    message: "Post created successfully",
  };
}
