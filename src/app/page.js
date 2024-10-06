import { Button } from "@/components/ui/button";
import { questionArray } from "@/Data";
import { DialogUi } from "@/modules/common_modules/DialogUi";
import Footer from "@/modules/common_modules/Footer";
import { PaginationUi } from "@/modules/common_modules/PaginationUi";
import { QuestionCard } from "@/modules/common_modules/QuestionCard";
import QuizHeader from "@/modules/common_modules/QuizHeader";
import TailwindButton from "@/modules/common_modules/TailwindButton";

export default function Home() {
  return (
    <>
      {/* <TailwindButton /> */}

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
