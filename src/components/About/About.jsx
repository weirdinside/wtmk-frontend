import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__text">
        <h1 className="about__text_title">
          what is{" "}
          <span style={{ fontFamily: "Cabinet-Grotesk-Black" }}>wtmk</span>?
        </h1>
        <p className="about__text_description">
          wtmk (what to make) is a website that helps you figure out what to
          eat, based on your preferences and dietary restrictions. This website
          was designed and developed by Anirudh Bharadwaj during the TripleTen
          software engineer bootcamp, and communicates with the{" "}
          <a
            target="_blank"
            className="about__text_description_link"
            href="https://spoonacular.com"
          >
            spoonacular API
          </a>{" "}
          to retrieve recipes based on the filters that the user inputs.
        </p>
      </div>
      <div className="about__image"></div>
    </div>
  );
}

export default About;
