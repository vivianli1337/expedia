import { SearchBar } from './search';
import { HeroSection } from './hero';
import { MapSection } from './map';

export default function ExploreLayout() {
  return (
    <div className="font-sans">
      <SearchBar />
      <HeroSection />
      <MapSection />
    </div>
  );
};

