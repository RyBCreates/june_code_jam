import "./About.css";
import Inzira from "../../assets/Inzira.png";

function About() {
  return (
    <div className="about app__section">
      <section className="about-app">
        <h2 className="about-app__title">What This App Is About</h2>
        <p className="about-app__content">
          This app helps users plan and organize upcoming trips by creating
          visual, interactive calendars. Whether you're a meticulous planner or
          just want a quick view of your itineraries, it's built to make trip
          planning fun and collaborative.
        </p>
      </section>
      <section className="about-team">
        <h2 className="about-team__title"> Meet "The Itinerarians" </h2>
        <ul className="cards">
          <li className="card">
            <img className="card__img" src="" alt="Ryan Bommarito" />
            <div className="card__content">
              <h3 className="card__author">Ryan Bommarito</h3>
              <p className="card__description">About Ryan</p>
            </div>
          </li>
          <li className="card">
            <img className="card__img" src={Inzira} alt="Inzira Abdurafikova" />
            <div className="card__content">
              <h3 className="card__author">Inzira Abdurafikova</h3>
              <p className="card__description">
                Always curious and excited to grow. I help shape the frontend
                and user flow while collaborating closely with the team. Big fan
                of good design, clean code, and a cup of coffee while debugging.
              </p>
            </div>
          </li>
          <li className="card">
            <img className="card__img" src="" alt="Avery Walker" />
            <div className="card__content">
              <h3 className="card__author">Avery Walker</h3>
              <p className="card__description">About Avery</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;

//Credit for Boat Icon
//<a target="_blank" href="https://icons8.com/icon/95905/sailboat">Sailboat</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

{
  /* Credit for Car Icon:  https://icons8.com/icon/16690/sedan */
}

{
  /* Credit for Airplane Icon: https://icons8.com/icon/2487/airplane-take-off */
}

// left arrow link
// <a target="_blank" href="https://icons8.com/icon/84994/back">Back</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// forward arrow link
// <a target="_blank" href="https://icons8.com/icon/86517/forward">Forward</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// calendar link
//  <a target="_blank" href="https://icons8.com/icon/vvMPt1YPeFbr/calendar">Calendar</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// location tag icon link
// <a target="_blank" href="https://icons8.com/icon/85049/location">Location Pin</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

//TODO

// FavIcon
// Log In and Register - Styled
// Log in and Register Modals styling needs fixed
// - Switching of Modals doesn't work yet

//Avery - Add picture and about paragraph
