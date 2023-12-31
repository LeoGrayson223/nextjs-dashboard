import React from 'react';
import PaddingContainer from '../layout/padding-container';
import siteConfig from '@/config/site';
import Link from 'next/link';
import SocialLink from '../elements/social-link';

const Footer = () => {
    return <div className="py-8 mt-10 border-t">
        <PaddingContainer>
            <div>
                <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                <p className="max-w-md mt-2 text-lg text-neutral-700">
                    {siteConfig.description}
                </p>
            </div>
            {/* Social and Currently At */}
            <div className="flex flex-wrap justify-between gap-4 mt-6">
                <div>
                    <div className="text-lg font-medium">#exploretheworld</div>
                    <div className="flex items-center gap-3 mt-2 text-neutral-600">
                        <SocialLink 
                            platform="twitter"
                            link={siteConfig.socialLinks.twitter} isShareURL={false}                        />
                        <SocialLink 
                            platform="instagram"
                            link={siteConfig.socialLinks.instagram} isShareURL={false}                        />
                        <SocialLink 
                            platform="github"
                            link={siteConfig.socialLinks.github} isShareURL={false}                        />
                        <SocialLink 
                            platform="youtube"
                            link={siteConfig.socialLinks.youtube} isShareURL={false}                        />
                        <SocialLink 
                            platform="linkedin"
                            link={siteConfig.socialLinks.linkedin} isShareURL={false}                        />
                    </div>
                </div>
                <div>
                    <div className="text-sm text-neutral-400">Currently At</div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
                        <div className="w-2 h-2 rounded-full bg-emerald-600" />
                        {siteConfig.currentlyAt}
                    </div>
                </div>
            </div>
            {/* Bottom Section */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t">
                <div className="text-sm text-neutral-400">
                    All rights are reserved | Copyright {new Date().getFullYear()}
                </div>
                <div>Made with love by <Link className="underline underline-offset-4"
                    href="https://x.com/JerryGachaVer?t=uDaIzOaclW_lmVw9SviNHg&s=08">
                    @LeoGrayson
                </Link>
                </div>
            </div>
        </PaddingContainer>
    </div>;
}

export default Footer