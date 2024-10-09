import React from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Fourth = () => {
  return (
    <div className="container">
      <Header headerText="Это четвёртая страница" headerType="h2" />

      <section className="intro-section">
        <p>
          Добро пожаловать на четвёртую страницу! Мы благодарим вас за интерес к
          нашему проекту и надеемся, что вы найдёте здесь что-то полезное.
        </p>
      </section>

      <section className="image-section">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Пример изображения для четвёртой страницы"
          className="example-image"
        />
      </section>

      <section className="button-section">
        <Button buttonText="Далее"/>
      </section>
    </div>
  );
};
