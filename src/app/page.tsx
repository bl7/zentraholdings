import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectShowcase from "../components/ProjectShowcase";
import Footer from "../components/Footer";
import SlackInspiredSection from '../components/SlackInspiredSection';
import { FaTags, FaPrint, FaTabletAlt } from 'react-icons/fa';
import Image from 'next/image';

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

const SlackStyleCTA = () => (
  <section className="py-16 bg-gradient-to-b from-[#D5F1FF] to-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm border border-gray-100 flex flex-col lg:flex-row items-center overflow-hidden">
        {/* Left: Text */}
        <div className="flex-1 p-8 lg:p-12">
          <div className="uppercase text-xs font-bold text-[#4A164B] mb-2 tracking-widest">Zentra Holdings Ltd.</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            There&rsquo;s a <span className="text-[#9321C6]">solution</span> for every business.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Build custom workflows, automate tasks, and collaborate with our team to create the perfect SaaS platform for your needs.
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold text-lg shadow">
            Get Started
          </a>
        </div>
        {/* Right: Mockup Image */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <Image
              src="/instalabel.png"
              alt="Zentra App Mockup"
              width={480}
              height={320}
              className="rounded-xl border border-gray-200 shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SlackInspiredSection />
      <ProjectShowcase projects={projects} />
      <SlackStyleCTA />
      <Footer />
    </div>
  );
}