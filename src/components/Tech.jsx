import { BallCanvas } from "./canvas";
import { technologies } from "../data";

const Tech = () => {
  return (
    <div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28"
          key={technology.name}
          title={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
