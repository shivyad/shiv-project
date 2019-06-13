import React from 'react'
import BackgroundImage from 'gatsby-background-image';
import Pattern from '../../images/pattern.gif';
export default function backgroundSection({
    img,
    styleClass,
    title,
    children
}) {
    return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-6 font-weight-bold mb-0">
          {title}
      </h1>
      {children}
      <div className="img">
        <img src={Pattern} alt="pattern" />
      </div>
    </BackgroundImage>
    );
}

backgroundSection.defaultProps = {
    title: "default title",
    styleClass: "default-background"
};