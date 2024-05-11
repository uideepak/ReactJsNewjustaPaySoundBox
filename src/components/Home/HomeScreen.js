import React from "react";
import HeroBanner from "../Hero/HeroBanner";
import FeatureCard from "../FeatureCard/FeatureCard";
import SoundboxDetails from "../soundbox_details/SoundboxDetails";
import SoundboxStore from "../soundbox_store/SoundboxStore";
import SmallBanner from "../shortBanner/SmallBanner";
import ProductSlider from "../Slider/SimpleSlider";
import Faq from "../FAQ/Faq";

export default function HomeScreen() {
  return (
    <div>
      <HeroBanner />
      <FeatureCard />
      <SoundboxDetails />
      <SoundboxStore />
      <ProductSlider />
      <Faq />
      <SmallBanner />
    </div>
  );
}
