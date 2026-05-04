import "./m3.css";

interface Props {
  title: string;
  subtitle: string;
}

const ExerciseText = ({ title, subtitle }: Props) => {
  return (
    <div className="exercise-text">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default ExerciseText;