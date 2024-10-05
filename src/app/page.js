import { questionArray } from "@/Data";
import { PaginationUi } from "@/modules/common_modules/PaginationUi";
import { QuestionCard } from "@/modules/common_modules/QuestionCard";
import QuizHeader from "@/modules/common_modules/QuizHeader";

export default function Home() {
  return (
    <div style={{ width: "80%", margin:'auto', padding:'100px' }}>
      <QuizHeader correct={1} incorrect={5} remaining={153} />
      <PaginationUi />
      {
        questionArray.map((item, index) => <QuestionCard data={item} index={index} />)
      }
      <PaginationUi />
    </div>
  );
}
