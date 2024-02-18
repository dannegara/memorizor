import { InputNumber } from "antd";

interface NumberInputProps {
  min: number;
  max: number;
  defaultValue: number;
  onChange?: (value: number | null) => void;
  name?: string;
}

const NumberInput = ({
  onChange,
  min,
  max,
  defaultValue,
  name,
}: NumberInputProps) => {
  return (
    <InputNumber
      min={min}
      max={max}
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
    />
  );
};

export default NumberInput;
