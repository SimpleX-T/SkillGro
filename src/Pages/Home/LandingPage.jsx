import { AcademicCapIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { PlayIcon } from "@heroicons/react/16/solid";
import {
	BookOpenIcon,
	PresentationChartLineIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline";
import CourseViewer from "../../UI/CourseViewer";
import Button from "../../UI/Button";
import Footer from "../../UI/Footer";
import HeroSection from "./HeroSection";
import BrandCarousel from "./BrandCarousel";
import AboutCard from "../../UI/AboutCard";
import Tag from "../../UI/Tag";
import FeaturesSection from "./FeaturesSection";
import AboutUsSection from "./AboutUsSection";
import CoursesSection from "./CoursesSection";
import WorkshopSection from "./WorkshopSection";

function LandingPage() {
	return (
		<>
			<HeroSection />
			<section className='slanted-bg relative bg-white mx-auto w-full overflow-x-clip'>
				<BrandCarousel />
				<FeaturesSection />
				<AboutUsSection />
			</section>
			<CoursesSection />
			<WorkshopSection />
			<Footer />
		</>
	);
}

export default LandingPage;
