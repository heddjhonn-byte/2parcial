import ExerciseItem from "@/components/lista";


export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      
      <ExerciseItem
        image="/img1.svg"
        title="Puxada frontal"
        subtitle="3 séries x 12 repetições"
      />

      <ExerciseItem
        image="/img2.svg"
        title="Remada curvada"
        subtitle="3 séries x 12 repetições"
      />

      <ExerciseItem
        image="/img3.svg"
        title="Remada unilateral"
        subtitle="3 séries x 12 repetições"
      />

      <ExerciseItem
        image="/img4.svg"
        title="Levantamento terra"
        subtitle="3 séries x 12 repetições"
      />

    </main>
  );
}