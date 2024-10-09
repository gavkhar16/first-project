import React from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Third = () => {
  return (
    <div className="container">
      <Header headerText="Это третья страница" headerType="h2" />

      <section className="intro-section">
        <p>
          На этой странице вы найдёте новые материалы и ресурсы для вашего
          удобства. Продолжайте следить за нашими обновлениями.
        </p>
      </section>

      <section className="image-section">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Пример изображения для третьей страницы"
          className="example-image"
        />
      </section>

      <section className="button-section">
        <Button buttonText="Далее"/>
      </section>
    </div>
  );
};
