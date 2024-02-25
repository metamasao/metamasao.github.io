import {BsList} from "react-icons/bs";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { SearchForm } from "../../molecules/SearchForm/Index";
import "./index.scss";

export interface NavProps {
  title: string;
  onSidebarClick?: () => void;
}

export const Nav = (props: NavProps) => {
  const {title, onSidebarClick} = props

  const navigate = useNavigate()
  const onHomeClick = () => {
    navigate("/")
  }

  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="sidebar-icon" onClick={onSidebarClick}>
          <BsList size={"40px"}/>
        </div>
        <div className="nav-home" onClick={onHomeClick}>{title}</div>
        <div className="nav-form"><SearchForm /></div>
      </div>
    </div>
  )
}
