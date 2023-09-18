import SingleThread from "./SingleThread";

const getThreads = async () => {
  const apiURL = process.env.API_URL;
  try {
    const res = await fetch(`${apiURL}/api/threads`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("failed to fecth threads");
      return { threads: [] };
    }
    return res.json();
  } catch (error) {
    console.log("error loading threads", error);
  }
};

export default async function Thread() {
  const { threads } = await getThreads();
  return (
    <>
    <section className="thread">
      {threads && threads.map((t) => <SingleThread key={t._id} t={t} />)}
    </section>
    </>
  );
}
