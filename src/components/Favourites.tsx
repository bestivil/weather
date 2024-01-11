import { Card, CardActions, CardContent } from "@mui/material";

const Favourites = () => {
  //TODO: write create favourites card component, get localstorage, use tailwind to create it
  //TODO: create card component and pass props, so can reuse here

  return (
    <div className="m-5 mb-1 rounded-md">
      <Card
        sx={{
          height: 150,
          width: 200,
          backgroundColor: "rgb(255 255 255 /10%)",
          boxShadow: "0 0 5px rgb(0 0 0 /15%)",
          backdropFilter: "red(10px)",
        }}
      >
        <div className="absolute ml-48 -mt-3 hover:scale-110 hover:duration-200 opacity-85 -translate-x-1">
          <svg height="20px" width="20px" viewBox="0 0 496.158 496.158">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                className="fill-red-600"
                d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082 c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z"
              ></path>{" "}
              <path
                className="fill-slate-200"
                d="M383.546,206.286H112.612c-3.976,0-7.199,3.225-7.199,7.2v69.187c0,3.976,3.224,7.199,7.199,7.199 h270.934c3.976,0,7.199-3.224,7.199-7.199v-69.187C390.745,209.511,387.521,206.286,383.546,206.286z"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <CardContent>
          <div className="text-center bg-opacity-80 ">New York</div>
          <div className="text-center">15</div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default Favourites;
