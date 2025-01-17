export const findOrder = (slides, currentSlide, page) => {
  if (!currentSlide) {
    return 0;
  }

  const beforeCurrentSlide = slides.slice(0, page - 1);

  const occurance = beforeCurrentSlide.filter((slide) => {
    return slide.type.name === currentSlide.type.name;
  });

  return occurance.length;
};
