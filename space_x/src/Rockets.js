import React from "react";
import { useGlobalContext } from "./context";
import Image2 from "./Image2";
import no_image from "./no_image.jpg";
const Rockets = () => {
  const { data, loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Rockets</h1>
      <div className="rockets-container">
        {Array.isArray(data) &&
          data.map((rocket) => {
            const {
              height,
              diameter,
              mass,
              first_stage,
              second_stage,
              engines,
              landing_legs,
              payload_weights,
              flickr_images,
              name,
              type,
              active,
              stages,
              boosters,
              cost_per_launch,
              success_rate_pct,
              first_flight,
              country,
              company,
              wikipedia,
              description,
              id,
            } = rocket;
            const {
              thrust_sea_level: TSL1 = {},
              thrust_vacuum = {},
              reusable: reusable1,
              engines: engine1,
              fuel_amount_tons: FAT1,
              burn_time_sec: BTS1,
            } = first_stage || {};
            // const TSL1 = first_stage.thrust_sea_level || {};
            // const thrust_vacuum = first_stage.thrust_vacuum || {};
            const {
              thrust,
              payloads,
              reusable: reusable2,
              engines: engine2,
              fuel_amount_tons: FAT2,
              burn_time_sec: BTS2,
            } = second_stage || {};
            const {
              isp,
              number,
              type: engine_type,
              version,
              layout,
              engine_loss_max,
              propellant_1,
              propellant_2,
              thrust_to_weight,
            } = engines || {};

            return (
              <div key={id} className="rocket">
                <h1>{name}</h1>
                {flickr_images ? (
                  <Image2 image={flickr_images[0] || no_image} name={"N/A"} />
                ) : (
                  <Image2 image={no_image} name={"N/A"} />
                )}
                <p>
                  <b>Type:</b> {type}
                </p>
                <p>
                  <b>Height:</b> {height.meters}m / {height.feet}feet
                </p>
                <p>
                  <b>Diameter:</b> {diameter.meters}m / {diameter.feet}feet
                </p>
                <p>
                  <b>Mass:</b> {mass.kg}kg / {mass.lb}lb
                </p>
                <p>
                  <b>Stages:</b> {stages}
                </p>
                <p>
                  <b>Boosters:</b> {boosters}
                </p>
                <p>
                  <b>Active:</b> {active ? "Yes" : "No"}
                </p>
                <p>
                  <b>Success Rate:</b> {success_rate_pct}%
                </p>
                <p>
                  <b>First Flight:</b> {first_flight}
                </p>
                <p>
                  <b>Country:</b> {country}
                </p>
                <p>
                  <b>Company:</b> {company} <br />
                  <b>Landing Legs:</b> {landing_legs.number || "0"}
                  <br />
                  <b>Cost Per Launch:</b> {cost_per_launch || "N/A"} <br />
                  <b>Payload Weight:</b>
                  {payload_weights.map((payload, index) => {
                    return (
                      <ul key={index}>
                        <li>
                          <b>Name:</b> {payload.name || "N/A"}
                        </li>
                        <li>
                          <b>Weight:</b> {payload.kg || "0"} kg
                        </li>
                      </ul>
                    );
                  })}
                  <br />
                </p>
                <div>
                  <h1>First Stages</h1>
                  <p>
                    <b>Thrust Sea Level:</b> {TSL1.kN}kN
                  </p>
                  <p>
                    <b>Thrust Vacuum:</b> {thrust_vacuum.kN}kN
                  </p>
                  <p>
                    <b>Reusable:</b> {reusable1 ? "Yes" : "No"} <br />
                    <b>Engines:</b> {engine1} <br />
                    <b>Fuel Amount Tons:</b> {FAT1} <br />
                    <b>Burn Time Sec:</b> {BTS1}
                  </p>
                </div>

                <div>
                  <h1>Second Stages</h1>
                  <p>
                    <b>Thrust:</b> {thrust.kN}kN <br />
                    <b>Payloads:</b>{" "}
                    <ul>
                      <li>
                        <b>Height:</b>{" "}
                        {payloads.composite_fairing.height.meters}m
                      </li>
                      <li>
                        <b>Diameter:</b>{" "}
                        {payloads.composite_fairing.diameter.meters}m
                      </li>
                    </ul>
                  </p>
                  <p>
                    <b>Reusable:</b> {reusable2 ? "Yes" : "No"} <br />
                    <b>Engines:</b> {engine2} <br />
                    <b>Fuel Amount Tons:</b> {FAT2} <br />
                    <b>Burn Time Sec:</b> {BTS2}
                  </p>
                </div>

                <div>
                  <h1>Engines</h1>
                  <p>
                    <b>ISP:</b>
                    <ul>
                      <li>
                        <b>Sea Level:</b> {isp.sea_level || "N/A"}
                      </li>
                      <li>
                        <b>Vacuum:</b> {isp.vacuum || "N/A"}
                      </li>
                      <li>
                        <b>Number:</b> {number || "N/A"}
                      </li>
                      <li>
                        <b>Type:</b> {engine_type || "N/A"}
                      </li>
                      <li>
                        <b>Version:</b> {version || "N/A"}
                      </li>
                      <li>
                        <b>Layout:</b> {layout || "N/A"}
                      </li>
                      <li>
                        <b>Engine Loss Max:</b> {engine_loss_max || "N/A"}
                      </li>
                      <li>
                        <b>Propellant 1:</b> {propellant_1 || "N/A"}
                      </li>
                      <li>
                        <b>Propellant 2:</b> {propellant_2 || "N/A"}
                      </li>
                      <li>
                        <b>Thrust To Weight:</b> {thrust_to_weight || "N/A"}
                      </li>
                    </ul>
                  </p>
                </div>
                <a href={wikipedia} target="_blank" rel="noreferrer">
                  Wikipedia
                </a>
                <p>
                  <b>Description:</b> {description}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Rockets;
