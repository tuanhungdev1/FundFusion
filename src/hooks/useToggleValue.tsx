import { useState } from "react";

export default function useToogleValue(initialValue = false): {
  value: boolean;
  handleToogleValueClick: () => void;
} {
  const [value, setValue] = useState(initialValue);

  const handleToogleValueClick = () => {
    setValue(!value);
  };
  return {
    value,
    handleToogleValueClick,
  };
}
