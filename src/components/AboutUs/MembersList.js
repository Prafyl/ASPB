import React from "react";

import Member from "./Member";

const MembersList = () => {
  const people = [
    {
      id: 1,
      name: "Praful Bhatt",
      role: "Co-Founder & Web Developer",
      imageUrl: "/images/praful.jpeg",
      desc: "Praful drives the technical strategy of the flowbite platform and brand.",
    },
    {
      id: 2,
      name: "Abhijeet Sapkota",
      role: "Co-founder & App Developer",
      imageUrl: "/images/abhijit.jpeg",
      desc: "Abjijit drives the technical strategy of the flowbite platform and brand.",
    },
    {
      id: 3,
      name: "Ajay Kumar Jha",
      role: "Mentor",
      imageUrl: "/images/ajay.png",
      desc: "Ajay drives the technical strategy of the flowbite platform and brand.",
    },
  ];
  const membersList = people.map((val) => <Member person={val} id={val.id} />);
  return membersList;
};

export default MembersList;
