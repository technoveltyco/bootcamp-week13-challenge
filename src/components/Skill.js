import Col from "react-bootstrap/Col";
import "./Skill.css";

function Skill({ skill, keywords, key }) {
  const xminBox = 0,
    yminBox = 0,
    wBox = 300,
    hBox = 300,
    wSvg = 100,
    hSvg = 100;
  const viewBox = `${xminBox} ${yminBox} ${wBox} ${hBox}`;
  const xText = Math.floor((wBox - skill.length) / 2),
    yText = Math.floor(hBox / 2);

  const skillTitleId = `skillTitle${key}`;
  const skillDescId = `skillDesc${key}`;
  const titleText = `I have experience in ${skill}`;
  const descText = `${skill} is ${keywords.join(", ")}`;
  const circleText = `${keywords.join(" · ")} · `;

  return (
    <Col>
      <div className="skill-badge">
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
          <g class="circle-text">
            <use xlinkHref="#circlePath" fill="none" />
            <text fill="#000" font-family="Verdana" font-size="29">
              <textPath xlinkHref="#circlePath">{circleText}</textPath>
            </text>
          </g>
          <g>
            <text
              class="badge-text"
              x={xText}
              y={yText}
              font-family="Verdana"
              font-size="35"
            >
              {skill}
            </text>
          </g>
        </svg>
      </div>
    </Col>
  );
}

export default Skill;
