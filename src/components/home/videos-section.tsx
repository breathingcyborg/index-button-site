export function VideosSection() {
    return <section>
        <div className="container">
            <div className="flex gap-10 flex-col lg:flex-row items-center my-16">
                <div className="lg:basis-[500px] lg:shrink-0 text-center lg:text-left relative">
                    <div
                        className="-z-10 left-[50%] translate-x-[-50%] w-[500px] h-[500px] absolute blur-[150px]"
                        style={{
                            background: 'linear-gradient(270deg, #049DD5 4.67%, #763E97 104.67%)',
                        }}
                    >
                    </div>
                    <h3 className="font-bold text-4xl leading-normal">
                        One click indexing
                    </h3>
                    <p className="text-xl text-balance mt-6">
                        It's a literal button. Visit the page you need to index & index it with single click
                    </p>
                </div>
                <div className="relative">
                    <video autoPlay loop muted className="relative rounded-lg" src="/one-click-indexing.webm"></video>
                </div>
            </div>
            <div className="flex gap-10 flex-col lg:flex-row-reverse items-center my-16">
                <div className="lg:basis-[500px] lg:flex-shrink-0 text-center lg:text-left relative">
                    <div
                        className="-z-10 left-[50%] translate-x-[-50%] w-full h-full absolute blur-[150px]"
                        style={{
                            background: 'linear-gradient(270deg, #049DD5 4.67%, #763E97 104.67%)',
                        }}
                    >
                    </div>
                    <h3 className="font-bold text-4xl leading-normal">
                        Sitemap Indexing
                    </h3>
                    <p className="text-xl text-balance mt-6">
                        Index a list of pages or entire sitemap.
                        Pages are automatically submitted to google in background.
                    </p>
                </div>
                <div>
                    <video autoPlay loop muted className="rounded-lg" src="/sitemap-indexing.mp4"></video>
                </div>
            </div>
        </div>
    </section>
}