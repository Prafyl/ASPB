import { useRouter } from "next/router";

import Navbar from "../../../components/Utils/Navbar";
import QuestionPage from "../../../components/Questions/QuestionPage";

const question = () => {
  const router = useRouter();
  const pid = router.query;
  return (
    <>
      <Navbar />
      <QuestionPage type={pid.type} no={pid.no} />
    </>
  );
};

export default question;
