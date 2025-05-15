import Image from "next/image";
import TopNav from "../components/Header/TopNav/TopNav";
import Menu from "../components/Header/Menu/Menu";
import Slider from "@/components/Slider/Slider";
import Service from "@/components/Service/Service";
import serviceData from "@/data/service.json";
import PaymentGateway from "@/components/PaymentGateway/PaymentGateway";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import PaymentGatewayTwo from "@/components/PaymentGateway/PaymentGatewayTwo";
import FormRequest from "@/components/FormRequest/FormRequest";
import Testimonial from "@/components/Testimonial/Testimonial";
import Blog from "@/components/Blog/Blog";
import blogData from "@/data/blog.json";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main>
        <Slider />
        <Service />
        <PaymentGateway />
        <CaseStudy />
        <PaymentGatewayTwo />
        <FormRequest />
        <Testimonial />
        <Blog />
        <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
        <footer id="footer">
          <Footer />
        </footer>
      </main>
    </div>
  );
}
