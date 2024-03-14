import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function HourlyCard({
  time,
  weather,
  feels_like,
}: {
  time: string | undefined;
  weather: number | undefined;
  feels_like?: number | undefined;
}) {
  return (
    <>
      <div className="w-1/4">
        <Card
          className="max-w-screen-md"
          sx={{
            backgroundColor: "#E6E6E6",
            overflow: "hidden",
            borderRadius: 8,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <CardContent>
            <p className="mb-5 w-15 text-sky-700 ">{time}</p>
            <div className="mt-5 justify-end">
              <p className="font-bold text-2xl relative">
                <span className="text-2xl relative z-10">{weather}</span>
                <span className="text-sm absolute top-0 right-0 -mr-2 -mt-1">
                  °
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
