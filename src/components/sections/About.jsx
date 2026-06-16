import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <p className="section-label">01 / WHO I AM</p>
      <h2>About me</h2>

      <p className="about-hook">
        I build software, and I make sure it holds up.
      </p>

      <p className="about-lead">
        I'm a Software Developer and QA Engineer based in Anand, Gujarat, with
        over four years of experience across the full development lifecycle. My
        core strength is the{' '}
        <span className="kw">MEAN stack</span> — building web applications end
        to end, designing <span className="kw">RESTful APIs</span> with{' '}
        <span className="kw">Node.js</span>,{' '}
        <span className="kw">Express</span>, and{' '}
        <span className="kw">MongoDB</span>, and developing responsive front
        ends in <span className="kw">Angular</span> with{' '}
        <span className="kw">JavaScript</span> and{' '}
        <span className="kw">TypeScript</span>.
      </p>

      <p className="about-body">
        I work just as confidently on the quality side, with hands-on
        experience in <span className="kw">manual</span>,{' '}
        <span className="kw">regression</span>, and{' '}
        <span className="kw">API testing</span>. I've written test automation
        frameworks, migrated a large suite from{' '}
        <span className="kw">Selenium</span> to{' '}
        <span className="kw">Playwright</span>, and worked with{' '}
        <span className="kw">SQL</span> and{' '}
        <span className="kw">CI/CD</span> pipelines in{' '}
        <span className="kw">Azure DevOps</span> within an{' '}
        <span className="kw">Agile</span> team.
      </p>

      <div className="about-highlight">
        <span className="about-highlight-label">What I am proudest of</span>
        <p>
          I built an <span className="kw">AI agent pipeline</span> that
          transforms raw recorded scripts into a structured{' '}
          <span className="kw">Page Object Model</span> framework - evolving it
          from Copilot prompts into a multi-agent system, and adapting it to{' '}
          <span className="kw">Claude</span> to generate and refactor 20 test cases in two
          days during an internal hackathon.
        </p>
      </div>

      <p className="about-body">
        I also care about the team I work with. I document what I learn, mentor
        others across timezones, and look for roles where I can build well, ship
        with confidence, and keep learning at the edge of where the field is
        heading.
      </p>
    </section>
  )
}

export default About