import { useRef, useState } from "react";
import html2canvas from '@/assets/sultan.pdf';
import sultanpdf from "@/assets/sultan.pdf"; // FIXED

export default function RecommendationLetter() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const downloadPDF = async () => {
    const element = pdfRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("Recommendation_Letter_Sultan_Mahmud_Dewan.pdf");
  };

  return (
    <section className="py-16 px-4" id="recomandation">
      <div className="max-w-3xl mx-auto">

        {/* PDF Content */}
        <div
          ref={pdfRef}
          className="bg-white text-black p-10 shadow-lg rounded-xl border border-gray-300"
          style={{ fontFamily: "Georgia, serif", lineHeight: "1.65" }}
        >
          <h2 className="text-center text-xl font-bold mb-1">
            DHAMRAI GOVERNMENT COLLEGE
          </h2>
          <p className="text-center text-sm mb-8 text-gray-700">
            Dhaka, Bangladesh
          </p>

          <p className="text-sm mb-6">Date: ____________________</p>
          <p className="text-lg font-semibold mb-4">To Whom It May Concern,</p>

          <p className="mb-4 text-justify">
            It is my great honor to write this letter of recommendation for{" "}
            <strong>Md. Sultan Mahmud Dewan</strong>, one of the most brilliant,
            disciplined, and inspiring students of Dhamrai Government College.
          </p>

          {/* READ MORE SECTION */}
          {expanded && (
            <>
              <p className="mb-4 text-justify">
                Among his many achievements, the most remarkable is his
                outstanding performance in the National Mathematics Olympiad...
              </p>

              <p className="mb-4 text-justify">
                I vividly remember the pride that swept through our institution…
              </p>

              <p className="mb-4 text-justify">
                What makes Sultan’s accomplishment even more extraordinary…
              </p>

              <p className="mb-4 text-justify">
                Yet none of these adversities broke Sultan’s spirit…
              </p>

              <p className="mb-4 text-justify">
                Sultan’s journey is a powerful example of how perseverance…
              </p>

              <p className="mb-8 text-justify">
                Please feel free to contact me should you require any further information.
              </p>

              <div className="mt-10">
                <p className="font-semibold">______________________________</p>
                <p className="font-semibold">Name of the Principal</p>
                <p>Principal, Dhamrai Government College</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </>
          )}

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary font-semibold mt-4 underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* --- 3 ACTION BUTTONS --- */}
        <div className="text-center mt-8 flex flex-col md:flex-row gap-4 justify-center">

          {/* VIEW PDF */}
          <a
            href={sultanpdf}
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            View PDF
          </a>

          {/* DOWNLOAD (REAL PDF) */}
          <button
            onClick={downloadPDF}
            className="px-6 py-3 bg-primary text-white rounded-full shadow hover:bg-primary/90 transition"
          >
            Download PDF
          </button>

          {/* LOAD MORE (EXPAND) */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-900 transition"
          >
            {expanded ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
}
