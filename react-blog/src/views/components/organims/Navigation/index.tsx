// third party
import { useNavigate } from 'react-router'

import "./index.scss";

export interface NavigationProps {
  title: string;
  navItems: string[];
}

export const Navigation = (props: NavigationProps) => {
  const {title, navItems} = props;
  const navigate = useNavigate()
  
  return (
    <nav className="navigation__wrapper bg-light">
      <div className="navigation__title" onClick={() => navigate("/")}>
        {title}
      </div>
      <div className="navigation__nav-items">
        {navItems.map(navItem => (
          <div className="navigation__nav-item" onClick={() => navigate(`/${navItem}.md`)}>
            {navItem}
          </div>
        ))}
      </div>      
    </nav>
  )
}