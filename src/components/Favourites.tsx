import { Card, CardActions, CardContent } from "@mui/material";

const Favourites = ({
  fav,
  handleRemove,
}: {
  fav: String[] | null;
  handleRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className=" flex m-4 ml-10 mb-1 rounded-md">
      {fav?.map((item, index) => (
        <Card
          sx={{
            height: 150,
            width: 200,
            backgroundColor: "rgb(255 255 255 /10%)",
            boxShadow: "0 0 5px rgb(0 0 0 /15%)",
            backdropFilter: "red(10px)",
            marginLeft: "15px",
          }}
        >
          <div className=" grid absolute ml-48 -mt-3 hover:scale-110 hover:duration-200 opacity-85 -translate-x-1">
            <button name={index.toString()} onClick={(e) => handleRemove(e)}>
              <svg height="20px" width="20px" viewBox="0 0 496.158 496.158">
                <path
                  className="fill-red-600"
                  d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082 c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z"
                ></path>

                <path
                  className="fill-slate-200"
                  d="M383.546,206.286H112.612c-3.976,0-7.199,3.225-7.199,7.2v69.187c0,3.976,3.224,7.199,7.199,7.199 h270.934c3.976,0,7.199-3.224,7.199-7.199v-69.187C390.745,209.511,387.521,206.286,383.546,206.286z"
                ></path>
              </svg>
            </button>

            <svg viewBox="0 0 512 511.99">
              <button>
                <path
                  fill="#00AB42"
                  fill-rule="nonzero"
                  d="M256 0c70.68 0 134.68 28.67 181.01 74.99 46.32 46.32 74.99 110.32 74.99 181S483.33 390.68 437.01 437c-46.33 46.33-110.33 74.99-181.01 74.99-70.68 0-134.68-28.66-181.01-74.99C28.67 390.68 0 326.67 0 255.99c0-70.68 28.67-134.68 74.99-181C121.32 28.67 185.32 0 256 0z"
                />
                <path
                  fill="#fff"
                  d="M234.68 130.59h42.64c10.11 0 18.38 8.29 18.38 18.39v67.32h67.32c10.11 0 18.38 8.33 18.38 18.38v42.63c0 10.09-8.3 18.38-18.38 18.38H295.7v67.32c0 10.1-8.28 18.39-18.38 18.39h-42.64c-10.1 0-18.38-8.27-18.38-18.39v-67.32h-67.32c-10.08 0-18.38-8.26-18.38-18.38v-42.63c0-10.12 8.27-18.38 18.38-18.38h67.32v-67.32c0-10.12 8.27-18.39 18.38-18.39z"
                />
              </button>
            </svg>
          </div>
          <CardContent>
            <div className="text-center bg-opacity-80  ">{item}</div>
            <div className="text-center"></div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Favourites;
