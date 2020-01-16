import React from "react";

const Events = ({ eventData }) => {
  return (
    <div className="events">
        <div>{eventData.type}</div>
        <h2>{eventData.title}</h2>
        <h4>{eventData.description}</h4>
        <div>
        <img src={eventData.screenshot} height="40" alt={eventData.title} />
        </div>
        <h2>{eventData.start_date}-{eventData.end_date}</h2>
        <h2>{eventData.city}</h2>   
    </div>
  );
};
export default Events;