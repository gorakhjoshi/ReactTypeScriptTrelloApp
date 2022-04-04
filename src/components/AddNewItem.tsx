import { useState } from "react";
import { AddItemButton } from "../styles/styles";

interface AddNewItemProps {
  toggleButtonText: string;
  //   odAdd(text: string): void;
  dark: boolean;
}

function AddNewItem({ toggleButtonText, dark }: AddNewItemProps) {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <div>Hello</div>;
  }

  return (
    <AddItemButton onClick={() => setShowForm(true)} dark={dark}>
      {toggleButtonText}
    </AddItemButton>
  );
}

export default AddNewItem;
