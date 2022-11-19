function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        App was created with the help of:
        <a
          className="text-white"
          href="https://www.udemy.com/course/modern-react-front-to-back/"
        >
          React Front To Back
          <a className="text-white" href="https://traversymedia.com">
            {" "}
            by Brad Traversy
          </a>
        </a>
      </p>
      <p className="text-lg text-gray-400">
        Layout inspired By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </>
  );
}

export default About;
