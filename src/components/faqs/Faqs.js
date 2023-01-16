import { useState } from "react";
import { ReactComponent as CirclePlus } from "../../assets/icons/circlePlus.svg";
import "./Faqs.css";

function Faqs() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: false,
      heading: "How do I inspect the Estate?",
      content:
        "Inspections can be booked by calling any of the numbers or via SMS to 07061183969, 09035267573 or 08090182462.",
    },
    {
      id: 2,
      open: false,
      heading: "When can I take possession of the plot(s)?",
      content:
        "After 100% completion of all payments has been made in full inclusive of all other fees.",
    },
    {
      id: 3,
      open: false,
      heading: "What do I get after the initial payments on the land?",
      content:
        "After initial payment, you will get invoice, Contract of sale and receipt will be issued for every payment made.",
    },
    {
      id: 4,
      open: false,
      heading: "What do I get on complete payment on the property?",
      content:
        "Letter of Allocation, Receipt of payment, Deed of Assignment and Survey Plan.",
    },
    {
      id: 5,
      open: false,
      heading:
        "What other payment am I making asides payment for the property?",
      content:
        "Deed of assignment, Registered Survey Plan and development Levy",
    },
    {
      id: 6,
      open: false,
      heading: "What are the payment structures?",
      content: (
        <>
          Outright payments, 12 months and 18 months.
          <br /> <br /> Coner piece plots attracts 10% surcharge to the cost of
          the property.
        </>
      ),
    },
  ]);

  const toggleFaq = (id) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, open: !faq.open } : faq))
    );
  };

  return (
    <div className="faqs">
      <div className="faq-container">
        <h3>Frequently Asked Questions</h3>
        {faqs.map((item) => (
          <div key={item.id} className={`tile${item.open ? " tile-open" : ""}`}>
            <div
              onClick={() => toggleFaq(item.id, "GENERAL")}
              className="tile-heading"
            >
              <p>{item.heading}</p>
              <CirclePlus />
            </div>
            <p className="tile-content">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
