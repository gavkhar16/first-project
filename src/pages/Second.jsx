import React from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

 const Second = () => {
  return (
    <div className="container">
      <Header headerText="Это вторая страница" headerType="h2" /> 
      <section className="intro-section">
        <p>
          На второй странице мы предлагаем вам ещё больше информации и полезных
          материалов. Мы постоянно работаем над улучшением нашего проекта.
        </p>
      </section>

      <section className="image-section">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Пример изображения для второй страницы"
          className="example-image"
        />
      </section>

      <section className="button-section">
        <Button  buttonText="Далее"/>
      </section>
    </div>
  );
};
export default Second;