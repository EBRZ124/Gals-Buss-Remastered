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

  const attiesanas_laiki_salaspils = [
    "5:45 - 6:15",
    "6:25 - 6:55",
    "6:55 - 7:25",
    "7:30 - 8:00",
    "8:10 - 8:40",
    "8:35 - 9:05",
    "9:00 - 9:30",
    "9:35 - 10:05",
    "10:10 - 10:40",
    "10:35 - 11:05",
    "11:10 - 11:40",
    "12:10 - 12:40",
    "13:10 - 13:40",
    "13:40 - 14:10",
    "14:40 - 15:10",
    "15:40 - 16:10",
    "16:45 - 17:15",
    "17:30 - 18:00",
    "17:50 - 18:20",
    "18:10 - 18:40",
    "18:50 - 19:20",
    "19:10 - 19:40",
    "20:00 - 20:30",
    "21:25 - 21:55",
  ];
  return (
    <Fragment>
      <div className="list-group">
        <h1 className="virziens-no">No Salaspils</h1>
        <h4 className="tagad-aliks">Pašreizējais laiks: {currentTime}</h4>
        {attiesanas_laiki_salaspils.map((time, index) => (
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
              Maršruts: Salaspils (Skola) - Rīga
            </small>
          </a>
        ))}
      </div>
    </Fragment>
  );
}

export default SarakstsSalaspilsUzRigu;
