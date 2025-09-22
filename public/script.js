// Highlight active nav link on scroll
document.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 100;
  document.querySelectorAll("section").forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      document.querySelectorAll(".nav-link").forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${section.id}`) {
          a.classList.add("active");
        }
      });
    }
  });
});


// contact
  AOS.init({
    duration: 800,
    once: true
  });
//   
  document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const target = bar.getAttribute("data-progress");
          bar.style.width = target + "%";
          observer.unobserve(bar); // animate only once
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
  });
