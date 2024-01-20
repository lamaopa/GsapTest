// const  { innerHeight } = window;
const innerHeight = section.innerHeight;

gsap.from("#zoomOut h2",{
    scale:50,
    stager : 0.25,
    duration: 3,
    scrollTrigger :{
        trigger: "#zoomOut",
        pin :true,
        end:`+=${innerHeight * 1.3}`,
        scrub : 3
    }
})

gsap.to("#zoomIn h2",{
    scale:100,
    stager : 0.25,
    duration: 3,
    scrollTrigger :{
        trigger: "#zoomIn",
        pin :true,
        end:`+=${innerHeight * 1.3}`,
        scrub : 3
    }
})


///////


/*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menu');
const $items = document.querySelectorAll('.menu--item');
let menuHeight = $menu.clientHeight;
let itemHeight = $items[0].clientHeight;
let wrapHeight = $items.length * itemHeight;

let scrollSpeed = 0;
let oldScrollY = 0;
let scrollY = 0;
let y = 0;


/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
  return v0 * (1 - t) + v1 * t;
};


/*--------------------
Dispose
--------------------*/
const dispose = scroll => {
  gsap.set($items, {
    y: i => {
      return i * itemHeight + scroll;
    },
    modifiers: {
      y: y => {
        const s = gsap.utils.wrap(-itemHeight, wrapHeight - itemHeight, parseInt(y));
        return `${s}px`;
      } } });


};
dispose(0);


/*--------------------
Wheel
--------------------*/
const handleMouseWheel = e => {
  scrollY -= e.deltaY;
};


/*--------------------
Touch
--------------------*/
let touchStart = 0;
let touchY = 0;
let isDragging = false;
const handleTouchStart = e => {
  touchStart = e.clientY || e.touches[0].clientY;
  isDragging = true;
  $menu.classList.add('is-dragging');
};
const handleTouchMove = e => {
  if (!isDragging) return;
  touchY = e.clientY || e.touches[0].clientY;
  scrollY += (touchY - touchStart) * 2.5;
  touchStart = touchY;
};
const handleTouchEnd = () => {
  isDragging = false;
  $menu.classList.remove('is-dragging');
};


/*--------------------
Listeners
--------------------*/
$menu.addEventListener('mousewheel', handleMouseWheel);

$menu.addEventListener('touchstart', handleTouchStart);
$menu.addEventListener('touchmove', handleTouchMove);
$menu.addEventListener('touchend', handleTouchEnd);

$menu.addEventListener('mousedown', handleTouchStart);
$menu.addEventListener('mousemove', handleTouchMove);
$menu.addEventListener('mouseleave', handleTouchEnd);
$menu.addEventListener('mouseup', handleTouchEnd);

$menu.addEventListener('selectstart', () => {return false;});


/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
  menuHeight = $menu.clientHeight;
  itemHeight = $items[0].clientHeight;
  wrapHeight = $items.length * itemHeight;
});


const tl = gsap.timeline({
    // Add timeline options or variables here
});

gsap.timeline({
    scrollTrigger: {
        trigger: selector, // Add your trigger element selector
        start: 'top center', // Set the start position
        end: 'bottom center', // Set the end position
        scrub: true, // Enable scrubbing
        markers: true, // Display markers for debugging
    }
})
.add(tl);

G