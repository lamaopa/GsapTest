// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Sélection des éléments du DOM
const container = document.getElementById('container');
const grid = document.getElementById('grid');
const images = gsap.utils.toArray('.image');

// Calcul du décalage (shift) pour le défilement
const shift = 320 + 3 * 16;

// Configuration de la timeline GSAP avec ScrollTrigger
const tl = gsap.timeline({
  defaults: { ease: "none" },
  scrollTrigger: {
    end: `+=${(images.length - 1) * shift}`, // Modification ici pour rendre le code plus clair
    pin: true,
    scrub: true,
    snap: {
      duration: { min: 0.1, max: 0.3 },
      snapTo: 1 / (images.length - 1),
    },
    trigger: container,
  },
});

// Animation pour chaque image (à partir de la deuxième image)
images.slice(1).forEach((image) => {
  tl.to(grid, { x: `-=${shift}` });
  tl.to(image, { scale: 1 }, '<');
});
