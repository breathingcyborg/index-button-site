import { GITHUB_REPO_URL, YOUTUBE_PLAYLIST_URL } from "@/constants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import youtube from '@/assets/yt_icon_rgb.png';

export function FeaturesSection() {
    const cardClasses = 'p-12 bg-card rounded-lg'
    const titleClass = 'text-2xl';
    
    return <section className="mb-20">
        <div className="container">
            <ul className="grid grid-cols-3 gap-6">
                <li className={cn(cardClasses, "col-span-3 lg:col-span-1")}>
                    <h3 className={titleClass}>One Click Indexing</h3>
                    <p className="mt-8">
                        It's a literal button. Index your page with single click
                    </p>
                </li>
                <li className={cn(cardClasses, "col-span-3 lg:col-span-1")}>
                    <h3 className={titleClass}>Bulk Indexing</h3>
                    <p className="mt-8">
                        Index multiple pages at once with our convenient bulk indexing feature.
                    </p>
                </li>
                <li className={cn(cardClasses, "col-span-3 lg:col-span-1")}>
                    <h3 className={titleClass}>Faster Indexing</h3>
                    <p className="mt-8">
                        Enjoy faster indexing—typically within 24-48 hours—compared to traditional methods using Google Search Console.
                    </p>
                </li>
                <li className={cn(cardClasses, "col-span-3 lg:col-span-1")}>
                    <h3 className={titleClass}>Open Source</h3>
                    <p className="mt-8">
                        Our source code is completely open source.
                    </p>
                </li>
                <li className={cn(cardClasses, "col-span-3 lg:col-span-1")}>
                    <h3 className={titleClass}>Complete Privacy</h3>
                    <p className="mt-8">
                        No data leaves your device; honestly, we don't even have a server! 😄
                    </p>
                </li>
                <li className={cn(cardClasses, "col-span-3 lg:col-span-1")}>
                    <h3 className={titleClass}>No Need for Owner Rights</h3>
                    <p className="mt-8">
                        Unlike others, we don't require owner access to your Search Console account.
                    </p>
                </li>
                <li className={cn(cardClasses, "col-span-3 lg:col-span-2")}>
                    <h3 className={cn(titleClass, "flex gap-4 items-center")}>
                        <img src={youtube} className="w-12 h-auto" />
                        Youtube Tutorials
                    </h3>
                    <p className="mt-8">
                        A YouTube playlist that includes everything that helps you get start with this extension.  From setting up google search console to indexing single or multiple pages.
                    </p>
                    <div className="mt-8">
                        <a className={buttonVariants({ variant: 'white', size: 'lg' })} href={YOUTUBE_PLAYLIST_URL}>
                            Watch On Youtube
                        </a>
                    </div>
                </li>
                <li className={cn(cardClasses, "col-span-3 lg:col-span-1")}>
                    <h3 className={titleClass}>Need Help?</h3>
                    <p className="mt-8">
                        You can create an issue on git-hub if you need help. Or you can request new features.
                    </p>
                    <div className="mt-8">
                        <a className={buttonVariants({ variant: 'white', size: 'lg' })} href={GITHUB_REPO_URL}>
                            Create Github Issue
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}