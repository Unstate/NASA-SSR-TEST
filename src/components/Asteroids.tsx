import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

// interface CloseApproachData {
//   close_approach_date: string;
//   lose_approach_date_full: string;
//   miss_distance: MissDistance;
//   orbiting_body: string;
//   relative_velocity: RelativeVelocity;
// }

// interface RelativeVelocity {
//   kilometers_per_hour: string;
//   kilometers_per_second: string;
//   miles_per_hour: string;
// }

// interface MissDistance {
//   astronomical: string;
//   kilometers: string;
//   lunar: string;
//   miles: string;
// }

// interface EstimatedDiameterHelper {
//   estimated_diameter_max: number;
//   estimated_diameter_min: number;
// }

// interface EstimatedDiameter {
//   kilometers: EstimatedDiameterHelper;
//   miles: EstimatedDiameterHelper;
// }

// interface Asteroid {
//   id: string;
//   absolute_magnitude_h: number;
//   estimated_diameter: EstimatedDiameter;
//   name: string;
//   nasa_jpl_url: string;
//   close_approach_data: CloseApproachData;
//   is_potentially_hazardous_asteroid: boolean;
//   is_sentry_object: boolean;
// }

const Asteroids = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get(
          "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=st4wUxcV5kvT3qNzXfcJolfN8Q92zV4UojcOkg0w"
        )
        .then((res) => res.data),
  });
  //FIXME: Write interface of asteroids
  const [asteroids, setAsteroids] = useState<any>();

  useEffect(() => {
    if (data) {
      setAsteroids(data);
    }
  }, [data]);

  console.log(asteroids);

  return (
    <>
      <div>
        {isLoading && <h1 className=" animate-pulse">Loading ...</h1>}
        {isError && <h1 className=" animate-pulse">Error ...</h1>}
        {asteroids &&
          Object.keys(asteroids?.near_earth_objects).forEach((key) => {
            const objects = asteroids?.near_earth_objects[key];
            console.log(objects);
            objects.map((obj: any) => <div>{obj.id}</div>);
          })}
      </div>
    </>
  );
};

export default Asteroids;
