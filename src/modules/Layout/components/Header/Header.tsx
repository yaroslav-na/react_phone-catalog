import React, { ComponentProps, FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Logo from '../../../../assets/img/Logo.png';

import { Icon } from '../../../shared/ui/Icon';
import { MenuItem } from '../../types';
import { HeaderMenuList } from '../HeaderMenuList';
import { CartLink } from './CartLink';
import { useHeader } from './useHeader';
import { FavouritesLink } from './FavouritesLink';
import classes from './header.module.scss';

type Props = ComponentProps<'header'> & {
  links: MenuItem[];
};

export const Header: FC<Props> = ({ className, links, ...props }) => {
  const [isMenuOpen, toggleIsMenuOpen] = useHeader();

  return (
    <header {...props} className={cn(classes.header, className)}>
      <Link to={'/'} className={classes.header__logo}>
        <img className={classes.header__logoImg} src={Logo} alt="LOGO" />
      </Link>

      <nav
        onClick={() => toggleIsMenuOpen(false)}
        className={cn(classes.header__nav, {
          [classes.header__nav_open]: isMenuOpen,
        })}
      >
        <HeaderMenuList items={links} />

        <div className={classes.header__iconLinks}>
          <FavouritesLink />
          <CartLink />
        </div>
      </nav>

      <button
        title="menu"
        className={classes.header__burgerMenu}
        onClick={toggleIsMenuOpen.bind(null, undefined)}
      >
        <Icon variant={isMenuOpen ? 'cross' : 'menu'} />
      </button>
    </header>
  );
};
