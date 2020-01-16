import React from "react";

const Events = ({ eventData }) => {
  return (
    <div className="events">
      {eventData.map(event => (
        <div className="chart__container" key={event.id}>
          <h2 className="coin__title">{event.title}</h2>
          <h4 className="coin__symbol">{event.description}</h4>
          <div className="coin__logo">
            <img src={event.screenshot} height="40" alt={event.title} />
          </div>
          <h2 className="coin__title">{event.start_date}-{event.end_date}</h2>
          <h2 className="coin__title">{event.city}</h2>
        </div>
      ))}
    </div>
  );
};
export default Events;