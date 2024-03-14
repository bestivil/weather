import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function BasicCard({
  weatherC,
  time,
  label,
  img,
  conditions,
}: {
  weatherC: number | undefined;
  time?: string;
  label?: string;
  img?: string;
  conditions: string | undefined;
}) {
  return (
    <>
      <Card
        className="w-72 h-65 m-3"
        sx={{
          backgroundColor: "#E6E6E6",
          overflow: "hidden",
          borderRadius: 8,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <div>
            <p className="text-center font-bold text-lg">{time}</p>
            <div className="flex flex-col items-center text-center">
              <img
                src={img}
                alt={"Temperature Icon"}
                className="ml-2 mt-4 w-20 h-20"
              />
              <p className="font-bold text-2xl relative">
                <span className="text-2xl relative z-10">{weatherC}</span>
                <span className="text-sm absolute top-0 right-0 -mr-2 -mt-1">
                  °
                </span>
              </p>
              <p className="font-light text-sm mt-2">{conditions}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
