import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";

const getComments = async () => {
  const apiURL = process.env.API_URL;
  try {
    const res = await fetch(`${apiURL}/api/comments`, { cache: "no-store" });

    if (!res.ok) {
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
      <section className="comment">
        <div className="comments-container">
          {comments &&
            comments.map((c) => (
              <div key={c._id}>
                {threadId === c.threadId ? (
                  <>
                    <div className="text-comment">
                      {c.comment}
                    </div>
                    <div className="button-comment">
                      <Link className="pencil" href={`/editComment/${c._id}`}>
                        <HiPencilAlt  />
                      </Link>
                      <div className="trash">
                      <FaTrashAlt id={c._id} />
                      </div>
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
