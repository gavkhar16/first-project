import React from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Fifth = () => {
  return (
    <div className="container">
      <Header headerText="Это пятая страница" headerType="h2" />

      <section className="intro-section">
        <p>
          Последние новости и обновления доступны на этой странице. Следите за
          нашими достижениями, и будьте в курсе всех изменений.
        </p>
      </section>

      <section className="image-section">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Пример изображения для пятой страницы"
          className="example-image"
        />
      </section>

      <section className="button-section">
        <Button buttonText="Далее" navigateTo="/end"/>
      </section>
    </div>
  );
};
