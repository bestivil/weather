import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function BasicCard({
  weather,
  label,
  img,
  conditions,
}: {
  weather?: any; // TODO: strongly type after testing
  label: string;
  img?: string;
  conditions?: string;
}) {
  const times = ["7pm", "8pm", "9pm"];
  return (
    <>
      <Card
        className="max-w-screen-md"
        sx={{
          margin: "10px",
          maxWidth: "99%",
          backgroundColor: "#E6E6E6",
          overflow: "hidden",
          borderRadius: 8,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",

          //display: "grid",
          //gridTemplateColumns: "repeat(auto-fill, minmax(700px, 1fr))",
          //gap: "10px",
        }}
      >
        <CardContent>
          <div className="flex">
            <div className="flex flex-col items-center text-center justify-start translate-x-3 lg:ml-7">
              <img src={img} alt={label} className="mb-2 w-15" />
              <p className="font-bold text-2xl relative">
                <span className="text-2xl relative z-10">{weather}</span>
                <span className="text-sm absolute top-0 right-0 -mr-2 -mt-1">
                  °
                </span>
              </p>
              <p className="font-light text-sm mt-2">{conditions}</p>
            </div>
            <div className="bg-gray-300 w-0.5 ml-20 h-25 "></div>
            {times.map((time, index) => (
              <div
                key={index}
                className={` flex flex-col items-center ${
                  index > 1 ? "hidden" : "[@media(min-width:100px)]:visible"
                }  ml-${
                  index === times.length ? `${100 / times.length}%` : "auto"
                } mt-2 mr-2 `}
              >
                <p className="mb-5 w-15 text-sky-700 ">{time}</p>
                <div className="mt-5 justify-end">
                  <p className="font-bold text-2xl relative">
                    <span className="text-2xl relative z-10">{weather}</span>
                    <span className="text-sm absolute top-0 right-0 -mr-2 -mt-1">
                      °
                    </span>
                  </p>
                </div>
                <p className="font-light text-sm mt-2">{conditions}</p>
              </div>
            ))}
          </div>

          <div className="items-center flex justify-center mt-8 -mb-5">
            <svg
              width="20"
              height="20"
              className=" fill-slate-500 hover:fill-black group-aria-[sort=ascending]:rotate-0 group-aria-[sort=descending]:rotate-180 "
            >
              <path d="M10 5a.75.75 0 0 1 .75.75v6.638l1.96-2.158a.75.75 0 1 1 1.08 1.04l-3.25 3.5a.75.75 0 0 1-1.08 0l-3.25-3.5a.75.75 0 1 1 1.08-1.04l1.96 2.158V5.75A.75.75 0 0 1 10 5z" />
            </svg>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card
        sx={{
          margin: "10px",
          maxWidth: "99%",
          backgroundColor: "#E6E6E6",
          overflow: "hidden",
          borderRadius: 8,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginTop: 5,
        }}
      >
        <CardContent>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <svg className=" w-16 h-16 wr-wind-speed__icon__svg">
                <defs>
                  <symbol id="a" viewBox="0 0 32 32">
                    <path
                      d="M16.8 6.6V3l2.1 2.1L20 4l-4-4-4 4 1.1 1.1L15.2 3v3.6"
                      fill="black"
                      className=" wr-icon-wind-direction__svg-arrow"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="9.5"
                      fill="none"
                      stroke="#000"
                      className="wr-icon-wind-direction__svg-circle"
                    />
                    <text
                      x="16"
                      y="16"
                      text-anchor="middle"
                      stroke-width="0.6px"
                      stroke="black"
                      alignment-baseline="middle"
                      fontSize="12"
                    >
                      N
                      {/* TODO: get this from API, rotate svg based on result */}
                    </text>
                  </symbol>
                </defs>
                <use fill="#FFF" className="wr-wind-type-wind" href="#a" />
              </svg>
              <div className="items-center justify-center">
                <p className="font-bold text-sm z-10">
                  {" "}
                  {`Wind Speed (mph)`}{" "}
                  {/*TODO: change the windspeed to API call */}
                </p>
              </div>
              <div className="bg-gray-300 w-0.5 ml-20 h-25 "></div>
            </div>
            <div className="flex mt-14">Air Pressure</div>
            <div className="flex mt-14">Visibility</div>
            <div className="flex mt-14">Humidity</div>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
}
