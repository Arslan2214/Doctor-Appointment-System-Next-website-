const WhyUs_Section = () => {
  const whiteCards = [
    {
      icon: '<i class="fa-solid fa-stethoscope"></i>',
      heading: "Experienced Healthcare Professionals",
      text: " This platform provides experienced and highly qualified healthcare professionals.",
    },
    {
      icon: '<i class="fa-solid fa-notes-medical"></i>',
      heading: "Comprehensive Healthcare Services",
      text: "Medi.com provides a wide healthcare services, users have access to care options.",
    },
    {
      icon: '<i class="fa-brands fa-pagelines"></i>',
      heading: "User-Friendly Platform",
      text: "Medi.com is designed with user convenience making it accessible for individuals seeking healthcare services.",
    },
  ];

  return (
    <>
      <div className="flex relative w-full h-[30vh] px-2 sm:px-10 lg:px-20">
        <div className="flex gap-6 justify-center items-center flex-col absolute -top-[70%] left-20 w-96 sm:left-10 lg:left-20 z-10 h-[50vh] bg-blue-500 rounded-md shadow-md text-white p-2 sm:py-8 sm:px-6">
          <p className="text-3xl font-semibold">Why Choose Medi.com?</p>
          <p className="text-md">
            By choosing Medi.com means opting for a healthcare platform that
            combines expertise, convenience, and technological innovation to
            deliver a holistic and user-centric healthcare experience.
          </p>
          <div>
            <button className="flex gap-3 hover:gap-4 transition-all duration-300 items-center justify-start bg-zinc-50/20 hover:bg-zinc-50/30 px-5 py-2 rounded-full">
              Learn More <span>&gt;</span>
            </button>
          </div>
        </div>
        <ul className="hidden  absolute px-8 -top-[50%] left-[calc(24rem+5rem)] w-[calc(69.4%)] sm:flex justify-between items-center">
          {whiteCards.map((item, index) => (
            <WhiteCard
              key={index}
              text={item.text}
              heading={item.heading}
              logo={item.icon}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default WhyUs_Section;

const WhiteCard = (props) => {
  return (
    <>
      <li className="flex gap-4 px-8 flex-col justify-center items-center w-72 h-[35vh] bg-zinc-50 shadow-md rounded-md text-center">
        <span
          className="text-5xl font-semibold text-blue-500"
          dangerouslySetInnerHTML={{ __html: props.logo }}
        ></span>
        <p className="font-semibold text-lg">{props.heading}</p>
        <p className="text-sm text-zinc-600/85">{props.text}</p>
      </li>
    </>
  );
};
