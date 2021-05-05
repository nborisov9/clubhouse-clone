import clsx from 'clsx';

import styles from './Button.module.scss';

const colors = {
  green: styles.buttonGreen,
  gray: styles.buttonGray,
  blue: styles.buttonBlue,
};

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  color?: keyof typeof colors;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = props => {
  const { children, disabled, color, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(className, styles.button, colors[color])}
      disabled={disabled}>
      {children}
    </button>
  );
};
