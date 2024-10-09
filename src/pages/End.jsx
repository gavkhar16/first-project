import React from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const End = () => {
  return (
    <div className="container">
      <Header headerText="Это финальная страница" headerType="h2" />

      <section className="intro-section">
        <p>
          Спасибо, что прошли с нами через все страницы. Это финальная страница,
          где мы подводим итоги и выражаем благодарность нашим пользователям.
        </p>
      </section>

      <section className="image-section">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Пример изображения для финальной страницы"
          className="example-image"
        />
      </section>

      <section className="button-section">
        <Button buttonText="Далее"/>
      </section>
    </div>
  );
};
