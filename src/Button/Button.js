import React from "react";
import "./Button.scss";

export default function Button(props) {
  const onclick = () => {
    if (props.action) {
      props.action();
    }
  };
  const buttonClassList = ["button"];
  let buttonText = "";

  if (props.type === "add") {
    buttonClassList.push("add-button");
    buttonText = "Добавить";
  } else if (props.type === "delete") {
    buttonClassList.push("delete-button");
    buttonText = "Удалить";
  } else if (props.type === "clean") {
    buttonClassList.push("clean-button");
    buttonText = "Очистить корзину";
  }

  return (
    <button className={buttonClassList.join(" ")} onClick={onclick}>
      {buttonText}
    </button>
  );
}
