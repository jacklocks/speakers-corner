import EditThreadForm from "@/app/components/EditThreadForm";

const getThreadById = async (id) => {
  const apiURL = process.env.API_URL;
  try {
    const res = await fetch(`${apiURL}/api/threads/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch thread");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditThread({ params }) {
  const { id } = params;
  const { threads } = await getThreadById(id);
  const { title, description } = threads;

  return <EditThreadForm id={id} title={title} description={description} />;
}
