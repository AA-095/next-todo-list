import { FC } from "react";
import { CloseButton } from "./CloseButton";

const handleDeleteClick = () => {
  alert("Deleted!");
};

export const ExampleWithCloseButton: FC = () => {
  return (
    <div>
      <p>ご飯を作る <CloseButton onClick={handleDeleteClick} /></p>
      <p>洗濯をする <CloseButton onClick={handleDeleteClick} /></p>
    </div>
  );
};
