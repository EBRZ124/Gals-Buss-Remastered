import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function BusRent() {
  const autobusi = [
    {
      busa_bilde: "/BusuBildes/Setra_415_GT_HD_48.JPG",
      papildus_bilde: "/BudBildesPapildus/Setra_415_GT_HD_Papildus.JPG",
      title: "Setra 415 GT-HD, 48 pasažieru vietas",
      detailed_description:
        "AC, DVD, video, CD, audio, WC, virtuve, navigācija, galdiņi, mikrofons, barošanas spriegums 220V, RETARDER (kalnu bremzes). Garums: 12.20 m, salona augstums: 2.10 m, augstums: 3.65 m, vietu skaits: 48, attālums starp sēdekļiem: 73 cm, bākas tilpums: 600 l, degvielas patēriņš: 26-30 l/100 km.",
    },
    {
      busa_bilde: "/BusuBildes/Setra_415_HD_44.jpg",
      papildus_bilde: "/BudBildesPapildus/Setra_415_HD_Papildus.jpg",
      title: "Setra 415 HD, 44 pasažieru vietas",
      detailed_description:
        "AC, audio, DVD, WC, virtuve, barošanas spriegums 220 volti, navigācija, galdiņi, mikrofons, RETARDER (kalnu bremzes). Garums: 12.00 m, salona augstums: 2.10 m, augstums: 3.65 m, vietu skaits: 44, attālums starp sēdekļiem: 77 cm, bākas tilpums: 600 l, degvielas patēriņš: 25-30 l/100 km.",
    },
    {
      busa_bilde: "/BusuBildes/Setra_415_HD_49.jpg",
      papildus_bilde: "/BudBildesPapildus/Setra_415_HD_Papildus_2.jpg",
      title: "Setra 415 HD, 49 pasažieru vietas",
      detailed_description:
        "AC, video, audio, DVD, video, WC, virtuve, barošanas spriegums 220 volti, navigācija, galdiņi, mikrofons, RETARDER (kalnu bremzes). Garums: 12 m, salona augstums: 2.10 m, augstums: 3.65 m, vietu skaits: 49, attālums starp sēdekļiem: 71 cm, bākas tilpums: 600 l, degvielas patēriņš: 26-30 l/100 km.",
    },
    {
      busa_bilde: "/BusuBildes/Setra_416_GT-HD_53.jpg",
      papildus_bilde: "/BudBildesPapildus/Setra_416_GT_HD_Papildus.jpg",
      title: "Setra 416 GT-HD, 53 pasažieru vietas",
      detailed_description:
        "AC, DVD, CD, WC, virtuve, navigācija, galdiņi, mikrofons, barošanas spriegums 220V, RETARDER (kalnu bremzes). Garums: 13.020 m, salona augstums: 2.10 m, augstums: 3.65 m, vietu skaits: 53, attālums starp sēdekļiem: 73 cm, bākas tilpums: 450 l, degvielas patēriņš: 26-30 l/100 km.",
    },
    {
      busa_bilde: "/BusuBildes/Setra_515_HD_49.jpg",
      papildus_bilde: "/BudBildesPapildus/Setra_515_HD_Papildus.jpg",
      title: "Setra 515 HD, 49 pasažieru vietas",
      detailed_description:
        "AC, CD, DVD, WC, virtuve, ledusskapis, barošanas spriegums 220 volti, navigācija, galdiņi, mikrofons, RETARDER (kalnu bremzes). Garums: 12.295 m, salona augstums: 2.10 m, augstums: 3.77 m, vietu skaits: 49, attālums starp sēdekļiem: 71 cm, bākas tilpums: 470 l, degvielas patēriņš: 24-28 l/100 km.",
    },
    {
      busa_bilde: "/BusuBildes/Setra_516_HD_53.JPG",
      papildus_bilde: "/BudBildesPapildus/Setra_516_HD_Papildus.jpg",
      title: "Setra 516 HD, 53 pasažieru vietas",
      detailed_description:
        "AC, CD, DVD, WC, virtuve, ledusskapis, barošanas spriegums 220 volti, navigācija, galdiņi, mikrofons, RETARDER (kalnu bremzes). Garums: 12.295 m, salona augstums: 2.10 m, augstums: 3.77 m, vietu skaits: 53, attālums starp sēdekļiem: 71 cm, bākas tilpums: 470 l, degvielas patēriņš: 26-30 l/100 km.",
    },
    {
      busa_bilde: "/BusuBildes/VW_Crafter.jpg",
      papildus_bilde: "/BudBildesPapildus/VW_Crafter_papildus.jpg",
      title: "VW Crafter, 19 pasažieru vietas",
      detailed_description: "...",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carousel = document.getElementById("carouselExampleDark");

    const handleSlide = (event: any) => {
      setActiveIndex(event.to);
    };

    carousel?.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      carousel?.removeEventListener("slid.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <>
      <h1 className="nomas-virsraksts">Pieejamie autobusi</h1>

      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          {autobusi.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {autobusi.map((bus, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="5000"
            >
              <img
                src={bus.busa_bilde}
                className="d-block w-100"
                alt={bus.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="busu-nosaukums">{bus.title}</h5>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <h1 className="nomas-virsraksts_2">Autobusa apraksts</h1>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={autobusi[activeIndex].papildus_bilde}
              className="img-fluid rounded-start"
              alt={autobusi[activeIndex].title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{autobusi[activeIndex].title}</h5>
              {autobusi[activeIndex].detailed_description && (
                <p className="card-text">
                  <small className="text-body-secondary">
                    {autobusi[activeIndex].detailed_description}
                  </small>
                </p>
              )}
              <button type="button" className="btn btn-secondary">
                <NavLink className="nav-link" to="/contacts">
                  Noīrēt
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusRent;
