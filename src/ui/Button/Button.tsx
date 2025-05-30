import React, {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

import cls from "./Button.module.scss";
import type IconComponent from "../icons/IconComponent";
import { classNames } from "../../helpers/classNames";

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  ICON = "icon",
}

type Props = {
  onClick?: (e: MouseEvent) => void;
  className?: string;
  variant?: ButtonVariants;
  type?: "button" | "submit";
  disabled?: boolean;
  Icon?: typeof IconComponent | null;
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

// const getBtnStyles = (variant: ButtonVariants) => {
//   switch (variant) {
//     case ButtonVariants.PRIMARY: {
//       return css`
//         background: ${colors.ctaPrimary};
//         color: ${colors.invertColor || "var(--content-900)"};

//         svg {
//           stroke: ${colors.invertColor || "var(--content-900)"};

//           path {
//             stroke: ${colors.invertColor || "var(--content-900)"};
//           }
//         }
//       `;
//     }
//     case ButtonVariants.SECONDARY: {
//       return css`
//         border: 1.5px solid ${colors.ctaPrimary};
//         background: ${colors.cta10};
//         color: ${colors.ctaPrimary};

//         svg {
//           stroke: ${colors.ctaPrimary};

//           path {
//             stroke: ${colors.ctaPrimary};
//           }
//         }
//       `;
//     }
//     case ButtonVariants.ICON: {
//       return css`
//         border: 1.5px solid ${colors.ctaPrimary};
//         background: ${colors.cta10};
//         height: auto;
//         color: ${colors.ctaPrimary};

//         svg {
//           stroke: ${colors.ctaPrimary};
//         }

//         &:hover {
//           background: ${colors.ctaPrimary};
//         }
//       `;
//     }
//   }
//   return undefined;
// };

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  disabled = false,
  type = "button",
  variant = ButtonVariants.PRIMARY,
  Icon,
  title,
  style,
}) => {
  return (
    <button
      title={title}
      className={classNames(cls.Button, { [cls[variant]]: true }, [className])}
      // css={getBtnStyles(variant)}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={style}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
