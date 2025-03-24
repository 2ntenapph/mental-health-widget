import { renderQuestionnaire } from "./logic/renderQuestionnaire";
import { ui } from "./i18n/ui";

function setup() {
  const lang: 'en' | 'ru' =
    (localStorage.getItem("lang") as 'en' | 'ru') ||
    (navigator.language.startsWith("en") ? "en" : "ru");

  document.documentElement.lang = lang;
  const t = ui[lang];

  import(`./i18n/tests.${lang}.ts`).then((testsModule) => {
    const tests = testsModule.default || testsModule;

    const categories = {
      emotion: { tests: ["dass21", "beck", "sf36"] },
      anxiety: { tests: ["spin", "gad7", "docs", "ies"] },
      adhd: { tests: ["asrs5", "copeland", "aaqol29", "diva5"] },
      affective: { tests: ["ders18", "nvm", "bsl23", "bsl_supplement", "hcl8", "hcl32"] },
      eating: { tests: ["edeq", "debq"] },
    };

    const categorySelector = document.getElementById("category-selector")!;
    const testSelector = document.getElementById("test-selector")!;
    const container = document.getElementById("mh-container")!;
    const pageTitle = document.getElementById("page-title")!;

    function renderCategories() {
      categorySelector.innerHTML = "";
      testSelector.classList.add("hidden");
      container.innerHTML = "";
      pageTitle.textContent = t.title;

      Object.entries(categories).forEach(([key, cat]) => {
        const card = document.createElement("div");
        card.className = "test-category";
        card.dataset.category = key;
        card.innerHTML = `
          <h2>${t.categories[key as keyof typeof t.categories]}</h2>
          <div class="test-count">${t.testCount(cat.tests.length)}</div>
        `;
        categorySelector.appendChild(card);
      });

      categorySelector.classList.remove("hidden");
    }

    function renderTests(categoryKey: keyof typeof categories) {
      const cat = categories[categoryKey];
      const buttonsHTML = cat.tests
        .map((testId) => {
          const test = tests[testId];
          return `
            <button class="test-button" data-test="${testId}">${test?.title || "???"}</button>
            `;
        })
        .join("");

      testSelector.innerHTML = `
        <div style="display: flex; justify-content: center;">
          <div class="mh-widget" style="max-width: 600px; width: 100%;">
            <button id="back-to-categories" class="mh-back">${t.backToCategories}</button>
            <h2>${t.categories[categoryKey]}</h2>
            <div class="test-buttons">${buttonsHTML}</div>
          </div>
        </div>
      `;

      categorySelector.classList.add("hidden");
      testSelector.classList.remove("hidden");
    }

    document.getElementById("lang-ru")?.addEventListener("click", () => {
      localStorage.setItem("lang", "ru");
      location.reload();
    });

    document.getElementById("lang-en")?.addEventListener("click", () => {
      localStorage.setItem("lang", "en");
      location.reload();
    });

    categorySelector.addEventListener("click", (e) => {
      const card = (e.target as HTMLElement).closest(".test-category");
      if (!card) return;
      renderTests((card as HTMLElement).dataset.category as keyof typeof categories);
    });

    testSelector.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      if (target.id === "back-to-categories") {
        renderCategories();
        return;
      }

      const button = target.closest("button[data-test]");
      if (!button) return;

      const testId = (button as HTMLButtonElement).dataset.test!;
      testSelector.classList.add("hidden");
      container.innerHTML = "";
      renderQuestionnaire(container, tests[testId]);
    });

    renderCategories();
  });
}

setup();
