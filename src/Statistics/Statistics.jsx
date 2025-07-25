import style from './Statistics.module.scss'

export const Statistics = ({ title, status }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {status.map((info) => (
          <li className={style.item} key={info.id} style={{backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`}}>
            <span className={style.label}>{info.label}</span>
            <span className={style.percentage}>{info.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};