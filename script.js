const prices = {
  base: 49,
  additionalRoom: 18,
  extras: {
    deep: 45,
    fridge: 18,
    oven: 20,
    windows: 30,
    laundry: 15
  }
};

const translations = {
  en: {
    pageTitle: "CleanFlow — Home cleaning",
    skip: "Skip to content",
    navHome: "Home",
    navServices: "Services",
    navHow: "How it works",
    navFaq: "FAQ",
    navContact: "Contact",
    heroEyebrow: "Thoughtful care for your home",
    heroTitle: "Home cleaning,",
    heroAccent: "made simple.",
    heroText: "A reliable, detail-minded cleaning service that gives you back time for the things that matter.",
    bookNow: "Book now",
    viewServices: "View services",
    heroNote: "See an estimate before sending a request.",
    photoAlt: "Bright living room with a light sofa and large window",
    quoteEyebrow: "Instant estimate",
    quoteTitle: "What should we clean?",
    roomsLabel: "Number of rooms",
    roomOne: "room",
    roomFew: "rooms",
    roomMany: "rooms",
    extrasTitle: "Add a little extra",
    extraDeep: "Deep cleaning",
    extraFridge: "Refrigerator",
    extraOven: "Oven",
    extraWindows: "Window cleaning",
    extraLaundry: "Laundry",
    estimatedTotal: "Estimated total",
    estimateNote: "Indicative estimate",
    continueBooking: "Continue to booking",
    calculatorDisclaimer: "Final details can be confirmed after we receive your request.",
    factOne: "Price updates as you choose",
    factTwo: "Optional extra services",
    factThree: "No payment on this page",
    servicesEyebrow: "Our services",
    servicesTitle: "The right clean for every home.",
    servicesText: "From a regular reset to a more detailed clean, choose the care your space needs.",
    serviceRegularTitle: "Regular cleaning",
    serviceRegularText: "A practical clean for kitchens, bathrooms and everyday living areas.",
    serviceRegularPrice: "From €49",
    serviceDeepTitle: "Deep cleaning",
    serviceDeepText: "Extra attention for built-up dirt, detailed surfaces and harder-to-reach areas.",
    serviceDeepPrice: "From €94",
    serviceMovingTitle: "Move-in / move-out",
    serviceMovingText: "A detailed clean for an empty home before moving in or after moving out.",
    serviceMovingPrice: "Custom estimate",
    howEyebrow: "How it works",
    howTitle: "A cleaner home in three easy steps.",
    stepOneTitle: "Tell us about your home",
    stepOneText: "Choose the number of rooms and any additional services. Your estimate updates instantly.",
    stepTwoTitle: "Choose a convenient time",
    stepTwoText: "Leave your preferred date and time in the booking form.",
    stepThreeTitle: "Send your request",
    stepThreeText: "Review the details and submit your request for confirmation.",
    clarityEyebrow: "Clear estimate",
    clarityTitle: "Know what goes into your price.",
    clarityText: "The estimate is based on the number of rooms and the extra services you select. You can review the full breakdown before sending a request.",
    clarityPointOne: "Room-based calculation",
    clarityPointTwo: "Optional services shown separately",
    clarityPointThree: "Estimate shown before booking",
    faqEyebrow: "Good to know",
    faqTitle: "Frequently asked questions.",
    faqQuestionOne: "How is the price calculated?",
    faqAnswerOne: "The estimate starts with €49 for the first room. Each additional room adds €18. Optional services are added to the total separately.",
    faqQuestionTwo: "What is included in regular cleaning?",
    faqAnswerTwo: "Regular cleaning is intended for everyday home areas such as the kitchen, bathroom and living spaces. Exact tasks can be discussed when confirming the request.",
    faqQuestionThree: "Can I add extra services?",
    faqAnswerThree: "Yes. Select any combination of deep cleaning, refrigerator, oven, window cleaning and laundry in the calculator.",
    faqQuestionFour: "Does submitting the form confirm my appointment?",
    faqAnswerFour: "No. The form currently works as a frontend demonstration and does not send a real booking. A contact or booking service needs to be connected before launch.",
    footerText: "Simple home cleaning with clear options and pricing.",
    footerExplore: "Explore",
    footerContact: "Contact",
    contactPlaceholder: "Add your business contact details here.",
    copyright: "© {year} CleanFlow. All rights reserved.",
    backTop: "Back to top ↑",
    modalEyebrow: "Booking request",
    modalTitle: "Your cleaning details",
    summaryRooms: "Rooms",
    summaryExtras: "Additional services",
    summaryTotal: "Estimated total",
    summaryNone: "None selected",
    nameLabel: "Your name",
    namePlaceholder: "Full name",
    phoneLabel: "Phone number",
    phonePlaceholder: "+00 000 000 000",
    emailLabel: "Email address",
    emailPlaceholder: "name@example.com",
    dateLabel: "Preferred date",
    timeLabel: "Preferred time",
    timePlaceholder: "Select a time",
    timeMorning: "Morning",
    timeAfternoon: "Afternoon",
    timeEvening: "Evening",
    messageLabel: "Additional details (optional)",
    messagePlaceholder: "Anything we should know?",
    formDemoNote: "Demo form: your details stay in this browser and are not sent to a company.",
    submitRequest: "Submit request",
    formError: "Please complete all required fields with valid details.",
    successTitle: "Request details are ready",
    successText: "This is a frontend demo. No booking has been sent. Connect a booking service to receive real requests.",
    closeButton: "Close"
  },
  ru: {
    pageTitle: "CleanFlow — Уборка дома",
    skip: "Перейти к содержимому",
    navHome: "Главная",
    navServices: "Услуги",
    navHow: "Как это работает",
    navFaq: "Вопросы",
    navContact: "Контакты",
    heroEyebrow: "Забота о вашем доме",
    heroTitle: "Уборка дома —",
    heroAccent: "это просто.",
    heroText: "Надёжная и внимательная уборка, которая освобождает время для действительно важных вещей.",
    bookNow: "Заказать",
    viewServices: "Наши услуги",
    heroNote: "Посмотрите расчёт до отправки заявки.",
    photoAlt: "Светлая гостиная с диваном и большим окном",
    quoteEyebrow: "Мгновенный расчёт",
    quoteTitle: "Что нужно убрать?",
    roomsLabel: "Количество комнат",
    roomOne: "комната",
    roomFew: "комнаты",
    roomMany: "комнат",
    extrasTitle: "Дополнительные услуги",
    extraDeep: "Генеральная уборка",
    extraFridge: "Холодильник",
    extraOven: "Духовка",
    extraWindows: "Мытьё окон",
    extraLaundry: "Стирка",
    estimatedTotal: "Итоговая стоимость",
    estimateNote: "Предварительная оценка",
    continueBooking: "Перейти к заказу",
    calculatorDisclaimer: "Детали можно уточнить после получения заявки.",
    factOne: "Цена меняется при выборе",
    factTwo: "Дополнительные услуги на выбор",
    factThree: "Оплата на странице не производится",
    servicesEyebrow: "Наши услуги",
    servicesTitle: "Подходящая уборка для каждого дома.",
    servicesText: "От регулярной уборки до более тщательной — выберите подходящий вариант.",
    serviceRegularTitle: "Регулярная уборка",
    serviceRegularText: "Уборка кухни, ванной комнаты и жилых помещений для повседневного порядка.",
    serviceRegularPrice: "От €49",
    serviceDeepTitle: "Генеральная уборка",
    serviceDeepText: "Особое внимание сложным загрязнениям, поверхностям и труднодоступным местам.",
    serviceDeepPrice: "От €94",
    serviceMovingTitle: "Уборка при переезде",
    serviceMovingText: "Тщательная уборка пустого жилья перед заселением или после выезда.",
    serviceMovingPrice: "Индивидуальный расчёт",
    howEyebrow: "Как это работает",
    howTitle: "Чистый дом за три простых шага.",
    stepOneTitle: "Расскажите о доме",
    stepOneText: "Укажите количество комнат и дополнительные услуги. Цена обновится сразу.",
    stepTwoTitle: "Выберите удобное время",
    stepTwoText: "Укажите желаемую дату и время в форме заказа.",
    stepThreeTitle: "Отправьте заявку",
    stepThreeText: "Проверьте данные и отправьте заявку для дальнейшего подтверждения.",
    clarityEyebrow: "Понятный расчёт",
    clarityTitle: "Вы знаете, из чего складывается цена.",
    clarityText: "Стоимость зависит от количества комнат и выбранных дополнительных услуг. Полный расчёт можно проверить до отправки заявки.",
    clarityPointOne: "Расчёт по количеству комнат",
    clarityPointTwo: "Дополнительные услуги указаны отдельно",
    clarityPointThree: "Стоимость видна до оформления",
    faqEyebrow: "Полезно знать",
    faqTitle: "Частые вопросы.",
    faqQuestionOne: "Как рассчитывается стоимость?",
    faqAnswerOne: "Расчёт начинается с €49 за первую комнату. Каждая следующая комната добавляет €18. Дополнительные услуги прибавляются отдельно.",
    faqQuestionTwo: "Что входит в регулярную уборку?",
    faqAnswerTwo: "Регулярная уборка предназначена для повседневных зон: кухни, ванной комнаты и жилых помещений. Точный список задач можно согласовать при подтверждении заявки.",
    faqQuestionThree: "Можно ли добавить услуги?",
    faqAnswerThree: "Да. В калькуляторе можно выбрать генеральную уборку, холодильник, духовку, мытьё окон и стирку.",
    faqQuestionFour: "Отправка формы подтверждает запись?",
    faqAnswerFour: "Нет. Сейчас форма работает как демонстрация интерфейса и не отправляет реальные заказы. Перед запуском нужно подключить сервис приёма заявок.",
    footerText: "Простая уборка дома с понятными услугами и ценами.",
    footerExplore: "Разделы",
    footerContact: "Контакты",
    contactPlaceholder: "Добавьте здесь контактные данные вашей компании.",
    copyright: "© {year} CleanFlow. Все права защищены.",
    backTop: "Наверх ↑",
    modalEyebrow: "Заявка на уборку",
    modalTitle: "Детали заказа",
    summaryRooms: "Комнаты",
    summaryExtras: "Дополнительные услуги",
    summaryTotal: "Итоговая оценка",
    summaryNone: "Не выбраны",
    nameLabel: "Ваше имя",
    namePlaceholder: "Имя и фамилия",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "+00 000 000 000",
    emailLabel: "Электронная почта",
    emailPlaceholder: "name@example.com",
    dateLabel: "Желаемая дата",
    timeLabel: "Желаемое время",
    timePlaceholder: "Выберите время",
    timeMorning: "Утром",
    timeAfternoon: "Днём",
    timeEvening: "Вечером",
    messageLabel: "Дополнительная информация (необязательно)",
    messagePlaceholder: "Что нам стоит учесть?",
    formDemoNote: "Демонстрационная форма: данные остаются в этом браузере и не отправляются компании.",
    submitRequest: "Отправить заявку",
    formError: "Заполните обязательные поля и проверьте правильность данных.",
    successTitle: "Данные заявки подготовлены",
    successText: "Это демонстрация интерфейса. Заказ не отправлен. Для приёма реальных заявок нужно подключить сервис бронирования.",
    closeButton: "Закрыть"
  },
  uk: {
    pageTitle: "CleanFlow — Прибирання дому",
    skip: "Перейти до вмісту",
    navHome: "Головна",
    navServices: "Послуги",
    navHow: "Як це працює",
    navFaq: "Запитання",
    navContact: "Контакти",
    heroEyebrow: "Турбота про вашу оселю",
    heroTitle: "Прибирання дому —",
    heroAccent: "це просто.",
    heroText: "Надійне й уважне прибирання, що звільняє час для справді важливих речей.",
    bookNow: "Замовити",
    viewServices: "Наші послуги",
    heroNote: "Перегляньте розрахунок до надсилання заявки.",
    photoAlt: "Світла вітальня з диваном і великим вікном",
    quoteEyebrow: "Миттєвий розрахунок",
    quoteTitle: "Що потрібно прибрати?",
    roomsLabel: "Кількість кімнат",
    roomOne: "кімната",
    roomFew: "кімнати",
    roomMany: "кімнат",
    extrasTitle: "Додаткові послуги",
    extraDeep: "Генеральне прибирання",
    extraFridge: "Холодильник",
    extraOven: "Духовка",
    extraWindows: "Миття вікон",
    extraLaundry: "Прання",
    estimatedTotal: "Підсумкова вартість",
    estimateNote: "Попередня оцінка",
    continueBooking: "Перейти до замовлення",
    calculatorDisclaimer: "Деталі можна уточнити після отримання заявки.",
    factOne: "Ціна змінюється під час вибору",
    factTwo: "Додаткові послуги на вибір",
    factThree: "Оплата на сторінці не здійснюється",
    servicesEyebrow: "Наші послуги",
    servicesTitle: "Вдале прибирання для кожної оселі.",
    servicesText: "Від регулярного прибирання до ретельнішого — оберіть потрібний формат.",
    serviceRegularTitle: "Регулярне прибирання",
    serviceRegularText: "Прибирання кухні, ванної кімнати та житлових приміщень для щоденного порядку.",
    serviceRegularPrice: "Від €49",
    serviceDeepTitle: "Генеральне прибирання",
    serviceDeepText: "Особлива увага складним забрудненням, поверхням і важкодоступним місцям.",
    serviceDeepPrice: "Від €94",
    serviceMovingTitle: "Прибирання під час переїзду",
    serviceMovingText: "Ретельне прибирання порожнього житла перед заселенням або після виїзду.",
    serviceMovingPrice: "Індивідуальний розрахунок",
    howEyebrow: "Як це працює",
    howTitle: "Чиста оселя за три прості кроки.",
    stepOneTitle: "Розкажіть про оселю",
    stepOneText: "Вкажіть кількість кімнат і додаткові послуги. Ціна оновиться одразу.",
    stepTwoTitle: "Оберіть зручний час",
    stepTwoText: "Вкажіть бажану дату та час у формі замовлення.",
    stepThreeTitle: "Надішліть заявку",
    stepThreeText: "Перевірте дані й надішліть заявку для подальшого підтвердження.",
    clarityEyebrow: "Зрозумілий розрахунок",
    clarityTitle: "Ви знаєте, з чого складається ціна.",
    clarityText: "Вартість залежить від кількості кімнат і вибраних додаткових послуг. Повний розрахунок можна перевірити до надсилання заявки.",
    clarityPointOne: "Розрахунок за кількістю кімнат",
    clarityPointTwo: "Додаткові послуги вказані окремо",
    clarityPointThree: "Вартість видно до оформлення",
    faqEyebrow: "Варто знати",
    faqTitle: "Часті запитання.",
    faqQuestionOne: "Як розраховується вартість?",
    faqAnswerOne: "Розрахунок починається з €49 за першу кімнату. Кожна наступна кімната додає €18. Додаткові послуги додаються окремо.",
    faqQuestionTwo: "Що входить до регулярного прибирання?",
    faqAnswerTwo: "Регулярне прибирання призначене для щоденних зон: кухні, ванної кімнати та житлових приміщень. Точний перелік завдань можна узгодити під час підтвердження заявки.",
    faqQuestionThree: "Чи можна додати послуги?",
    faqAnswerThree: "Так. У калькуляторі можна вибрати генеральне прибирання, холодильник, духовку, миття вікон і прання.",
    faqQuestionFour: "Чи підтверджує надсилання форми запис?",
    faqAnswerFour: "Ні. Зараз форма працює як демонстрація інтерфейсу й не надсилає справжні замовлення. Перед запуском потрібно підключити сервіс приймання заявок.",
    footerText: "Просте прибирання оселі зі зрозумілими послугами та цінами.",
    footerExplore: "Розділи",
    footerContact: "Контакти",
    contactPlaceholder: "Додайте тут контактні дані вашої компанії.",
    copyright: "© {year} CleanFlow. Усі права захищено.",
    backTop: "Нагору ↑",
    modalEyebrow: "Заявка на прибирання",
    modalTitle: "Деталі замовлення",
    summaryRooms: "Кімнати",
    summaryExtras: "Додаткові послуги",
    summaryTotal: "Підсумкова оцінка",
    summaryNone: "Не вибрано",
    nameLabel: "Ваше ім’я",
    namePlaceholder: "Ім’я та прізвище",
    phoneLabel: "Номер телефону",
    phonePlaceholder: "+00 000 000 000",
    emailLabel: "Електронна пошта",
    emailPlaceholder: "name@example.com",
    dateLabel: "Бажана дата",
    timeLabel: "Бажаний час",
    timePlaceholder: "Оберіть час",
    timeMorning: "Вранці",
    timeAfternoon: "Вдень",
    timeEvening: "Увечері",
    messageLabel: "Додаткова інформація (необов’язково)",
    messagePlaceholder: "Що нам варто врахувати?",
    formDemoNote: "Демонстраційна форма: дані залишаються в цьому браузері й не надсилаються компанії.",
    submitRequest: "Надіслати заявку",
    formError: "Заповніть обов’язкові поля та перевірте правильність даних.",
    successTitle: "Дані заявки підготовлено",
    successText: "Це демонстрація інтерфейсу. Замовлення не надіслано. Для приймання справжніх заявок потрібно підключити сервіс бронювання.",
    closeButton: "Закрити"
  }
};

const extraKeys = ["deep", "fridge", "oven", "windows", "laundry"];
const languageCodes = ["en", "ru", "uk"];
const roomInput = document.querySelector("#room-count");
const roomOutput = document.querySelector("#room-count-output");
const roomUnit = document.querySelector("[data-room-unit]");
const totalOutput = document.querySelector("#total-price");
const extraInputs = [...document.querySelectorAll("[data-extra]")];
const bookingDialog = document.querySelector("#booking-dialog");
const bookingForm = document.querySelector("#booking-form");
const bookingFormView = document.querySelector("#booking-form-view");
const bookingSuccess = document.querySelector("#booking-success");
const formError = document.querySelector("#form-error");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

let currentLanguage = "en";
let lastFocusedElement = null;

try {
  currentLanguage = localStorage.getItem("cleanflow-language") || "en";
} catch {
  currentLanguage = "en";
}

if (!languageCodes.includes(currentLanguage)) {
  currentLanguage = "en";
}

function getSelectedExtras() {
  return extraInputs.filter((input) => input.checked).map((input) => input.value);
}

function calculatePrice(roomCount, selectedExtras) {
  const roomPrice = prices.base + Math.max(0, roomCount - 1) * prices.additionalRoom;
  const extraPrice = selectedExtras.reduce((sum, key) => sum + (prices.extras[key] || 0), 0);

  return {
    base: roomPrice,
    extras: extraPrice,
    total: roomPrice + extraPrice
  };
}

function formatPrice(amount) {
  return new Intl.NumberFormat(currentLanguage === "en" ? "en-IE" : currentLanguage === "ru" ? "ru-RU" : "uk-UA", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(amount);
}

function getRoomUnit(roomCount) {
  const pluralCategory = new Intl.PluralRules(currentLanguage).select(roomCount);
  if (pluralCategory === "one") return translations[currentLanguage].roomOne;
  if (pluralCategory === "few") return translations[currentLanguage].roomFew;
  return translations[currentLanguage].roomMany;
}

function updateRangeProgress() {
  const minimum = Number(roomInput.min);
  const maximum = Number(roomInput.max);
  const current = Number(roomInput.value);
  const progress = ((current - minimum) / (maximum - minimum)) * 100;
  roomInput.style.setProperty("--range-progress", `${progress}%`);
}

function updateCalculator() {
  const roomCount = Number(roomInput.value);
  const selectedExtras = getSelectedExtras();
  const calculated = calculatePrice(roomCount, selectedExtras);

  roomOutput.querySelector("strong").textContent = String(roomCount);
  roomUnit.textContent = getRoomUnit(roomCount);
  totalOutput.textContent = formatPrice(calculated.total);
  updateRangeProgress();
  updateBookingSummary();
}

function updateBookingSummary() {
  const roomCount = Number(roomInput.value);
  const selectedExtras = getSelectedExtras();
  const calculated = calculatePrice(roomCount, selectedExtras);
  const languageCopy = translations[currentLanguage];
  const extraNames = selectedExtras.map((key) => languageCopy[`extra${key[0].toUpperCase()}${key.slice(1)}`]);

  document.querySelector("#summary-rooms").textContent = `${roomCount} ${getRoomUnit(roomCount)}`;
  document.querySelector("#summary-extras").textContent = extraNames.length ? extraNames.join(", ") : languageCopy.summaryNone;
  document.querySelector("#summary-total").textContent = formatPrice(calculated.total);
}

function applyLanguage(language) {
  currentLanguage = languageCodes.includes(language) ? language : "en";
  const languageCopy = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = languageCopy.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key in languageCopy) {
      element.textContent = languageCopy[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key in languageCopy) {
      element.placeholder = languageCopy[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (key in languageCopy) {
      element.alt = languageCopy[key];
    }
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });

  document.querySelector("[data-i18n='copyright']").textContent = languageCopy.copyright.replace("{year}", String(new Date().getFullYear()));
  const menuExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  const menuLabels = { en: ["Open navigation", "Close navigation"], ru: ["Открыть меню", "Закрыть меню"], uk: ["Відкрити меню", "Закрити меню"] };
  menuToggle.setAttribute("aria-label", menuLabels[currentLanguage][Number(menuExpanded)]);
  updateCalculator();
  try {
    localStorage.setItem("cleanflow-language", currentLanguage);
  } catch {
    return;
  }
}

function openBookingDialog() {
  lastFocusedElement = document.activeElement;
  updateBookingSummary();
  bookingFormView.hidden = false;
  bookingSuccess.hidden = true;
  formError.hidden = true;
  bookingDialog.showModal();
  document.body.classList.add("dialog-open");
  bookingDialog.querySelector("input[name='name']").focus();
}

function closeBookingDialog() {
  if (bookingDialog.open) {
    bookingDialog.close();
  }
}

function closeMobileMenu() {
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", currentLanguage === "en" ? "Open navigation" : currentLanguage === "ru" ? "Открыть меню" : "Відкрити меню");
}

roomInput.addEventListener("input", updateCalculator);
extraInputs.forEach((input) => input.addEventListener("change", updateCalculator));

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", !isExpanded ? (currentLanguage === "en" ? "Close navigation" : currentLanguage === "ru" ? "Закрыть меню" : "Закрити меню") : (currentLanguage === "en" ? "Open navigation" : currentLanguage === "ru" ? "Открыть меню" : "Відкрити меню"));
  mobileMenu.hidden = isExpanded;
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const wasExpanded = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".faq-question").forEach((question) => {
      question.setAttribute("aria-expanded", "false");
      question.closest(".faq-item").querySelector(".faq-answer").hidden = true;
    });

    if (!wasExpanded) {
      button.setAttribute("aria-expanded", "true");
      button.closest(".faq-item").querySelector(".faq-answer").hidden = false;
    }
  });
});

document.querySelector("#open-booking").addEventListener("click", openBookingDialog);
document.querySelector("#close-booking").addEventListener("click", closeBookingDialog);
document.querySelector("#finish-booking").addEventListener("click", closeBookingDialog);

bookingDialog.addEventListener("click", (event) => {
  if (event.target === bookingDialog) {
    closeBookingDialog();
  }
});

bookingDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formError.hidden = true;

  if (!bookingForm.checkValidity()) {
    formError.textContent = translations[currentLanguage].formError;
    formError.hidden = false;
    bookingForm.querySelector(":invalid")?.focus();
    return;
  }

  bookingFormView.hidden = true;
  bookingSuccess.hidden = false;
  document.querySelector("#finish-booking").focus();
});

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
document.querySelector("#booking-date").min = localToday;

applyLanguage(currentLanguage);
updateCalculator();
