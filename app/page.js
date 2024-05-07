"use client";
import { Fragment, useEffect, useState } from "react";
import TicketCard from "./(components)/TicketCard";
import axios from "axios";

const Dashboard = () => {
  const [dataTickets, setDataTickets] = useState([] || null);

  useEffect(() => {
    const getTickets = async () => {
      const res = await axios.get(`/api/Tickets`, {
        cache: "no-store",
      });
      const { data } = res;
      if (data) {
        setDataTickets(data.tickets);
      }
    };
    getTickets();
  }, [dataTickets]);

  return (
    <div className="p-5">
      <div>
        {dataTickets &&
          dataTickets.map((items, index) => (
            <Fragment key={index}>
              <p>{items.category}</p>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
