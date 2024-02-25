import React from "react";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./card.scss";

export interface CardProps {
  cardClassName?: "card-sm" | "card-link";
  img?: string;
  title?: JSX.Element | string;
  datetime?:string;
  content: JSX.Element | string;
  homeLink?: boolean;
  onClick?: () => void;
}

export const Card = ({cardClassName="card-sm", ...props}: CardProps) => {
  const {title, content, datetime, img, homeLink, onClick} = props;

  return (
    <div className="card-wrapper">
      <div className={cardClassName} onClick={onClick}>
        {title && 
          <div className="card-title">
            {title}
            <hr />
          </div>
        }
        {datetime && 
          <div className="card-datetime">
            {datetime}
          </div>
        }
        {img && 
          <div className="card-img">
            <img src={img} alt="" width={"180px"} height={"180px"} style={{borderRadius: "100px"}}/>
          </div>
        }
        <div className={title ? "card-content" : "card-content-only"}>
          {content}  
        </div>
        {homeLink && 
          <div className="home-link">
            <div className="home-link-icon">
              <BsHouse size={"30px"}/>
            </div>
            <div className="home-link-content">
              <Link to={"/"} >Homeに戻るよ</Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
}