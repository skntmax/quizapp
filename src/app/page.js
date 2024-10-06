import { questionArray } from "@/Data"; // Ensure this is correct
import { DialogUi } from "@/modules/common_modules/DialogUi"; // Ensure this is correct
import Footer from "@/modules/common_modules/Footer"; // Ensure this is correct
import { PaginationUi } from "@/modules/common_modules/PaginationUi"; // Ensure this is correct
import { QuestionCard } from "@/modules/common_modules/QuestionCard"; // Ensure this is correct
import QuizHeader from "@/modules/common_modules/QuizHeader"; // Ensure this is correct


export default function Home() {
  return (
    <>

      <DialogUi />
      <QuizHeader correct={1} incorrect={5} remaining={153} />
      <div style={{ width: "80%", margin: 'auto', padding: '100px' }}>
        <PaginationUi />
        {
          questionArray.map((item, index) => <QuestionCard data={item} index={index} />)
        }
        <PaginationUi />
      </div>
      <Footer />
    </>
  );
}
