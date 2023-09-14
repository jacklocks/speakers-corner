import EditCommentForm from "@/app/components/EditCommentForm";

const getCommentById = async (id) => {
  const apiURL = process.env.API_URL;
  try {
    const res = await fetch(`${apiURL}/api/comments/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch comment");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditComment({ params }) {
  const { id } = params;
  const { comments } = await getCommentById(id);
  const { comment } = comments;

  return <EditCommentForm id={id} comment={comment} />;
}
