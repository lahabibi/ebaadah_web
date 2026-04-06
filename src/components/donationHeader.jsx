import React from "react";
import donation1 from "../assets/images/donation-img-1.jpg";
import donation2 from "../assets/images/donation-img-2.jpg";
import donation3 from "../assets/images/donation-img-3.jpg";

export default function DonationHeader() {
  const style = { textDecoration: "none", color: "#027d3b" };
  return (
    <>
      <div className="" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="community hoverimg">
                <figure>
                  <img src={donation1} alt="free salaat reminder" />
                </figure>
                <div className="community-text">
                  <div>
                    <i>
                      <svg
                        version="1.1"
                        id="Layer_1"
                        // xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        // style="enable-background: new 0 0 512 512"
                        // xml:space="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M469.731,139.705c6.453-14.712,6.792-31.057,0.952-46.024c-1.724-4.42-6.704-6.608-11.128-4.882
                                                c-14.967,5.839-26.763,17.158-33.218,31.87c-1.19,2.712-2.169,5.481-2.942,8.285c-10.543-17.036-23.331-32.683-38.071-46.464
                                                c8.15-11.362,12.059-25.08,11.061-39.205c-1.132-16.026-8.436-30.651-20.569-41.183c-3.585-3.112-9.012-2.728-12.121,0.856
                                                c-13.05,15.033-17.288,34.755-13.182,52.823c-9.34-5.818-19.177-11.005-29.475-15.471c-4.352-1.886-9.413,0.111-11.302,4.465
                                                c-1.888,4.353,0.111,9.414,4.465,11.302c21.793,9.451,41.372,22.362,58.243,37.896c-1.812-0.298-3.645-0.523-5.499-0.659
                                                c-16.025-1.165-31.54,3.983-43.693,14.491c-3.589,3.104-3.983,8.53-0.88,12.12c11.879,13.737,28.661,20.78,45.538,20.78
                                                c12.313,0,24.675-3.758,35.214-11.394c14.503,21.045,25.143,44.692,31.222,69.767c-7.448,0.115-20.975-1.651-33.073-13.749
                                                c-0.183-0.183-0.376-0.359-0.575-0.525c-0.826-0.687-20.524-16.787-46.117-10.961c-19.562,4.452-36.526,20.162-50.524,46.752
                                                c-14.769-10.801-46.333-30.527-79.866-30.527c-13.021,0-28.414,2.958-44.711,6.088c-38.549,7.405-86.525,16.623-128.004-8.955
                                                c-2.458-1.517-5.514-1.696-8.132-0.478c-2.619,1.218-4.451,3.668-4.877,6.524c-0.449,3.012-10.494,74.438,33.323,132.21
                                                c25.671,33.848,64.259,55.615,114.848,64.829c-13.324,13.753-39,35.959-70.916,42.473c-2.352,0.48-4.396,1.922-5.637,3.978
                                                s-1.565,4.536-0.895,6.841c0.213,0.732,5.391,18.129,20.786,35.188c13.805,15.299,38.677,33.234,79.404,33.233
                                                c1.195,0,2.409-0.016,3.63-0.047c4.365-0.112,7.951-3.48,8.338-7.828c0.037-0.419,4.113-41.462,42.907-69.899h6.07
                                                c42.031,0,81.964-18.182,109.562-49.885c27.596-31.703,40.101-73.762,34.306-115.392c-2.826-20.309,6.811-40.042,23.893-50.47
                                                c2.046,14.2,2.653,28.743,1.684,43.436c-0.312,4.735,3.273,8.827,8.008,9.14c0.192,0.013,0.384,0.019,0.574,0.019
                                                c4.487,0,8.266-3.485,8.566-8.027c2.161-32.775-2.888-64.872-14.007-94.421C454.837,162.307,464.23,152.246,469.731,139.705z
                                                 M366.262,45.416c-0.576-8.156,1.136-16.124,4.888-23.166c4.704,6.444,7.519,14.092,8.094,22.248
                                                c0.576,8.156-1.135,16.123-4.888,23.165C369.652,61.219,366.837,53.571,366.262,45.416z M342.542,115.294
                                                c7.046-3.734,15.015-5.425,23.164-4.837c8.15,0.592,15.789,3.419,22.222,8.132C373.469,126.221,355.746,124.936,342.542,115.294z
                                                 M397.177,271.318c5.108,36.705-5.917,73.788-30.248,101.74c-24.332,27.952-59.541,43.984-96.6,43.984h-8.638
                                                c-1.39-0.066-13.789-0.766-25.56-4.894c-4.478-1.573-9.382,0.786-10.951,5.264c-1.571,4.478,0.787,9.38,5.264,10.952
                                                c3.563,1.25,7.148,2.233,10.549,3.01c-24.379,23.426-32.734,50.335-35.483,63.381c-48.34-1.566-69.102-32.379-76.444-47.635
                                                c40.254-11.942,69.227-43.273,78.294-54.087c1.772,0.076,3.98,0.136,6.558,0.136c17.06,0,49.922-2.636,74.451-20.731
                                                c3.818-2.817,4.631-8.197,1.814-12.015c-2.817-3.818-8.196-4.631-12.015-1.814c-27.876,20.565-71.419,17.226-73.758,17.028
                                                c-0.802-0.101-1.592-0.214-2.388-0.322c1.055-0.892,2.066-1.809,2.998-2.742c3.356-3.356,3.356-8.796,0-12.151
                                                c-3.356-3.356-8.796-3.356-12.151,0c-3.899,3.899-10.759,8.095-15.038,10.475c-9.528-2.235-18.536-4.98-27.011-8.241
                                                c3.524-1.688,7.111-3.77,10.497-6.344c3.778-2.871,4.513-8.261,1.642-12.039c-2.87-3.777-8.26-4.513-12.039-1.642
                                                c-8.027,6.101-18.076,8.56-22.688,9.419c-8.852-5.008-16.95-10.724-24.271-17.149c7.691-1.259,16.614-3.65,25.101-8.152
                                                c4.192-2.224,5.787-7.425,3.563-11.618c-2.225-4.192-7.427-5.788-11.618-3.563c-12.07,6.404-25.847,7.398-32.384,7.471
                                                c-1.031-1.258-2.047-2.528-3.034-3.825c-5.155-6.779-9.464-13.814-13.085-20.923c4.046,0.387,8.62,0.662,13.461,0.662
                                                c9.182,0,19.313-0.989,28.571-4.075c4.502-1.501,6.935-6.367,5.435-10.869c-1.502-4.502-6.367-6.936-10.869-5.435
                                                c-15.661,5.219-35.659,2.823-44.461,1.348c-3.101-8.774-5.304-17.42-6.844-25.606c10.769,3.425,27.226,6.951,49.378,6.951
                                                c4.745,0,8.592-3.847,8.592-8.592c0-4.745-3.847-8.592-8.592-8.592c-27.464,0-44.834-5.954-51.996-9.042
                                                c-0.757-8.908-0.817-16.674-0.631-22.625c43.766,20.836,90.22,11.911,128.177,4.619c15.469-2.972,30.082-5.78,41.467-5.78
                                                c38.684,0,76.89,32.795,77.266,33.121c0.032,0.028,0.068,0.049,0.099,0.077c0.041,0.036,0.078,0.073,0.119,0.108l27.983,22.8
                                                c1.595,1.299,3.514,1.932,5.422,1.932c2.494,0,4.967-1.08,6.666-3.165c2.997-3.679,2.445-9.091-1.234-12.089l-22.736-18.526
                                                c11.715-23.321,25.616-37.41,40.431-40.869c16.078-3.755,29.462,5.823,31.279,7.201c8.903,8.774,18.417,13.5,26.954,15.953
                                                C401.715,228.558,394.169,249.698,397.177,271.318z M438.891,151.033c-1.166-7.893-0.1-15.972,3.185-23.46
                                                c3.285-7.487,8.506-13.744,15.104-18.232c1.166,7.893,0.1,15.972-3.185,23.46C450.709,140.29,445.488,146.546,438.891,151.033z"
                            />
                          </g>
                        </g>
                        <circle cx="367.222" cy="221.463" r="8.592" />
                      </svg>
                    </i>
                  </div>
                  <div>
                    <a style={style} href="#">
                      Community
                    </a>
                    <p>
                      Ebaadah connects community through faith, prayer, and
                      shared spiritual growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="community hoverimg">
                <figure>
                  <img src={donation2} alt="free quran app" />
                </figure>
                <div className="community-text">
                  <div>
                    <i>
                      <svg
                        version="1.1"
                        id="svg2055"
                        // xml:space="preserve"
                        width="682.66669"
                        height="682.66669"
                        viewBox="0 0 682.66669 682.66669"
                        // xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs id="defs2059">
                          <clipPath
                            clipPathUnits="userSpaceOnUse"
                            id="clipPath2073"
                          >
                            <path d="M 0,512 H 512 V 0 H 0 Z" id="path2071" />
                          </clipPath>
                        </defs>
                        <g
                          id="g2061"
                          transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
                        >
                          <g id="g2063" transform="translate(256.002,107.5928)">
                            <path
                              d="M 0,0 92.382,-47.597"
                              //   style="
                              //   fill: none;
                              //   stroke: #000000;
                              //   stroke-width: 15;
                              //   stroke-linecap: round;
                              //   stroke-linejoin: round;
                              //   stroke-miterlimit: 10;
                              //   stroke-dasharray: none;
                              //   stroke-opacity: 1;
                              // "
                              id="path2065"
                            />
                          </g>
                          <g id="g2067">
                            <g id="g2069" clip-path="url(#clipPath2073)">
                              <g
                                id="g2075"
                                transform="translate(255.999,172.2031)"
                              >
                                <path
                                  d="m 0,0 -243.464,100.096 c -2.385,0.98 -5.002,-0.773 -5.002,-3.352 V 65.613 c 0,-1.357 0.758,-2.6 1.964,-3.221 L -70.397,-28.34"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2077"
                                />
                              </g>
                              <g
                                id="g2079"
                                transform="translate(379.5791,43.9238)"
                              >
                                <path
                                  d="m 0,0 45.684,-23.537 c 0.804,-0.414 1.736,-0.513 2.609,-0.275 l 27.491,7.467 c 0.768,0.208 1.583,0.158 2.32,-0.142 l 41.791,-17.058 c 2.383,-0.973 4.993,0.78 4.993,3.355 v 53.889 c 0,1.469 -0.887,2.793 -2.246,3.351 L -52.785,99.174"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2081"
                                />
                              </g>
                              <g
                                id="g2083"
                                transform="translate(9.7793,70.9741)"
                              >
                                <path
                                  d="m 0,0 489.686,201.325 c 2.384,0.98 5.001,-0.773 5.001,-3.352 v -31.131 c 0,-1.357 -0.757,-2.6 -1.963,-3.221 L 76.958,-50.587 c -0.805,-0.414 -1.736,-0.513 -2.609,-0.276 l -27.492,7.467 c -0.767,0.209 -1.583,0.159 -2.319,-0.142 L 2.747,-60.595 c -2.384,-0.973 -4.993,0.78 -4.993,3.355 v 53.888 c 0,1.47 0.887,2.793 2.246,3.352 z"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2085"
                                />
                              </g>
                              <g id="g2087" transform="translate(266,143.0972)">
                                <path
                                  d="m 0,0 c 0,-5.523 -4.478,-10 -10,-10 -5.522,0 -10,4.477 -10,10 0,5.523 4.478,10 10,10 C -4.478,10 0,5.523 0,0"
                                  //   style="
                                  //   fill: #000000;
                                  //   fill-opacity: 1;
                                  //   fill-rule: nonzero;
                                  //   stroke: none;
                                  // "
                                  id="path2089"
                                />
                              </g>
                              <g id="g2091" transform="translate(256,208.4199)">
                                <path
                                  d="m 0,0 -205.528,80.97 c -3.146,1.239 -6.551,-1.08 -6.551,-4.461 V 50.975 L 0,-36.217 212.079,50.975 v 25.534 c 0,3.381 -3.405,5.7 -6.551,4.461 z"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2093"
                                />
                              </g>
                              <g
                                id="g2095"
                                transform="translate(149.4482,309.9321)"
                              >
                                <path
                                  d="m 0,0 c -14.219,1.945 -28.625,2.348 -42.955,1.208 -10.287,-0.817 -23.044,-0.615 -32.51,3.561 -1.977,0.872 -4.202,-0.525 -4.202,-2.686 v -30.232 l 186.219,-73.363 v 47.735 c 0,0 -13.253,29.173 -73.385,46.585"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2097"
                                />
                              </g>
                              <g
                                id="g2099"
                                transform="translate(139.6553,283.291)"
                              >
                                <path
                                  d="M 0,0 C 0,0 68.76,-14.03 116.345,-50.89"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2101"
                                />
                              </g>
                              <g
                                id="g2103"
                                transform="translate(442.2187,312.0146)"
                              >
                                <path
                                  d="m 0,0 v -30.232 l -186.219,-73.363 v 47.736 c 0,0 15.972,35.158 92.406,51.317 18.752,3.965 37.995,5.187 57.101,3.668 10.287,-0.818 23.044,-0.616 32.51,3.56 C -2.225,3.559 0,2.162 0,0 Z"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2105"
                                />
                              </g>
                              <g
                                id="g2107"
                                transform="translate(372.3447,283.291)"
                              >
                                <path
                                  d="M 0,0 C 0,0 -68.76,-14.03 -116.345,-50.89"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2109"
                                />
                              </g>
                              <g
                                id="g2111"
                                transform="translate(303.5596,452.8174)"
                              >
                                <path
                                  d="m 0,0 c 0,-5.523 -4.478,-10 -10,-10 -5.523,0 -10,4.477 -10,10 0,5.523 4.477,10 10,10 C -4.478,10 0,5.523 0,0"
                                  //   style="
                                  //   fill: #000000;
                                  //   fill-opacity: 1;
                                  //   fill-rule: nonzero;
                                  //   stroke: none;
                                  // "
                                  id="path2113"
                                />
                              </g>
                              <g
                                id="g2115"
                                transform="translate(334.1777,452.8174)"
                              >
                                <path
                                  d="m 0,0 c 0,-5.523 -4.477,-10 -10,-10 -5.522,0 -10,4.477 -10,10 0,5.523 4.478,10 10,10 C -4.477,10 0,5.523 0,0"
                                  //   style="
                                  //   fill: #000000;
                                  //   fill-opacity: 1;
                                  //   fill-rule: nonzero;
                                  //   stroke: none;
                                  // "
                                  id="path2117"
                                />
                              </g>
                              <g
                                id="g2119"
                                transform="translate(378.3437,435.1978)"
                              >
                                <path
                                  d="M 0,0 V -86.025"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2121"
                                />
                              </g>
                              <g
                                id="g2123"
                                transform="translate(147.0088,435.1978)"
                              >
                                <path
                                  d="M 0,0 V -86.025"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2125"
                                />
                              </g>
                              <g
                                id="g2127"
                                transform="translate(324.5977,392.6606)"
                              >
                                <path
                                  d="m 0,0 c -11.548,-5.472 -31.677,-4.554 -36.021,10.17 -2.893,9.809 4.375,19.19 13.49,21.927 C -3.647,37.769 6.784,20.553 6.937,3.812 7.164,-20.914 -11.739,-31.806 -33.76,-33.939 c -12.856,-1.246 -25.615,3.071 -35.511,10.891"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2129"
                                />
                              </g>
                              <g
                                id="g2131"
                                transform="translate(245.7812,411.5166)"
                              >
                                <path
                                  d="m 0,0 c 0.896,-4.418 1.791,-8.836 2.687,-13.254 1.674,-8.267 3.358,-16.634 2.976,-25.06 -0.383,-8.425 -3.051,-17.051 -8.99,-23.04 -10.059,-10.143 -34.873,-13.691 -47.489,-6.72 -13.32,7.36 -15.865,24.976 -3.805,34.791"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2133"
                                />
                              </g>
                              <g
                                id="g2135"
                                transform="translate(151.1191,501.5239)"
                              >
                                <path
                                  d="m 0,0 c -10.49,2.404 -20.33,-7.28 -15.954,-18.577 3.885,-10.032 16.015,-10.943 25.196,-10.289 0,0 -14.009,-7.289 -26.705,-12.782"
                                  //   style="
                                  //   fill: none;
                                  //   stroke: #000000;
                                  //   stroke-width: 15;
                                  //   stroke-linecap: round;
                                  //   stroke-linejoin: round;
                                  //   stroke-miterlimit: 10;
                                  //   stroke-dasharray: none;
                                  //   stroke-opacity: 1;
                                  // "
                                  id="path2137"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </i>
                  </div>
                  <div>
                    <a style={style} href="#">
                      Education
                    </a>
                    <p>
                      Ebaadah promotes learning through Quran, guidance, and
                      daily knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="community hoverimg mb-0">
                <figure>
                  <img src={donation3} alt="free adhan notificatrion" />
                </figure>
                <div className="community-text">
                  <div>
                    <i>
                      <svg
                        // xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        // style="enable-background: new 0 0 512 512"
                        // xml:space="preserve"
                        width="512"
                        height="512"
                      >
                        <g>
                          <path
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            d="&#10;&#9;&#9;M256,68.904c11.785-13.351,29.016-21.77,48.2-21.77c35.467,0,64.267,28.792,64.267,64.267C368.467,175.667,256,223.867,256,223.867&#10;&#9;&#9;s-112.467-48.2-112.467-112.467c0-35.475,28.799-64.267,64.267-64.267C226.984,47.133,244.215,55.552,256,68.904z"
                          />

                          <line
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            x1="448.8"
                            y1="15"
                            x2="416.667"
                            y2="31.067"
                          />

                          <line
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            x1="63.2"
                            y1="15"
                            x2="95.333"
                            y2="31.067"
                          />

                          <line
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            x1="448.8"
                            y1="223.867"
                            x2="416.667"
                            y2="207.8"
                          />

                          <line
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            x1="63.2"
                            y1="223.867"
                            x2="95.333"
                            y2="207.8"
                          />

                          <line
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            x1="464.867"
                            y1="119.433"
                            x2="432.733"
                            y2="119.433"
                          />

                          <line
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            x1="368.467"
                            y1="432.733"
                            x2="336.333"
                            y2="432.733"
                          />

                          <line
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            x1="47.133"
                            y1="119.433"
                            x2="79.267"
                            y2="119.433"
                          />

                          <rect
                            x="79.267"
                            y="352.4"
                            //     style={{
                            //     fill: none,
                            //     stroke: #000000,
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   }}
                            width="353.467"
                            height="144.6"
                          />

                          <polygon
                            //     style="
                            //     fill: none;
                            //     stroke: #000000;
                            //     stroke-width: 30;
                            //     stroke-linecap: round;
                            //     stroke-linejoin: round;
                            //     stroke-miterlimit: 10;
                            //   "
                            points="&#10;&#9;&#9;432.733,288.133 79.267,288.133 15,352.4 497,352.4 &#9;"
                          />
                        </g>
                      </svg>
                    </i>
                  </div>
                  <div>
                    <a style={style} href="#">
                      Donation
                    </a>
                    <p>
                      Your donation helps Ebaadah team continue building
                      meaningful features daily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
