import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={faq.question} className="border border-gray-200 rounded-lg shadow-sm">
          <button
            type="button"
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className={
              `w-full text-left px-6 py-4 text-lg font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#611E69] transition cursor-pointer flex justify-between items-center` +
              (openIndex === idx ? ' bg-gray-50' : ' bg-white')
            }
          >
            <span>{faq.question}</span>
            <svg className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            id={`faq-panel-${idx}`}
            role="region"
            aria-labelledby={`faq-button-${idx}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 py-4 px-6' : 'max-h-0 py-0 px-6'}`}
            style={{lineHeight: '1.6'}}
          >
            <p className="text-base text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 