import type { Metadata } from "next";

import ActiveAppointments from "@/components/booking/ActiveAppointments";
import AppointmentTracking from "@/components/home/AppointmentTracking";
import Booking from "@/components/home/Booking";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import FAQ from "@/components/home/FAQ";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import InspectionDetails from "@/components/home/InspectionDetails";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "پیش‌نمایش | کارشناسی خودرو خزلی",
  description: "نسخه نمایشی فرانت‌اند سایت کارشناسی خودرو خزلی؛ اطلاعات و فرم‌ها آزمایشی هستند.",
  robots: { index: false, follow: false },
};

// Demo-only data: no database is needed to render the homepage.
const settings = {
  businessName: "کارشناسی خودرو خزلی",
  description: "کارشناسی تخصصی رنگ، بدنه و وضعیت فنی خودرو قبل از خرید.",
  phone: "09000000000",
  whatsappPhone: "09000000000",
  address: "آدرس مرکز کارشناسی (اطلاعات نمایشی)",
  businessHours: "شنبه تا پنجشنبه، ۸ صبح تا ۹ شب",
  instagramUrl: null,
  logoUrl: "/brand/logo.png",
  mapUrl: null,
  baladMapUrl: null,
  neshanMapUrl: null,
};

const portfolio = [
  { id: "demo-1", title: "بررسی بدنه و رنگ", vehicle: "نمونه خودرو", category: "full", description: "نمونه نمایشی بخش نمونه‌کارهای مرکز کارشناسی.", beforeImageUrl: null, afterImageUrl: "/uploads/portfolio/1791717334737-b047bf5a-d965-4723-bc00-36b4b8d71cf6.webp" },
  { id: "demo-2", title: "کارشناسی تخصصی بدنه", vehicle: "نمونه خودرو", category: "body", description: "تصاویر جهت نمایش ظاهر سایت قرار گرفته‌اند.", beforeImageUrl: null, afterImageUrl: "/uploads/portfolio/1791717521693-bdad3c7b-c6c6-4e0b-9a92-23d1333dce3d.webp" },
  { id: "demo-3", title: "بررسی وضعیت خودرو", vehicle: "نمونه خودرو", category: "technical", description: "محتوای این بخش در نسخه نهایی قابل ویرایش است.", beforeImageUrl: null, afterImageUrl: "/uploads/portfolio/1791717739774-f5a1ddc1-df04-4c45-8c69-20444d128910.webp" },
];

const articles = [
  { id: "demo-article-1", title: "قبل از خرید خودرو چه نکاتی را بررسی کنیم؟", slug: "car-buying-guide", excerpt: "چند نکته کاربردی برای خرید مطمئن‌تر خودرو.", coverImageUrl: "/uploads/articles/1791634198958-5078cd49-1030-4715-a793-473b0842f343.webp", publishedAt: new Date("2026-10-01T10:00:00Z"), createdAt: new Date("2026-10-01T10:00:00Z") },
];

const faqs = [
  { id: "demo-faq-1", question: "کارشناسی خودرو چقدر زمان می‌برد؟", answer: "مدت زمان کارشناسی به نوع خودرو و خدمات انتخابی بستگی دارد. این پاسخ در نسخه نمایشی است." },
  { id: "demo-faq-2", question: "آیا قبل از خرید می‌توانم نوبت رزرو کنم؟", answer: "بله، فرم رزرو برای نمایش ظاهر و تجربه کاربری در این نسخه قرار گرفته است؛ ثبت نوبت واقعی فعال نیست." },
  { id: "demo-faq-3", question: "چه بخش‌هایی از خودرو بررسی می‌شود؟", answer: "رنگ و بدنه، شاسی و بخش‌های فنی متناسب با سرویس انتخابی بررسی می‌شوند." },
];

export default function HomePage() {
  return (
    <>
      <div className="bg-brand px-4 py-2 text-center text-sm font-bold text-on-brand">نسخه نمایشی سایت — فرم‌ها و اطلاعات ثبت‌شده واقعی نیستند</div>
      <Header settings={settings} />
      <main>
        <Hero />
        <Services />
        <InspectionDetails />
        <WhyUs />
        <Process />
        <Portfolio items={portfolio} />
        <Education items={articles} />
        <FAQ items={faqs} />
        <Booking />
        <ActiveAppointments />
        <AppointmentTracking />
        <Contact settings={settings} />
        <Feedback />
      </main>
      <Footer settings={settings} />
    </>
  );
}
