import Layout from "../components/Layout";
import { useState } from "react";

const FAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedFAQ(index === selectedFAQ ? null : index);
  };

  return (
    <div className="bg-darkMode">
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          {/* 1 */}
          <div onClick={() => toggleAnswer(0)} className="cursor-pointer">
            자주 묻는 질문 1
          </div>
          {selectedFAQ === 0 && <div className="mt-4">답변 1</div>}
          {/* 1 */}
          {/* 2 */}
          <div onClick={() => toggleAnswer(1)} className="cursor-pointer">
            자주 묻는 질문 2
          </div>
          {selectedFAQ === 1 && <div className="mt-4">답변 2</div>}
          {/* 2 */}
          {/* 3 */}
          <div onClick={() => toggleAnswer(2)} className="cursor-pointer">
            자주 묻는 질문 3
          </div>
          {selectedFAQ === 2 && <div className="mt-4">답변 3</div>}
          {/* 3 */}
        </section>
      </Layout>
    </div>
  );
};

export default FAQ;
