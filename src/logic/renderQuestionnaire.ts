import { Questionnaire } from '../types/Questionnaire';
import { ui } from '../i18n/ui';
import { calculateScores } from './calculateScores';
import { getLevelForCategory } from './getLevelForCategory';

const lang = (localStorage.getItem("lang") as keyof typeof ui) || "ru";
const t = ui[lang];

export function renderQuestionnaire(container: HTMLElement, test: Questionnaire) {
  const sessionRender = (resumeData: { index: number, answers: number[] } | null) => {
    let currentIndex = resumeData?.index ?? 0;
    let answers: number[] = resumeData?.answers || new Array(test.questions.length).fill(-1);

    const render = () => {
      if (currentIndex > 0)
        sessionStorage.setItem(test.id, JSON.stringify({ index: currentIndex, answers }));

      const q = test.questions[currentIndex];
      const progress = Math.round((currentIndex / test.questions.length) * 100);

      container.innerHTML = `
        <div class="mh-widget">
          <button class="mh-back">${t.backToTests}</button>
          <div class="mh-progress"><div class="mh-bar" style="width:${progress}%"></div></div>
          <h2>${test.title}</h2>
          <p class="mh-step">${t.questionProgress(currentIndex + 1, test.questions.length)}</p>
          <div class="mh-question">
            <p>${q.text}</p>
            <div class="mh-options">
              ${test.options.map(opt => `
                <div class="mh-option-btn ${answers[currentIndex] === opt.value ? 'selected' : ''}" data-value="${opt.value}">
                  ${opt.label}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="mh-controls">
            <button class="mh-next" ${answers[currentIndex] === -1 ? 'disabled' : ''}>
              ${currentIndex === test.questions.length - 1 ? t.resultHeader : '→'}
            </button>
            <button class="mh-restart">${t.restart}</button>
          </div>
        </div>
      `;

      container.querySelectorAll<HTMLElement>('.mh-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const value = parseInt(btn.dataset.value || '0');
          answers[currentIndex] = value;
          render();
        });
      });

      container.querySelector('.mh-next')?.addEventListener('click', () => {
        if (currentIndex < test.questions.length - 1) {
          currentIndex++;
          render();
        } else {
          showResult();
        }
      });

      container.querySelector('.mh-back')?.addEventListener('click', () => {
        container.innerHTML = '';
        document.querySelector('.test-selector')?.classList.remove('hidden');
      });

      container.querySelector('.mh-restart')?.addEventListener('click', () => {
        answers = new Array(test.questions.length).fill(-1);
        sessionStorage.removeItem(test.id);
        currentIndex = 0;
        render();
      });
    };

    const showResult = () => {
      const scores = calculateScores(test, answers);
      const resultHtml = Object.entries(test.scoring.categories).map(([key, config]) => {
        const score = scores[key];
        const level = getLevelForCategory(score, config.levels);
        return `<li>${config.label}: <strong>${score}</strong> — ${level}</li>`;
      }).join("");

      container.innerHTML = `
        <div class="mh-widget">
          <button class="mh-back">${t.backToTests}</button>
          <h2>${test.title}</h2>
          <p><strong>${t.resultHeader}</strong></p>
          <ul>${resultHtml}</ul>
          <button class="mh-restart">${t.retake}</button>
        </div>
      `;

      container.querySelector('.mh-back')?.addEventListener('click', () => {
        container.innerHTML = '';
        document.querySelector('.test-selector')?.classList.remove('hidden');
      });

      container.querySelector('.mh-restart')?.addEventListener('click', () => {
        answers = new Array(test.questions.length).fill(-1);
        sessionStorage.removeItem(test.id);
        currentIndex = 0;
        render();
      });
    };

    render();
  };

  const saved = sessionStorage.getItem(test.id);
  if (saved) {
    container.innerHTML = `
      <div class="mh-widget">
        <h2>${test.title}</h2>
        <p>${t.unfinishedTestPrompt}</p>
        <div class="mh-restore-options" style="margin-top: 1.5em;">
          <button class="mh-option-btn" id="mh-continue">${t.continue}</button>
          <button class="mh-option-btn" id="mh-restart">${t.restart}</button>
        </div>
      </div>
    `;
    document.getElementById('mh-continue')?.addEventListener('click', () => {
      sessionRender(JSON.parse(saved));
    });
    document.getElementById('mh-restart')?.addEventListener('click', () => {
      sessionStorage.removeItem(test.id);
      sessionRender(null);
    });
  } else {
    sessionRender(null);
  }
}
