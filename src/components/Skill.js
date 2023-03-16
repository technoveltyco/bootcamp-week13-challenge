import "./Skill.css";

function Skill({ id, skill, keywords, link }) {
  const xminBox = 0,
    yminBox = 0,
    wBox = 300,
    hBox = 300,
    wSvg = 100,
    hSvg = 100;
  const viewBox = `${xminBox} ${yminBox} ${wBox} ${hBox}`;

  // Badge accessibility attributes in the SVG.
  const skillTitleId = `skillTitle${id}`;
  const skillDescId = `skillDesc${id}`;
  const titleText = `I have experience in ${skill}`;
  const descText = `${skill} is ${keywords.join(", ")}`;

  // Build circle text
  const circleText = `${keywords.join(" · ")} · `;

  return (
    <div key={id} className="skill-badge">
      <a
        href={link}
        aria-labelledby={skillTitleId}
        aria-describedby={skillDescId}
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox={viewBox} width={wSvg} height={hSvg}>
          <title id={skillTitleId}>{titleText}</title>
          <desc id={skillDescId}>{descText}</desc>
          <defs>
            <path
              id="circlePath"
              d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
            />
          </defs>

          {/* <circle cx="150" cy="150" r="150" fill="#000"/> */}
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text className="circle-text">
              <textPath xlinkHref="#circlePath">{circleText}</textPath>
            </text>
          </g>
          <g>
            <text
              className="badge-text"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {skill}
            </text>
          </g>
        </svg>
      </a>
    </div>
  );
}

export default Skill;
