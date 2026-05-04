import "./ExerciseItem.css";
import Icon from "@/components/m1";
import ExerciseImage from "@/components/m2";
import ExerciseText from "@/components/m3";

interface Props {
  image: string;
  title: string;
  subtitle: string;
}

const ExerciseItem = ({ image, title, subtitle }: Props) => {
  return (
    <div className="exercise-item">
      
      <div className="left">
        <ExerciseImage src={image} />
        <ExerciseText title={title} subtitle={subtitle} />
      </div>

      <Icon />
      
    </div>
  );
};

export default ExerciseItem;