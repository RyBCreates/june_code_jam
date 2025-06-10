import "./Scheduler.css";

function Scheduler() {
  return (
    <div className="scheduler">
      <form className="scheduler__form">
        <div className="scheduler__input_type_text">
          <label htmlFor="event-name" className="scheduler__label">
            Event Name *
            <input
              required
              className="scheduler__input"
              type="text"
              id="event-name"
              placeholder="Go to Lunch"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </div>

        <div className="scheduler__input_type_text">
          <label htmlFor="event-address" className="scheduler__label">
            Event Address *
            <input
              required
              className="scheduler__input"
              type="text"
              id="event-address"
              placeholder="123 Main St."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="scheduler__input_type_text">
          <label htmlFor="event-start-time" className="scheduler__label">
            Event Start Time *
            <input
              required
              className="scheduler__input"
              type="text"
              id="event-start-time"
              placeholder="11:00 AM"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="scheduler__input_type_text">
          <label htmlFor="event-end-time" className="scheduler__label">
            Event End Time *
            <input
              required
              className="scheduler__input"
              type="text"
              id="event-end-time"
              placeholder="12:00 PM"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </div>
        <button className="scheduler__button" type="submit">
          Add to Day
        </button>
      </form>
    </div>
  );
}

export default Scheduler;
