import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/Tickets/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to get Ticket");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    try {
      updateTicketData = await getTicketById(params.id);
      updateTicketData = updateTicketData.foundTicket;
    } catch (error) {
      console.error("Error fetching ticket:", error.message);
      // Handle the error, e.g., redirect to an error page
      throw error; // Rethrow the error to stop further execution
    }
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
