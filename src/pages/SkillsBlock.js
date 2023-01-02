import styles from "./SkillsBlock.module.css";

export default function SkillsBlock({ skills }) {
  return skills.map((section, index) => (
    <div className={styles.skillsBlock} key={index}>
      <h2>{section.title}</h2>
      <div className="d-flex justify-content-center">
        <ul>
          {section.items.sort().map((skill, index) => (
            <li key={index} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
}