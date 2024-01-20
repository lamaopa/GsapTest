const myElement = document.getElementById("myElement");

    // Utiliser GSAP pour créer une animation "from"
    gsap.from(myElement, {
      duration: 2,
      x: -200,          // Déplacer l'élément de -200 pixels horizontalement (de gauche à droite)
      opacity: 0,       // Définir l'opacité à 0 (invisible au début)
      ease: "bounce.out",// Fonction d'assouplissement pour un effet de rebondissement à la fin
      
      // Autres propriétés couramment utilisées :

      y: 100,                 // Déplacer l'élément de 100 pixels verticalement
      rotation: 360,          // Effectuer une rotation de 360 degrés
      scale: 1.5,             // Mettre à l'échelle l'élément à 1.5 fois sa taille d'origine
      backgroundColor: "#ff0000", // Changer la couleur de fond à rouge

      // Fonctions d'assouplissement prédéfinies (ease) :
      // - "power1.inOut"
      // - "power2.inOut"
      // - "power3.inOut"
      // - "elastic.out(1, 0.3)" (Exemple d'effet élastique)
      // - "back.out(1.7)" (Exemple d'effet de recul)
    });




    // Utiliser une timeline pour organiser plusieurs animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#mySection",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
        
        // Autres propriétés couramment utilisées avec ScrollTrigger :

        onUpdate: (self) => {    // Fonction appelée à chaque trame d'animation du déclencheur
          console.log("Mise à jour du déclencheur!");
        },
        onEnter: () => {         // Fonction appelée lorsque le déclencheur entre dans la vue
          console.log("Déclencheur dans la vue!");
        },
        onLeave: () => {         // Fonction appelée lorsque le déclencheur quitte la vue
          console.log("Déclencheur hors de la vue!");
        },
        onEnterBack: () => {     // Fonction appelée lorsque le déclencheur revient dans la vue depuis le bas
          console.log("Déclencheur de retour dans la vue!");
        },
        onLeaveBack: () => {     // Fonction appelée lorsque le déclencheur quitte la vue depuis le haut
          console.log("Déclencheur de retour hors de la vue!");
        },
        toggleActions: "play reverse play reverse", // Actions à effectuer à chaque entrée/sortie du déclencheur

        pin: true,               // Épingler l'élément pendant la durée du déclencheur
        pinSpacing: false,       // Désactiver l'ajout d'espace pour l'élément épinglé
  }
});

    

    // Ajouter des animations à la timeline
    tl.to("#myElement", {
      duration: 2,
      scale: 1.5,
      rotation: 360,
      ease: "elastic.out(1, 0.3)", // Effet élastique à la fin
    });

    tl.to("#myElement", {
      duration: 1,
      y: 100,  // Déplacer l'élément vers le bas
      opacity: 0.8,
    });

    // Ajouter une autre animation avec un délai
    tl.from("#myElement", {
      duration: 1,
      x: 200,  // Déplacer l'élément de 200 pixels horizontalement (de droite à gauche)
      opacity: 0,
      ease: "back.out(1.7)", // Effet de recul à la fin
      delay: 0.5,
    });
