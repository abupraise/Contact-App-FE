import React from "react";
import AddContact from "../../assets/211797_personadd_icon.png";
import ViewContact from "../../assets/211605_contact_icon.png";
import PhoneIcon from "../../assets/211849_iphone_icon.png";

const Work = () => {
  const workInfoData = [
    {
      image: PhoneIcon,
      title: "Register",
      text: "Start by registering your account with us to securely store and manage your contacts.",
    },
    {
      image: AddContact,
      title: "Add Contacts",
      text: "Easily add new contacts to your account with our user-friendly interface.",
    },
    {
      image: ViewContact,
      title: "View Contacts",
      text: "Access your complete list of contacts anytime.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Effortlessly <b>Add, Organize and Connect</b> with your contacts using
          our streamlined and intuitive interface.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" className="purple-icon" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
