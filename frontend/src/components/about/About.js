/* eslint-disable */
import React from "react";
import "./About.css";
import photoImg from "../../assets/mail.png";
const About = () => {
  return (
    <div>
      <h1 className="header">За нас:</h1>
      <div className="textHeader">
        <div className="textContent">
          <h3>КОИ СМЕ НИЕ</h3>
          <p>
            {/* We are a group of students currently studying Computer Science at
                        'Faculty of Computer Science and Engineering - Skopje'. Our mission
                        is to build a project including the Map. */}
            Ние сме група студенти на Факултетот за информатички науки и
            компјутерско инженерство - Скопје. Нашата цел за овој проект е да
            изградиме веб апликација користејќи геолокација и мапа.
          </p>
          <h3>
            {/* THE PURPOSE OF THE SYSTEM */}
            ЦЕЛТА НА СИСТЕМОТ
          </h3>
          <p>
            {/* As i said earlier the system should work with the Google Map. The
            map should show all the stores in North Macedonia. Also the stores
            could be rated, could be commented and also users can add new
            stores. The stores will be displayed like a card and they can be
            found by searching in the searchbar or by using the filters. Hope
            you enjoy it :) */}
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
      <h1 className="header">Контакт:</h1>
      <div className="textHeader">
        <div className="textContent">
          <div className="textRow">
            <img src={photoImg} alt="Mail" style={{width: "60px"}} />
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
