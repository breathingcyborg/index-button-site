import { FeaturesSection } from "@/components/home/features-section";
import { HomeHeroSection } from "@/components/home/hero-section";
import { VideosSection } from "@/components/home/videos-section";

export function Home() {
    return <div className="min-h-screen">
        <HomeHeroSection />
        <FeaturesSection />
        <VideosSection />
    </div>
}
