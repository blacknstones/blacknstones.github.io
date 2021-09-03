import React from "react";
import LinkedinIcon from "../../assets/logo/linkedin.png";
import GithubIcon from "../../assets/logo/github.png";
import InstaIcon from "../../assets/logo/insta.png";
import EmailIcon from "../../assets/logo/email-pink.png";
import LinkItem from "./LinkItem";

const SocialLinks: React.FC = () => {
  const links = [
    {
      icon: GithubIcon,
      title: "GitHub",
      hoverTitle: "blacknstones",
      link: "https://github.com/blacknstones",
    },
    {
      icon: LinkedinIcon,
      title: "LinkedIn",
      hoverTitle: "Yanwei Zhu",
      link: "https://www.linkedin.com/in/yanwei-zhu-3972a917b/",
    },
    {
      icon: InstaIcon,
      title: "Instagram",
      hoverTitle: "blacknstones",
      link: "https://www.instagram.com/blacknstones/",
    },
    {
      icon: EmailIcon,
      title: "Email",
      hoverTitle: "blacknstones@gmail.com",
      link: "mailto: blacknstones@gmail.com",
    },
  ];

  return (
    <ul className="layout-container text">
      {links.map((item) => (
        <LinkItem item={item} />
      ))}
    </ul>
  );
};

export default SocialLinks;
