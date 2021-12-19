import "./App.css";
import React, { useState, useEffect } from "react";
import AddDataToDb from "./components/AddDataToDb";
import { default as axios } from "./axiosConfig";
import StoreContainer from "./components/shops/StoreContainer";
import SingleShop from "./components/shop/SingleShop";
import DesktopHeader from "./components/header/DesktopHeader";
import { dataActions } from "./store/data-slice";
import { useDispatch } from "react-redux";
import LoadingComponent from "./components/loading/LoadingComponent";
import AdminPanel from "./components/admin/AdminPanel";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/about/About";
function App() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (location.pathname.startsWith("/store")) {
      setActiveTab("store");
    } else if (location.pathname.startsWith("/404")) {
      setActiveTab("404");
    } else if (location.pathname.startsWith("/about")) {
      setActiveTab("about");
    } else if (location.pathname === "/") {
      setActiveTab("home");
    } else {
      setActiveTab("");
    }
    const loadEffect = async () => {
      setIsLoading(true);
      const cities = await axios.get("/shop/cities");
      dispatch(dataActions.addCities(cities.data || []));
      const categories = await axios.get("/shop/categories");
      dispatch(dataActions.addCategories(categories.data || []));
      // const allShops = await axios.get("/shop/all");
      // dispatch(dataActions.addPlaces(allShops.data || []));
      dispatch(dataActions.addPlaces([
        {
          "id": "0BjNcTWPtrArB6ooKd2b",
          "address": "Илинденска 54-50, Кавадарци, Македонија",
          "name": "Cityshop",
          "category": "Електроника и компјутери",
          "avgGrade": 3.5,
          "lat": 41.4360062,
          "lon": 22.0112696
        },
        {
          "id": "0Hiz9ypoucZOKk0BHKNh",
          "address": "R1107 76, Кавадарци, Македонија",
          "name": "Butik Dani",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.4371805,
          "lon": 22.0106521
        },
        {
          "id": "0KbmhMqD2VfpebGNjIaY",
          "address": "XCWH+93 Скопје, Македонија",
          "name": "Mood",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9959241,
          "lon": 21.4276405
        },
        {
          "id": "0M1qam5g9sBoSVyB4x9Y",
          "address": "Широк Сокак 88, Битола, Македонија",
          "name": "Урфа",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0266076,
          "lon": 21.3366265
        },
        {
          "id": "0MOLhhUyCdMCefedBjS3",
          "address": "Македонија",
          "name": "Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8782782,
          "lon": 20.8603725
        },
        {
          "id": "0UPU6iRxy1399a9kyiJH",
          "address": "Куманово, Македонија",
          "name": "Fresh",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.1328075,
          "lon": 21.7246883
        },
        {
          "id": "0dyAigSEaNRrYPFSBQDi",
          "address": "улица Владимир Полежановски 15, Скопје 1000, Македонија",
          "name": "Cake Boutique",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9983382,
          "lon": 21.4182312
        },
        {
          "id": "0fVzCTvqOcW7e9AuiSrj",
          "address": "2C2Q+83 Скопје, Македонија",
          "name": "Allday",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0008503,
          "lon": 21.4376986
        },
        {
          "id": "0j6tjWJuyGgjUSgNizt5",
          "address": "29RR+XW Скопје, Македонија",
          "name": "Ефтинија",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0424608,
          "lon": 21.3923668
        },
        {
          "id": "0r7ElcAuegB8SQTJD0B8",
          "address": "XCWH+3X Скопје, Македонија",
          "name": "Iveri",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9951581,
          "lon": 21.4299481
        },
        {
          "id": "0sU9O6WYrs1bbBWq2rq0",
          "address": "Marsal Tito 96, Битола, Македонија",
          "name": "Cacatua",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.0263282,
          "lon": 21.3367935
        },
        {
          "id": "0wOBHTRYn2EP0bFTT6uz",
          "address": "Вељко Влаховиќ, Свети Николе, Македонија",
          "name": "Зендолино",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8673048,
          "lon": 21.942932
        },
        {
          "id": "0xrJxcWltMr0F5Szw8BA",
          "address": "5ти Конгрес 2000, Штип 2000, Македонија",
          "name": "Silec Vulkanizer",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.7445035,
          "lon": 22.1981502
        },
        {
          "id": "1D8MmP1CqsR2fmRlZC5M",
          "address": "Рајко Жинзифов 20, Скопје 1000, Македонија",
          "name": "Ројал",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9992364,
          "lon": 21.4187447
        },
        {
          "id": "1H0PqjqYsLTAJS26mHwS",
          "address": "JNA 1230, Гостивар 1230, Македонија",
          "name": "Киппер",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7952528,
          "lon": 20.8997801
        },
        {
          "id": "1HCOLyHlo0EbwByd8k9F",
          "address": "Општина Радовиш, Македонија",
          "name": "Kit Go",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.632422,
          "lon": 22.462735
        },
        {
          "id": "1O9VK6n4mBnMcTYvNBNU",
          "address": "Радовиш, Македонија",
          "name": "ELEKTROMEHANIKA",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.6306136,
          "lon": 22.4606289
        },
        {
          "id": "1XmYWy2WXwA9DT1yfyfw",
          "address": "20-ти Октомври 11, Скопје 1000, Македонија",
          "name": "Leontic",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.9994468,
          "lon": 21.4176855
        },
        {
          "id": "1Xs6NuCuSIHcOeYwHguU",
          "address": "Париска, Скопје 1000, Македонија",
          "name": "Cake & Bake",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0020133,
          "lon": 21.4010765
        },
        {
          "id": "1fUKrlQ47giavGzHZGpz",
          "address": "PQ8M+JF Велес, Македонија",
          "name": "Pet Shop K-M  br.2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7165792,
          "lon": 21.7836811
        },
        {
          "id": "1gGrn4Ia5cwwRRMIvAfe",
          "address": "Св. Кирил и Методиj 42, Скопје 1000, Македонија",
          "name": "Anhoch",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9920798,
          "lon": 21.4269193
        },
        {
          "id": "2BFadrtHrBkPvByhM1Dr",
          "address": "Булевар Никола Карев, Скопје 1000, Македонија",
          "name": "Maamaris",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0069288,
          "lon": 21.4374117
        },
        {
          "id": "2LqHXTEzyv6IlATbsEK3",
          "address": "292R+MH Скопје, Македонија",
          "name": "Кам маркет Тафталиџе",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0017143,
          "lon": 21.3914204
        },
        {
          "id": "2MykLw3UQiOHhgn5w08c",
          "address": "Општина Крива Паланка, Македонија",
          "name": "Бисер",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1818766,
          "lon": 22.2865307
        },
        {
          "id": "2PChia9jpe95PiLngiGt",
          "address": "5MGF+R2 Струга, Македонија",
          "name": "KAM Stores",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1770395,
          "lon": 20.6725904
        },
        {
          "id": "2UpunTlebb4h15AC2Yqy",
          "address": "Тодор Чангов 86, Скопје 1000, Македонија",
          "name": "Бина",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9781331,
          "lon": 21.4851324
        },
        {
          "id": "2gWl4QixJOjQZ0Y7tPjU",
          "address": "Општина Делчево, Македонија",
          "name": "Извор Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9648869,
          "lon": 22.7721168
        },
        {
          "id": "2imRjR2YqrNGEVvSOaB4",
          "address": "Булевар Јане Сандански 94, Скопје 1000, Македонија",
          "name": "Веро",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9845218,
          "lon": 21.4688286
        },
        {
          "id": "2q39dfrRwZAwdBP5YnqQ",
          "address": "Sumadiska St, Kumanovë, Македонија",
          "name": "Arma Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1381664,
          "lon": 21.7092984
        },
        {
          "id": "2qWBJC9SfJLLCITkc1mM",
          "address": "Ѓорче Петров 1, Скопје 1000, Македонија",
          "name": "Јокер",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0069145,
          "lon": 21.3682468
        },
        {
          "id": "2tSFIGFRuFKJxeEiSdc5",
          "address": "1-ви Мај, Струмица, Македонија",
          "name": "Zdavec strumica",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4364848,
          "lon": 22.6426896
        },
        {
          "id": "2yfRjEXNr304bJFclHQr",
          "address": "Тонко Димков 9, Куманово, Македонија",
          "name": "Goran daniel kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1298987,
          "lon": 21.7171816
        },
        {
          "id": "35uLnSrf0XHnQOYtRQzS",
          "address": "285M+5J Скопје, Македонија",
          "name": "Kipper",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0078991,
          "lon": 21.3340183
        },
        {
          "id": "3AhUde9lq3YPrfresD6x",
          "address": "Valandovska 4, Скопје 1000, Македонија",
          "name": "Пиколини",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.9950794,
          "lon": 21.5095473
        },
        {
          "id": "3LsoL6zrA6hr4ZipQShi",
          "address": "Bulevar Makedonski Prosvetiteli, Охрид 6000, Македонија",
          "name": "Ramstore",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1130654,
          "lon": 20.7998326
        },
        {
          "id": "3Qwnjx6x8hg1iYJnbUdp",
          "address": "Чегране, Македонија",
          "name": "Вали Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8379549,
          "lon": 20.9745375
        },
        {
          "id": "3VgVPGqKlWtJYthtmSHu",
          "address": "295M+8Q Скопје, Македонија",
          "name": "Солид",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 42.0082528,
          "lon": 21.3844004
        },
        {
          "id": "3Xcm2vaGk0jp0pHtNzif",
          "address": "ул. Македониjа 22, Скопје 1000, Македонија",
          "name": "Специјал (Рекорд)",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9946969,
          "lon": 21.4307088
        },
        {
          "id": "3hDlBQRy2phd1ONnvr1q",
          "address": "C2M7+HC Кавадарци, Македонија",
          "name": "NICOM",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.4339454,
          "lon": 22.0136146
        },
        {
          "id": "3i0t7ElhcuRNSK6P2VIO",
          "address": "Сатеска 77, Охрид 6000, Македонија",
          "name": "Tamaro",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1219875,
          "lon": 20.7815067
        },
        {
          "id": "3lhsczT90ipjBtAQJfkX",
          "address": "A3, Ѕвегор, Македонија",
          "name": "Стрела Пром",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.967327,
          "lon": 22.804392
        },
        {
          "id": "3mdRLYKRr3Oq8158zHUo",
          "address": "2C4P+H7 Скопје, Македонија",
          "name": "Feki-Kom",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0063897,
          "lon": 21.435694
        },
        {
          "id": "3sVgZexKk7FWMxxIiUDc",
          "address": "Тале Христов 4, Скопје 1000, Македонија",
          "name": "Кам Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0248127,
          "lon": 21.4416628
        },
        {
          "id": "3uKYbZHkCIlLpQGhytML",
          "address": "Порта Влае, Скопје 1000, Македонија",
          "name": "Asura Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0078582,
          "lon": 21.3688239
        },
        {
          "id": "3vX4jnWRjkm5be7uJEqf",
          "address": "Salih Asim, Skopie 1000, Македонија",
          "name": "Balkan Corner",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 42.0001421,
          "lon": 21.4365368
        },
        {
          "id": "41LatmFC1oHaN1Z0yvyT",
          "address": "Пиринска, Струмица, Македонија",
          "name": "Djuli 2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4335847,
          "lon": 22.635881
        },
        {
          "id": "4D4QyT5LB3TtWow3MueO",
          "address": "Општина Крива Паланка, Македонија",
          "name": "Дако",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.189067,
          "lon": 22.2850113
        },
        {
          "id": "4WxczNc7OwFEXHF8xSXp",
          "address": "58R6+X9 Крива Паланка, Македонија",
          "name": "КАМ Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1924425,
          "lon": 22.3109725
        },
        {
          "id": "4bAIJXZAdqbJ6QAD3k59",
          "address": "Todor Cuckov, Штип 2000, Македонија",
          "name": "Тер Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7393286,
          "lon": 22.1921338
        },
        {
          "id": "4f9fG2ZMsgcVC2d1TWLy",
          "address": "7-ми Ноември 173, Охрид 6000, Македонија",
          "name": "Tamaro",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1219514,
          "lon": 20.8078085
        },
        {
          "id": "4jkh7ViJsWuTWUaEql7e",
          "address": "4PMH+C6 Куманово, Македонија",
          "name": "Kjosar",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1336226,
          "lon": 21.7280094
        },
        {
          "id": "4nkjYC1cdYmgYiRDiJm2",
          "address": "Орце Николов 150, Скопје 1000, Македонија",
          "name": "Биротехника",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0040957,
          "lon": 21.4151095
        },
        {
          "id": "4oy1YxRng0bs6VeEEJwd",
          "address": "Ванчо Прке, Штип 2000, Македонија",
          "name": "Butik Nina",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.7377863,
          "lon": 22.1912972
        },
        {
          "id": "4q1MzQiHcfnwxzdWlzrI",
          "address": "Општина Струмица, Македонија",
          "name": "My Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4415567,
          "lon": 22.6513455
        },
        {
          "id": "4vdxg4yZDsDTIRB9lTJQ",
          "address": "Врапчиште, Македонија",
          "name": "SELO",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8300832,
          "lon": 20.8840178
        },
        {
          "id": "5AHGYR2s5cxOzMO4di90",
          "address": "CJQH+9Q Струмица, Македонија",
          "name": "Kit-go market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4384422,
          "lon": 22.6294437
        },
        {
          "id": "5ERguxDMeckTwizFol9X",
          "address": "8HV6+C3 Прилеп, Македонија",
          "name": "Футура",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3435846,
          "lon": 21.5601296
        },
        {
          "id": "5FMbcgjs7nIN4yvXEpVQ",
          "address": "Едвард Кардељ, Кавадарци, Македонија",
          "name": "Diana 8",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4413205,
          "lon": 22.010596
        },
        {
          "id": "5FkZqNRCJBqcgOp25tGu",
          "address": "2C34+9V Скопје, Македонија",
          "name": "Стерна",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 42.003419,
          "lon": 21.4071627
        },
        {
          "id": "5G28EhM4FibWGfwOrQuM",
          "address": "4R97+3M Охрид, Македонија",
          "name": "Marando ohrid",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1177316,
          "lon": 20.8141538
        },
        {
          "id": "5JRIUCW62JKF2NTXt1Zm",
          "address": "Струга, Македонија",
          "name": "GEGA STRUGA",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1841703,
          "lon": 20.6724827
        },
        {
          "id": "5atxHJoOlqHPhHxkijPk",
          "address": "2C5V+42 Скопје, Македонија",
          "name": "Солунска",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0077581,
          "lon": 21.4425065
        },
        {
          "id": "5bYY0pHzpVXtVZf62x3h",
          "address": "Центар, Скопје 1000, Македонија",
          "name": "Гранап",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9947556,
          "lon": 21.4276102
        },
        {
          "id": "5gbiu9ZT7zfuzJTJ6QZz",
          "address": "XCGQ+5F Скопје, Македонија",
          "name": "Фарина",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9754943,
          "lon": 21.4387489
        },
        {
          "id": "5hKXmxlav0NxQb4xu9Tl",
          "address": "Партизанска 22, Македонски Брод, Македонија",
          "name": "Техноопрем",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.5111973,
          "lon": 21.2163503
        },
        {
          "id": "5ixb7AqMs7iMJ3pGVNay",
          "address": "Васил Стефановски 3, Скопје 1000, Македонија",
          "name": "Step",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9959161,
          "lon": 21.4180198
        },
        {
          "id": "5lCTbvRYU7NTJkovXb8J",
          "address": "Аминта Трети 14, Скопје 1000, Македонија",
          "name": "Calculator cashier",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0014183,
          "lon": 21.4253295
        },
        {
          "id": "5nvjc4tj8XQQl4Uah4QK",
          "address": "28JH+2Q Битола, Македонија",
          "name": "ШИК",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0300125,
          "lon": 21.3294655
        },
        {
          "id": "5svibTLAQk5QhuaqCJUL",
          "address": "P5PV+Q2 Штип, Македонија",
          "name": "Ванила",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.7369559,
          "lon": 22.1926047
        },
        {
          "id": "5vvZCVwyX4NBdAgCThu2",
          "address": "Радишани Бензинска, Радишани, Македонија",
          "name": "Кам Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0560288,
          "lon": 21.4512558
        },
        {
          "id": "5yJxzjU6Kk6H3Y4bd0Ls",
          "address": "Партизанска 96, Битола, Македонија",
          "name": "БАДО",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.024414,
          "lon": 21.3211694
        },
        {
          "id": "5zBRYuptOZtqV4O3qp3F",
          "address": "Александар Македонски 93-53, Прилеп 7500, Македонија",
          "name": "Теписи Мардини Картал Прилеп",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.3420174,
          "lon": 21.5564813
        },
        {
          "id": "60AOErNMwyDggnuvZdzS",
          "address": "Општина Тетово, Македонија",
          "name": "Factory Möbel",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0053439,
          "lon": 20.990258
        },
        {
          "id": "62RW989wHpE5wfMf1bvo",
          "address": "CJMV+7R Струмица, Македонија",
          "name": "КИТГО Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4331994,
          "lon": 22.6446147
        },
        {
          "id": "654L6pGk6VenLTGrYeLg",
          "address": "XCXC+Q3 Скопје, Македонија",
          "name": "Вршник",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9993939,
          "lon": 21.4201393
        },
        {
          "id": "68J10N4t6luPiurbyv3m",
          "address": "Valandovska 4, Скопје 1000, Македонија",
          "name": "Стокомак",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9954171,
          "lon": 21.5098008
        },
        {
          "id": "68vB31rSxjHEEzdhRAcA",
          "address": "Облешево, Македонија",
          "name": "GALIJA :D",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8820514,
          "lon": 22.3332827
        },
        {
          "id": "6AOW48IcrGueuu4PxMPa",
          "address": "2C2Q+R4 Скопје, Македонија",
          "name": "Wedding",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0020331,
          "lon": 21.4377799
        },
        {
          "id": "6H9S3CMUwG5DSZzXcWSI",
          "address": "Маршал Тито, Кичево, Македонија",
          "name": "Dukla kicevo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5194419,
          "lon": 20.961752
        },
        {
          "id": "6PcpJkIXSo3Cij9ToObi",
          "address": "WGQ6+M4 Драчево, Македонија",
          "name": "Вајота 5",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9392257,
          "lon": 21.5103158
        },
        {
          "id": "6Sq1zZY7DwLsoxUUpaCe",
          "address": "5PMC+GX Стар Дојран, Македонија",
          "name": "ТП Нана",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1837622,
          "lon": 22.7223797
        },
        {
          "id": "6Xu82OWtb9h5LVcFEX6Z",
          "address": "P5QR+GX Штип, Македонија",
          "name": "Застава",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.7388381,
          "lon": 22.1924481
        },
        {
          "id": "6YxtFy5daYuHynxAX6SL",
          "address": "2CFH+WF Скопје, Македонија",
          "name": "SporteX Shoes",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0248036,
          "lon": 21.4286962
        },
        {
          "id": "6f6v7m4ccdI4Z6GQ2YOa",
          "address": "P5PQ+77 Штип, Македонија",
          "name": "ХИТ Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7356982,
          "lon": 22.1881355
        },
        {
          "id": "6gFhgN9kNagec6b3RUMP",
          "address": "288V+4M Битола, Македонија",
          "name": "АН-ФИ Мебел",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.0153164,
          "lon": 21.3442377
        },
        {
          "id": "6jOUmooZaNMZL7s9pGPK",
          "address": "Тетово 1220, Македонија",
          "name": "Univerzal Auto Parts",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 42.0015283,
          "lon": 20.995741
        },
        {
          "id": "6kZkk8LsRyD75BWbgm8f",
          "address": "295C+25 Скопје, Македонија",
          "name": "Reptil",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0075655,
          "lon": 21.3704929
        },
        {
          "id": "6uXdo37lbHPNBjzDOqfP",
          "address": "Сава Ковачевиќ 27, Скопје 1000, Македонија",
          "name": "Гранап",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9761657,
          "lon": 21.4447803
        },
        {
          "id": "6vhkI1ngc2T6o8z3bDm4",
          "address": "Q622+22 Штип, Македонија",
          "name": "Џани",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.7500298,
          "lon": 22.2000454
        },
        {
          "id": "6yUnQqDlRSKRViudIeBN",
          "address": "P5PX+WQ Штип, Македонија",
          "name": "ХИТ Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7373008,
          "lon": 22.1994144
        },
        {
          "id": "74zZKr0QDsdgC0nea5rq",
          "address": "Булевар Словенија, Скопје 1000, Македонија",
          "name": "Jisk",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0243633,
          "lon": 21.4285475
        },
        {
          "id": "75XFCkWyX1ikW1LtDsQe",
          "address": "WC96+65 Кочани, Македонија",
          "name": "Hipo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.918086,
          "lon": 22.4103982
        },
        {
          "id": "76AVNm6dwB90eGARnmmp",
          "address": "4-ти Јули 230, Кичево, Македонија",
          "name": "Maxi Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5083266,
          "lon": 20.9521843
        },
        {
          "id": "7Aqz1XfiKkw6khMrWolE",
          "address": "Октомвриска Револуција 34, Куманово, Македонија",
          "name": "Elida",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1328773,
          "lon": 21.7283162
        },
        {
          "id": "7BHJAeaKO6gJibfn5vKr",
          "address": "Врбенски Пат, Маврови Анови, Македонија",
          "name": "Pomahop Kom",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7020962,
          "lon": 20.7576254
        },
        {
          "id": "7Gd8ezSwmm4tgr80cAwB",
          "address": "P5PR+QX Штип, Македонија",
          "name": "Венеција",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.7369288,
          "lon": 22.1924643
        },
        {
          "id": "7HSmJyseqGNWDPhl5pna",
          "address": "WC96+66 Кочани, Македонија",
          "name": "Просветно Дело",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.918078,
          "lon": 22.4105538
        },
        {
          "id": "7Ipfa9NGR5gBEiyS3bGs",
          "address": "Прохор Пчињски 29-13, Скопје 1000, Македонија",
          "name": "Whole sale?",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0040289,
          "lon": 21.4360278
        },
        {
          "id": "7JM4InghZA6ZRPVPMenL",
          "address": "WGPF+R6 Драчево, Македонија",
          "name": "Вајота 2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9370886,
          "lon": 21.5230194
        },
        {
          "id": "7PIsXSn4BtFOX5VaKf4V",
          "address": "XCWH+H3 Скопје, Македонија",
          "name": "Тинекс центар 2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9964763,
          "lon": 21.4276669
        },
        {
          "id": "7cZvyaL4iqd3JcfrZWe4",
          "address": "Покриена Чаршија 119, Скопје 1000, Македонија",
          "name": "Wedding",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0022128,
          "lon": 21.4378913
        },
        {
          "id": "7drbuWXz9qxYeNVPR8zG",
          "address": "Македонија",
          "name": "Солун 53",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.193732,
          "lon": 22.7151947
        },
        {
          "id": "7koS63kk3F9FKX1duUNO",
          "address": "Питу Гули 1, Охрид, Македонија",
          "name": "Zobi",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1238461,
          "lon": 20.8122323
        },
        {
          "id": "7kqKMTu3dCjvleGe4ihJ",
          "address": "Украинска, Кочани, Македонија",
          "name": "Top bazar kocani",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9035531,
          "lon": 22.3865111
        },
        {
          "id": "7pFmJ7Pdo5GEHpZAsZrX",
          "address": "3F52+4M Радишани, Македонија",
          "name": "Стокомак",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0577735,
          "lon": 21.4516577
        },
        {
          "id": "7vM0ePAdZkvVr71WfbUi",
          "address": "22-ри Октомври 10, Радовиш 2420, Македонија",
          "name": "Kit Go",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.635403,
          "lon": 22.466431
        },
        {
          "id": "7vsfD29izDh8sb21qu7J",
          "address": "Врапчиште, Македонија",
          "name": "IDEAL",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8411753,
          "lon": 20.8857735
        },
        {
          "id": "7wa84G47MWVtXVKP5d5A",
          "address": "Цар Самоил 61, Охрид 6000, Македонија",
          "name": "Tron",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.1123985,
          "lon": 20.7950455
        },
        {
          "id": "80WeZWtftodK6DPLHq6f",
          "address": "2C8V+Q8 Скопје, Македонија",
          "name": "Три Трговца",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0169931,
          "lon": 21.443321
        },
        {
          "id": "85awJe21I8NoRbXqYWfH",
          "address": "Чаир, Скопје 1000, Македонија",
          "name": "Javä",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9997967,
          "lon": 21.4390916
        },
        {
          "id": "8A5OKHPfeSq9F8C7JkH6",
          "address": "R1107, Ваташа, Македонија",
          "name": "Mebel Vi",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.4224188,
          "lon": 22.0150608
        },
        {
          "id": "8FJqbqCLYpgFTu4b8P5U",
          "address": "Радовиш, Македонија",
          "name": "Kit Go",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.6393152,
          "lon": 22.4631378
        },
        {
          "id": "8IKwYCuz0GQxnv1YwLIC",
          "address": "Митрополит Теодосиј Гoлоганов 51, Скопје 1000, Македонија",
          "name": "Веро 5",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9948735,
          "lon": 21.4207815
        },
        {
          "id": "8WTIo2wJZlG5yn8cYhWU",
          "address": "Васил Ѓоргов 19, Скопје 1000, Македонија",
          "name": "Тинекс",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9929149,
          "lon": 21.4199718
        },
        {
          "id": "8kWafsuDnRYLhy64VzGX",
          "address": "Branko Bogdanski - Gucman 184-186, Kumanovë, Македонија",
          "name": "Paket Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1210556,
          "lon": 21.7334993
        },
        {
          "id": "8lHt4QLlzjZLmRQJfCot",
          "address": "4RCC+MW Охрид, Македонија",
          "name": "Don Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.121722,
          "lon": 20.8223449
        },
        {
          "id": "8mOihUtJBjEE0P7D4C94",
          "address": "Sveti Kliment Ohridski, Охрид, Македонија",
          "name": "Mat star",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.1169256,
          "lon": 20.801193
        },
        {
          "id": "8no2WgUdl9XSOwRY0sWC",
          "address": "Булевар Србија, Тетово 1220, Македонија",
          "name": "JYSK",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9990785,
          "lon": 20.9589237
        },
        {
          "id": "8poWqKIUb2r1UKBq6Aqh",
          "address": "Р1301 47, Охрид, Македонија",
          "name": "Жито леб",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.112055,
          "lon": 20.8084947
        },
        {
          "id": "8zpdSgPQFxTUJAyEzbuh",
          "address": "32P7+49 Ресен, Македонија",
          "name": "Мицале",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0852775,
          "lon": 21.0133908
        },
        {
          "id": "9124YhHTsnovgtDouQ89",
          "address": "Едвард Кардељ, Кавадарци, Македонија",
          "name": "Dijana",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4413948,
          "lon": 22.0106513
        },
        {
          "id": "91DD2pBhRtU0AzbCMqFH",
          "address": "Тодор Коларов, Штип 2000, Македонија",
          "name": "КИТ-ГО",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7354588,
          "lon": 22.198854
        },
        {
          "id": "94LVOMpZjM4hue1BUpQv",
          "address": "Трајко Николоски 19, Прилеп, Македонија",
          "name": "Aliansa",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3384652,
          "lon": 21.5400419
        },
        {
          "id": "9Bf5M2D5MHVP8L4keDwA",
          "address": "XCGQ+9C Скопје, Македонија",
          "name": "Тобако Томи",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9758834,
          "lon": 21.4385402
        },
        {
          "id": "9CdF6scsp1OASKrSPEcJ",
          "address": "Тетово 1220, Македонија",
          "name": "Баукон Бауцентар",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9916843,
          "lon": 20.9567958
        },
        {
          "id": "9DJGBtLDq4Jw7fq9hxy3",
          "address": "XCW5+WC Скопје, Македонија",
          "name": "Рептил",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9972875,
          "lon": 21.4085105
        },
        {
          "id": "9KfYCxRP4iIi3b030iD8",
          "address": "4R87+VQ Охрид, Македонија",
          "name": "ВИПС",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.117125,
          "lon": 20.8144718
        },
        {
          "id": "9PiGnJOWX7XQXN5Clj1c",
          "address": "Браќа Миладиновци 1220, Тетово 1220, Македонија",
          "name": "продавница",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.993755,
          "lon": 20.9786298
        },
        {
          "id": "9X51hpkcenDi39FG0Mta",
          "address": "Иво Лола Рибар 1220, Тетово 1200, Македонија",
          "name": "SHINE by Nurana",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0108691,
          "lon": 20.9665795
        },
        {
          "id": "9svEcojNwLV8IwOKwNP8",
          "address": "4PCJ+3P Куманово, Македонија",
          "name": "Super Srk",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1202041,
          "lon": 21.7318363
        },
        {
          "id": "9ub0AEinQODGBpOhXoi4",
          "address": "СИСТИНА, Скопје 1000, Македонија",
          "name": "Симфони Солутионс",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0140565,
          "lon": 21.4044861
        },
        {
          "id": "9wl0ve0Emuu33L3xPQF2",
          "address": "Браќа Миладиновци 1220, Тетово 1220, Македонија",
          "name": "G8",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9947408,
          "lon": 20.9810165
        },
        {
          "id": "9zsRCla6If4DFsmlHuFz",
          "address": "4R66+J9 Охрид, Македонија",
          "name": "Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1115443,
          "lon": 20.8109391
        },
        {
          "id": "9zt07dJfmuFtcu9maBdq",
          "address": "Lazar Tanev, Скопје 1000, Македонија",
          "name": "Burek",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0007979,
          "lon": 21.4369355
        },
        {
          "id": "A5EC0rTNUc6czyp329bs",
          "address": "Неименуван пат, Скопје 1000, Македонија",
          "name": "motocentar",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.9667911,
          "lon": 21.4673189
        },
        {
          "id": "A9Y0lWh9MJhQJwR5weqZ",
          "address": "JFP5+5WC, Радовиш, Македонија",
          "name": "Tire store and repair",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.636797,
          "lon": 22.460381
        },
        {
          "id": "ACgyq3NMz43SXtAfY8JF",
          "address": "XQ8G+R3 Делчево, Македонија",
          "name": "Кит-Го Супермаркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9670758,
          "lon": 22.775244
        },
        {
          "id": "AFpuL58bf8cozzVskmiJ",
          "address": "Коле Неделковски 17, Ресен, Македонија",
          "name": "Пазар Ресен",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0867663,
          "lon": 21.0129214
        },
        {
          "id": "AKHg2gUoeCMDt0kttZk2",
          "address": "Општина Штип, Македонија",
          "name": "Текома Магацин",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7472866,
          "lon": 22.1864366
        },
        {
          "id": "APXn2mLktk60E3Im7oG3",
          "address": "294C+VP Скопје, Македонија",
          "name": "Алберто",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0071939,
          "lon": 21.371862
        },
        {
          "id": "ARe9YsA7PAfrjTQrgwAC",
          "address": "7-ми Ноември, Охрид, Македонија",
          "name": "Misa",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1223075,
          "lon": 20.8104074
        },
        {
          "id": "AUMJXhImN84BHmNRT0dO",
          "address": "Македонско Косовска Бригада, Скопје 1000, Македонија",
          "name": "Sportska Oprema",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 42.0243064,
          "lon": 21.4289035
        },
        {
          "id": "AVsR57zoeON7g4Cf6sJu",
          "address": "Пресека 79-69, Скопје 1000, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0022775,
          "lon": 21.3762625
        },
        {
          "id": "AZE1OBRnd9aYXTmjwkvQ",
          "address": "XCQH+H8 Скопје, Македонија",
          "name": "Кам Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.988882,
          "lon": 21.4282537
        },
        {
          "id": "AaF8bakK2cbFIKR6rzOm",
          "address": "Радовиш, Македонија",
          "name": "SETEC",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.6309983,
          "lon": 22.4613837
        },
        {
          "id": "AdagDpxCuCHEQJ56AD7O",
          "address": "Свети Наум Охридски 2a, Скопје 1000, Македонија",
          "name": "Market Polo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9867649,
          "lon": 21.4306785
        },
        {
          "id": "AlLRfhN6fx6jJvxtlL72",
          "address": "Востаничка 94-124, Скопје 1000, Македонија",
          "name": "Кам Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9810056,
          "lon": 21.4323628
        },
        {
          "id": "AliE3ZhEpdONqI0gRULy",
          "address": "Ресен, Македонија",
          "name": "Avtodelovi",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.0886134,
          "lon": 21.0141309
        },
        {
          "id": "BB0i2txmogL7VqTDgoqv",
          "address": "P5QV+52 Штип, Македонија",
          "name": "Anhoch",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.7379632,
          "lon": 22.1926143
        },
        {
          "id": "BFFrEasxR6eKHI1xLpE2",
          "address": "5 Та Партиска, Штип 2000, Македонија",
          "name": "Супер - Кид Го",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7498225,
          "lon": 22.2006562
        },
        {
          "id": "BJAX9RGEfrhGWZtbzCGq",
          "address": "Манапо 3, Скопје 1000, Македонија",
          "name": "Vero",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0065872,
          "lon": 21.393054
        },
        {
          "id": "BLaohnd7iPYe6itrcgWa",
          "address": "Делчево, Македонија",
          "name": "Avto delovi",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.9651622,
          "lon": 22.7713345
        },
        {
          "id": "BawLis1IoF9ZdNK4eaCk",
          "address": "Ѓорче Петров 19, Скопје 1000, Македонија",
          "name": "Тинекс Ѓорче Петров",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0070862,
          "lon": 21.3634616
        },
        {
          "id": "BdlKl9Rj1wm0DHodftoD",
          "address": "102 111, Скопје 1000, Македонија",
          "name": "Hedi’s Market 657",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9947806,
          "lon": 21.5045452
        },
        {
          "id": "Bi1hGOiOw3Qe2lgHSYt4",
          "address": "Гоце Делчев 109, Охрид 6000, Македонија",
          "name": "A1",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1173927,
          "lon": 20.7956966
        },
        {
          "id": "Bje1Bh4ehtdXzIrYsJOf",
          "address": "Даме Груев, Охрид, Македонија",
          "name": "Stefano Boutique",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1173471,
          "lon": 20.8020996
        },
        {
          "id": "BlaZB8fGyUxPeIAoOf4d",
          "address": "Даме Груев 5, Скопје 1000, Македонија",
          "name": "Pekara Bageti",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9924211,
          "lon": 21.4292661
        },
        {
          "id": "Bn59fyiO7XyeUG3KHM31",
          "address": "Тетово, Македонија",
          "name": "БЕРО - ЖАМБО",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9991961,
          "lon": 20.9583245
        },
        {
          "id": "BoIlJXgEexvWOQntUwJh",
          "address": "XCRM+28 Скопје, Македонија",
          "name": "Kalina",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9900313,
          "lon": 21.4333355
        },
        {
          "id": "BqlpcawiJ5EiuKoYIv1n",
          "address": "Metodi Patče 10, Охрид 6000, Македонија",
          "name": "Atelier Dolents",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.112488,
          "lon": 20.797328
        },
        {
          "id": "ByQkZinnmJVXXhckxVBB",
          "address": "Атанас Бабата, Скопје 1000, Македонија",
          "name": "Mat star",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0035324,
          "lon": 21.4374598
        },
        {
          "id": "CFx47X8tSC4TfkOy6BZq",
          "address": "2CFH+PM Скопје, Македонија",
          "name": "LC Waikiki Outlet",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0242658,
          "lon": 21.4291553
        },
        {
          "id": "CKsqqwVdB96tm4BUrywc",
          "address": "2958+49 Скопје, Македонија",
          "name": "Kam Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0077722,
          "lon": 21.3659086
        },
        {
          "id": "CLEDnPZeWTAwntVuwsBl",
          "address": "28JM+G8 Битола, Македонија",
          "name": "GG Computers",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.0313185,
          "lon": 21.3332866
        },
        {
          "id": "CQIAe0FT5uygIrOL5rp1",
          "address": "Кеј 8 ми Ноември 24, Струга 6330, Македонија",
          "name": "Балкопром",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1815124,
          "lon": 20.6788926
        },
        {
          "id": "Cq4zWKNjHYN8s14LUxUc",
          "address": "4P9J+FM Куманово, Македонија",
          "name": "Kima kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1186471,
          "lon": 21.7316379
        },
        {
          "id": "D4A4KkK4NnUSnBBvudJx",
          "address": "Партизанска 3-1, Охрид 6000, Македонија",
          "name": "Вегера",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1132188,
          "lon": 20.8012709
        },
        {
          "id": "D5rP8VJfPjFmqQLrKtXu",
          "address": "Ѓоре Ѓоревски, Скопје, Македонија",
          "name": "Жито Лукс",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.061731,
          "lon": 21.4506986
        },
        {
          "id": "D8WsDWwOwixBD7Oq9nq1",
          "address": "R1107, Кавадарци, Македонија",
          "name": "ИП Дизајн Студио",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.4453875,
          "lon": 22.0055509
        },
        {
          "id": "D9FGYPV5dpyifR00YJRh",
          "address": "Сараќино, Македонија",
          "name": "tali mobel",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.9865554,
          "lon": 21.0382924
        },
        {
          "id": "DAIxkH4zXlCbesZfDK0T",
          "address": "Ангел Динев 1, Скопје 1000, Македонија",
          "name": "Kam market",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0043208,
          "lon": 21.3732237
        },
        {
          "id": "DAuGlsZ9YtBCbNnchsS4",
          "address": "XFJG+23 Скопје, Македонија",
          "name": "Рептил Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9801204,
          "lon": 21.4752382
        },
        {
          "id": "DBQUwp5M2nFyzkdjNaPe",
          "address": "XCVF+WR Скопје, Македонија",
          "name": "Pastel",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9947907,
          "lon": 21.4245297
        },
        {
          "id": "DC9zVGTKp3BJdbnekZM5",
          "address": "Илинден, Прилеп 7500, Македонија",
          "name": "Cool",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.3462577,
          "lon": 21.5548907
        },
        {
          "id": "DN1MGxgLfk6By2DmYkyl",
          "address": "XCRH+V3 Скопје, Македонија",
          "name": "Healthy food by Zegin",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.992184,
          "lon": 21.4277103
        },
        {
          "id": "DPo3EqSgiWEe6H1pvwOm",
          "address": "Питу Гули 396-402, Охрид, Македонија",
          "name": "Marlbopo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1172658,
          "lon": 20.8143305
        },
        {
          "id": "DQzIlasww22jvVitOVjO",
          "address": "Неименуван пат, Скопје 1000, Македонија",
          "name": "digital foto TIHO",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 42.0075608,
          "lon": 21.3635827
        },
        {
          "id": "DYJdf7AUdp4t0q9vQerO",
          "address": "Студентска 27, Битола 7000, Македонија",
          "name": "ШИК",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0235893,
          "lon": 21.3251151
        },
        {
          "id": "Dsi6HxkF6lh97MRHJnrI",
          "address": "P402, Скопје 1060, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0000224,
          "lon": 21.3268682
        },
        {
          "id": "Dv9WvoD0MBwjmwqJCbcP",
          "address": "2G66+G5 Ченто, Македонија",
          "name": "Рептил",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.011324,
          "lon": 21.5104508
        },
        {
          "id": "Dx1Stsqa6m6BggJaOiV6",
          "address": "Булевар Македонија, Скопје 1000, Македонија",
          "name": "Рамстор",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9919017,
          "lon": 21.4266878
        },
        {
          "id": "E0Tx1lZcTMctzdmpBqfx",
          "address": "A2 86, Тетово 1200, Македонија",
          "name": "Midpoint",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9925841,
          "lon": 20.9601059
        },
        {
          "id": "E35xkMXgjHO8XS0iXdR8",
          "address": "C2F7+3W Ваташа, Македонија",
          "name": "Dijana",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4227366,
          "lon": 22.0148515
        },
        {
          "id": "E5fM4RKqXrrYRUL8oh3Y",
          "address": "Карпош Војвода 59, Охрид 6000, Македонија",
          "name": "Bum",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1132277,
          "lon": 20.8161651
        },
        {
          "id": "E6td03LjvnDKQRIO5bee",
          "address": "Општина Желино, Македонија",
          "name": "Јатас - Енза Хоум",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.9941745,
          "lon": 21.0272251
        },
        {
          "id": "E9cSo01600QvEEqy5Gn7",
          "address": "Крива Паланка, Македонија",
          "name": "Antiva k.palamka",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.2051708,
          "lon": 22.3354896
        },
        {
          "id": "ERboyVjV9XgkiY8x6DrA",
          "address": "Михаил Чаков 5, Скопје 1000, Македонија",
          "name": "KAM",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9817349,
          "lon": 21.4439477
        },
        {
          "id": "ETAN0ruxfHxrFYIRQm7B",
          "address": "Индустриска Зона, Струга, Македонија",
          "name": "Eurosalon",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1845082,
          "lon": 20.6749179
        },
        {
          "id": "EVmCUHmCThXn0pbdP1Wz",
          "address": "Маврово, Македонија",
          "name": "Лазе",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.6504797,
          "lon": 20.7362141
        },
        {
          "id": "Ee7vcWdByd7nAn53wBl7",
          "address": "Кеј 13-ти Ноември, Скопје 1000, Македонија",
          "name": "Bücherbuden",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9943277,
          "lon": 21.4398271
        },
        {
          "id": "EgxRV2lmd0Rd3Ooj8KiM",
          "address": "Општина Тетово, Македонија",
          "name": "Fashion Brand",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0045686,
          "lon": 20.9898817
        },
        {
          "id": "ElKfYarWM1DJ0Y9JPPuS",
          "address": "JFM7+MR Радовиш, Македонија",
          "name": "Makedonija (Sus mus)",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.63414,
          "lon": 22.464603
        },
        {
          "id": "EnaZ8IWpqnPVFfr24S74",
          "address": "Струмица, Македонија",
          "name": "Neotek Systems",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4374154,
          "lon": 22.655681
        },
        {
          "id": "EqEDeqp3FWaI3YKimNYf",
          "address": "Булевар Туристичка 69-57, Охрид, Македонија",
          "name": "Discount",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1158272,
          "lon": 20.8046409
        },
        {
          "id": "EsqJAH9COwK47IOfFtqW",
          "address": "A3 19, Македонска Каменица, Македонија",
          "name": "Paket Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0245995,
          "lon": 22.5886559
        },
        {
          "id": "Ewd7LtuMf907pCHg9ARF",
          "address": "8HV2+Q6 Прилеп, Македонија",
          "name": "Technomarket",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.3444464,
          "lon": 21.5505245
        },
        {
          "id": "EyvM3P9fNfsHjHffkgJh",
          "address": "Маршал Тито 64, Стар Дојран, Македонија",
          "name": "Бутик Форти",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1838144,
          "lon": 22.7228758
        },
        {
          "id": "F5c8ffx5NNcqGc3ucODH",
          "address": "402, Vrapçishte, Македонија",
          "name": "Kiper",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8398833,
          "lon": 20.8856596
        },
        {
          "id": "F5idREOcbltLdNnj3uMH",
          "address": "Sveti Kliment Ohridski, Охрид 6000, Македонија",
          "name": "Sport reality",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.1157971,
          "lon": 20.8002866
        },
        {
          "id": "F5sAzQbATWe1MrBifLPo",
          "address": "Гоце Делчев 85-67, Прилеп 7500, Македонија",
          "name": "Јо-Ан Старс",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.3436398,
          "lon": 21.5452918
        },
        {
          "id": "FAAse2LOwRK7S4bO9F6p",
          "address": "Bulevar Makedonski Prosvetiteli, Охрид 6000, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1132251,
          "lon": 20.7999894
        },
        {
          "id": "FOCgW38epXROZJ6d0KFJ",
          "address": "Општина Крива Паланка, Македонија",
          "name": "Трајко",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.1816391,
          "lon": 22.2869626
        },
        {
          "id": "FcmLZSechzqNkY2MvTCi",
          "address": "285Q+3V Скопје, Македонија",
          "name": "Жито маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0076504,
          "lon": 21.3396463
        },
        {
          "id": "FhPRqofAQUt0tk9qcZyl",
          "address": "Општина Тетово, Македонија",
          "name": "Vasidora",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0052087,
          "lon": 20.9902985
        },
        {
          "id": "FnJFlcmbvmmKA7O5Tb5X",
          "address": "Фабрика Треска, Скопје 1000, Македонија",
          "name": "Златен Клас",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9958268,
          "lon": 21.4095619
        },
        {
          "id": "FzNhNHBtDaioOpvjqomg",
          "address": "Костурски Херои 18, Скопје 1000, Македонија",
          "name": "Staedtler",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 42.0002366,
          "lon": 21.417579
        },
        {
          "id": "G0suCDbVzABlDrDOwXbM",
          "address": "улица Дебарца 57, Скопје 1000, Македонија",
          "name": "T market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0015821,
          "lon": 21.4189761
        },
        {
          "id": "G22SmVh69C11tHhQEGAB",
          "address": "Македонска Каменица, Македонија",
          "name": "Kid Go",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0204996,
          "lon": 22.589873
        },
        {
          "id": "G7IAnqTcfjHoJK9L2CXh",
          "address": "Чаир, Скопје 1000, Македонија",
          "name": "Wedding",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.002368,
          "lon": 21.4375604
        },
        {
          "id": "GHXowWUN2id64GMRtfxV",
          "address": "P402, Скопје 1060, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9961066,
          "lon": 21.322989
        },
        {
          "id": "GTZCyUg2JBG34oL5Ssrb",
          "address": "Дане Крапчев 22, Скопје 1000, Македонија",
          "name": "Sofa Studio",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0007416,
          "lon": 21.4160039
        },
        {
          "id": "GWVANUlMcUZkV3Ooyc73",
          "address": "Републиканска, Прилеп 7500, Македонија",
          "name": "Венус",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.3460016,
          "lon": 21.5553351
        },
        {
          "id": "GbOq8XR9q1RN7H5JgYUI",
          "address": "WCF5+3X Кочани, Македонија",
          "name": "Zito Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9226323,
          "lon": 22.4098806
        },
        {
          "id": "GbrSciSEdBcjHxGgjv9c",
          "address": "Булевар Партизански Одреди 40, Скопје 1000, Македонија",
          "name": "Body line",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9990975,
          "lon": 21.4192513
        },
        {
          "id": "GlnpeD4ZEr9N362D2087",
          "address": "Општина Делчево, Македонија",
          "name": "Кит-Го Супермаркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.971385,
          "lon": 22.7774987
        },
        {
          "id": "H1VuNxstTnp4LL3wAZn5",
          "address": "Булевар Словенија 1000, Скопје 1000, Македонија",
          "name": "Kit-Go",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0244715,
          "lon": 21.4283826
        },
        {
          "id": "H3H57fO3dthRA3lDe7JY",
          "address": "28GP+HP Битола, Македонија",
          "name": "Ivet",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.0264711,
          "lon": 21.3367946
        },
        {
          "id": "HAxy1HNhunTKYq6T6dC5",
          "address": "Димитрие Чуповски 1, Скопје 1000, Македонија",
          "name": "Outdoor.MK",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.9941776,
          "lon": 21.4310902
        },
        {
          "id": "HBT2O7VslGhASyOcAgAz",
          "address": "Булевар 1-ви Мај, Битола, Македонија",
          "name": "Беком",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0320861,
          "lon": 21.3228577
        },
        {
          "id": "HJF0Dv60Ch2E3r5ouZzK",
          "address": "294C+VP Скопје, Македонија",
          "name": "Volgano",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0072166,
          "lon": 21.3717827
        },
        {
          "id": "HTuhKLu73LP1F82CYn6h",
          "address": "Радовиш, Македонија",
          "name": "NEPTUN",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.6313067,
          "lon": 22.4615934
        },
        {
          "id": "HWu0xNS4BKMhIYNrWI6t",
          "address": "Пошта 1, Булевар ВМРО, Скопје 1000, Македонија",
          "name": "Loggia",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.9982749,
          "lon": 21.4283051
        },
        {
          "id": "HlZjZ9wPqK3T2iRpv677",
          "address": "4R82+96 Охрид, Македонија",
          "name": "TOP Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1159611,
          "lon": 20.8005859
        },
        {
          "id": "Hle5oWErNqw5rKZah4oE",
          "address": "Истарска 33, Скопје 1000, Македонија",
          "name": "Sportinn",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.9911879,
          "lon": 21.4400819
        },
        {
          "id": "HqYCWj26s4ZP0aR4axIZ",
          "address": "Булевар Илинден 57, Скопје 1000, Македонија",
          "name": "Bagnotti",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0019087,
          "lon": 21.4244571
        },
        {
          "id": "HrMOM595VMpNFOt5uRJt",
          "address": "P402, Скопје 1060, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9986909,
          "lon": 21.3263168
        },
        {
          "id": "HxVSseeZ1tMgBWvxuTFf",
          "address": "Битпазарска 14-18, Скопје 1000, Македонија",
          "name": "AEN",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0006468,
          "lon": 21.4376377
        },
        {
          "id": "Hy3bs5P2mYWVNX8XFrzr",
          "address": "XCMQ+9G Скопје, Македонија",
          "name": "Бурекџилница Круна",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9834992,
          "lon": 21.4387505
        },
        {
          "id": "HyQWVkFEPRaKB5Y8peXu",
          "address": "Камењане, Македонија",
          "name": "Market Beni",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9411401,
          "lon": 20.9269285
        },
        {
          "id": "HzS3JuKerNgqCzJ6h1y7",
          "address": "Крива Паланка, Македонија",
          "name": "BE Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.201126,
          "lon": 22.3297009
        },
        {
          "id": "I0r8YJCIroKh0skWTKvf",
          "address": "293C+V4 Скопје, Македонија",
          "name": "Building 31",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0047229,
          "lon": 21.3703234
        },
        {
          "id": "I4bIscA7JGYCi4PWhVdz",
          "address": "Димитар Влахов 31, Охрид 6000, Македонија",
          "name": "Bi Ju Boutique",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1145334,
          "lon": 20.8015025
        },
        {
          "id": "I8gRUr7u7ZDpSdGpofNj",
          "address": "23-ти Октомври 34, Скопје 1000, Македонија",
          "name": "Ramstore",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9879358,
          "lon": 21.4558769
        },
        {
          "id": "IE6Kq0LihsW8TMxVnT52",
          "address": "Булевар Партизански Одреди 61, Скопје 1000, Македонија",
          "name": "Рептил",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0005257,
          "lon": 21.4121462
        },
        {
          "id": "INLKrHPTZj0bydwboNLa",
          "address": "Општина Кичево, Македонија",
          "name": "Данчо ММ",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4837841,
          "lon": 20.9236105
        },
        {
          "id": "IQ2C2VjTvf0Mkin7tk7u",
          "address": "Gogen 30, Skopie 1000, Македонија",
          "name": "ЗУР Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9720378,
          "lon": 21.4722684
        },
        {
          "id": "IZ6A7oKODkRvgYEN91UN",
          "address": "Лабуништа, Македонија",
          "name": "Бутик Сеско",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.2680881,
          "lon": 20.5964447
        },
        {
          "id": "IZVcbYthhGlChiK42xMs",
          "address": "Карпош, Скопје 1000, Македонија",
          "name": "Мода Операнди",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0034624,
          "lon": 21.3973682
        },
        {
          "id": "If0qP9lWpeqJv4ZlhXO4",
          "address": "XCVR+6Q Скопје, Македонија",
          "name": "Anhoch",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9931131,
          "lon": 21.4419882
        },
        {
          "id": "If1onXWk9QAEtRfxnbaH",
          "address": "Финска 187, Скопје, Македонија",
          "name": "Дали-Пом",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0042015,
          "lon": 21.5046482
        },
        {
          "id": "IhoODmpAdAkSxNMTfLjK",
          "address": "Кочани, Македонија",
          "name": "Комисион шишко",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.9171275,
          "lon": 22.4111346
        },
        {
          "id": "Im9yJ8W0rIHM1fpmzYFP",
          "address": "4Q9X+5J Охрид, Македонија",
          "name": "Жито Леб Bake & Cake",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1179008,
          "lon": 20.7990557
        },
        {
          "id": "IneCpYRnFNqPEykBVXor",
          "address": "Карпош, Скопје 1000, Македонија",
          "name": "Special",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0074692,
          "lon": 21.3836919
        },
        {
          "id": "Io9yZm0dfLGI0pQ1xUPl",
          "address": "Маршал Тито 145, Струмица, Македонија",
          "name": "KAM",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4308037,
          "lon": 22.6447518
        },
        {
          "id": "IwH9yFMga4CHm2U5FX66",
          "address": "Македонско Косовска Бригада, Скопје 1000, Македонија",
          "name": "LTB",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0243334,
          "lon": 21.4287553
        },
        {
          "id": "J2PaiFVkpLdhQVWOc2ht",
          "address": "Димо Хаџи Димов 61, Скопје 1000, Македонија",
          "name": "Жито Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9761625,
          "lon": 21.4384115
        },
        {
          "id": "J5IGXGbMsUAWRJLAGjKJ",
          "address": "Неименуван пат, Скопје 1000, Македонија",
          "name": "Авантгард",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0034908,
          "lon": 21.3971473
        },
        {
          "id": "JI7QoAVBezXIaRDRC4fz",
          "address": "Партизанска, Македонски Брод, Македонија",
          "name": "Лука",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.5109889,
          "lon": 21.2163587
        },
        {
          "id": "JJSOou59EnmnSVBGBB6e",
          "address": "Крива Паланка, Македонија",
          "name": "Paket Market / Пакет Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.2071017,
          "lon": 22.3361083
        },
        {
          "id": "JQWkSFEpjY61oj0EUwRa",
          "address": "4R93+67 Охрид, Македонија",
          "name": "Gorenje",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.118024,
          "lon": 20.8031555
        },
        {
          "id": "JQgnI6VP8XG1ylxIRYm3",
          "address": "Општина Врапчиште, Македонија",
          "name": "Car Parts",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.8370139,
          "lon": 20.8839449
        },
        {
          "id": "JTUTTXLgvxSNdG0RTLT9",
          "address": "Vančo Nikoleski 5, Охрид 6000, Македонија",
          "name": "Hp",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.1127071,
          "lon": 20.8049129
        },
        {
          "id": "JYitHh4re0dA32KZnXm2",
          "address": "4R57+R6 Охрид, Македонија",
          "name": "Tinex ohrid 2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1095503,
          "lon": 20.8130481
        },
        {
          "id": "JZw3nADAXEXNCjqF66RL",
          "address": "Костурски Херои 62-66, Скопје 1000, Македонија",
          "name": "Flexy flex",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.9955491,
          "lon": 21.4182042
        },
        {
          "id": "JdHewLQqaIDFHOm9OAOp",
          "address": "VW8Q+34 Свети Николе, Македонија",
          "name": "Ива",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.8652057,
          "lon": 21.9378498
        },
        {
          "id": "JemQWBH0XaFb8HK93BCq",
          "address": "Boris Kidric 3, Komuna e Shtipit 2000, Македонија",
          "name": "М-Десерт",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.7391749,
          "lon": 22.1928309
        },
        {
          "id": "JoZIgF9pRxehzhF4MkaY",
          "address": "1230, Македонија",
          "name": "Монтенегро",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7951597,
          "lon": 20.901073
        },
        {
          "id": "JpU9XWsoaqDv6mrGWrdl",
          "address": "Св. Спасо Радовишки 69, Радовиш, Македонија",
          "name": "T-Mobile",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.6386926,
          "lon": 22.4612065
        },
        {
          "id": "Jx3wdEtQV80VYV5fuFfB",
          "address": "VW7P+89 Свети Николе, Македонија",
          "name": "Астра",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8632983,
          "lon": 21.935983
        },
        {
          "id": "K1HCAyQ5KH9aHrVV1mut",
          "address": "WWXH+CW Камењане, Македонија",
          "name": "Jeta e Re",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.948539,
          "lon": 20.9297959
        },
        {
          "id": "K5IGAJGKaijZer8WE7kd",
          "address": "XCRM+CR Скопје, Македонија",
          "name": "Stokomak",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9910788,
          "lon": 21.4346069
        },
        {
          "id": "K6EXW8GefJk6YlD2BWrc",
          "address": "Демир Капија, Македонија",
          "name": "Sani",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4091129,
          "lon": 22.2420807
        },
        {
          "id": "KECHz9tFps1VF18xj7iH",
          "address": "Иван Хаџиниколов 4, Драчево, Македонија",
          "name": "Кам маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9396863,
          "lon": 21.5138463
        },
        {
          "id": "KIRsiZVT01UMWbvf1eA9",
          "address": "Питу Гули 17, Охрид, Македонија",
          "name": "Schick Komerz",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1229605,
          "lon": 20.8130997
        },
        {
          "id": "KKEWVrWsd1uxjNzx4rTJ",
          "address": "Општина Гостивар, Македонија",
          "name": "Хаџи Кемо",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8428299,
          "lon": 20.9771116
        },
        {
          "id": "KQMjlvJYiyWzLxGgRZ1G",
          "address": "XCXF+H3 Скопје, Македонија",
          "name": "Жито лев",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.998952,
          "lon": 21.4226434
        },
        {
          "id": "KVuEfTtiKxpXC4xq2ZXt",
          "address": "Илија Игески - Цветан 3, Македонски Брод, Македонија",
          "name": "Александрија",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5131208,
          "lon": 21.2162734
        },
        {
          "id": "KYvg72XPsw5Tw6VcqmZ2",
          "address": "Сремски Фронт 29-13, Штип 2000, Македонија",
          "name": "Нада Меркур",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7493514,
          "lon": 22.1995983
        },
        {
          "id": "Kbrtiudszfi7rsOhPUYp",
          "address": "Општина Тетово, Македонија",
          "name": "Il Cammino",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0051008,
          "lon": 20.9902316
        },
        {
          "id": "KgEf3tHARazSfNUXKs7y",
          "address": "PQ78+P8 Велес, Македонија",
          "name": "Pet Shop K-M br.1",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7143048,
          "lon": 21.7658016
        },
        {
          "id": "KiaedCwSjyiG4g57E7h7",
          "address": "Јане Сандански, Скопје 1000, Македонија",
          "name": "Жито Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9866616,
          "lon": 21.4675141
        },
        {
          "id": "KsOzRg44OraJXcrjfH7A",
          "address": "2C2Q+Q5 Скопје, Македонија",
          "name": "Souvenir",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 42.0019996,
          "lon": 21.4379179
        },
        {
          "id": "KsxNGQfbBhwB6Xq7a8K5",
          "address": "2C86+X2 Скопје, Македонија",
          "name": "Турбо Макс",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 42.0174581,
          "lon": 21.410016
        },
        {
          "id": "Kzb5jxIHKdobOWYaPBKv",
          "address": "2C5V+QP Скопје, Македонија",
          "name": "Auto Lider",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 42.0094924,
          "lon": 21.4443733
        },
        {
          "id": "L02STJttSrRgUk0xn9wH",
          "address": "Општина Тетово, Македонија",
          "name": "Sport Vission",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 42.0051644,
          "lon": 20.9899671
        },
        {
          "id": "L0Q1ZG1TsJsaC7OzIJfV",
          "address": "Славеј Планина, Струга, Македонија",
          "name": "Тинекс",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1810562,
          "lon": 20.680569
        },
        {
          "id": "L4TbvKmFlHz44iPazUey",
          "address": "Прилепски Бранители 25, Прилеп, Македонија",
          "name": "Футура",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3503406,
          "lon": 21.5490394
        },
        {
          "id": "L5HQuN67RZt8g7aYmJfo",
          "address": "Републиканска, Прилеп 7500, Македонија",
          "name": "Lisca",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.3459652,
          "lon": 21.5553679
        },
        {
          "id": "LAvLtbhNKJ2nHzWi0ETf",
          "address": "Генерал Михајло Апостолски 18, Штип 2000, Македонија",
          "name": "Outlet Azurro",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.7386338,
          "lon": 22.196628
        },
        {
          "id": "LDYPYkONbbN7sEzPbR4z",
          "address": "XCXP+R9 Скопје, Македонија",
          "name": "Family",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.9995838,
          "lon": 21.4359889
        },
        {
          "id": "LIRzxlSJVS4XW6pztJth",
          "address": "R1107 20, Кавадарци, Македонија",
          "name": "Prosvetno Delo",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.434227,
          "lon": 22.011622
        },
        {
          "id": "LIYKjd8z2mjvu0W2BWey",
          "address": "Bulevar Makedonski Prosvetiteli 24, Ohër, Македонија",
          "name": "Knigovez Workshop &",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.1191262,
          "lon": 20.8032179
        },
        {
          "id": "LIwRtj0PM2WgFSylr360",
          "address": "8HV2+WQ Прилеп, Македонија",
          "name": "Линеа",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.3447506,
          "lon": 21.5519021
        },
        {
          "id": "LPqFuaMNP458aH3a4B36",
          "address": "Булевар Туристичка 65, Охрид, Македонија",
          "name": "Hit",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1159454,
          "lon": 20.8043153
        },
        {
          "id": "LSZcb6OuF9ZIa8hwzUZX",
          "address": "XFP8+5X Скопје, Македонија",
          "name": "Кам Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9854287,
          "lon": 21.4674517
        },
        {
          "id": "LXAY5Hlv90UTSglxf0jq",
          "address": "Атанас Бабата, Скопје 1000, Македонија",
          "name": "Farko Kom",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0033656,
          "lon": 21.437371
        },
        {
          "id": "LZuxELwRLe1RHs97Wwvn",
          "address": "Козле 44, Скопје 1000, Македонија",
          "name": "Кам маркет Козле",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9938931,
          "lon": 21.4010606
        },
        {
          "id": "LbblPGAQYlfWaZq3TYR7",
          "address": "Димче Маленко, Охрид, Македонија",
          "name": "Bakery",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.115841,
          "lon": 20.800094
        },
        {
          "id": "LgCqYQ5H4hFLP5LHONgQ",
          "address": "VGP3+5M Виница, Македонија",
          "name": "Zito",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8853963,
          "lon": 22.5041576
        },
        {
          "id": "LjLPmwrSSWYHZut4Y53n",
          "address": "Општина Кавадарци, Македонија",
          "name": "DTS Market  Silvana & Dobri",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4394773,
          "lon": 22.0089787
        },
        {
          "id": "LmV6iF5m4DHZhB6xOKul",
          "address": "8HV2+M7 Прилеп, Македонија",
          "name": "КАМ",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3441972,
          "lon": 21.5507134
        },
        {
          "id": "LoSJTs7ne7y6pDGG4gBu",
          "address": "Орце Николов 137, Скопје 1000, Македонија",
          "name": "Вардар Мебел",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0031366,
          "lon": 21.4177879
        },
        {
          "id": "LooRgyXABE875rCSq12d",
          "address": "2949+X9 Скопје, Македонија",
          "name": "Mago Fashion",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0073933,
          "lon": 21.3684775
        },
        {
          "id": "LryeG1FgT6K5TqANttzf",
          "address": "Партизанска 48, Виница, Македонија",
          "name": "Nasev",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.881051,
          "lon": 22.5146289
        },
        {
          "id": "M5kR412PISRTjDgNbZ5z",
          "address": "Солунска 240, Битола, Македонија",
          "name": "Cacatua",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.025998,
          "lon": 21.3367782
        },
        {
          "id": "M7XyJJFp4XENzNZ8ETEQ",
          "address": "СИСТИНА, Скопје 1000, Македонија",
          "name": "Симфони солутионс",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0140565,
          "lon": 21.4044861
        },
        {
          "id": "MAzeLSGbgkD3YEpSBnZg",
          "address": "4PMF+3W Куманово, Македонија",
          "name": "City Bakery",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.1326278,
          "lon": 21.7247878
        },
        {
          "id": "MENABs4bX2ylA8pa25XO",
          "address": "C2P6+3G Кавадарци, Македонија",
          "name": "T-Mobile",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.4351343,
          "lon": 22.0113044
        },
        {
          "id": "MNUYtutgIR2Qn2bXdKbI",
          "address": "2949+XC Скопје, Македонија",
          "name": "Joli Komerc",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0074802,
          "lon": 21.3685181
        },
        {
          "id": "MP7V0AWTJMyQyXNt8CvB",
          "address": "Sveti Kliment Ohridski, Охрид 6000, Македонија",
          "name": "Ricci",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1153213,
          "lon": 20.8002203
        },
        {
          "id": "MPcmdmojHEYb0EYlfj1K",
          "address": "Сутјеска 54, Штип 2000, Македонија",
          "name": "Ребус",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.7463414,
          "lon": 22.1948806
        },
        {
          "id": "MZC6TsI4Xia6gbsxulf2",
          "address": "2C38+C4 Скопје, Македонија",
          "name": "Рептил маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0035081,
          "lon": 21.4152599
        },
        {
          "id": "MeH16E8sbN33mCTWFrIt",
          "address": "Стив Наумов 24, Охрид, Македонија",
          "name": "KAM Supermarket",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1191635,
          "lon": 20.7956734
        },
        {
          "id": "MiZagWd0oP5zjY3KPIJy",
          "address": "Димитрие Чуповски 5, Скопје 1000, Македонија",
          "name": "Жито леб",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9948126,
          "lon": 21.4302935
        },
        {
          "id": "MqfdwerCbIJKbKS7CLMj",
          "address": "Ѓорче Петров 20, Охрид, Македонија",
          "name": "Lazaro Feshn",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1175868,
          "lon": 20.810725
        },
        {
          "id": "N0It188pLa4WtUHnShhN",
          "address": "Македонија",
          "name": "Mapket",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.355238,
          "lon": 20.6098044
        },
        {
          "id": "N4w62dteEHALlY7kzKWY",
          "address": "A4, Струмица, Македонија",
          "name": "Technomarket",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4409897,
          "lon": 22.6485615
        },
        {
          "id": "N58pqEu27ZRQ6CAeKwsj",
          "address": "Ѓорѓи Абаџиев 6, Скопје 1000, Македонија",
          "name": "XMKD",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.990063,
          "lon": 21.4176645
        },
        {
          "id": "NB8DRD2QOYDgtRcNqxIj",
          "address": "Орце Николов 86, Скопје 1000, Македонија",
          "name": "Спачва",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0002017,
          "lon": 21.4251226
        },
        {
          "id": "NHy3EQ9WlqmVHDmaKm6L",
          "address": "Сремски Фронт 29-13, Штип 2000, Македонија",
          "name": "КАМ маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7492776,
          "lon": 22.1993793
        },
        {
          "id": "NTD3Ezel1k0fUbfGxaSd",
          "address": "Камењане, Македонија",
          "name": "Kontabilisti",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9408176,
          "lon": 20.9270668
        },
        {
          "id": "Nb5Cz7g5TZZWj3LvbdL1",
          "address": "4Q7V+8H Охрид, Македонија",
          "name": "Papa’s",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1132684,
          "lon": 20.7939656
        },
        {
          "id": "NcFpRjn2Z8eaWA9XNttL",
          "address": "5MJJ+C7 Струга, Македонија",
          "name": "Tinex struga 1",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1810013,
          "lon": 20.6807065
        },
        {
          "id": "NgmS4RCaYnkwlPRkkj9l",
          "address": "4Q7V+3Q Охрид, Македонија",
          "name": "Souvenir",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.1126505,
          "lon": 20.7943931
        },
        {
          "id": "NqR3eJiatRvbXssXL6H3",
          "address": "4PJC+46 Куманово, Македонија",
          "name": "RAM Store",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1303546,
          "lon": 21.7205675
        },
        {
          "id": "Ny2VegnxZdbGj9IQf1qW",
          "address": "Питу Гули 46, Скопје 1000, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9903083,
          "lon": 21.411176
        },
        {
          "id": "OEwaHWQVv2gFNb32RIko",
          "address": "JFM7+QV Радовиш, Македонија",
          "name": "Makom",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.634405,
          "lon": 22.46471
        },
        {
          "id": "OG3adflYXVximrLYwAxi",
          "address": "Милан Марковиќ 26, Скопје 1000, Македонија",
          "name": "Спаткарница Канела Прима",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9930311,
          "lon": 21.4025784
        },
        {
          "id": "Oada4tYVBwptr9udTLtq",
          "address": "Канео Плаошник Патека, Охрид 6000, Македонија",
          "name": "Souvenir",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.1132966,
          "lon": 20.7915441
        },
        {
          "id": "OapI9V8qNdUzG3tkjB4O",
          "address": "JNA, Гостивар 1230, Македонија",
          "name": "Interkomerc",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.7949607,
          "lon": 20.8983464
        },
        {
          "id": "ObPq2vpoCMNAb1SY3Eax",
          "address": "VGP2+J5 Виница, Македонија",
          "name": "Mak Progres",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8866184,
          "lon": 22.5004347
        },
        {
          "id": "Om0SB6o4yvpml5oZ41ZY",
          "address": "2C4Q+J3 Скопје, Македонија",
          "name": "Trend light",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0065733,
          "lon": 21.437691
        },
        {
          "id": "Om9T3nnHnb6BluvwQD1T",
          "address": "P402, Скопје 1060, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9997513,
          "lon": 21.3276407
        },
        {
          "id": "P1aRpy4uvuUdP3Uq5q98",
          "address": "Ilinden 19, Prilep 7500, Македонија",
          "name": "Lukas Shoes",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.3460834,
          "lon": 21.5552789
        },
        {
          "id": "P5weGd47X7jT33lQd1tm",
          "address": "CJJX+35 Струмица, Македонија",
          "name": "Kis 2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4302406,
          "lon": 22.647951
        },
        {
          "id": "PHB2UOFIiG3O9uDgdYu1",
          "address": "2CFH+WH Скопје, Македонија",
          "name": "Sport Vision Outlet",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 42.0247718,
          "lon": 21.428992
        },
        {
          "id": "PLo6JRvECEFRdHNYO3AH",
          "address": "Чаир, Скопје 1000, Македонија",
          "name": "DM",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.993327,
          "lon": 21.441556
        },
        {
          "id": "PMhcYdDmHOCRH0IzAhSr",
          "address": "XCGQ+58 Скопје, Македонија",
          "name": "Томи",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9754208,
          "lon": 21.4382827
        },
        {
          "id": "Pb2Uti6o4CpYQbYkbwgG",
          "address": "Општина Тетово, Македонија",
          "name": "LC Wakiki",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.004359,
          "lon": 20.9897364
        },
        {
          "id": "Pg20YsIfyi2zlonWkYcg",
          "address": "Битпазарска 88, Скопје 1000, Македонија",
          "name": "Globay",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0019345,
          "lon": 21.4384109
        },
        {
          "id": "PhkH8kf4lD3DKeojx53S",
          "address": "Перо Чичо, Куманово, Македонија",
          "name": "Тинекс",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1330452,
          "lon": 21.7350929
        },
        {
          "id": "PhsOlIEuRIUxsYKerGSV",
          "address": "Делчево, Македонија",
          "name": "Коста груп",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9680062,
          "lon": 22.7799853
        },
        {
          "id": "PkWoouvhPPGMX97nj2aM",
          "address": "Општина Боговиње, Македонија",
          "name": "Liza market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9428516,
          "lon": 20.8711999
        },
        {
          "id": "PrHLMxFPTnrlFXbpLMj4",
          "address": "XCVM+RG Скопје, Македонија",
          "name": "Anhoch PC Market",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9945784,
          "lon": 21.4338471
        },
        {
          "id": "PsO9gSKjziqN3PK43xvz",
          "address": "Бул. Свети Климент Охридски 23, Скопје 1000, Македонија",
          "name": "Matiza",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9958449,
          "lon": 21.4252808
        },
        {
          "id": "Pt3A6mG5ZyDWOPSf3RnH",
          "address": "5MJH+32 Струга, Македонија",
          "name": "Tinex struga",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.180146,
          "lon": 20.6775173
        },
        {
          "id": "Q2sEzLTrRD3slg1hTAs5",
          "address": "4-ти Јули 230, Кичево, Македонија",
          "name": "Neptun",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.5084407,
          "lon": 20.9521889
        },
        {
          "id": "Q7lT1oHhuNM9IpcgWGSN",
          "address": "ул.39, Куманово, Македонија",
          "name": "Stef kri kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1576319,
          "lon": 21.7348131
        },
        {
          "id": "QG0lYfivuhpS5LrFjuLm",
          "address": "8HV3+QQ Прилеп, Македонија",
          "name": "Sport Reality",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.3444321,
          "lon": 21.5543877
        },
        {
          "id": "QKeMpgG8DB8IsE8tyQgz",
          "address": "4Q7X+25 Охрид, Македонија",
          "name": "Souvenir",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.1125362,
          "lon": 20.7979908
        },
        {
          "id": "QLabfZjZ6MU9YlNu1jLX",
          "address": "2CFP+HV Скопје, Македонија",
          "name": "Стоко Мак",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0239903,
          "lon": 21.4371972
        },
        {
          "id": "QVsLPmAtRWaHadINK3Fh",
          "address": "4R57+V4 Охрид, Македонија",
          "name": "Discount Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1096865,
          "lon": 20.8127862
        },
        {
          "id": "QbyUsrTLrVEENUQPJ36X",
          "address": "Карпош, Скопје 1000, Македонија",
          "name": "КОСМО Тинекс",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0034268,
          "lon": 21.3989021
        },
        {
          "id": "QlkShdPuS12fGyD6dT4V",
          "address": "7-ми Ноември, Охрид 6000, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.12286,
          "lon": 20.81112
        },
        {
          "id": "QmU5NFUHAMyIKwQubsbL",
          "address": "2C3P+VV Скопје, Македонија",
          "name": "Whole sale (?)",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0046562,
          "lon": 21.4371432
        },
        {
          "id": "Qrlcma1CndcOjR6WEXHP",
          "address": "Штип, Македонија",
          "name": "БоБи",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7344453,
          "lon": 22.1941597
        },
        {
          "id": "Qt70krfUEv3SIJl5JNII",
          "address": "Општина Тетово, Македонија",
          "name": "Alenti Fashion",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0051383,
          "lon": 20.990093
        },
        {
          "id": "QtRlvgkgnUGIU8cMo13F",
          "address": "Гоце Делчев 166, Прилеп, Македонија",
          "name": "Lukas Urban Store",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.3462826,
          "lon": 21.5541364
        },
        {
          "id": "Qww4mVUclQZzMChtmxsd",
          "address": "Јанчиште, Македонија",
          "name": "heppi dmj",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0530902,
          "lon": 21.1170108
        },
        {
          "id": "R6sfbOJiG8GcnTGkG2a5",
          "address": "Рудничка 6250, Кичево 6250, Македонија",
          "name": "ЖИ-СИ",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.5077833,
          "lon": 20.9586359
        },
        {
          "id": "RCJJhCA93gwIRBYZBjhd",
          "address": "4PG9+VV Куманово, Македонија",
          "name": "Стокомак",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1272126,
          "lon": 21.7197153
        },
        {
          "id": "RDux0HOZaMrDXjhytejD",
          "address": "XCV8+79 Скопје, Македонија",
          "name": "Gramofon Vinyl Macedonia Makedonija",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.993198,
          "lon": 21.4159259
        },
        {
          "id": "RG3YeNZV6pf2d9KANQJo",
          "address": "Драга Стојановска 1, Скопје 1000, Македонија",
          "name": "ДА МИ",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9858897,
          "lon": 21.4360635
        },
        {
          "id": "RI1i64vuaOu4oqVqTULg",
          "address": "XCJR+X4 Скопје, Македонија",
          "name": "Веро",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9823773,
          "lon": 21.4403011
        },
        {
          "id": "RMjnvbrUdXQxz6yjSkJj",
          "address": "XCVM+PQ Скопје, Македонија",
          "name": "Фокабо Фешн",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9942847,
          "lon": 21.4344311
        },
        {
          "id": "RNO7tuCLnNoJidOhvjKl",
          "address": "Абас Емин 28, Охрид, Македонија",
          "name": "Кинг Бурек",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1183281,
          "lon": 20.79959
        },
        {
          "id": "Rhvcg8jpccnOoEmKQ9ts",
          "address": "Општина Тетово, Македонија",
          "name": "Eni Sweet Shop",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.005498,
          "lon": 20.9901972
        },
        {
          "id": "RmxRUnP2HMN4T0GOX8mj",
          "address": "X8XG+34 Скопје, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.99775,
          "lon": 21.3252696
        },
        {
          "id": "RoaKTva2smN83BGgCR2x",
          "address": "293R+VF Скопје, Македонија",
          "name": "Ај Стаил",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0046961,
          "lon": 21.391221
        },
        {
          "id": "Rr4Cav35hO5lKkJrAQhu",
          "address": "X9XW+FF Скопје, Македонија",
          "name": "Super TINEX",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.998706,
          "lon": 21.3962482
        },
        {
          "id": "RtAfxtEqgkN5AKVdBxOy",
          "address": "Клинички Центар, Скопје 1000, Македонија",
          "name": "Жито",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9898813,
          "lon": 21.4197865
        },
        {
          "id": "RwbUJAs2fwiF1yGGnUV4",
          "address": "Неименуван пат, Лабуништа, Македонија",
          "name": "Нуредини 2016",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.2690711,
          "lon": 20.5948705
        },
        {
          "id": "S5jEa5CA6fCxowtr7nNr",
          "address": "Кавадарци, Македонија",
          "name": "Bako&Stojna",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.439429,
          "lon": 22.009204
        },
        {
          "id": "SAUq8X6xiY5koMdXjQ0P",
          "address": "CJWR+48 Струмица, Македонија",
          "name": "Зендолино 8 - Струмица",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.445272,
          "lon": 22.6408136
        },
        {
          "id": "SAowSbpdPMbF3v05SEn3",
          "address": "2CFH+WG Скопје, Македонија",
          "name": "Sara fashion",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0247952,
          "lon": 21.4287818
        },
        {
          "id": "SMzwcSSJy2PPmZEkUZky",
          "address": "A3 45, Делчево, Македонија",
          "name": "Луна Гив",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9663099,
          "lon": 22.7773809
        },
        {
          "id": "Sarc7Hl6ptOmom4BkPQ6",
          "address": "Разловечко Востание 26, Скопје 1000, Македонија",
          "name": "Гранап",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0079128,
          "lon": 21.3842555
        },
        {
          "id": "ScU0wocnM2t46H77OR5D",
          "address": "Тетово 1220, Македонија",
          "name": "Dizajn-R",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.9937108,
          "lon": 20.9657549
        },
        {
          "id": "SkVNSRAi5Xr6O7A6L0gv",
          "address": "Делчево, Македонија",
          "name": "Жито Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.96422,
          "lon": 22.7727191
        },
        {
          "id": "SvLQxk3tnBLLFHHil7KX",
          "address": "Сремски Фронт, Штип 2000, Македонија",
          "name": "Стокомак",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7458124,
          "lon": 22.1952957
        },
        {
          "id": "Sx9jXOaeljaqdCpqNX8v",
          "address": "28HP+C7 Битола, Македонија",
          "name": "Мини Пани",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.0286208,
          "lon": 21.3357201
        },
        {
          "id": "SzH6KuTmRyHk3eSZO3LJ",
          "address": "Камењане, Македонија",
          "name": "Daman",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9428509,
          "lon": 20.9278787
        },
        {
          "id": "T0IdDJ51bwrAOSg1dYCb",
          "address": "29F3+CF Скопје, Македонија",
          "name": "Кала",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0235026,
          "lon": 21.3537042
        },
        {
          "id": "T0NCFZpMD5SL9w7lrS9r",
          "address": "Евтим Спространов 34, Скопје 1000, Македонија",
          "name": "Супер Тинекс",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.974857,
          "lon": 21.4533122
        },
        {
          "id": "T6AFeEHie186hMWfhiVK",
          "address": "Калишта 6330, Калишта, Македонија",
          "name": "Market Durim",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1501381,
          "lon": 20.6506671
        },
        {
          "id": "T7Wn3TX1GDsJRJLO6zMo",
          "address": "402, Toplica, Македонија",
          "name": "Аграр Топлица",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.8539722,
          "lon": 20.8884597
        },
        {
          "id": "TBEQd1PbcnmuwFjQwduE",
          "address": "Моцартова 43-19, Скопје 1060, Македонија",
          "name": "Market Kiki",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0197432,
          "lon": 21.356581
        },
        {
          "id": "TOrp4RfWTF5pzCMtpZHo",
          "address": "Тетово 1220, Македонија",
          "name": "ЗЕЦ Електроникс Тетово",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0168566,
          "lon": 20.9778769
        },
        {
          "id": "TPFZG0iaH5qqFRmbKj10",
          "address": "5PMC+FX Стар Дојран, Македонија",
          "name": "Sara Fashion",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1836695,
          "lon": 22.722446
        },
        {
          "id": "TSPPADZhg2hYTPhgHGMD",
          "address": "Црвена Скопска Општина, Скопје 1000, Македонија",
          "name": "Altes Primo",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9979615,
          "lon": 21.4346758
        },
        {
          "id": "TTJ65I6XXNw8VXfwRtio",
          "address": "4PPC+78 Куманово, Македонија",
          "name": "Елида Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.135741,
          "lon": 21.7208703
        },
        {
          "id": "TWGoUs4znA0FPAX8y3AN",
          "address": "Маршал Тито 115, Струга 6330, Македонија",
          "name": "Ramstore struga marshal tito",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1769513,
          "lon": 20.6700275
        },
        {
          "id": "TYbXISFNBdSRwr6stgFh",
          "address": "29-ти Ноември 194, Ресен, Македонија",
          "name": "Југо автоделови",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.0882481,
          "lon": 21.0116137
        },
        {
          "id": "TaChPAaFTIO4uKmREHUd",
          "address": "XFXG+97 Скопје, Македонија",
          "name": "Stokomak Magacin",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9984456,
          "lon": 21.4757273
        },
        {
          "id": "TckBSt9fLU0YuInrJMI5",
          "address": "Прилеп, Македонија",
          "name": "Мегаспорт",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.3449878,
          "lon": 21.5526265
        },
        {
          "id": "TfgKTao9GZeVEIIp27pw",
          "address": "Штип 2000, Македонија",
          "name": "КАМ",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7416455,
          "lon": 22.1984795
        },
        {
          "id": "Tzs64OSbul0AaYUlzJ9m",
          "address": "XCXQ+R4 Скопје, Македонија",
          "name": "Evita chic",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9995762,
          "lon": 21.4377808
        },
        {
          "id": "U5mjvF8rTChaR5bvrMK3",
          "address": "4Q8V+7C Охрид, Македонија",
          "name": "Souvenir",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.1156413,
          "lon": 20.7935831
        },
        {
          "id": "UCSXlBtAY4DaROP682gt",
          "address": "Argir Marinčev, Охрид 6000, Македонија",
          "name": "Bonatti",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1142247,
          "lon": 20.7999007
        },
        {
          "id": "UD3K01zaW1JzQIssNDga",
          "address": "R1106, Драчево, Македонија",
          "name": "Кам",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9384126,
          "lon": 21.5071218
        },
        {
          "id": "UKCeFuOvKTFmpzp4ybZq",
          "address": "Општина Тетово, Македонија",
          "name": "LTB Jeans",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0047702,
          "lon": 20.9900284
        },
        {
          "id": "ULwbixpzjxP5M5nmAhkb",
          "address": "Мајка Тереза 44, Скопје 1000, Македонија",
          "name": "Mini Market Non-Stop",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9895094,
          "lon": 21.4190732
        },
        {
          "id": "UN0MgBupR9qy2HVzpzTQ",
          "address": "Волковска, Скопје 1060, Македонија",
          "name": "Кам",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0245187,
          "lon": 21.350659
        },
        {
          "id": "UQekFEvQAqP37jbMn9wo",
          "address": "Булевар 8-ми Септември, Скопје 1000, Македонија",
          "name": "Anhoch Premium",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0066042,
          "lon": 21.4063927
        },
        {
          "id": "UU0S34c6SS0FmlIROqID",
          "address": "Перо Наков 65, Скопје 1000, Македонија",
          "name": "Електрометал",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9973587,
          "lon": 21.483821
        },
        {
          "id": "UZS1HD3donDS0GmbZ9gF",
          "address": "Солунска 170, Битола, Македонија",
          "name": "Auto-style",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.0256459,
          "lon": 21.3290581
        },
        {
          "id": "UiyFjbnSsZ09zuk8k9rA",
          "address": "X8XH+WF Скопје, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9998709,
          "lon": 21.32866
        },
        {
          "id": "UtjCn0srpgiPsHGy7vFX",
          "address": "4R75+H7 Охрид, Македонија",
          "name": "Mini market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1139308,
          "lon": 20.8082412
        },
        {
          "id": "VAGnMTCwQhuv2pMO0zyU",
          "address": "Моша Пијаде 45, Струмица, Македонија",
          "name": "Kis 4",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4422023,
          "lon": 22.6335517
        },
        {
          "id": "VDzZWcYFmn48c4OEtQrX",
          "address": "Општина Кавадарци, Македонија",
          "name": "мин-екс",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4654804,
          "lon": 22.0273325
        },
        {
          "id": "VLEM9ma6Dtccnz5rE6gc",
          "address": "Благоја Стефковски 1000, Скопје 1000, Македонија",
          "name": "ТПД Керол",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9978855,
          "lon": 21.4940611
        },
        {
          "id": "VNv2JR82DaLrBX7abTP5",
          "address": "Marko Cepenkov 1-4, Охрид 6000, Македонија",
          "name": "Ful",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1171332,
          "lon": 20.8148364
        },
        {
          "id": "VUkpDes8PdzqwtjPjUVI",
          "address": "Солунска, Делчево, Македонија",
          "name": "Enita",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9651515,
          "lon": 22.7714361
        },
        {
          "id": "Vb3TRUZt93Pv7qTfe0gp",
          "address": "P5QR+53 Штип, Македонија",
          "name": "Грозделино",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7379576,
          "lon": 22.1902158
        },
        {
          "id": "VfxwiGP5ruuRkSxsJOqT",
          "address": "Улица Свети Јоаким Осоговски, Крива Паланка, Македонија",
          "name": "Autoparts Bogas",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 42.203999,
          "lon": 22.3349213
        },
        {
          "id": "VhCeqKJfs425AQ7YrpJQ",
          "address": "VW8R+2M Свети Николе, Македонија",
          "name": "Ан-Да",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.8650078,
          "lon": 21.9417171
        },
        {
          "id": "W8Dch7eVJSvSsuPUcU1E",
          "address": "4R76+H8 Охрид, Македонија",
          "name": "Bambi",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1139411,
          "lon": 20.8108031
        },
        {
          "id": "WAFVuACjrVVkdvYaClBV",
          "address": "5PMC+GW Стар Дојран, Македонија",
          "name": "Мал Одмор",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1838469,
          "lon": 22.7223012
        },
        {
          "id": "WBxcwwAF7VLPDw1lm2Ki",
          "address": "R1204, Komuna e Shtipit, Македонија",
          "name": "Set Union Магацин Пакет Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7567982,
          "lon": 22.1752605
        },
        {
          "id": "WDRwyNhunkjK0Dyu65eb",
          "address": "Методија Митевски Брицо 11, Делчево, Македонија",
          "name": "Evropa",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9669199,
          "lon": 22.775414
        },
        {
          "id": "WDd5v5UJBmuLq8kEOAIJ",
          "address": "Февруарски Поход, Скопје 1000, Македонија",
          "name": "Рамстор",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9844445,
          "lon": 21.4838698
        },
        {
          "id": "WJNBivsF3pjdUdGuaX8h",
          "address": "Алексо Демниевски 62, Скопје 1060, Македонија",
          "name": "Алекса Демниевски 25",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0021431,
          "lon": 21.3515425
        },
        {
          "id": "WKvsiQhylF0zOJCqjYx7",
          "address": "22-ри Октомври 10, Радовиш, Македонија",
          "name": "Sloga",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.633188,
          "lon": 22.464756
        },
        {
          "id": "WLXydH1vfk7cy2zqVLwE",
          "address": "R1103, Неготино, Македонија",
          "name": "Супермаркет Дијана",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4874572,
          "lon": 22.0923577
        },
        {
          "id": "WPEiHr0NOJRXHyKr7VhR",
          "address": "XCX5+5H Скопје, Македонија",
          "name": "Super Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9978906,
          "lon": 21.4089683
        },
        {
          "id": "WR7y688asrr4h9FylXTV",
          "address": "Веселин Маслеша, Скопје 1000, Македонија",
          "name": "Pezogo",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0032403,
          "lon": 21.4079208
        },
        {
          "id": "WWoESkXODLOC49OWp3Rs",
          "address": "Општина Струмица, Македонија",
          "name": "Kisi 5 market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.441659,
          "lon": 22.6513453
        },
        {
          "id": "WWw5zuH8f3QQXQE9eb9U",
          "address": "Бул. Свети Климент Охридски 30, Скопје 1000, Македонија",
          "name": "Агровита МК",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9993974,
          "lon": 21.426528
        },
        {
          "id": "WgUJIlww9xx0f8cLaKZK",
          "address": "XCWJ+3X Скопје, Македонија",
          "name": "Mega sport",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.9951932,
          "lon": 21.4323823
        },
        {
          "id": "WmEVZmSxJdbBVtSKOJ8B",
          "address": "Крива Паланка, Македонија",
          "name": "пакет маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1999647,
          "lon": 22.3328574
        },
        {
          "id": "X11droj2lLIVhdaxX3TZ",
          "address": "Маршал Тито, Свети Николе, Македонија",
          "name": "Шиткарски",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.8643766,
          "lon": 21.9417838
        },
        {
          "id": "X8bPrRiDZv9KEP1Qqo6B",
          "address": "2C3Q+J2 Скопје, Македонија",
          "name": "Whole sale (?)",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0040454,
          "lon": 21.4375538
        },
        {
          "id": "X8syfafNvISvlQ84znPj",
          "address": "Даме Груев, Скопје 1000, Македонија",
          "name": "Queen",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9969805,
          "lon": 21.4284594
        },
        {
          "id": "X9rwiiqohnpaTkuaNQwF",
          "address": "Делчево, Македонија",
          "name": "Скопјанка маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9637609,
          "lon": 22.7798536
        },
        {
          "id": "XNxk6UEVLkDSlUhvEXaY",
          "address": "Андон Слабејкоски 2, Прилеп, Македонија",
          "name": "Никопе Комерц (Застава)",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.3437752,
          "lon": 21.551206
        },
        {
          "id": "XOjVw329Nm5UXK3r7JQ3",
          "address": "Булевар Србија, Скопје 1000, Македонија",
          "name": "Sport Vision Nike Outlet",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9769948,
          "lon": 21.4636482
        },
        {
          "id": "XZIBgsdudjNF0eADHz3I",
          "address": "Dimitrie Chupovski 19, Skopie 1000, Македонија",
          "name": "Или Или",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9954516,
          "lon": 21.4272522
        },
        {
          "id": "Xga6sk755swAvQxsbHYV",
          "address": "Р501 12-15, Охрид, Македонија",
          "name": "KAM Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1093692,
          "lon": 20.8114425
        },
        {
          "id": "XmHXBGF1Jjr7H5Y1zXID",
          "address": "Струга, Македонија",
          "name": "NAM Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1780327,
          "lon": 20.6858723
        },
        {
          "id": "XpaLjxXoxPbWXZvl6BGv",
          "address": "XCRH+V4 Скопје, Македонија",
          "name": "Mega fashion",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9922134,
          "lon": 21.4278325
        },
        {
          "id": "XsSzZEbxceACRWt3wqj4",
          "address": "Jane Sandanski 2, Охрид 6000, Македонија",
          "name": "Koshishta",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1126656,
          "lon": 20.8087989
        },
        {
          "id": "XxgHgMNoZFVnm66vrXQ6",
          "address": "Маршал Тито 94, Кривогаштани, Македонија",
          "name": "IGA Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3368744,
          "lon": 21.3311181
        },
        {
          "id": "Y4Cj77eCsYTLUEPHnQ1f",
          "address": "XCWJ+28 Скопје, Македонија",
          "name": "Boss",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9950597,
          "lon": 21.4308519
        },
        {
          "id": "Y72He5WHQcq95gs29KH3",
          "address": "Predrag Jancheski 21, Tetovë 1220, Македонија",
          "name": "Кам Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0054756,
          "lon": 20.979931
        },
        {
          "id": "Y7HfEM22yth9WOtRMXaZ",
          "address": "Улица Мајаковски 23-1, Скопје 1000, Македонија",
          "name": "Пекара Силбо",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0001055,
          "lon": 21.4174292
        },
        {
          "id": "YBONTY4VDBkic31wEtxX",
          "address": "2C4P+6J Скопје, Македонија",
          "name": "НЕЗИРИ КОМЕРЦИЈАЛНИ",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0056163,
          "lon": 21.4365534
        },
        {
          "id": "YCUhAbAWqYF7JkeKadC6",
          "address": "ÐÐ²ÑÐ¾Ð±ÑÑÐºÐ° Ð¿Ð¾ÑÑÐ¾ÑÐºÐ°, Тодосија Паунов, Кочани, Македонија",
          "name": "Фотопегасус",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9139644,
          "lon": 22.4142266
        },
        {
          "id": "YO9xptmtIYiMWu36F475",
          "address": "XCXC+JR Скопје, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9990831,
          "lon": 21.4220152
        },
        {
          "id": "YPqZU99oC3GxGeRuhF3O",
          "address": "Сарај, Скопје, Македонија",
          "name": "Рамстор",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.998549,
          "lon": 21.327488
        },
        {
          "id": "YSLsuYVgzZWa5Ith2Gac",
          "address": "2C4Q+G5 Скопје, Македонија",
          "name": "Adriatik",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.006257,
          "lon": 21.4379974
        },
        {
          "id": "YTgO3D8Pi9nmsQE8T6LH",
          "address": "Свети Николе, Македонија",
          "name": "Астра",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8650102,
          "lon": 21.9423848
        },
        {
          "id": "YVa4UXbN3EYsTMSgLs4g",
          "address": "VGJ8+V2 Виница, Македонија",
          "name": "Mak Progres",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8821533,
          "lon": 22.5150152
        },
        {
          "id": "YfGLKnAi29HV2fs75NHY",
          "address": "Џемал Биједиќ 19, Штип 2000, Македонија",
          "name": "Хамер",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.7499727,
          "lon": 22.2011469
        },
        {
          "id": "Yn8C5IMjkwbzmQjD1S0a",
          "address": "Аеродром, Скопје 1000, Македонија",
          "name": "Anhoch",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9850942,
          "lon": 21.4655471
        },
        {
          "id": "Yo5AmdGHSjUmeOw0lDmJ",
          "address": "XFHG+QH Скопје, Македонија",
          "name": "Рамстор",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9794894,
          "lon": 21.4764231
        },
        {
          "id": "Yv9lc8o8UQzmJTfh0y4Y",
          "address": "Сремски Фронт 29-13, Штип 2000, Македонија",
          "name": "Симонче",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.749502,
          "lon": 22.2000942
        },
        {
          "id": "ZFAfL17Bh9orFP7RHvEl",
          "address": "P5QR+9V Штип, Македонија",
          "name": "Сокак",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.7384084,
          "lon": 22.1921685
        },
        {
          "id": "ZGxqYpzaXAAvVJWxhDCs",
          "address": "Булевар Илинден 36, Скопје 1000, Македонија",
          "name": "Жито Леб",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0003611,
          "lon": 21.4268596
        },
        {
          "id": "ZIFPLgkVwUfZLMWBFWF1",
          "address": "Куманово, Македонија",
          "name": "Steki prom kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1388559,
          "lon": 21.7318897
        },
        {
          "id": "ZNuX4HjuOjXh27nMTifw",
          "address": "Karpos, Radishani, Македонија",
          "name": "Фурна",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0621038,
          "lon": 21.45066
        },
        {
          "id": "ZPsnNMPI2VZYIekNjpzN",
          "address": "8GVV+FQ Прилеп, Македонија",
          "name": "СС-Авто 2010",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.3437239,
          "lon": 21.5443835
        },
        {
          "id": "ZTwoqJsA1Or9EihM4chV",
          "address": "Димитрие Чуповски 1, Скопје 1000, Македонија",
          "name": "Sara fashion",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.994636,
          "lon": 21.4309955
        },
        {
          "id": "ZaB3nD7AHqplxn812qeT",
          "address": "Бит Пазар 5, Скопје 1000, Македонија",
          "name": "4ever",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0008315,
          "lon": 21.4396903
        },
        {
          "id": "Ziw7kCbS0Q6ksVv9ifJr",
          "address": "Стево Патако 11, Битола, Македонија",
          "name": "Andzela",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.026783,
          "lon": 21.3328136
        },
        {
          "id": "ZnlKbQkO4JhF2p5OQrE3",
          "address": "293R+VW Скопје, Македонија",
          "name": "Нептун Карпош",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0047189,
          "lon": 21.3923224
        },
        {
          "id": "ZtK4HKEHk6PV01FV5BqR",
          "address": "Ванчо Прке, Штип 2000, Македонија",
          "name": "Пренди",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.7387617,
          "lon": 22.1958265
        },
        {
          "id": "ZwGaUc8EmoQvAKFPZ5tg",
          "address": "GX22+4G Кичево, Македонија",
          "name": "Андроко",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5002712,
          "lon": 20.9512603
        },
        {
          "id": "Zyq0vos9KMtdoOMHt9hd",
          "address": "Орце Николов, Свети Николе, Македонија",
          "name": "Астра",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8693536,
          "lon": 21.9406323
        },
        {
          "id": "a0XVF9DkUT4YKHGQq9Bf",
          "address": "R1401, Струмица, Македонија",
          "name": "Zdravec",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4324702,
          "lon": 22.6519392
        },
        {
          "id": "a2kvXY8UOgvIeVdzPdgQ",
          "address": "Подкнежино, Кичево, Македонија",
          "name": "Setec",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.5112893,
          "lon": 20.9511304
        },
        {
          "id": "aDBneTjzmWeLBGMGgV4m",
          "address": "XGW3+8J Скопје, Македонија",
          "name": "Фурна Облат",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9957633,
          "lon": 21.5040709
        },
        {
          "id": "aIKuQ0VnrW11kMqqKD1q",
          "address": "XCPJ+Q9 Скопје, Македонија",
          "name": "Вегера",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.986975,
          "lon": 21.4308935
        },
        {
          "id": "aa6Id4G5Aoi0U9obVQf7",
          "address": "293R+RQ Скопје, Македонија",
          "name": "Навигаре",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0045506,
          "lon": 21.391946
        },
        {
          "id": "aaZDiixn92PmM79rmPVS",
          "address": "Боте Боцевски 9, Скопје 1000, Македонија",
          "name": "Рептил",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9813069,
          "lon": 21.4383256
        },
        {
          "id": "adRxmnKiC559j6SY4T7X",
          "address": "A3 19, Македонска Каменица, Македонија",
          "name": "Balkanluks",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0239695,
          "lon": 22.5887511
        },
        {
          "id": "akn44YKZOT6Kor3HQqSP",
          "address": "2C2P+7J Скопје, Македонија",
          "name": "Antique",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 42.00063,
          "lon": 21.4365522
        },
        {
          "id": "alAwaOUuRNSiEXmDZtsf",
          "address": "A3, Делчево, Македонија",
          "name": "Скодел книжарница",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9670813,
          "lon": 22.7773541
        },
        {
          "id": "anpS67R9mxNGC9et8Bg9",
          "address": "XCW6+QQ Скопје, Македонија",
          "name": "Сетек Компјутери",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9969509,
          "lon": 21.4119819
        },
        {
          "id": "aqg3g4SIgfukiTnbBbzq",
          "address": "11-ти Ноември, Куманово, Македонија",
          "name": "STC Supermarket 1",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.139421,
          "lon": 21.7058314
        },
        {
          "id": "aqvAu1m0AUPNyJmFsYIe",
          "address": "Општина Тетово, Македонија",
          "name": "Tom Tailor",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0047734,
          "lon": 20.9896646
        },
        {
          "id": "avaNOhUFOmRYvzJzEQVE",
          "address": "Гоце Делчев 103-87, Охрид 6000, Македонија",
          "name": "Gorenje",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.117179,
          "lon": 20.7974137
        },
        {
          "id": "awdQ098KMLWrCSp0b29U",
          "address": "2-ри Реон, Струга, Македонија",
          "name": "Феј-Даф железарија",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.1834617,
          "lon": 20.6756387
        },
        {
          "id": "b2HxZjXg2hWHmjMd3vC3",
          "address": "2X5G+VG Тетово, Македонија",
          "name": "Times",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.009697,
          "lon": 20.9763644
        },
        {
          "id": "b3VYkAamYCyD9uqARA0Q",
          "address": "Македонска, Битола 7000, Македонија",
          "name": "Лиска",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.0326125,
          "lon": 21.3367627
        },
        {
          "id": "bGMC8NHmILKZMNRt59G8",
          "address": "Кавадарци, Македонија",
          "name": "TD",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4399919,
          "lon": 22.0097653
        },
        {
          "id": "bWxjHEbVU7Z9YUnPN3MK",
          "address": "Аминта Трети 44, Скопје 1000, Македонија",
          "name": "Ла Делишес",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9983386,
          "lon": 21.4227365
        },
        {
          "id": "bXGWkQkjZCN0JbISIe5g",
          "address": "Финска 187, Скопје, Македонија",
          "name": "Стокомак",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0036376,
          "lon": 21.5043707
        },
        {
          "id": "bb0rDSaYFbrqBgpXRBtt",
          "address": "Р1301 55, Охрид, Македонија",
          "name": "Zobi",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.115575,
          "lon": 20.8050543
        },
        {
          "id": "bb3RtlZP10Qxg8WnBzNv",
          "address": "4R54+8G Охрид, Македонија",
          "name": "A1",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1083112,
          "lon": 20.8063275
        },
        {
          "id": "betf85k09hdTRBLMQWs4",
          "address": "4R87+87 Охрид, Македонија",
          "name": "Ramstore express",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1157676,
          "lon": 20.8132048
        },
        {
          "id": "biuF479QGgTZMnroVGHO",
          "address": "R1107 115, Кавадарци, Македонија",
          "name": "KAM City",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4390428,
          "lon": 22.010536
        },
        {
          "id": "blzpWntEB7knnj7dYWCw",
          "address": "8HX3+J8 Прилеп, Македонија",
          "name": "Футура",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3490361,
          "lon": 21.5532739
        },
        {
          "id": "bpik2r9TEXPwuwOXkb5k",
          "address": "Мирослав Крлежа 46, Скопје 1000, Македонија",
          "name": "Swisslion",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9989821,
          "lon": 21.4224806
        },
        {
          "id": "bxZcr2Ts2y0aJDOiw1f9",
          "address": "Неименуван пат, Скопје 1000, Македонија",
          "name": "A&M Bakery",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.995252,
          "lon": 21.4329109
        },
        {
          "id": "c26X8iciiSOlSx4VR7JR",
          "address": "Орце Николов 175, Скопје 1000, Македонија",
          "name": "Digit Company",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0052574,
          "lon": 21.4117962
        },
        {
          "id": "cBuSrzj9UDaXMUTZQyYt",
          "address": "8HV3+WM Прилеп, Македонија",
          "name": "Boutique Tara",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.3447794,
          "lon": 21.5542259
        },
        {
          "id": "cNSfSwzMxyZmQCbOwt3G",
          "address": "198, Skopie 1000, Македонија",
          "name": "Luomo",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0004215,
          "lon": 21.4376161
        },
        {
          "id": "cNqIgJyUyR1BqgTRGpE6",
          "address": "CJQQ+M7 Струмица, Македонија",
          "name": "Ramstore",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4391987,
          "lon": 22.6381527
        },
        {
          "id": "cRHn3p5f1G1HyymtTX6V",
          "address": "Републиканска, Прилеп 7500, Македонија",
          "name": "Астибо",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.3456164,
          "lon": 21.555764
        },
        {
          "id": "cVRoaU4Ju3fAeqlZnp6b",
          "address": "Св. Климент Охридски 31, Битола 7000, Македонија",
          "name": "Office store",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.0269485,
          "lon": 21.333944
        },
        {
          "id": "cVrvfIIeVIQ94hVXMElu",
          "address": "XCHQ+3Q Скопје, Македонија",
          "name": "Mini Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9777179,
          "lon": 21.4394414
        },
        {
          "id": "cXM3FCHyNnVlqvYuMnJD",
          "address": "2959+2JP, Скопје 1000, Македонија",
          "name": "Queen Accessories",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0078555,
          "lon": 21.36944
        },
        {
          "id": "cYJUNTsSGJmbNY7HCxuL",
          "address": "Општина Свети Николе, Македонија",
          "name": "Астра",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.866656,
          "lon": 21.9312266
        },
        {
          "id": "cYQpBw8s9uKT04ChGaaq",
          "address": "XFQ7+98 Скопје, Македонија",
          "name": "WinixMk",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.988391,
          "lon": 21.4632659
        },
        {
          "id": "casSjLwGcPTvevnW3DEA",
          "address": "Булевар Србија, Скопје 1000, Македонија",
          "name": "Sport Vision Extra Sports Outlet",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9768894,
          "lon": 21.4635558
        },
        {
          "id": "cgYnI0XuLk3cTmBi83EQ",
          "address": "Македонија",
          "name": "G8",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.052108,
          "lon": 21.0560365
        },
        {
          "id": "ciFun0pVd43I84sJOAAI",
          "address": "Dimitrie Chupovski 10, Skopie 1000, Македонија",
          "name": "Lisca",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9949355,
          "lon": 21.429627
        },
        {
          "id": "cia4v4Ar8kL6qlJQ1xma",
          "address": "Прохор Пчињски 47, Скопје 1000, Македонија",
          "name": "Luto-Kom",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0051506,
          "lon": 21.4357944
        },
        {
          "id": "d0V4KO4RopEgbTfHL0AY",
          "address": "Општина Тетово, Македонија",
          "name": "DOKA Shoes",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0046727,
          "lon": 20.9895953
        },
        {
          "id": "d1MizKMlThLI1TkylTGg",
          "address": "Јане Сандански 116, Тетово 1220, Македонија",
          "name": "Рамстор 2 Тетово",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0093957,
          "lon": 20.9741832
        },
        {
          "id": "d2azL6cHUFyG7zCuV0h3",
          "address": "Општина Делчево, Македонија",
          "name": "Лунагив",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9737984,
          "lon": 22.7820353
        },
        {
          "id": "dBIyClniQ5NwuGBpeBpu",
          "address": "Гоце Делчев 44, Штип 2000, Македонија",
          "name": "KIT-GO Магацин",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.751114,
          "lon": 22.1799554
        },
        {
          "id": "dE7szepGH0bem1WYxnp8",
          "address": "Никола Вапцаров 1, Скопје 1000, Македонија",
          "name": "Култура",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9956707,
          "lon": 21.4310025
        },
        {
          "id": "dGyOKWHoUZBpVYnAi9Hi",
          "address": "Ѓорче Петров, Македонија",
          "name": "Ta2 Gold Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9949146,
          "lon": 21.3229071
        },
        {
          "id": "dMrv4RcbNifDxzOuTFZ9",
          "address": "Braḱa Ǵinoski 108, Гостивар 1230, Македонија",
          "name": "boss",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.79495,
          "lon": 20.907855
        },
        {
          "id": "dOKN7HYu63yBxQu9gJHe",
          "address": "7-ми Ноември 179, Охрид 6000, Македонија",
          "name": "KAM",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1225454,
          "lon": 20.8094117
        },
        {
          "id": "dTMnd1gtMLc02APmLO7V",
          "address": "Braḱa Ǵinoski, Гостивар 1230, Македонија",
          "name": "Green Media",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.7992661,
          "lon": 20.907252
        },
        {
          "id": "djWuRA3xPYvRHAWd5Mqp",
          "address": "Мајчин Дом, Скопје 1000, Македонија",
          "name": "Канон Сенчо",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9890975,
          "lon": 21.4608057
        },
        {
          "id": "dlZxwVOrt7mqXPzWeiHb",
          "address": "Општина Крива Паланка, Македонија",
          "name": "Плод",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.2058039,
          "lon": 22.3364342
        },
        {
          "id": "dpN1jKEewetcB2liNzuV",
          "address": "2G33+V9 Ченто, Македонија",
          "name": "Жито Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0046326,
          "lon": 21.5033827
        },
        {
          "id": "dtNdqw4w6DPDtcOtDYx1",
          "address": "X8R8+XF Скопје, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9923852,
          "lon": 21.3162182
        },
        {
          "id": "dvlcWnVkhb0F4jvqtxu2",
          "address": "Неименуван пат, Лешок, Македонија",
          "name": "Сувенири",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 42.0665981,
          "lon": 21.0278571
        },
        {
          "id": "dxfkXs7pUwHvUrN6Lsyu",
          "address": "Христо Смирненски 20, Скопје 1000, Македонија",
          "name": "Sur",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9983774,
          "lon": 21.415282
        },
        {
          "id": "e0bazrTCowmNnqYGUDSy",
          "address": "Партизанска 15, Радовиш, Македонија",
          "name": "Neptun",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.63712,
          "lon": 22.462304
        },
        {
          "id": "e3RKuII7vKxu8MNLuvDl",
          "address": "Кавадарци, Македонија",
          "name": "TD - supermarket",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4409129,
          "lon": 22.0104271
        },
        {
          "id": "e5sfnifQqN5kSGzQhD14",
          "address": "XQ9M+V4 Делчево, Македонија",
          "name": "Бисер",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9697285,
          "lon": 22.7828039
        },
        {
          "id": "eAXpxllhN9kTG6rDPvfQ",
          "address": "4Q8X+V6 Охрид, Македонија",
          "name": "DON",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1171328,
          "lon": 20.7980605
        },
        {
          "id": "eG1weeCyGPGDkWhGvd8B",
          "address": "4GQ3+Q6 Гевгелија, Македонија",
          "name": "КИТ-ГО",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1394151,
          "lon": 22.5030468
        },
        {
          "id": "eG7Kl6QmaxhlLNBJVmWz",
          "address": "Васил Ѓоргов 33, Скопје 1000, Македонија",
          "name": "Pioneer Skopje 02/3110 186",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9931281,
          "lon": 21.4153049
        },
        {
          "id": "eNbrEIvEKNbLmEZIYe4V",
          "address": "2X59+CG Тетово, Македонија",
          "name": "Gigabel",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.008513,
          "lon": 20.9688329
        },
        {
          "id": "eUjhyphteYMAoVHxMfKW",
          "address": "Христијан Тодоровски Карпош 73, Куманово, Македонија",
          "name": "Musli Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1333768,
          "lon": 21.7125711
        },
        {
          "id": "eed6XJVYWXSoMAZHBnSf",
          "address": "Сарај, Скопје, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9991055,
          "lon": 21.3268253
        },
        {
          "id": "epgifxElS8R1XHAZvIgL",
          "address": "Сутјеска 59, Штип 2000, Македонија",
          "name": "Autoboss #2",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.7455906,
          "lon": 22.1954545
        },
        {
          "id": "erL2YjLyOia3ugONcO5W",
          "address": "WGQ7+QF Драчево, Македонија",
          "name": "Tinex Discount",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9394701,
          "lon": 21.513671
        },
        {
          "id": "ev0DXudffFcjWoxjcRMi",
          "address": "XCXG+XH Скопје, Македонија",
          "name": "Smart living",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.9998977,
          "lon": 21.4263961
        },
        {
          "id": "eyWk0Zm8mylJIsO28diO",
          "address": "2F3Q+C4 Ченто, Македонија",
          "name": "makdel",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 42.0035764,
          "lon": 21.4877902
        },
        {
          "id": "f4824sQ8gojJoa0kC2a5",
          "address": "XFQ9+WM Скопје, Македонија",
          "name": "M Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9898103,
          "lon": 21.4691912
        },
        {
          "id": "f4Ly4XppFqB42lqn1RzV",
          "address": "C2Q6+24 Кавадарци, Македонија",
          "name": "TimComputers",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.437611,
          "lon": 22.0102529
        },
        {
          "id": "f4wwyBQlO25Xg1zao0LN",
          "address": "P5WR+GC Штип, Македонија",
          "name": "Пакет Маркет 27",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7463008,
          "lon": 22.1910694
        },
        {
          "id": "f5hArLoE2hNMt3RKsGAo",
          "address": "Bulevar Makedonski Prosvetiteli, Охрид 6000, Македонија",
          "name": "Македонски Сувенири",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.1137529,
          "lon": 20.8002479
        },
        {
          "id": "f7vkDX9BcUvyoRhcVFQM",
          "address": "Панче Караѓозов, Штип 2000, Македонија",
          "name": "Класик Делев Ристо и ДР. Ј.Т.Д.",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.7435052,
          "lon": 22.1977561
        },
        {
          "id": "fAugZcpa5xg3NBlNwNYM",
          "address": "Радовиш, Македонија",
          "name": "Stil",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.6320897,
          "lon": 22.462165
        },
        {
          "id": "fJc58eVRAp5av9vnemp9",
          "address": "R2237 101, Куманово, Македонија",
          "name": "Centrobiznis 1 kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1581571,
          "lon": 21.742493
        },
        {
          "id": "fR3xKa8GYGoIY8I5UI9u",
          "address": "Трифун Хаџијанев 3, Скопје 1000, Македонија",
          "name": "КАМ Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0026311,
          "lon": 21.4623331
        },
        {
          "id": "fadFaA7iv1AH5rYSF1Jq",
          "address": "Булевар Илинден 78, Скопје 1000, Македонија",
          "name": "X-Print",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 42.0021597,
          "lon": 21.4236864
        },
        {
          "id": "feFnwXqKo3XP8IOUZQeh",
          "address": "28GP+CP Битола, Македонија",
          "name": "Teens",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.0261117,
          "lon": 21.3367793
        },
        {
          "id": "ffaX9BEDxzHw4qJeW4gl",
          "address": "2C2P+8M Скопје, Македонија",
          "name": "Souvenir",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 42.0008194,
          "lon": 21.4366751
        },
        {
          "id": "fl1lLtxlkAB75Qw9Yfro",
          "address": "Orce Nikolov, Делчево, Македонија",
          "name": "Ангела",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9668777,
          "lon": 22.7743844
        },
        {
          "id": "fsh3c35wN1THpfwLzDqF",
          "address": "5PMF+G3 Стар Дојран, Македонија",
          "name": "Бутик Центар",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1837727,
          "lon": 22.7226925
        },
        {
          "id": "ftV8GM4dRDlTAPADFtZ5",
          "address": "Севастополска 34, Скопје 1000, Македонија",
          "name": "Homax",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0066834,
          "lon": 21.4381161
        },
        {
          "id": "fvxEa9smJuUD8y8IwlS0",
          "address": "Тетово, Македонија",
          "name": "КУБИКС - Студио за Анимација",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.008963,
          "lon": 20.971466
        },
        {
          "id": "g6SLJXZ2yIKUY0IPfeIa",
          "address": "Абас Емин, Охрид 6000, Македонија",
          "name": "Open market for vegetable, fruits,...",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1175169,
          "lon": 20.7989325
        },
        {
          "id": "gBC4x2SEJEkyBSXjgEyE",
          "address": "P5QV+6V Штип, Македонија",
          "name": "Спортисимо",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.738025,
          "lon": 22.1947424
        },
        {
          "id": "gBp7t8ltVrm1gfRYCAIF",
          "address": "294M+26 Скопје, Македонија",
          "name": "Фреш маркет Бојди",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0050579,
          "lon": 21.3831193
        },
        {
          "id": "gLO8ERp7JRUTUDb4gLVb",
          "address": "XFQ3+6V Скопје, Македонија",
          "name": "ваташа",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.988117,
          "lon": 21.4546638
        },
        {
          "id": "gMKf4WaxiIxox95LVn9N",
          "address": "XCWC+XV Скопје, Македонија",
          "name": "Reptil",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9974123,
          "lon": 21.4222398
        },
        {
          "id": "gPyVovpgQ9dbvZ3zfbvZ",
          "address": "Булевар Крсте Петков Мисирков 55, Скопје 1000, Македонија",
          "name": "Ira",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0014974,
          "lon": 21.4396218
        },
        {
          "id": "gTiTemNBxDfpqmjloKqM",
          "address": "A4, Strumicë, Македонија",
          "name": "Koda Magacin",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4401622,
          "lon": 22.6595336
        },
        {
          "id": "gW0KMx24O8nmW1pN6Cza",
          "address": "Подкнежино, Кичево, Македонија",
          "name": "Kipper",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5068877,
          "lon": 20.9521165
        },
        {
          "id": "gd2Ljc9JFhpI2PtMh3x9",
          "address": "Булевар Маршал Тито 21-9, Струмица, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4382823,
          "lon": 22.6414839
        },
        {
          "id": "ggg6YQ3QbjO9skzhi4oy",
          "address": "2F36+98 Скопје, Македонија",
          "name": "Млечен Ресторан Исидора-Даниел",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0034245,
          "lon": 21.4607538
        },
        {
          "id": "gguNAykxXrJLR4zfLmBD",
          "address": "292R+92 Скопје, Македонија",
          "name": "Специјал - Тафталиџе",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0009355,
          "lon": 21.3900483
        },
        {
          "id": "gmGiJysFz13J3SphnJF2",
          "address": "XCXC+H5 Скопје, Македонија",
          "name": "Anhoch",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9988802,
          "lon": 21.4204422
        },
        {
          "id": "gqeknvkqoLQHpQI1DoUx",
          "address": "X8WF+WV Скопје, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9972876,
          "lon": 21.3246903
        },
        {
          "id": "grEWU9ycHR0IfsSWnQy4",
          "address": "R1102 19, Демир Капија, Македонија",
          "name": "Zito",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4099477,
          "lon": 22.2430597
        },
        {
          "id": "h2Z113tx1PyIyt711ZSY",
          "address": "Фредерик Шопен 2, Скопје 1000, Македонија",
          "name": "Tony’s Bakery",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9870802,
          "lon": 21.4314029
        },
        {
          "id": "h3xMZUnUPLuN517X3jDR",
          "address": "Тетово 1220, Македонија",
          "name": "Paolo Bocelli",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0045186,
          "lon": 20.9896563
        },
        {
          "id": "h8o9taeEexHIBNvYjrhv",
          "address": "P5QR+2Q Штип, Македонија",
          "name": "Ана Стил",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.7375975,
          "lon": 22.191884
        },
        {
          "id": "hBMXt3xpeRjiVpgSBHqw",
          "address": "Jane Sandanski 70, Охрид 6000, Македонија",
          "name": "Blonde Fashion",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1145309,
          "lon": 20.8115684
        },
        {
          "id": "hDGC9hYFX2ADILLy5sGE",
          "address": "Прашка 15, Скопје 1000, Македонија",
          "name": "Ramstore",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9980345,
          "lon": 21.3981423
        },
        {
          "id": "hEbEMwE1eJ2GyZPVGWrM",
          "address": "Р501, Охрид, Македонија",
          "name": "Sebo",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.1169668,
          "lon": 20.8006262
        },
        {
          "id": "hGORvKLqygiciD0LnjzS",
          "address": "8GRX+HM Прилеп, Македонија",
          "name": "Пата",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3414029,
          "lon": 21.5492167
        },
        {
          "id": "hOPE4EqZdoTFg8Q4NNHX",
          "address": "28J2+PG Битола, Македонија",
          "name": "Market Andzhela",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0318267,
          "lon": 21.3012831
        },
        {
          "id": "hUwBLEhLLfuAxXmmzMam",
          "address": "Proleterski Brigadi, Струга 6330, Македонија",
          "name": "Ramstore",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1783823,
          "lon": 20.6761993
        },
        {
          "id": "hVXZTSq1pxwD9DhFI18u",
          "address": "Млекара Маџари, Скопје 1000, Македонија",
          "name": "Кам Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9939066,
          "lon": 21.5043477
        },
        {
          "id": "hcKcsG7bX0Zry6nRlI5R",
          "address": "Сарај, Скопје, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0002456,
          "lon": 21.3266966
        },
        {
          "id": "heXiOjxXYCzjarPiIxzA",
          "address": "2X4F+69 Тетово, Македонија",
          "name": "ЕКСКЛУЗИВ",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 42.0055289,
          "lon": 20.973456
        },
        {
          "id": "hiqzjn6KHIYOhAO8IIhk",
          "address": "VGM3+2R Виница, Македонија",
          "name": "Central Gym",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.8826206,
          "lon": 22.5045386
        },
        {
          "id": "hjjr2kJXjRn5Uy4cOGXc",
          "address": "2CFJ+87 Скопје, Македонија",
          "name": "Setec",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0233073,
          "lon": 21.4307132
        },
        {
          "id": "hsfU3wTe3slFq4jst3lm",
          "address": "24 7, Stajkovci, Македонија",
          "name": "Грогос",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0277156,
          "lon": 21.5139779
        },
        {
          "id": "hy1tDYrdEkIMhZhYX4ta",
          "address": "Bulevar Makedonski Prosvetiteli 10, Охрид 6000, Македонија",
          "name": "Big ben",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.115441,
          "lon": 20.8009071
        },
        {
          "id": "hzTpC70AIFWmlXXPlfUx",
          "address": "Центар, Охрид, Македонија",
          "name": "Kam",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1173071,
          "lon": 20.7992057
        },
        {
          "id": "i2CRqgDtRCmPhHHvENoS",
          "address": "Свети Николе, Македонија",
          "name": "Пакет Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.8673893,
          "lon": 21.9372432
        },
        {
          "id": "i3kITsHrD4QmklEWxml0",
          "address": "XCVG+2R Скопје, Македонија",
          "name": "Стрип Книжарница Бункер",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9925988,
          "lon": 21.427103
        },
        {
          "id": "i84BNNl0rBYfNQR1rfkU",
          "address": "Маврови Анови, Македонија",
          "name": "Маркет Кај Петко",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7017221,
          "lon": 20.7571924
        },
        {
          "id": "iA1joCYQ7xKJVCV3sQCi",
          "address": "Кратовска 6, Штип, Македонија",
          "name": "Trakom Market Duzlak Stip",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7527018,
          "lon": 22.206591
        },
        {
          "id": "iATrWM3WlXBdOxjhMn7T",
          "address": "Маршал Тито 10, Македонска Каменица, Македонија",
          "name": "Boutiques",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0236603,
          "lon": 22.5889096
        },
        {
          "id": "iCOtt3PEqPJCcuz2FBjO",
          "address": "Радовиш, Македонија",
          "name": "KAM",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.6282088,
          "lon": 22.4553463
        },
        {
          "id": "iE4AKu5OoX18EUorLMZ3",
          "address": "Штип, Македонија",
          "name": "Балкан Лукс",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.7378072,
          "lon": 22.1940258
        },
        {
          "id": "iEqbB5jRuzFBKRLwKjH6",
          "address": "XCRW+F4 Скопје, Македонија",
          "name": "Burek",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.991182,
          "lon": 21.4453672
        },
        {
          "id": "iHRPjB0rcbr1XEw4mm5L",
          "address": "Чаир, Скопје 1000, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9925332,
          "lon": 21.4370214
        },
        {
          "id": "iKdp38SglVSlwPwq0jaz",
          "address": "4Q9X+5X Охрид, Македонија",
          "name": "Maximus",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1179393,
          "lon": 20.7999809
        },
        {
          "id": "iNeUrPJMsUyu7tigBqwg",
          "address": "3C3X+4X Радишани, Македонија",
          "name": "Орашец",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0528304,
          "lon": 21.449974
        },
        {
          "id": "iOo3BUG2IMnI2KrKbD5l",
          "address": "Ресен, Македонија",
          "name": "Свислион продавнива",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0906153,
          "lon": 21.0135953
        },
        {
          "id": "iPegeYtuLPshJkY2VV21",
          "address": "Илија Игески - Цветан 3, Македонски Брод, Македонија",
          "name": "Filipos",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5139095,
          "lon": 21.2164115
        },
        {
          "id": "iYYoU6vWyZnNx2Mkxsgi",
          "address": "Nikola Karev, Охрид 6000, Македонија",
          "name": "Wake&Bake",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1120215,
          "lon": 20.8103091
        },
        {
          "id": "ieQi4Bn0dZUVrDvDff8i",
          "address": "Кеј Маршал Тито 19, Штип 2000, Македонија",
          "name": "ХИТ Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7369788,
          "lon": 22.1927503
        },
        {
          "id": "ikadZI65VMCqHvZfQRRA",
          "address": "XQ7H+XP Делчево, Македонија",
          "name": "Авто Мик",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.9649287,
          "lon": 22.7793102
        },
        {
          "id": "infSHBpeR0s49mD1KMlG",
          "address": "Мерцедес салон, Скопје 1000, Македонија",
          "name": "Крономак",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.994313,
          "lon": 21.4745662
        },
        {
          "id": "ix7pZOMQZostl9ZYkJZG",
          "address": "Маврово, Македонија",
          "name": "Аце",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.6613792,
          "lon": 20.7337561
        },
        {
          "id": "iyVX33mpEgF6Bk1JnUxg",
          "address": "103 117, Гевгелија, Македонија",
          "name": "Supermarket S-53",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1486017,
          "lon": 22.4985083
        },
        {
          "id": "izc8e5wLRoexjqwJvc2P",
          "address": "Енергомонт, Скопје 1000, Македонија",
          "name": "DDStore",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9847142,
          "lon": 21.4497643
        },
        {
          "id": "j00gG8qS039u9pMggpg5",
          "address": "R1107 115, Кавадарци, Македонија",
          "name": "MA-GO Prom",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4377707,
          "lon": 22.0107461
        },
        {
          "id": "jDEHS6kBInTxEPWzeWVD",
          "address": "2C4P+67 Скопје, Македонија",
          "name": "Fa-Di",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0055534,
          "lon": 21.4356602
        },
        {
          "id": "jIZJDuUGQHVo0TsBu8SM",
          "address": "2C34+44 Скопје, Македонија",
          "name": "Mena",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0027574,
          "lon": 21.4053391
        },
        {
          "id": "jNlON972raPJUivGAbk8",
          "address": "Општина Крива Паланка, Македонија",
          "name": "Furna Vardar",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.201414,
          "lon": 22.3349195
        },
        {
          "id": "jOQXmxcyeb5utfg3eItj",
          "address": "XCXP+WH Скопје, Македонија",
          "name": "Biana",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.9998571,
          "lon": 21.4363759
        },
        {
          "id": "jSlweQJn2PgzRwU9c1we",
          "address": "2C4P+RR Скопје, Македонија",
          "name": "Barak",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0070937,
          "lon": 21.4370401
        },
        {
          "id": "jZ2Ra5YyrYoEKbDviW46",
          "address": "Булевар Ослободување 12, Кичево, Македонија",
          "name": "Ramstore",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5126349,
          "lon": 20.9627409
        },
        {
          "id": "jrBmX5jUJjnJSMDOkNID",
          "address": "A3, Штип, Македонија",
          "name": "Хит Маркет Магацин",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7569135,
          "lon": 22.1761927
        },
        {
          "id": "jsUmVMYgzFKSnZ598H37",
          "address": "Bulevar Makedonski Prosvetiteli 10, Охрид 6000, Македонија",
          "name": "Sabe",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1158374,
          "lon": 20.8010063
        },
        {
          "id": "jxUbAYjxImHc1aBLZDfV",
          "address": "Кеј Македонија 20, Охрид 6000, Македонија",
          "name": "Top market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1104279,
          "lon": 20.8039108
        },
        {
          "id": "jyI1aSu2Dq5rvTImSzAt",
          "address": "Дражево, Македонија",
          "name": "Supero",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3740068,
          "lon": 22.9190506
        },
        {
          "id": "kSCZ5HL783t1eTtFk40S",
          "address": "CJQV+CQ Струмица, Македонија",
          "name": "Kisi market 1",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4385011,
          "lon": 22.6444715
        },
        {
          "id": "kX1irsHLL11zJ7PT6gTj",
          "address": "XXQ8+GCW, Тетово 1220, Македонија",
          "name": "Elektro Elektra",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.9873631,
          "lon": 20.9662459
        },
        {
          "id": "kanRmqwo3chPJlBD96uj",
          "address": "294C+VQ Скопје, Македонија",
          "name": "DIEM-GP",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0071667,
          "lon": 21.3719748
        },
        {
          "id": "kecazYgGsy0j3N5hvkHf",
          "address": "Крива Паланка, Македонија",
          "name": "Zegin Healty Food",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.2054613,
          "lon": 22.3360401
        },
        {
          "id": "klqCi1QY7NDMJvwMDdKA",
          "address": "Св. Спасо Радовишки 69, Радовиш, Македонија",
          "name": "Makedonija (Sus mus)",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.63896,
          "lon": 22.46124
        },
        {
          "id": "koHogjxA9901Dc4J4PWi",
          "address": "CJJV+MP Струмица, Македонија",
          "name": "Markator magacin",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4317489,
          "lon": 22.6442899
        },
        {
          "id": "kqQGcVauM9uuXgkWTyNp",
          "address": "Бутелска 29, Скопје 1000, Македонија",
          "name": "Стокомак",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0364195,
          "lon": 21.4464861
        },
        {
          "id": "kr4v3rdm57AxPCrXAt6J",
          "address": "Sveti Kliment Ohridski, Охрид, Македонија",
          "name": "LC Waikiki",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1162192,
          "lon": 20.8008987
        },
        {
          "id": "krcGzsFOkrEqST7k61LB",
          "address": "Страшо Пинџур 2210, Пробиштип 2210, Македонија",
          "name": "Boston probistip",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.992143,
          "lon": 22.1883931
        },
        {
          "id": "kuIziFJG4uO7L3QIlWM1",
          "address": "Св. Спасо Радовишки 69, Радовиш, Македонија",
          "name": "Karpos",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.637701,
          "lon": 22.460489
        },
        {
          "id": "l5V9RCddk7xPleUgK0ML",
          "address": "Lazar Tanev, Скопје 1000, Македонија",
          "name": "Souvenir",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 42.0008421,
          "lon": 21.436606
        },
        {
          "id": "l5lqVkqTIfhsZ1fRdcLz",
          "address": "Порта Влае, Скопје 1000, Македонија",
          "name": "Beleza",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0078351,
          "lon": 21.369506
        },
        {
          "id": "l7KKafs2HWoBLHP1RHpx",
          "address": "1-ви Реон, Струга, Македонија",
          "name": "Бабуш",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1764165,
          "lon": 20.6725856
        },
        {
          "id": "lHU1MkbKCVusZlD3IDEo",
          "address": "Тетово 1220, Македонија",
          "name": "Tendjerinja tetovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9979362,
          "lon": 20.9715177
        },
        {
          "id": "lIhvWyt5yaqhnuY9gIUj",
          "address": "Булевар Партизански Одреди 43, Скопје 1000, Македонија",
          "name": "Специјал (Универзална Сала)",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9995856,
          "lon": 21.4172538
        },
        {
          "id": "lMlIFb2aB0h5IiHWktlC",
          "address": "Есперанто 169, Скопје 1000, Македонија",
          "name": "Фенси Кидс",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.007126,
          "lon": 21.3683514
        },
        {
          "id": "lXV69xRAWwIUicb47YuL",
          "address": "Општина Струга, Македонија",
          "name": "Uni Style D&A",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.1791655,
          "lon": 20.7004415
        },
        {
          "id": "lcvS3BJcOw09BEfpGRlh",
          "address": "Партизанска 3-1, Охрид 6000, Македонија",
          "name": "Kipper",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1136023,
          "lon": 20.8018613
        },
        {
          "id": "lhKNA5b1FFzSYhmP7c0M",
          "address": "XCRH+V6 Скопје, Македонија",
          "name": "МагнаСкен",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9921559,
          "lon": 21.4280657
        },
        {
          "id": "m265rtPu2vkU9UnBa7AX",
          "address": "Klenoec 6, Skopie 1000, Македонија",
          "name": "Лепа и Русе",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0060976,
          "lon": 21.3750902
        },
        {
          "id": "m6zF5aC2XNiWO51QctX8",
          "address": "Тоде Думба 70, Куманово, Македонија",
          "name": "Mar-bo kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1244911,
          "lon": 21.7295036
        },
        {
          "id": "mGUR7xjkEsVYuFSnScA2",
          "address": "1613 8, Скопје 1000, Македонија",
          "name": "ЗУР Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.980756,
          "lon": 21.4718709
        },
        {
          "id": "mGc2dt6KBB2LIXZ3PXj6",
          "address": "XCPX+6C Скопје, Македонија",
          "name": "КАМ Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9855334,
          "lon": 21.4485408
        },
        {
          "id": "mHKX107yp39NFfcPKmX1",
          "address": "Цементарница Усје, Скопје 1000, Македонија",
          "name": "Европа Гуми",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.9732829,
          "lon": 21.4572562
        },
        {
          "id": "mONfSPzanNSJgpxwoorG",
          "address": "Булевар Маршал Тито 21-9, Струмица, Македонија",
          "name": "Horizont",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.43816,
          "lon": 22.6419646
        },
        {
          "id": "mpXBhTfoMU3CcDzKjKon",
          "address": "Цано Поп Ристов 10-11, Кавадарци, Македонија",
          "name": "Avelino Shoes",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.4352341,
          "lon": 22.0117597
        },
        {
          "id": "ms1Dn9eSwy7Nbv51xdHE",
          "address": "Bulevar Makedonski Prosvetiteli 10, Охрид 6000, Македонија",
          "name": "Belona",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1155688,
          "lon": 20.8009559
        },
        {
          "id": "mvB71uM44s9tlkpruruK",
          "address": "A4, Strumicë, Македонија",
          "name": "Supermarket KAM",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4396981,
          "lon": 22.6553198
        },
        {
          "id": "mz59pNz0sBShLXwsQ8A2",
          "address": "C2M3+4V Кавадарци, Македонија",
          "name": "CodEx - computers",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4327823,
          "lon": 22.0046288
        },
        {
          "id": "n6s3a2tBQH305VCDxVZL",
          "address": "2X4H+2J Тетово, Македонија",
          "name": "Кипер Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0050636,
          "lon": 20.9790915
        },
        {
          "id": "n6wwnermBi9Q7RMN88xb",
          "address": "XCXP+WG Скопје, Македонија",
          "name": "Souvenir",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.9998108,
          "lon": 21.4363315
        },
        {
          "id": "nB6dJjqO4eV7QrcscRru",
          "address": "QWR5+73 Гостивар, Македонија",
          "name": "Kultura gostivar",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7907152,
          "lon": 20.9077023
        },
        {
          "id": "nBZpWgSPt1pSrUeDngfk",
          "address": "Debarca 31, Скопје 1000, Македонија",
          "name": "Stokomak",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9994318,
          "lon": 21.4213409
        },
        {
          "id": "nJkLJ2hwUp4i1LzrKBFc",
          "address": "Жданец 22, Скопје 1000, Македонија",
          "name": "Mak Reform Market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9945528,
          "lon": 21.388728
        },
        {
          "id": "nJwVhOJTsiT7CIZMhiNd",
          "address": "4R45+MV Охрид, Македонија",
          "name": "Kiosk",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1067374,
          "lon": 20.8097357
        },
        {
          "id": "nNOjurzT6xHGTUdESf6l",
          "address": "Сремски Фронт 6, Штип 2000, Македонија",
          "name": "Autoboss #1",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.748492,
          "lon": 22.1980528
        },
        {
          "id": "nO1PN2S9BkGaTmMnEdXL",
          "address": "Воин Драшковиќ 5, Скопје 1000, Македонија",
          "name": "Gigo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0063093,
          "lon": 21.3655868
        },
        {
          "id": "nP59BLUeiCoVqqE5f8s2",
          "address": "22-ри Октомври 35, Радовиш, Македонија",
          "name": "Next move",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.635763,
          "lon": 22.463579
        },
        {
          "id": "nRInSG3JFf3ZoCkwEH6Y",
          "address": "Џон Кенеди 41, Велес 1400, Македонија",
          "name": "Туш",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7175431,
          "lon": 21.761961
        },
        {
          "id": "nTX4nqfOYBH8a7ZcxSFX",
          "address": "Општина Куманово, Македонија",
          "name": "Nami kom kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1060671,
          "lon": 21.7555938
        },
        {
          "id": "nUT0tSbP7ZchNNiFYBU4",
          "address": "3F52+4H Радишани, Македонија",
          "name": "Кипер Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0578416,
          "lon": 21.4514677
        },
        {
          "id": "nVpQhaokmi4iCNxVcxWO",
          "address": "Покриена Чаршија 119, Скопје 1000, Македонија",
          "name": "Wedding",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0025219,
          "lon": 21.4381106
        },
        {
          "id": "nXgdpN8jCI3al4qySh3d",
          "address": "2C47+FW Скопје, Македонија",
          "name": "Slast",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0062031,
          "lon": 21.4148494
        },
        {
          "id": "nYZo6Qg2zDDwc4MTJd7K",
          "address": "4PQF+HW Куманово, Македонија",
          "name": "Му Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1388936,
          "lon": 21.7248163
        },
        {
          "id": "neOsE5yQHHyBMf0aj9oy",
          "address": "Марино, Македонија",
          "name": "Дарксофт Компјутери",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9913718,
          "lon": 21.5851057
        },
        {
          "id": "neW2Ec8DbjhrNfE2GGy6",
          "address": "Jane Sandanski 27-23, Охрид 6000, Македонија",
          "name": "Delis",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1114384,
          "lon": 20.8076057
        },
        {
          "id": "nfecSA0wLntTOcTkYGnT",
          "address": "Булевар Партизански Одреди 16, Скопје 1000, Македонија",
          "name": "Polleo",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.9987931,
          "lon": 21.4234837
        },
        {
          "id": "nnsLg1qAqb6j1dKzYDeD",
          "address": "Ресен, Македонија",
          "name": "Продавница за автоделови",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.0886144,
          "lon": 21.0137403
        },
        {
          "id": "nrBUAMzD8FBjddBfZDUR",
          "address": "Македонија",
          "name": "Луна гив пекара",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9709544,
          "lon": 22.7614669
        },
        {
          "id": "o2cP3qXZaieh5irCSRDB",
          "address": "Студентска BB, Битола 7000, Македонија",
          "name": "Стокомак",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0218074,
          "lon": 21.3280428
        },
        {
          "id": "o8vXffLS47EiFVBMY2IC",
          "address": "706, Скопје 1000, Македонија",
          "name": "Vero Centar Веро Центар",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9931873,
          "lon": 21.4413127
        },
        {
          "id": "oAH83T7wDxujwLHSuvs1",
          "address": "Аминта Трети 44, Скопје 1000, Македонија",
          "name": "Диман",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.998251,
          "lon": 21.4229234
        },
        {
          "id": "oEEQvbE1u5ifqyIlLn0X",
          "address": "4R45+CR Охрид, Македонија",
          "name": "Жито Леб",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1061074,
          "lon": 20.8095515
        },
        {
          "id": "oIjnBswnU7HuXF9TIfqf",
          "address": "A3, Ресња, Македонија",
          "name": "KAM market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0857428,
          "lon": 21.0151314
        },
        {
          "id": "oJp1wgnLJSLIbO4RwUJk",
          "address": "Прохор Пчињски 29-13, Скопје 1000, Македонија",
          "name": "Manis Shoes Acess",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0036629,
          "lon": 21.4357809
        },
        {
          "id": "oSDUu4nJGgmIx0Zu7Wte",
          "address": "Sveti Kliment Ohridski, Охрид 6000, Македонија",
          "name": "Sport m",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.1148635,
          "lon": 20.8003392
        },
        {
          "id": "oUNPVL5p306eLZMQPybl",
          "address": "5PPC+RV Стар Дојран, Македонија",
          "name": "Солун 53",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1870101,
          "lon": 22.7221786
        },
        {
          "id": "ob0WWD3faRmCnfdlDLrG",
          "address": "Даме Груев 28, Скопје 1000, Македонија",
          "name": "Коки",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.996427,
          "lon": 21.4276677
        },
        {
          "id": "ohIpAPuwVG9qpGvKi7wU",
          "address": "Камењане, Македонија",
          "name": "Saufa",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9424416,
          "lon": 20.9251687
        },
        {
          "id": "ohz45DGhn8CKtVJfGtyi",
          "address": "Фабрика Раде Кончар, Скопје 1000, Македонија",
          "name": "Малони",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9833319,
          "lon": 21.4539407
        },
        {
          "id": "opz2Rw29YTdTx1CWqQc4",
          "address": "Димитрие Чуповски 5, Скопје 1000, Македонија",
          "name": "Тримакс",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9948362,
          "lon": 21.4301392
        },
        {
          "id": "p17PNuwNQf6g78fFxyF9",
          "address": "Неименуван пат, Скопје 1000, Македонија",
          "name": "Outlet Fokabo",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0035008,
          "lon": 21.3977311
        },
        {
          "id": "p1DpqYu8bw1UxrMHKYUx",
          "address": "Sveti Kliment Ohridski, Охрид 6000, Македонија",
          "name": "La garage",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1148297,
          "lon": 20.8001856
        },
        {
          "id": "p7sY51ny6gGKg3NiKdDI",
          "address": "Булевар АСНОМ, Скопје 1000, Македонија",
          "name": "Alka-U B",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9873148,
          "lon": 21.4776722
        },
        {
          "id": "p8eqVBBXDaOZw8i6GCOv",
          "address": "2X5H+5P Тетово, Македонија",
          "name": "DV Kompani Store",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 42.0079963,
          "lon": 20.979332
        },
        {
          "id": "p8vgVvfXHCwI4oDcAmCv",
          "address": "2F36+97 Скопје, Македонија",
          "name": "Тони Тип-Топ",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 42.0034483,
          "lon": 21.4607111
        },
        {
          "id": "pOq1vOHAUMPLKzhhiKfO",
          "address": "2C42+MR Скопје, Македонија",
          "name": "Kozle",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0066913,
          "lon": 21.4021041
        },
        {
          "id": "pRIFBdYlQHcP6HCAOK2w",
          "address": "8HV2+V8 Прилеп, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3446569,
          "lon": 21.5508426
        },
        {
          "id": "pV0rKYg8IPDbC36YcfoR",
          "address": "Виенска 141, Скопје 1000, Македонија",
          "name": "TED",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9993115,
          "lon": 21.3946356
        },
        {
          "id": "pW5HZdFe3sCSOAGLU9Yp",
          "address": "Улица Свети Јоаким Осоговски 1g, Крива Паланка, Македонија",
          "name": "Боде",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1932292,
          "lon": 22.3133431
        },
        {
          "id": "pXzSt5IuIYBJKst4djEG",
          "address": "Jane Sandanski, Крива Паланка, Македонија",
          "name": "Mat Star",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.2019961,
          "lon": 22.3354725
        },
        {
          "id": "pawXwxT8vCa86z0Mr70E",
          "address": "XFM7+HX Скопје, Македонија",
          "name": "Пазарче",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9839638,
          "lon": 21.4649937
        },
        {
          "id": "pfkh6XnvctluqLDcqjQw",
          "address": "5PPC+QV Стар Дојран, Македонија",
          "name": "Лебопекара ММ",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1869576,
          "lon": 22.722192
        },
        {
          "id": "q2ElSt5DaxXBgtMvwWOF",
          "address": "XCQJ+RW Скопје, Македонија",
          "name": "TINEX",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9896032,
          "lon": 21.4323528
        },
        {
          "id": "q2RdnSEoqNjioyN2IP65",
          "address": "Мијачко Маало, Крушево, Македонија",
          "name": "Четворка",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3717509,
          "lon": 21.247311
        },
        {
          "id": "q4wdMu4mBVfVuKyPfeYv",
          "address": "Бит Пазар 2, Скопје 1000, Македонија",
          "name": "Dm",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0010275,
          "lon": 21.4396745
        },
        {
          "id": "q7fDB7upDStQaxOWqO2z",
          "address": "JFQ6+5J Радовиш, Македонија",
          "name": "Rial",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.637992,
          "lon": 22.461591
        },
        {
          "id": "q9loEIxU8RpNcQGkW4Lh",
          "address": "Шекспирова 15, Скопје 1000, Македонија",
          "name": "Print&copy",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 42.0032959,
          "lon": 21.4080771
        },
        {
          "id": "qH3pnQpOeFAadj25RyPb",
          "address": "Кујунџиска, Скопје 1000, Македонија",
          "name": "Wedding",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.001784,
          "lon": 21.4373834
        },
        {
          "id": "qNX3CfT7SahEnq1RHzdH",
          "address": "JFP7+CC Радовиш, Македонија",
          "name": "Paket market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.63606,
          "lon": 22.463585
        },
        {
          "id": "qW63jvr6AZoWTf0yjaMn",
          "address": "Анкарска 21, Скопје 1000, Македонија",
          "name": "Сито Сан",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.9973247,
          "lon": 21.4089258
        },
        {
          "id": "qa8rzmZ4I89a2xFkrewj",
          "address": "Драчево, Македонија",
          "name": "Вајота 1",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9310608,
          "lon": 21.5291548
        },
        {
          "id": "qbnkRF8g0IeaFwDZdY0d",
          "address": "Партизанска 35, Штип 2000, Македонија",
          "name": "Бисоил",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.7433985,
          "lon": 22.1927633
        },
        {
          "id": "qkbWJZPsFOlO6cFvjYgN",
          "address": "2CFP+FV Скопје, Македонија",
          "name": "Кипер Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0236333,
          "lon": 21.4371996
        },
        {
          "id": "qltRRS5lEUsiq8EWsk8v",
          "address": "Партизанска, Македонски Брод, Македонија",
          "name": "Mat Star",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.5102493,
          "lon": 21.2163859
        },
        {
          "id": "r3FC1yMMJwp6pEuvQDG9",
          "address": "Неименуван пат, Конопница, Македонија",
          "name": "Бисер",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1826982,
          "lon": 22.2933297
        },
        {
          "id": "rDvaj00svWNHdeGO2FMU",
          "address": "2C3P+5X Скопје, Македонија",
          "name": "Liver",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 42.0029518,
          "lon": 21.4374213
        },
        {
          "id": "rJm0lYh0cy9A3DAu5urT",
          "address": "Општина Тетово, Македонија",
          "name": "Big Star",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0042243,
          "lon": 20.989271
        },
        {
          "id": "rOCJ76y1KNHWzHf2Ml4T",
          "address": "1230, Македонија",
          "name": "Erol Junior",
          "category": "Авто-делови",
          "avgGrade": 0,
          "lat": 41.7991397,
          "lon": 20.9073472
        },
        {
          "id": "rOIaa8B9QyGXJ1Sc2YLA",
          "address": "P402, Скопје 1000, Македонија",
          "name": "Ta2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0030999,
          "lon": 21.3317928
        },
        {
          "id": "rYWXgPRcds62vISvQn89",
          "address": "Гоце Делчев 361-335, Охрид 6000, Македонија",
          "name": "Skor",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1232307,
          "lon": 20.7829591
        },
        {
          "id": "rbg8N5BFokqfwOtATIFk",
          "address": "XFQ3+WW Скопје, Македонија",
          "name": "Тинекс",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9897519,
          "lon": 21.4548174
        },
        {
          "id": "rblwziu2bZQr7oZVLtg9",
          "address": "P6Q2+C5 Штип, Македонија",
          "name": "КИТ ГО Супермаркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7385684,
          "lon": 22.2004899
        },
        {
          "id": "rcglchkLk1buViX7S2ii",
          "address": "Dame Gruev St 24, Dellçeva 2320, Македонија",
          "name": "Космос",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9694518,
          "lon": 22.7820669
        },
        {
          "id": "reTNCI40RBMkI2m01apJ",
          "address": "2C38+G6 Скопје, Македонија",
          "name": "Koki",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0038171,
          "lon": 21.4155593
        },
        {
          "id": "rgjeGnGLm30ZTMgpIi9w",
          "address": "R2343, Dellçeva 2320, Македонија",
          "name": "Мебел Анси",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.9711415,
          "lon": 22.771976
        },
        {
          "id": "rmjRclwiQasnjnszxBCX",
          "address": "Чегране, Македонија",
          "name": "Nusreti Magjik",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.842915,
          "lon": 20.9771137
        },
        {
          "id": "sF3zBdw4uNOIdplKOqZ0",
          "address": "Р501, Охрид, Македонија",
          "name": "Жито Леб",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1167063,
          "lon": 20.8022026
        },
        {
          "id": "sII0WIB5juxoGOIaR3pg",
          "address": "Манапо, Скопје 1000, Македонија",
          "name": "Ramstore",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0048803,
          "lon": 21.3922837
        },
        {
          "id": "sKt6FcjwVcyi88yCJ1Do",
          "address": "Лука Геров 55, Скопје 1060, Македонија",
          "name": "Воденица",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0210652,
          "lon": 21.3515617
        },
        {
          "id": "sLzGR6hkmLhisTVDyfUY",
          "address": "2C4P+88 Скопје, Македонија",
          "name": "Inter Prom",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0058286,
          "lon": 21.4358438
        },
        {
          "id": "sN7063wSe7w6koAB10jG",
          "address": "Атанас Раздолов 14b, Драчево, Македонија",
          "name": "Гиго Трејд",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9382051,
          "lon": 21.5073363
        },
        {
          "id": "scCg6qEagFFMzc1mJi57",
          "address": "Христо Татарчев 31, Скопје 1000, Македонија",
          "name": "Бурекџилница Фортуна",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9781016,
          "lon": 21.4423887
        },
        {
          "id": "scq3qrUtaT2e3BKVf21H",
          "address": "Р501, Охрид, Македонија",
          "name": "Perla",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.1171742,
          "lon": 20.8006272
        },
        {
          "id": "seqdqMMQDxLIJvoeKd1Y",
          "address": "Klimentov Univerzitet 27-86, Охрид 6000, Македонија",
          "name": "A1",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1135666,
          "lon": 20.7981028
        },
        {
          "id": "sfVqC7FvO1P0JcfLP1IE",
          "address": "Гоце Делчев 85-67, Прилеп 7500, Македонија",
          "name": "Ивеко Дизајн",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.3436608,
          "lon": 21.5451307
        },
        {
          "id": "shp5WFQlFFpiupA3t1OU",
          "address": "Општина Тетово, Македонија",
          "name": "Ramstore",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0054564,
          "lon": 20.9903256
        },
        {
          "id": "suFgVtYNqNGaTm5TqJeq",
          "address": "R1108 2, Gjevgjeli, Македонија",
          "name": "Adziko Home Center",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1392816,
          "lon": 22.503093
        },
        {
          "id": "swDSjYNNFh6bbGPzqFjo",
          "address": "Кузман Јосифоски-Питу 15, Куманово, Македонија",
          "name": "Kane kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.130618,
          "lon": 21.7166312
        },
        {
          "id": "sxxf4GVCWj4jPLZy6vyl",
          "address": "Солунска, Делчево, Македонија",
          "name": "Кит-Го Супермаркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9654181,
          "lon": 22.7713264
        },
        {
          "id": "tDxW1PCeiw0Z0K5yyUUG",
          "address": "Karpos, Radishani, Македонија",
          "name": "Чеган",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.0621317,
          "lon": 21.4507737
        },
        {
          "id": "tFPqNjuiDPxNizbNjDEb",
          "address": "Општина Тетово, Македонија",
          "name": "Ideal Home",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0053216,
          "lon": 20.9903803
        },
        {
          "id": "tHCxSbC1jzRIQkik9QlA",
          "address": "Ѓорче Петров, Скопје 1000, Македонија",
          "name": "SP Planet",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0068279,
          "lon": 21.3649348
        },
        {
          "id": "tJWyD6P3Jtv0syCiBPvb",
          "address": "Чаир, Скопје 1000, Македонија",
          "name": "Vardar",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0044094,
          "lon": 21.4408439
        },
        {
          "id": "tRsQm6vzezg7uFH4aEmc",
          "address": "293M+XF Скопје, Македонија",
          "name": "Ѕвездичка - бутик за деца",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0049879,
          "lon": 21.3836348
        },
        {
          "id": "tUmeNPdmwCmLFfPRADAR",
          "address": "20-ти Октомври 8, Скопје 1000, Македонија",
          "name": "Маркет фратели",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9994766,
          "lon": 21.4177897
        },
        {
          "id": "tbqn3jZ4sTd38Ecukcj9",
          "address": "Bulevar Kuzman Josifovski Pitu 10, Скопје 1000, Македонија",
          "name": "Slatki burek",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9913694,
          "lon": 21.4455764
        },
        {
          "id": "temwRyWHfi1ySQ5ixSep",
          "address": "Булевар Кочо Рацин 75, Скопје 1000, Македонија",
          "name": "Polleo",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.9917431,
          "lon": 21.4379332
        },
        {
          "id": "tgGtlfYV5IetHZ05oO6t",
          "address": "Бутелска 29, Скопје 1000, Македонија",
          "name": "Жито Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0372124,
          "lon": 21.4458128
        },
        {
          "id": "tlv5oihQUxc3LHCqOkxC",
          "address": "Општина Врапчиште, Македонија",
          "name": "Stadiumi i futbollit “Global Arena”",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 41.861467,
          "lon": 20.8912104
        },
        {
          "id": "to2LgLoVIrb62NHt8UXo",
          "address": "Октомвриска Револуција, Куманово, Македонија",
          "name": "КАМ",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1371766,
          "lon": 21.7272851
        },
        {
          "id": "tvAzwQhqNmZA6eKQM7NP",
          "address": "294J+MP Скопје, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0067318,
          "lon": 21.3818169
        },
        {
          "id": "tySIQAyHqFc05J528qjz",
          "address": "11-ти Октомври 67, Куманово, Македонија",
          "name": "Elida",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1355528,
          "lon": 21.7082712
        },
        {
          "id": "tyhoT1DKB3L4VTtmgvkk",
          "address": "Општина Тетово, Македонија",
          "name": "Arena Sport",
          "category": "Спортска опрема",
          "avgGrade": 0,
          "lat": 42.0055744,
          "lon": 20.9902565
        },
        {
          "id": "u1StVqCoH9MLbBiFJnl9",
          "address": "4R76+8R Охрид, Македонија",
          "name": "Tamaro",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1133538,
          "lon": 20.8120861
        },
        {
          "id": "u4zGPgqxQP1gmBUlxL5h",
          "address": "Подкнежино, Кичево, Македонија",
          "name": "Atva",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5115584,
          "lon": 20.9511304
        },
        {
          "id": "u93vQxbjsHdgAY9khDpi",
          "address": "Булевар Партизански Одреди 42, Скопје 1000, Македонија",
          "name": "Mat star",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.9995328,
          "lon": 21.4173835
        },
        {
          "id": "uF6gVHwe8CR4OpROzS8b",
          "address": "Неименуван пат, Струмица, Македонија",
          "name": "Roko 2000",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4463225,
          "lon": 22.6528305
        },
        {
          "id": "ugHP2WY8Ka3cCryy9ljt",
          "address": "Максим Горки 16, Скопје 1000, Македонија",
          "name": "Giftshop Grin",
          "category": "Сувенири",
          "avgGrade": 0,
          "lat": 41.9959669,
          "lon": 21.4288114
        },
        {
          "id": "uofhgzIo32Tpvf5l5mCK",
          "address": "Алија Изетбегович, Лабуништа 6336, Македонија",
          "name": "Нуредини 2016 (2)",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.2683315,
          "lon": 20.5958701
        },
        {
          "id": "uypdzUd7Zqbwd4wcS5AC",
          "address": "R1102, Petroveci 1047, Македонија",
          "name": "Леон",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9371567,
          "lon": 21.6178398
        },
        {
          "id": "v82BuOGcVEDswi0ej8CM",
          "address": "Луј Пастер 12, Скопје 1000, Македонија",
          "name": "Peko",
          "category": "Обувки",
          "avgGrade": 0,
          "lat": 41.9929699,
          "lon": 21.429947
        },
        {
          "id": "vLLG4SZfISNQz03J4yN7",
          "address": "Никола Парапунов 5, Скопје 1000, Македонија",
          "name": "Ралекс Маркет",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0058308,
          "lon": 21.3818221
        },
        {
          "id": "vMtZzygquCM9S6szaulY",
          "address": "Перо Наков 40, Скопје 1000, Македонија",
          "name": "De-Ta",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9975092,
          "lon": 21.487832
        },
        {
          "id": "vU4XHhD9nbCPApmnIYD3",
          "address": "Партизанска, Штип 2000, Македонија",
          "name": "Нептун",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.7434438,
          "lon": 22.1918577
        },
        {
          "id": "vYWrMTSSrks3QXfN3qTA",
          "address": "Тетово 1220, Македонија",
          "name": "Кипер",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9223711,
          "lon": 20.9153603
        },
        {
          "id": "vZ3GLI9i7mY3brWT9Oh8",
          "address": "11-ти Октомври 25, Скопје 1000, Македонија",
          "name": "Sara fashion",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9893258,
          "lon": 21.4356511
        },
        {
          "id": "vjzEul28qIMe8iqEM4YH",
          "address": "Општина Делчево, Македонија",
          "name": "Наум",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.9705216,
          "lon": 22.7766785
        },
        {
          "id": "vpvvi0EYk4wEMJiv0X9e",
          "address": "Општина Тетово, Македонија",
          "name": "Tudors",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0044551,
          "lon": 20.989442
        },
        {
          "id": "vr208BlgdxQruV7WvA87",
          "address": "Мајка Тереза 21, Скопје 1000, Македонија",
          "name": "Sveti Nikole",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9904388,
          "lon": 21.4205283
        },
        {
          "id": "vrYby8ZwnSiWpzvT5Hm1",
          "address": "11-ти Октомври 3, Скопје 1000, Македонија",
          "name": "Breadway Bakery",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9953181,
          "lon": 21.432686
        },
        {
          "id": "vx7Hb2pL6HtQjjZqasTa",
          "address": "4PVR+WH Куманово, Македонија",
          "name": "Centrobiznis 3 kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1448318,
          "lon": 21.7414395
        },
        {
          "id": "w4vRLX6cNOp0VhMEm8CF",
          "address": "4RC7+36 Охрид, Македонија",
          "name": "Top market",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1202066,
          "lon": 20.8130308
        },
        {
          "id": "w6hZthbS7KlP59h3Rk6T",
          "address": "Општина Тетово, Македонија",
          "name": "Coin Casa",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 42.0054179,
          "lon": 20.9904373
        },
        {
          "id": "w7xlwt4b7lxw1Ivq14Pf",
          "address": "Ванчо Прке, Штип 2000, Македонија",
          "name": "Зендолино",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7383854,
          "lon": 22.1959129
        },
        {
          "id": "wCZuYlBXhYSTjNFEmrHb",
          "address": "A3 153, Ѕвегор, Македонија",
          "name": "Mederevec (Mini Market)",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9663717,
          "lon": 22.8019192
        },
        {
          "id": "wCp3hTERz3E1vtfLnF1f",
          "address": "Стар Караорман, Македонија",
          "name": "Set union Karaorman",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7813247,
          "lon": 22.2036689
        },
        {
          "id": "wLffZ5q12DuXELZ7vJaE",
          "address": "Кавадарци, Македонија",
          "name": "Kit-go market;MaxiD",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4333208,
          "lon": 22.0115983
        },
        {
          "id": "wW1SbHz3XW4OCVjTbpE1",
          "address": "Bulevar Makedonski Prosvetiteli, Охрид 6000, Македонија",
          "name": "Жито Леб",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.1135156,
          "lon": 20.8000105
        },
        {
          "id": "wZtvBCMrZs7BWK13a6Mi",
          "address": "4PQ5+C3 Куманово, Македонија",
          "name": "STC Supermarket 2",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1386079,
          "lon": 21.7077221
        },
        {
          "id": "watMynJxjD0c1hyzfFI6",
          "address": "32Q6+JH Ресен, Македонија",
          "name": "Стар пазар",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0890885,
          "lon": 21.0114252
        },
        {
          "id": "wcMxUULK1PYNIr5xS25f",
          "address": "C2M7+G3 Кавадарци, Македонија",
          "name": "T-Mobile",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.4337894,
          "lon": 22.0126691
        },
        {
          "id": "wciyUlB3YhYSl1ClD79C",
          "address": "Алберт Станиќ 21, Скопје 1000, Македонија",
          "name": "Hajri Kompani",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0046727,
          "lon": 21.4370024
        },
        {
          "id": "wdzvMgXrA1cO6JKt76iZ",
          "address": "Христо Татарчев 45, Скопје 1000, Македонија",
          "name": "Москва",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9755235,
          "lon": 21.4443097
        },
        {
          "id": "wkEe9UVIheEymhSe5qnZ",
          "address": "Беличица 87, Гостивар 1230, Македонија",
          "name": "Setek",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.7914741,
          "lon": 20.9146988
        },
        {
          "id": "wqfGQUEjVKz5l7umzRqi",
          "address": "4R93+P2 Охрид, Македонија",
          "name": "KCD Ohrid",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 41.1193153,
          "lon": 20.8025995
        },
        {
          "id": "wqhQ6UKySaXwUzDjYRSY",
          "address": "ул.21 14, Куманово, Македонија",
          "name": "Centrobiznis 2 kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1558735,
          "lon": 21.7333698
        },
        {
          "id": "wuiAbJ6hwyc4TbvBO58x",
          "address": "32P7+39 Ресен, Македонија",
          "name": "Нов Пазар",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0852468,
          "lon": 21.0134783
        },
        {
          "id": "wuj6eJElQNrQ5d2qQSgb",
          "address": "Неименуван пат, Скопје 1000, Македонија",
          "name": "Oxxo",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0034872,
          "lon": 21.3978422
        },
        {
          "id": "x1iaqE57lftnfNG34GJz",
          "address": "Општина Куманово, Македонија",
          "name": "LC Waikiki",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.1344378,
          "lon": 21.719337
        },
        {
          "id": "x4oKarfYm0KvFvSVMwGr",
          "address": "Marsal Tito 107, Битола, Македонија",
          "name": "Stil",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.0260563,
          "lon": 21.3367783
        },
        {
          "id": "xJYLGN9FWJEBrqJC4hwP",
          "address": "Самарџиска 1000, Скопје 1000, Македонија",
          "name": "Wedding",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0026402,
          "lon": 21.437944
        },
        {
          "id": "xOtGxfX6Ihn8mausBTT2",
          "address": "Свети Николе, Македонија",
          "name": "Сани",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.8648978,
          "lon": 21.9426976
        },
        {
          "id": "xRgyFFigc53CXwSqGNkb",
          "address": "11-ти Октомври 8, Скопје 1000, Македонија",
          "name": "Bakal bakery Cafe",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.9947174,
          "lon": 21.4328019
        },
        {
          "id": "xUw3WM25EZu7vxPOwSNW",
          "address": "Карпош Војвода, Охрид 6000, Македонија",
          "name": "Stop Shop",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1129412,
          "lon": 20.8167418
        },
        {
          "id": "xe4cknWvBBI2qJpmvqO8",
          "address": "Радовиш, Македонија",
          "name": "Paket market 30",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.632333,
          "lon": 22.4745101
        },
        {
          "id": "xhOWtzpJlYQ6ZVPQR2mn",
          "address": "Чаир, Скопје 1000, Македонија",
          "name": "Wedding",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.9997862,
          "lon": 21.4397628
        },
        {
          "id": "xvcQNxEDTV6gst41q6hh",
          "address": "Ѓорѓи Капчев 15 9-1, Скопје 1000, Македонија",
          "name": "Елиса",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9751785,
          "lon": 21.4861998
        },
        {
          "id": "xwdanTMv1w0I5xtU01UE",
          "address": "4R82+HC Охрид, Македонија",
          "name": "Outlet",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 41.1164856,
          "lon": 20.8010424
        },
        {
          "id": "y5ezHLu7D4rnlciHGJdS",
          "address": "2CFH+WC Скопје, Македонија",
          "name": "Neptune",
          "category": "Електроника и компјутери",
          "avgGrade": 0,
          "lat": 42.0248156,
          "lon": 21.4285004
        },
        {
          "id": "yBwU2UddrnzWENsTbpt4",
          "address": "Буковска, Битола, Македонија",
          "name": "Беком",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.0158544,
          "lon": 21.3437147
        },
        {
          "id": "yCaOPx6pZCgCYMKRyYQt",
          "address": "Кеј Маршал Тито 11, Штип 2000, Македонија",
          "name": "Тинекс",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7368407,
          "lon": 22.1920509
        },
        {
          "id": "yEgE8AgBVbZKyUgPR1sx",
          "address": "Лазар Трповски, Скопје 1000, Македонија",
          "name": "Prince",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0197651,
          "lon": 21.4350123
        },
        {
          "id": "yIb2KkpOvPWFdpjpiZBL",
          "address": "R1102 101, Македонија",
          "name": "Мебел Ви",
          "category": "Мебел",
          "avgGrade": 0,
          "lat": 41.7448123,
          "lon": 21.7721311
        },
        {
          "id": "yZLZr2ATygbut6COAvx7",
          "address": "Панче Камџик, Тетово 1220, Македонија",
          "name": "Tinex tetovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0084835,
          "lon": 20.9710281
        },
        {
          "id": "yeCwp4yuconkRtTS0Tbw",
          "address": "4P8Q+8F Куманово, Македонија",
          "name": "Stena Mag",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.1158085,
          "lon": 21.7386693
        },
        {
          "id": "yffwlHecPllyE409fYGm",
          "address": "R1103, Кавадарци, Македонија",
          "name": "Tinex",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.4336677,
          "lon": 22.0125082
        },
        {
          "id": "yfski0MTgVG61Lxter95",
          "address": "22-ри Октомври 10, Радовиш, Македонија",
          "name": "Matej",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.634101,
          "lon": 22.464821
        },
        {
          "id": "yseTzLc4rUs0M8bEKQJ6",
          "address": "Радовиш, Македонија",
          "name": "Sony Megastore",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.63324,
          "lon": 22.464931
        },
        {
          "id": "z7jKnYHRy56BxUENqV8a",
          "address": "Козле 96, Скопје 1000, Македонија",
          "name": "Stokomak",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9949944,
          "lon": 21.3945748
        },
        {
          "id": "z9GtFBYtJ9qUSlJjNLgp",
          "address": "Кеј Маршал Тито 19, Штип 2000, Македонија",
          "name": "KAM",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.7371532,
          "lon": 22.1931572
        },
        {
          "id": "zALOGMhK00mlE8VwbPDf",
          "address": "Општина Ново Село, Македонија",
          "name": "Колид",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3812351,
          "lon": 22.8136456
        },
        {
          "id": "zFA6Ekuy8HQg1Qh3bJQS",
          "address": "706, Скопје 1000, Македонија",
          "name": "Веро 9",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9930392,
          "lon": 21.4414652
        },
        {
          "id": "zJ2kBsbXioPmlUeHIuBL",
          "address": "28G5+8H Битола, Македонија",
          "name": "MARKET IN",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.02582,
          "lon": 21.3089047
        },
        {
          "id": "zJ6U1zHzMvfMoqHxnT87",
          "address": "Партизанска 104, Битола, Македонија",
          "name": "Џеко",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.0244995,
          "lon": 21.3194827
        },
        {
          "id": "zJ7jG9Hme9NicoJfOEnF",
          "address": "Партизанска 39, Радовиш, Македонија",
          "name": "Makom",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.637826,
          "lon": 22.464258
        },
        {
          "id": "zMvtyvmCCbuywHb0jDKw",
          "address": "Маршал Тито, Куманово, Македонија",
          "name": "Tinex kumanovo",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.135562,
          "lon": 21.7187075
        },
        {
          "id": "zSadogXw694K3e6RIbZ4",
          "address": "Исаија Мажовски 43, Скопје 1000, Македонија",
          "name": "Krofnite od Hrom",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 42.003998,
          "lon": 21.3717776
        },
        {
          "id": "zUiZ8mJlzeW2clrLKi4Y",
          "address": "Браќа Ламески 38-42, Прилеп 7500, Македонија",
          "name": "Футура",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.3469593,
          "lon": 21.5560579
        },
        {
          "id": "zYMhvswYN6kXOsxlSan9",
          "address": "28JM+C8 Битола, Македонија",
          "name": "Фреш",
          "category": "Пекари",
          "avgGrade": 0,
          "lat": 41.0310652,
          "lon": 21.3332723
        },
        {
          "id": "zdzbs8eZiDxmhdHaZJ50",
          "address": "GX53+3V Кичево, Македонија",
          "name": "Атва",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.5076915,
          "lon": 20.9546721
        },
        {
          "id": "zmOQsO5GPrzXhfYqr0nt",
          "address": "Општина Тетово, Македонија",
          "name": "Penti",
          "category": "Бутицни",
          "avgGrade": 0,
          "lat": 42.0045593,
          "lon": 20.9895168
        },
        {
          "id": "zpZHzDvhPzsZ4mtsmmUO",
          "address": "4R65+W3 Охрид, Македонија",
          "name": "Don",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.1122553,
          "lon": 20.8076362
        },
        {
          "id": "ztRQK8IBRfU6nm2232RD",
          "address": "P5PR+QX Штип, Македонија",
          "name": "Венеција",
          "category": "Книжарници",
          "avgGrade": 0,
          "lat": 41.7369419,
          "lon": 22.1924733
        },
        {
          "id": "zumoztQxx0kmGvP45sFq",
          "address": "Grigor Prlicev 24, Dellçeva, Македонија",
          "name": "Коста груп",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 41.9700177,
          "lon": 22.7795045
        },
        {
          "id": "zuqbC8ALF9Rb1bIQHcyy",
          "address": "3F32+HW Радишани, Македонија",
          "name": "Еци",
          "category": "Маркети",
          "avgGrade": 0,
          "lat": 42.0538936,
          "lon": 21.4522939
        }
      ]))
      setIsLoading(false);
    };
    loadEffect();
    // ON MOUNT CONSTRUCTOR
    return () => {
      //ON DISMOUNT DESTRUCTOR
    };
  }, []);
  return (
    <>
      <div className="headerStyle">
        {activeTab !== "404" && (
          <DesktopHeader onClick={(value) => setActiveTab(value)} />
        )}
      </div>
      {/* <AddDataToDb />  SO OVA SE DODADOA SITE PODATOCI U BAZA */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/stores" element={<StoreContainer />} />
        <Route path="/stores/:id" element={<SingleShop />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* {isLoading && <LoadingComponent />} */}

      {/* <AddDataToDb /> */}
      {/* <Places /> */}
    </>
  );
}

export default App;
