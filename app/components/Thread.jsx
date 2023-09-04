import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getThreads = async () => {
  const apiURL = process.env.API_URL;
  try {
    const res = await fetch(`${apiURL}/api/threads`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("failed to fecth threads");
    }
    return res.json();
  } catch (error) {
    console.log("error loading threads", error);
  }
};

export default async function Thread() {
  const { threads } = await getThreads();
  console.log(threads);
  return (
    <>
      {threads.map((t) => (
        <>
          <section>
            <div className="threads-container">
              <div key={t._id}>
                <div>
                  <h2>{t.title}</h2>
                  <div className="content-thread">{t.description}</div>
                </div>
              </div>

              <div className="button-thread">
                <RemoveBtn />
                <Link href={"/commentThread/123"}>
                  <HiPencilAlt  size={12}/>
                </Link>
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
}
