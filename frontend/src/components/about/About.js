import React from "react";
import classes from "./About.module.scss";
import photoImg from "../../assets/mail.png";
const About = () => {
  return (
    <div className={classes.wrapperAbout}>
      <h1>За нас:</h1>
      <div className={classes.textHeader}>
        <div className={classes.textContent}>
          <h3>КОИ СМЕ НИЕ</h3>
          <p>
            Ние сме група студенти на Факултетот за информатички науки и
            компјутерско инженерство - Скопје. Нашата цел за овој проект е да
            изградиме веб апликација користејќи геолокација и мапа.
          </p>
          <h3>
            ЦЕЛТА НА СИСТЕМОТ
          </h3>
          <p>
            Целта на апликацијата е да биде интегрирана со Google Maps. Мапата
            треба да прикажува геолокациски (и општо релевантни) податоци за
            голем број на продавници низ територијата на Македонија.
            Дополнително може да се додаваат нови продавници (моментално имаме
            над 700), како и оставање коментари и оценки за различни продавници.
            Продавниците се прикажани во вид на картички врз кои е овозможено
            пребарување по име и филтрирање по град и категорија. Се надеваме
            дека ќе ви се допадне :)!
          </p>
        </div>
      </div>
      <h1>Контакт:</h1>
      <div className={classes.textHeader}>
        <div className={classes.textContent}>
          <div className={classes.textRow}>
            <img src={photoImg} alt="Mail" />
            <p>techtitansdians@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="banner__content">© сите права се задржани</div>
      </div>
    </div>
  );
};

export default About;
