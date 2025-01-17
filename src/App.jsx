import slides from "./slides";
import { usePage } from "./hooks";

function App() {
  const { page, setPage, increasePage, decreasePage } = usePage(slides.length);

  const currentSlide = slides[page - 1];

  return (
    <div
      className="h-screen bg-[url('https://slidespeak-presentation-template-images.s3.amazonaws.com/3f5ebd76ac315f9538e496287373f30ceb0336f3.png')]"
      onClick={() => increasePage()}
      onContextMenu={(e) => {
        e.preventDefault();
        decreasePage();
      }}
    >
      {currentSlide}
      <span
        className="absolute inset-x-0 bottom-0 cursor-pointer pb-6 text-center text-xl"
        onClick={(e) => {
          e.stopPropagation();
          setPage(2);
        }}
      >
        {page}
      </span>
    </div>
  );
}

export default App;
