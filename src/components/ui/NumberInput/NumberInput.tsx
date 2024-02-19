import { InputNumber } from "antd";

interface NumberInputProps {
  min: number;
  max: number;
  defaultValue: number;
  onChange?: (value: number | null) => void;
  name?: string;
  className?: string;
}

const NumberInput = ({
  onChange,
  min,
  max,
  defaultValue,
  name,
  className,
}: NumberInputProps) => {
  return (
    <InputNumber
      min={min}
      max={max}
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      className={className}
    />
  );
};

export default NumberInput;
