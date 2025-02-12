import { FeaturesSection } from "@/components/home/features-section";
import { HomeHeroSection } from "@/components/home/hero-section";

export function Home() {
    return <div className="min-h-screen">
        <HomeHeroSection />
        <FeaturesSection />
    </div>
}
