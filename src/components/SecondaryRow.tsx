import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function SecondaryRow() {
  return (
    <Card
      sx={{
        backgroundColor: "#E6E6E6",
        overflow: "hidden",
        borderRadius: 8,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        marginTop: 4,
      }}
    >
      <CardContent>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <p className="font-extralight text-[10px] z-10">Feels Like</p>
            <svg
              height="48"
              viewBox="0 0 32 32"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-6"
            >
              <path d="m26 30h-4a2.0059 2.0059 0 0 1 -2-2v-7a2.0059 2.0059 0 0 1 -2-2v-6a2.9465 2.9465 0 0 1 3-3h6a2.9465 2.9465 0 0 1 3 3v6a2.0059 2.0059 0 0 1 -2 2v7a2.0059 2.0059 0 0 1 -2 2zm-5-18a.9448.9448 0 0 0 -1 1v6h2v9h4v-9h2v-6a.9448.9448 0 0 0 -1-1z" />
              <path d="m24 9a4 4 0 1 1 4-4 4.0118 4.0118 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2.0059 2.0059 0 0 0 -2-2z" />
              <path d="m10 20.1839v-8.1839h-2v8.1839a3 3 0 1 0 2 0z" />
              <path d="m9 30a6.9931 6.9931 0 0 1 -5-11.8892v-11.1108a5 5 0 0 1 10 0v11.1108a6.9931 6.9931 0 0 1 -5 11.8892zm0-26a3.0033 3.0033 0 0 0 -3 3v11.9834l-.332.2983a5 5 0 1 0 6.664 0l-.332-.2983v-11.9834a3.0033 3.0033 0 0 0 -3-3z" />
              <path d="m0 0h32v32h-32z" fill="none" />
            </svg>
            <p className="mt-2 relative">
              <span className="font-bold text-sm z-10"></span>
              <span className="text-sm font-bold absolute top-0 right-0 -mr-2 -mt-1">
                °
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center ml-2">
            <p className="font-extralight text-[10px] z-10">Wind</p>
            <svg className=" w-16 h-16 wr-wind-speed__icon__svg mt-5">
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
                    fill="#000"
                    stroke="#000"
                    className="wr-icon-wind-direction__svg-circle"
                  />
                  <text
                    x="16"
                    y="16"
                    text-anchor="middle"
                    stroke-width="0.6px"
                    alignment-baseline="middle"
                    fontSize="6"
                  ></text>
                </symbol>
              </defs>
              <use fill="#FFF" className="wr-wind-type-wind" href="#a" />
            </svg>

            <p className="font-bold text-sm z-10">mph</p>
          </div>

          <div className="flex flex-col items-center ">
            <p className="text-[10px]">Rainfall</p>
            <svg
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="32"
              className="w-14 h-14 mt-5"
            >
              <g>
                <g>
                  <path
                    d="M431.978,167.288C423.534,77.626,347.833,7.239,256,7.239S88.466,77.626,80.022,167.288
			C34.57,175.558,0,215.438,0,263.239c0,53.775,43.749,97.524,97.524,97.524h36.571v-36.571H97.524
			c-33.609,0-60.952-27.343-60.952-60.952c0-33.609,27.343-60.952,60.952-60.952h18.286v-18.286
			c0-77.301,62.889-140.19,140.19-140.19s140.19,62.889,140.19,140.19v18.286h18.286c33.609,0,60.952,27.343,60.952,60.952
			c0,33.609-27.343,60.952-60.952,60.952h-36.571v36.571h36.571c53.775,0,97.524-43.749,97.524-97.524
			C512,215.438,477.43,175.558,431.978,167.288z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="122.518"
                    y="360.775"
                    transform="matrix(0.2079 -0.9781 0.9781 0.2079 -175.0179 541.9899)"
                    width="249.246"
                    height="36.57"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="225.806"
                    y="336.415"
                    transform="matrix(0.2079 -0.9781 0.9781 0.2079 -89.1225 599.3422)"
                    width="199.39"
                    height="36.57"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="79.494"
                    y="336.383"
                    transform="matrix(0.2079 -0.9781 0.9781 0.2079 -204.9837 456.2015)"
                    width="199.39"
                    height="36.57"
                  />
                </g>
              </g>
            </svg>
            <p className="font-bold text-sm z-10 mt-2"> mm</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[10px]">Visibility</p>
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="67px"
              height="67px"
              viewBox="0 0 442.04 442.04"
              className="mt-3"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"></path>{" "}
                  </g>
                  <g>
                    <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"></path>{" "}
                  </g>
                  <g>
                    <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"></path>{" "}
                  </g>
                </g>
              </g>
            </svg>
            <p className="font-bold text-sm z-10 mt-1">km</p>
          </div>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
