import { GITHUB_REPO_URL } from "@/constants";
import { buttonVariants } from "@/components/ui/button";
import heroImage from '@/assets/home-hero.png';

export function HomeHeroSection() {
    return <section className="py-8 lg:py-24">
        <div className="container">
            <div className="flex gap-10 flex-col lg:flex-row items-center">
                <div className="lg:basis-[500px] text-center lg:text-left">
                    <span className="inline-block bg-gradient-to-r from-[#049DD4] to-[#31C8FF] text-base px-4 py-1 rounded-full text-black">
                        Free, Open Source Chrome Extension
                    </span>
                    <h1 className="font-bold text-4xl leading-normal mt-12">
                        Get Your Pages <br /> Indexed by Google <br /> In Just 24-48 hours
                    </h1>
                    <p className="text-xl text-balance mt-6">
                        No more waiting for weeks after submitting your sitemap.
                    </p>
                    <div className="flex-wrap lg:flex-nowrap justify-center lg:justify-start flex flex-row gap-8 mt-12">
                        <a href={GITHUB_REPO_URL} className={buttonVariants({ size: 'lg', variant: 'white' })}>
                            Checkout On Github
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className="-z-10 left-[50%] translate-x-[-50%] w-[500px] h-[500px] absolute blur-[150px]"
                        style={{
                            background: 'linear-gradient(270deg, #049DD5 4.67%, #763E97 104.67%)',
                        }}
                    >
                    </div>
                    <img className="relative" src={heroImage} alt="Index button extension mockup" />
                </div>
            </div>
        </div>
    </section>
}
