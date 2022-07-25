/** @jsxImportSource @emotion/react */
import React from "react";
import { Theme } from "../../theme";
import { css } from "@emotion/react";

interface OptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  label: string;
}

interface SelectProps {
  options: OptionProps[];
  defaultValue: string;
  size?: "small" | "medium" | "large";
  onChange?: React.ChangeEventHandler;
  style?: React.CSSProperties;
}

interface SelectStyles {
  select: React.CSSProperties;
  options: React.CSSProperties;
}

const Button = ({ options, defaultValue, size, onChange, style }: SelectProps): JSX.Element => {
  const styles: SelectStyles = {
    select: {
      fontSize: Theme.font.size[size || "main"],
      fontFamily: Theme.font.family.main,
      color: Theme.colors.primary.main,
      background: Theme.colors.background.light,
      border: `1px solid ${Theme.colors.primary.dark}`,
    },
    options: {},
  };

  return (
    <select defaultValue={defaultValue} onChange={onChange} css={css({ ...styles.select, ...style })}>
      {options.map((option, index) => (
        <option key={index} value={option.value} css={css({ ...styles.options })}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Button;
