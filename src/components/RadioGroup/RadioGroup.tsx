import React, { useCallback, useState } from "react";
import { RadioItem, RadioItemLabel, RadioItemValue } from "../RadioItem";
interface Props {
  /**
   *List of mutually exclusive, single select radio items to be provided by the RadioGroup. Label is the content presented to user, Value is the radio input value that can be submitted to a form
   */
  items: { label: RadioItemLabel; value: RadioItemValue }[];
  className?: string;
  initialValue?: RadioItemValue;
  onChange?: (value: RadioItemValue) => void;
}

export function RadioGroup({
  items,
  className,
  initialValue,
  onChange,
}: Props): React.ReactElement {
  const [value, setValue] = useState<string | undefined>(initialValue);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onChange?.(event.target.value);
    },
    [onChange],
  );

  return (
    <div className={className} data-testid="design-system-radio-group">
      {items.map((item, i) => {
        return (
          <RadioItem
            onChange={handleChange}
            isSelected={item.value === value}
            key={i}
            value={item.value}
          >
            {item.label}
          </RadioItem>
        );
      })}
    </div>
  );
}
