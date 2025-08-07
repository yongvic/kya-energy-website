const carousel = document.querySelector(".carousel");

if (carousel) {
  const carouselContents = carousel.innerHTML;
  const newCarouselContents = carouselContents.replace(/(<p>|<\/p>)/gi, "");

  // change content in order to add two more div elements for scrolling
  carousel.innerHTML = `
    <div style="overflow-x: auto;">
      <div style="width: max-content;">
        ${newCarouselContents}
      </div>
    </div>
  `;
}
