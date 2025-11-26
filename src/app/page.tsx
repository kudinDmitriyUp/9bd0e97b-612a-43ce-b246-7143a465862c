"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Star, Users, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="gradientBars"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Kafey"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139899464-0cp0ak1d.jpg"
          logoAlt="Kafey Coffeeshop Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Visit Us", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Welcome to Kafey"
          description="Authentic Ukrainian coffee experience in the heart of the city. Fresh beans, warm atmosphere, and genuine hospitality."
          tag="Local Favorite"
          tagIcon={Coffee}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139900112-pdzq6wsv.jpg",
              imageAlt: "Fresh espresso coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139900881-sqcsy15b.jpg",
              imageAlt: "Latte with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139901413-lv0yqezs.jpg",
              imageAlt: "Roasted coffee beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139902217-4npvvzbz.jpg",
              imageAlt: "Barista preparing coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139902929-7qnfquh7.jpg",
              imageAlt: "Cozy coffee shop interior"
            }
          ]}
          buttons={[
            { text: "View Menu", href: "features" },
            { text: "Find Us", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="At Kafey, we blend Ukrainian tradition with modern coffee culture. Our passion is creating the perfect cup while building a community space where neighbors become friends."
          buttons={[
            { text: "Learn Our Story", href: "#about" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="What Makes Us Special"
          description="Discover the essence of our coffeeshop experience"
          tag="Our Offerings"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          features={[
            {
              id: "01",
              title: "Specialty Espresso",
              description: "Hand-selected premium beans roasted in-house daily for the richest, most authentic flavor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139903418-r3klbgxi.jpg",
              imageAlt: "Professional espresso machine"
            },
            {
              id: "02",
              title: "Fresh Pastries",
              description: "Daily baked traditional Ukrainian pastries and international favorites prepared fresh",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139904228-hvs0tqix.jpg",
              imageAlt: "Fresh pastries and desserts"
            },
            {
              id: "03",
              title: "Free WiFi & Workspace",
              description: "Reliable internet and comfortable seating perfect for remote work or studying",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139905177-7ooo5jil.jpg",
              imageAlt: "Modern workspace setup"
            },
            {
              id: "04",
              title: "Ukrainian Culture",
              description: "Immerse yourself in authentic Ukrainian traditions through our decor, music, and hospitality",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139905811-lbg2cuw3.jpg",
              imageAlt: "Cultural atmosphere and decor"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Baristas"
          description="The passionate people who craft your perfect cup"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          members={[
            {
              id: "1",
              name: "Olena K.",
              role: "Head Barista",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139906525-ak3ucc0j.jpg",
              imageAlt: "Olena, head barista"
            },
            {
              id: "2",
              name: "Mykola T.",
              role: "Coffee Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139907517-dp7rznhn.jpg",
              imageAlt: "Mykola, coffee expert"
            },
            {
              id: "3",
              name: "Oksana M.",
              role: "Pastry Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139908614-ny85a99l.jpg",
              imageAlt: "Oksana, pastry chef"
            },
            {
              id: "4",
              name: "Viktor P.",
              role: "Cafe Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139909245-o6ciby7s.jpg",
              imageAlt: "Viktor, cafe manager"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real voices from our community"
          tag="Testimonials"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          testimonials={[
            {
              id: "1",
              name: "Natalia S.",
              role: "Regular Customer",
              company: "Downtown",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139909964-4fc6jo09.jpg",
              imageAlt: "Natalia smiling"
            },
            {
              id: "2",
              name: "Ivan K.",
              role: "Coffee Enthusiast",
              company: "Tech Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139910782-ywpbsca1.jpg",
              imageAlt: "Ivan at cafe"
            },
            {
              id: "3",
              name: "Mariya L.",
              role: "Student",
              company: "University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139911496-ux367jml.jpg",
              imageAlt: "Mariya studying"
            },
            {
              id: "4",
              name: "Andriy V.",
              role: "Business Owner",
              company: "Local Restaurant",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139912170-jb7zqomv.jpg",
              imageAlt: "Andriy portrait"
            },
            {
              id: "5",
              name: "Yulia R.",
              role: "Freelancer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139912795-3csptaoy.jpg",
              imageAlt: "Yulia working"
            },
            {
              id: "6",
              name: "Pavlo D.",
              role: "Photography Student",
              company: "Arts Institute",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139913588-hs32cm6q.jpg",
              imageAlt: "Pavlo portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have a question or just want to say hello? We would love to hear from you. Visit us or send us a message."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us what you think about our coffeeshop...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764139899464-0cp0ak1d.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 Kafey Coffeeshop. All rights reserved."
          columns={[
            {
              title: "Location",
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Delivery", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Menu", href: "features" },
                { label: "Team", href: "team" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}