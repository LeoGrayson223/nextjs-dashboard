/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const CTACard = () => {
    return (
        <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
            {/* Image */}
            <Image
                fill
                alt="CTA Card Image"
                className="object-center object-cover"
                src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9"
            />
            {/* Content Container */}
            <div className="relative z-20">
                <div className="text-lg font-medium">#exploretheworld</div>
                <h3 className="mt-3 text-4xl font-semibold">Explore the world with me!</h3>
                <p className="max-w-lg mt-2 text-lg">
                    Explore the world with me! I'm travelling around the 🌏. I've visited
                    most of the great cities of <b>United State</b> and currently I'm travelling in <b>Uni Europe</b>.
                    Join me!
                </p>
                {/* Form */}
                <form className="flex items-center w-full gap-2 mt-6">
                    <input placeholder="Write your email. "
                        className="w-full px-3 py-2 text-base bg-white rounded-md outline-none md:w-auto placeholder:text-sm bg-white/80 focus:ring-2"
                    />
                    <button className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CTACard