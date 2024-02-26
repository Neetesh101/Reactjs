

import heartt from "../Images/heartt.png";
export const Footer = () => {


  return (
    <div >
      <strong className="mx-1">

        <b>Foodie</b>
      </strong>
      Created By


      <a className=" text-red-600 hover:text-purple-800 text-2xl mx-1 "
        href="https://www.linkedin.com/in/rohit-sharma50/"
        target="_blank"
        title="Neetesh Katiyar Linkedin Profile"
      >
        <b>Neetesh Katiyar</b></a>
      <div>with </div>



      <div > <img  src={heartt} alt='heart crossed' ></img> </div>
      <a 
        href="https://react.dev/"
        target="_blank"
        title="React offical web link"
      >➡ <b>React</b> </a>
    </div>
  );

};

export default Footer;



