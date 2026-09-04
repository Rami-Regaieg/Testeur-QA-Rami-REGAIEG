// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  setTimeout(() => {
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
  }, 80);
});
document
  .querySelectorAll("a, button, .skill-block, .expertise-item, .tool-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "16px";
      cursor.style.height = "16px";
      ring.style.width = "48px";
      ring.style.height = "48px";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.width = "8px";
      cursor.style.height = "8px";
      ring.style.width = "32px";
      ring.style.height = "32px";
    });
  });

// Navbar scroll
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Intersection observer for reveals
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal, .timeline-item")
  .forEach((el) => observer.observe(el));

// Stagger for skill blocks and tool cards
const staggerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(
          ".skill-block, .tool-card, .stat-card",
        );
        items.forEach((item, i) => {
          setTimeout(() => item.classList.add("visible"), i * 80);
        });
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".skills-layout, .tools-grid, .about-stats")
  .forEach((el) => staggerObserver.observe(el));

// Animate tool bars on scroll
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".tool-bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
      }
    });
  },
  { threshold: 0.3 },
);
document
  .querySelectorAll(".tools-grid")
  .forEach((el) => barObserver.observe(el));

// Init bars at 0
document
  .querySelectorAll(".tool-bar-fill")
  .forEach((bar) => (bar.style.width = "0%"));
