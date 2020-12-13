import React from "react";

export default function ContactCard(props) {
console.log(props)
  return (
    <div className="contactCard container">
      <img
        src={props.contact.imgUrl}
        alt={props.contact.altImg}
        height={"200px"}
        width={"150px"}
      />
      <p title="name">{props.contact.name}</p>
      <p>{props.contact.phone}</p>
      <p>{props.contact.email}</p>
    </div>
  );
}
