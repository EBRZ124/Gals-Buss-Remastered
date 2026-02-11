function BusRent() {
  return (
    <>
      <h1 className="nomas-virsraksts">Pieejamie autobusi</h1>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/*Pirmais autobuss*/}

          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/BusuBildes/Setra_415_GT_HD_48.JPG"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="busu-nosaukums">
                Setra 415 GT-HD, 48 pasažieru vietas
              </h5>
              <p className="busu-apraksts">
                AC, DVD, video, CD, audio, WC, virtuve, navigācija, galdiņi,
                mikrofons
              </p>
            </div>
          </div>

          {/*Otrais autobuss*/}

          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/BusuBildes/Setra_415_HD_44.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="busu-nosaukums">
                Setra 415 HD, 44 pasažieru vietas
              </h5>
              <p className="busu-apraksts">
                AC, audio, DVD, WC, virtuve, barošanas spriegums 220 volti,
                navigācija, galdiņi, mikrofons
              </p>
            </div>
          </div>

          {/*Trešais autobuss*/}

          <div className="carousel-item">
            <img
              src="/BusuBildes/Setra_415_HD_49.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="busu-nosaukums">
                Setra 415 HD, 49 pasažieru vietas
              </h5>
              <p className="busu-apraksts">
                AC, video, audio, DVD, video, WC, virtuve, barošanas spriegums
                220 volti, navigācija, galdiņi, mikrofons
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default BusRent;
