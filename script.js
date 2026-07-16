const repoCountElement = document.querySelector("[data-repo-count]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const revealElements = document.querySelectorAll(".reveal");

const profileData = {
  publicRepos: 2,
};

if (repoCountElement) {
  repoCountElement.textContent = String(profileData.publicRepos);
}

const themeStorageKey = "itwikster-portfolio-theme";
const savedTheme = localStorage.getItem(themeStorageKey);

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem(
    themeStorageKey,
    document.body.classList.contains("light-theme") ? "light" : "dark",
  );
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  },
);

revealElements.forEach((element) => revealObserver.observe(element));
