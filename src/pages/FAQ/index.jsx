import { Accordion } from "./Accordion";
import style from "./index.module.css";
import mockFaq from "../../data/mockFaq.json";
const Asced = () => {
  console.log(mockFaq);

  return (
    <section className={style.faq}>
      <div className="container">
        <h3>FAQ’S</h3>
        <h1>Часто задаваемы вопросы</h1>
        <div className={style.faq_block}>
          <div className={style.faq_list}>
            {mockFaq[0].map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                content={item.text}
              ></Accordion>
            ))}
          </div>
          <div className={style.faq_list}>
            {mockFaq[1].map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                content={item.text}
              ></Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asced;
