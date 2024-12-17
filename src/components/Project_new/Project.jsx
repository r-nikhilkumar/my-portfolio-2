import React from "react";
import "./Project.css"; // Assuming you have a CSS file for styling
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const Projects = [
  {
    imgSrc:
      "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "SJS Hot N' Spicy",
    description: "SJS Hot N' Spicy is a restaurant project.",
    link: "https://apps.pfcrestaurant.com.np/",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Burger House",
    description: "Lorem ipsum dolor sit amet.",
    link: "https://ajyotish.com.np/",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1804577/pexels-photo-1804577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Deep IT Institute",
    description: "Deep Computer is an institution project.",
    link: "https://deepcomputer.edu.np/",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "NRD Computers",
    description: "NRD Computer is an eCommerce project.",
    link: "https://nrd.com.np/",
  },
];

const ProjectCard = ({ imgSrc, title, description, link }) => (
  <div className="card">
    <div className="box">
      <img src={imgSrc} alt={title} />
      <div className="text">{title}</div>
      <p>{description}</p>
      <a href={link} className="project" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  </div>
);

const Project = () => {
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My Project</h2>
        <Swiper
          className="carousel"
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
        >
          {Projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
