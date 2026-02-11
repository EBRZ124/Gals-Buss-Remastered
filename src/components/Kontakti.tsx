function Contacts() {
  return (
    <>
      <div className="list-group-contact">
        <a
          href="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-2">Autobusu pasūtīšana:</h4>
          </div>
          <p className="mb-2">Tālrunis: +371 29110885, +371 67226006</p>
          <p className="mb-2">Fakss: +371 67226006</p>
          <small>e-pasts: info@galssbuss.lv</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-2">Papildus informācija</h5>
          </div>
          <p className="mb-2">tālrunis: +371 67226006 </p>
        </a>
      </div>
    </>
  );
}

export default Contacts;
