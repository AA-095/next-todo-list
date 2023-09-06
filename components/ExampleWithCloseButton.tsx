import { FC } from "react";
import { CloseButton } from "./CloseButton";

const handleDeleteClick = () => {
  alert("Deleted!");
};

export const ExampleWithCloseButton: FC = () => {
  return (
    <div>
      <p>お弁当を作る <CloseButton onClick={handleDeleteClick} /></p>
      <p>洗濯物を干す <CloseButton onClick={handleDeleteClick} /></p>
    </div>
  );
};
