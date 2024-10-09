import React from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const First = () => {
  return (
    <div className="container">
      <Header headerText="Это первая страница" headerType="h1" />
      <section className="intro-section">
        <p>
          Добро пожаловать на нашу первую страницу! Здесь вы найдете полезную
          информацию и узнаете больше о нашем проекте. Мы стремимся предложить
          лучшее для вас.
        </p>
      </section>

      <section className="image-section">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Пример изображения"
          className="example-image"
        />
      </section>

      <section className="button-section">
        <Button buttonText="Далее"/>
      </section>
    </div>
  );
};

export default First