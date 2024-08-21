import React from "react";
import AccordioneFRQ from "./AccordioneFRQ";

const Frequantlys = ({ number }) => {
  const data = [
    {
      id: 1,
      question: "What is the return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase. Items must be in their original condition with all packaging and tags intact.",
    },
    {
      id: 2,
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the 'Orders' section. You will also receive an email with a tracking link once your order has been shipped.",
    },
    {
      id: 3,
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit cards, PayPal, and Apple Pay. For more details, visit our payment options page.",
    },
    {
      id: 4,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to selected countries. Shipping fees and delivery times vary depending on the destination.",
    },
    {
      id: 5,
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on 'Forgot Password' on the login page and follow the instructions. You will receive an email with a link to reset your password.",
    },
    {
      id: 6,
      question: "Can I change or cancel my order?",
      answer:
        "Orders can be changed or canceled within 1 hour of placing them. After this period, we cannot guarantee modifications or cancellations.",
    },
    {
      id: 7,
      question: "What should I do if I receive a damaged item?",
      answer:
        "If you receive a damaged item, please contact our customer service team within 48 hours of delivery with photos of the damaged product and packaging.",
    },
    {
      id: 8,
      question: "How do I contact customer service?",
      answer:
        "You can contact our customer service team via email at support@example.com or by calling (123) 456-7890 during business hours.",
    },
  ];
  return (
    <div>
      {data?.slice(0, number || data.length).map((item) => (
        <AccordioneFRQ key={item?.id} data={item} />
      ))}
    </div>
  );
};

export default Frequantlys;
