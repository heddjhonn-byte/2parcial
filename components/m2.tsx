import "./m2.css";

interface Props {
  src: string;
}

const ExerciseImage = ({ src }: Props) => {
  return <img className="exercise-img" src={src} alt="exercise" />;
};

export default ExerciseImage;