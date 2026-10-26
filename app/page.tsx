import { Suspense } from "react";
import SiteHeader from "@/components/SiteHeader";
import TabsBar from "@/components/TabsBar";
import ListingHero from "@/components/ListingHero";
import ListingDetails from "@/components/ListingDetails";
import BookingCard from "@/components/BookingCard";
import FullWidthSections from "@/components/FullWidthSections";
import PhotoTourHost from "@/components/PhotoTour";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <TabsBar />
      <main className="mx-auto w-full max-w-[1280px] px-10 min-[1128px]:px-20">
        <div id="photos">
          <ListingHero />
        </div>
        <div className="mt-8 grid grid-cols-1 min-[1128px]:grid-cols-[minmax(0,1fr)_372px] min-[1128px]:gap-x-24">
          <ListingDetails />
          <div className="hidden min-[1128px]:block">
            <BookingCard />
          </div>
        </div>
        <FullWidthSections />
      </main>
      <Suspense fallback={null}>
        <PhotoTourHost />
      </Suspense>
    </>
  );
}
