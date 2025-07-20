import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectShowcase from "../components/ProjectShowcase";
import Footer from "../components/Footer";
import { FaTags, FaPrint, FaTabletAlt } from 'react-icons/fa';

const projects = [
  {
    id: "1",
    category: "Label Printing",
    label: "INSTALABEL",
    labelIcon: <FaTags />,
    title: "InstaLabel",
    description: "Print professional kitchen labels (including PPDS and Natasha’s Law) with automatic date calculations, allergen warnings, and storage instructions. Works from any device—USB printer, Sunmi, or more. Perfect for any kitchen that needs to comply with food safety laws—from restaurants to delis to food trucks.",
    url: "https://www.instalabel.co",
    image: "/instalabel.png",
    blobColor: "#4A164B",
    stat: "Any Label, Any Device",
    statColor: "#9321C6",
    statText: "Professional, Compliant, Easy",
    icon: <FaTags />,
  },
  {
    id: "2",
    category: "Print Integration",
    label: "PRINTBRIDGE",
    labelIcon: <FaPrint />,
    title: "PrintBridge",
    description: "Zentra supports a wide range of USB-connected thermal label printers — no special hardware required. As long as your printer is installed with a system driver, Zentra will detect it automatically and deliver pixel-perfect prints every time. Whether you're printing 2-inch prep labels or large PPDS labels, Zentra gets the size right — no matter the brand.",
    url: "#printbridge",
    image: "/printbridge.png",
    blobColor: "#21C6A6",
    stat: "Seamless compatibility",
    statColor: "#21C6A6",
    statText: "out of the box.",
    icon: <FaPrint />,
  },
  {
    id: "3",
    category: "QR Ordering App",
    label: "TAPTAB",
    labelIcon: <FaTabletAlt />,
    title: "TapTab",
    description: "TapTab is an app that allows customers to place orders by scanning QR catalogues from their phone, staffs can later continue the order taking adding on it, can take new orders as well, runs on tablet, prints receipts for new orders.",
    url: "#taptab",
    image: "/placeholder.png",
    blobColor: "#9321C6",
    stat: "Ongoing",
    statColor: "#9321C6",
    statText: "Tablet-first QR ordering",
    icon: <FaTabletAlt />,
  },
];

const CTASection = () => (
  <section className="bg-gradient-to-r from-[#4A164B] to-[#9321C6] py-16">
    <div className="max-w-3xl mx-auto px-6 text-center text-white">
      <h2 className="text-4xl font-extrabold mb-4">Ready to build something amazing?</h2>
      <p className="text-lg mb-8 opacity-90">
        Start your journey with Zentra Holdings Ltd. today—let’s create the future of business technology together.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" className="px-8 py-4 bg-white text-[#4A164B] rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
          Get Started
        </a>
        <a href="#zentraflow" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#4A164B] transition-colors font-semibold text-lg">
          Explore Our Solutions
        </a>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProjectShowcase projects={projects} />
      <CTASection />
      <Footer />
    </div>
  );
}