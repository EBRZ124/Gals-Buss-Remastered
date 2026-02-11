import { Fragment, useEffect, useState } from "react";

function SarakstsSalaspilsUzRigu() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("lv-LV", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formatted);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);
  const attiesanas_laiki_riga = [
    "6:25 - 6:55",
    "7:10 - 7:40",
    "7:40 - 8:10",
    "8:20 - 8:50",
    "9:00 - 9:30",
    "9:20 - 9:50",
    "10:00 - 10:30",
    "11:00 - 11:30",
    "12:00 - 12:30",
    "12:30 - 13:00",
    "13:30 - 14:00",
    "14:40 - 15:00",
    "15:30 - 16:00",
    "16:40 - 17:10",
    "17:00 - 17:30",
    "17:40 - 18:10",
    "18:00 - 18:30",
    "19:00 - 19:30",
    "19:30 - 20:00",
    "20:20 - 20:50",
    "20:50 - 21:20",
    "21:20 - 21:50",
    "22:15 - 22:45",
  ];
  return (
    <Fragment>
      <div className="list-group">
        <h1 className="virziens-no">No Rīgas</h1>
        <h4 className="tagad-aliks">Pašreizējais laiks: {currentTime}</h4>
        {attiesanas_laiki_riga.map((time, index) => (
          <a
            key={index}
            href="#"
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{time}</h5>
              <small className="text-body-secondary">30min</small>
            </div>
            <small className="text-body-secondary">
              Maršruts: Rīga (V. Purvīša iela) - Salaspils (skola)
            </small>
          </a>
        ))}
      </div>
    </Fragment>
  );
}

export default SarakstsSalaspilsUzRigu;
