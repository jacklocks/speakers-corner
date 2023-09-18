import ShowComment from "./ShowComment";

const getComments = async () => {
  const apiURL = process.env.API_URL;
  try {
    const res = await fetch(`${apiURL}/api/comments`, { cache: "no-store" });

    if (!res.ok) {
      return { comments: [] };
      throw new Error(error);
    }
    return res.json();
  } catch (error) {
    console.log("error loading comments", error);
  }
};

export default async function Comment({threadId}) {
  const { comments } = await getComments();

  return (
    <>
      <section className="comment">
        <ShowComment key={threadId} comments={comments} threadId={threadId} />
      </section>
    </>
  );
}
