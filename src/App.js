import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import { Container } from "react-bootstrap";
import CarouselContainer from "./Components/CarouselContainer";
import TextContainer from "./Components/TextContainer";
import ImageCardsContainer from "./Components/ImageCardsContainer";
import MemberCardsContainer from "./Components/MemberCardsContainer";
import CardScroller from "./Components/CardScrollers";
import FooterContainer from "./Components/FooterContainer";
import DataInputContainer from "./Components/DataInputContainer";
import SocialLinks from "./Components/SocialLinks";

const items = [
  {
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    alt: "First Image",
    title: "First Slide",
    description: null,
  },
  {
    image:
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    alt: "Second Image",
    title: "Second Slide",
    description: "Description for second slide.",
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    alt: "First Image",
    title: null,
    description: null,
  },
];
const textContent = {
  title: "Make Your Investment as Efficient with our expert advice",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
};
const AboutContent = {
  title: "About Us",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
};
const servicesData = {
  title: "Our Services",
  imageData: [
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  ],
};
const inversterData = {
  title: "Inverster Corner",
  imageData: [
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  ],
};
const members = [
  {
    name: "ABC",
    position: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  },
  {
    name: "XYZ",
    position: "CTO",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  },
  {
    name: "XYZ",
    position: "CTO",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  },
  {
    name: "XYZ",
    position: "CTO",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  },
  {
    name: "XYZ",
    position: "CTO",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  },
];

const images = [
  {
    url: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    alt: "3M",
  },
  {
    url: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    alt: "Barstool Store",
  },
  {
    url: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
    alt: "Budweiser",
  },
  {
    url: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    alt: "Budweiser",
  },
  {
    url: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    alt: "Budweiser",
  },
  {
    url: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    alt: "Budweiser",
  },
  {
    url: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    alt: "Budweiser",
  },
];
function App() {
  return (
    <div className="text-center min-h-screen bg-black text-white">
      <SocialLinks />
      <div className="sticky top-0 z-10 bg-gray-900 border-b-2 border-gray-800">
        <NavigationBar />
      </div>

      <Container className="mt-2 grid gap-4">
        <div id="Carosule" smooth>
          <CarouselContainer items={items} id="Carosule" />
        </div>
        <TextContainer content={textContent} />
        <div id="Service" smooth>
          <ImageCardsContainer servicesData={servicesData} />
        </div>
        <div id="Invester">
          <ImageCardsContainer servicesData={inversterData} />
        </div>
        <div id="Contact" smooth>
          <DataInputContainer />
        </div>
        <div id="Experts" smooth>
          <MemberCardsContainer members={members} />
        </div>
        {/* <Container id="Partners" smooth>
          <CardScroller images={images} />
        </Container> */}
        <div id="About" smooth>
          <TextContainer content={AboutContent} />
        </div>
      </Container>
      <FooterContainer />
    </div>
  );
}

export default App;
