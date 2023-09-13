import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getComments = async () => {
  const apiURL = process.env.API_URL;
  try {
    const res = await fetch(`${apiURL}/api/comments`, { cache: "no-store" });

    if (!res.ok) {
      //throw new Error("failed to fecth comments");
      return { comments: [] };
    }
    return res.json();
  } catch (error) {
    console.log("error loading comments", error);
  }
};

export default async function Comment({ threadId }) {
  const { comments } = await getComments();

  return (
    <>
      <section>
        <div className="comments-container">
          {comments &&
            comments.map((c) => (
              <div key={c._id}>
                {threadId === c.threadId ? (
                  <>
                    <div className="text-comment" style={{ color: "white" }}>
                      {c.comment}
                    </div>
                    <div className="button-comment">
                      <Link href={`/editComment/${c._id}`}>
                        <HiPencilAlt size={12} />
                      </Link>
                      <RemoveBtn id={c._id} />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
