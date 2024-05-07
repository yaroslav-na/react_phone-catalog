import React, { FC, ComponentProps } from 'react';
import cn from 'classnames';

import classes from './icon.module.scss';

type Props = ComponentProps<'div'>;

export const IconWrapper: FC<Props> = ({ className, ...props }) => {
  return <div {...props} className={cn(classes.icon, className)} />;
};
