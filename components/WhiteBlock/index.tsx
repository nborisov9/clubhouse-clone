import clsx from 'clsx';
import styles from './WhiteBlock.module.scss';

interface WhiteBlockProps {
  className?: string;
  children: React.ReactNode;
}

export const WhiteBlock: React.FC<WhiteBlockProps> = ({ children, className }) => (
  <div className={clsx(styles.block, className)}>{children}</div>
);
