let inpCity = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");

const cityMap = {
  // ==================== سوريا ====================
  اللاذقية: "Latakia",
  دمشق: "Damascus",
  الشام: "Damascus",
  حلب: "Aleppo",
  حمص: "Homs",
  طرطوس: "Tartus",
  حماه: "Hama",
  "دير الزور": "Deir ez-Zur",
  الحسكة: "Al Hasakah",
  الرقة: "Ar Raqqah",
  إدلب: "Idlib",
  القنيطرة: "Quneitra",
  درعا: "Daraa",
  السويداء: "As Suwayda",
  "ريف دمشق": "Rif Dimashq",

  // ==================== الجزائر ====================
  الجزائر: "Algiers",
  "الجزائر العاصمة": "Algiers",
  وهران: "Oran",
  قسنطينة: "Constantine",
  عنابة: "Annaba",
  الجلفة: "Djelfa",
  باتنة: "Batna",
  سطيف: "Setif",
  تلمسان: "Tlemcen",
  بجاية: "Bejaia",
  بسكرة: "Biskra",
  تيارت: "Tiaret",
  ورقلة: "Ouargla",
  الشلف: "Chlef",
  سكيكدة: "Skikda",
  بومرداس: "Boumerdes",

  // ==================== مصر ====================
  القاهرة: "Cairo",
  الاسكندرية: "Alexandria",
  الإسكندرية: "Alexandria",
  الجيزة: "Giza",
  المنصورة: "Mansoura",
  الزقازيق: "Zagazig",
  طنطا: "Tanta",
  أسيوط: "Asyut",
  الأقصر: "Luxor",
  أسوان: "Aswan",
  بورسعيد: "Port Said",
  السويس: "Suez",
  المنيا: "Minya",
  بنها: "Benha",

  // ==================== السعودية ====================
  الرياض: "Riyadh",
  جدة: "Jeddah",
  مكة: "Mecca",
  المدينة: "Medina",
  الدمام: "Dammam",
  الخبر: "Khobar",
  الظهران: "Dhahran",
  تبوك: "Tabuk",
  بريدة: "Buraidah",
  حائل: "Hail",
  نجران: "Najran",
  أبها: "Abha",

  // ==================== الإمارات ====================
  دبي: "Dubai",
  أبوظبي: "Abu Dhabi",
  الشارقة: "Sharjah",
  عجمان: "Ajman",
  "رأس الخيمة": "Ras al Khaimah",
  الفجيرة: "Fujairah",
  "أم القيوين": "Umm al Quwain",

  // ==================== الأردن ====================
  عمان: "Amman",
  الزرقاء: "Zarqa",
  إربد: "Irbid",
  الرصيفة: "Russeifa",
  السلط: "Al Salt",
  مادبا: "Madaba",
  العقبة: "Aqaba",
  معان: "Maan",

  // ==================== لبنان ====================
  بيروت: "Beirut",
  طرابلس: "Tripoli",
  صيدا: "Sidon",
  صور: "Tyre",
  زحلة: "Zahle",
  جونيه: "Jounieh",

  // ==================== فلسطين ====================
  القدس: "Jerusalem",
  غزة: "Gaza",
  "رام الله": "Ramallah",
  نابلس: "Nablus",
  الخليل: "Hebron",
  "بيت لحم": "Bethlehem",
  جنين: "Jenin",
  طولكرم: "Tulkarm",

  // ==================== العراق ====================
  بغداد: "Baghdad",
  البصرة: "Basra",
  الموصل: "Mosul",
  أربيل: "Erbil",
  السليمانية: "Sulaymaniyah",
  كركوك: "Kirkuk",
  النجف: "Najaf",
  كربلاء: "Karbala",
  الحلة: "Hillah",
  ديالى: "Diyala",

  // ==================== الكويت ====================
  الكويت: "Kuwait City",
  الجهراء: "Jahra",
  حولي: "Hawally",
  الفروانية: "Farwaniya",
  "مبارك الكبير": "Mubarak Al-Kabeer",

  // ==================== قطر ====================
  الدوحة: "Doha",
  الريان: "Al Rayyan",
  الوكرة: "Al Wakrah",
  الخور: "Al Khor",

  // ==================== البحرين ====================
  المنامة: "Manama",
  المحرق: "Muharraq",
  الرفاع: "Riffa",

  // ==================== عمان ====================
  مسقط: "Muscat",
  صلالة: "Salalah",
  صور: "Sur",
  نزوى: "Nizwa",

  // ==================== اليمن ====================
  صنعاء: "Sanaa",
  عدن: "Aden",
  تعز: "Taiz",
  الحديدة: "Hodeidah",
  المكلا: "Mukalla",
  إب: "Ibb",

  // ==================== ليبيا ====================
  طرابلس: "Tripoli",
  بنغازي: "Benghazi",
  مصراتة: "Misrata",
  البيضاء: "Bayda",
  سبها: "Sabha",
  زليتن: "Zliten",

  // ==================== تونس ====================
  تونس: "Tunis",
  صفاقس: "Sfax",
  سوسة: "Sousse",
  القيروان: "Kairouan",
  بنزرت: "Bizerte",
  قابس: "Gabes",
  نابل: "Nabeul",

  // ==================== المغرب ====================
  "الدار البيضاء": "Casablanca",
  الرباط: "Rabat",
  فاس: "Fes",
  مراكش: "Marrakech",
  طنجة: "Tangier",
  أكادير: "Agadir",
  مكناس: "Meknes",
  وجدة: "Oujda",
  تطوان: "Tetouan",

  // ==================== موريتانيا ====================
  نواكشوط: "Nouakchott",
  نواذيبو: "Nouadhibou",

  // ==================== السودان ====================
  الخرطوم: "Khartoum",
  "أم درمان": "Omdurman",
  بورتسودان: "Port Sudan",
  كسلا: "Kassala",
  الأبيض: "El Obeid",

  // ==================== الصومال ====================
  مقديشو: "Mogadishu",
  هرجيسا: "Hargeisa",

  // ==================== جيبوتي ====================
  جيبوتي: "Djibouti",

  // ==================== جزر القمر ====================
  موروني: "Moroni",
};

// Switch Language

let langBtn = document.getElementById("langToggle");
let modeBtn = document.getElementById("modeToggle");

let currentLang = "ar";

function updateUILang(lang) {
  if (lang === "ar") {
    document.querySelector("h2").textContent = "تطبيق حالة الطقس";
    inpCity.placeholder = "اكتب اسم المدينة...";
    inpCity.style.direction = "rtl";
    inpCity.style.padding = " 10px 20px 10px 85px";
    inpCity.style.borderLeftColor = "transparent";
    inpCity.style.borderRightColor = "";
    searchBtn.textContent = "بحث";
    searchBtn.style.left = 0 + "px";
    searchBtn.style.right = "";

    let welcome = document.querySelector(".welcome");
    if (welcome) {
      welcome.querySelector("h3").textContent = "مرحباً بك في تطبيق الطقس";
      welcome.querySelector("p").textContent =
        "ابحث عن أي مدينة لمعرفة حالة الطقس";
    }
    langBtn.textContent = "اللغة الحالية : AR";
    modeBtn.textContent = localStorage.getItem("mode")
      ? "الوضع الداكن 🌙"
      : "الوضع النهاري ☀️";
  } else if (lang === "en") {
    document.querySelector("h2").textContent = "Weather App";
    inpCity.placeholder = "Enter City Name...";
    inpCity.style.direction = "ltr";
    inpCity.style.padding = " 10px 85px 10px 20px";
    inpCity.style.borderLeftColor = "";
    inpCity.style.borderRightColor = "transparent";

    searchBtn.textContent = "Search";
    searchBtn.style.right = 0 + "px";
    searchBtn.style.left = "";

    let welcome = document.querySelector(".welcome");
    if (welcome) {
      welcome.querySelector("h3").textContent = "Welcome In Weather App";
      welcome.querySelector("p").textContent =
        "Search For Any City To Know the Weather";
    }
    langBtn.textContent = "Language : En ";
    modeBtn.textContent = localStorage.getItem("mode")
      ? "Dark Mode 🌙"
      : "Light Mode ☀️";
  }
}

langBtn.addEventListener("click", () => {
  if (currentLang === "ar") {
    currentLang = "en";
    localStorage.setItem("lang", currentLang);
  } else if (currentLang === "en") {
    currentLang = "ar";
    localStorage.setItem("lang", currentLang);
  } else {
    throw new Error("Something Went Wrong");
  }

  updateUILang(currentLang);

  let currentCity = inpCity.value;
  if (currentCity) {
    performSearch(currentCity);
  }
});

if (localStorage.getItem("lang")) {
  updateUILang(localStorage.getItem("lang"));
  currentLang = localStorage.getItem("lang");
}

searchBtn.addEventListener("click", () => {
  let value = inpCity.value.trim();
  if (value !== "") {
    result.innerHTML =
      currentLang === "ar"
        ? `<div class="loading">جاري التحميل...</div>`
        : `<div class="loading">Loading...</div>`;

    performSearch(value);
  }
});

function performSearch(city) {
  let searchCity = cityMap[city] || city;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&lang=${currentLang}&appid=5bfb70bb2440388c7363ee640356efaf`,
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("City Not Found");
      }
      return res.json();
    })
    .then((data) => {
      result.innerHTML = "";

      let nameCountry = document.createElement("h1");
      nameCountry.textContent = data.name;

      let actualName = document.createElement("h3");
      actualName.textContent = `${data.name} , ${data.sys.country}`;

      let image = document.createElement("img");
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

      let temp = document.createElement("h1");
      temp.textContent = `${data.main.temp}°C`;

      let description = document.createElement("p");
      description.textContent = data.weather[0].description;
      description.classList.add("description");

      result.appendChild(nameCountry);
      result.appendChild(actualName);
      result.appendChild(image);
      result.appendChild(temp);
      result.appendChild(description);

      let cards = document.createElement("div");
      cards.classList.add("cards");

      let humidityCard = createCard(
        currentLang === "ar" ? "💧 الرطوبة" : "💧 Humidity",
        `${data.main.humidity}%`,
      );
      cards.appendChild(humidityCard);

      let windCard = createCard(
        currentLang === "ar" ? "💨 الرياح" : "💨 Wind",
        currentLang === "ar"
          ? `${data.wind.speed} م/ث`
          : `${data.wind.speed} m/s`,
      );
      cards.appendChild(windCard);

      let pressureCard = createCard(
        currentLang === "ar" ? "📊 الضغط" : "📊 Pressure",
        `${data.main.pressure} hPa`,
      );
      cards.appendChild(pressureCard);

      let cloudsCard = createCard(
        currentLang === "ar" ? "☁️ السحب" : "☁️ Clouds",
        `${data.clouds.all}%`,
      );
      cards.appendChild(cloudsCard);

      result.append(cards);

    })
    .catch(() => {
      result.innerHTML =
        currentLang === "ar" ? "<h2>لا نتائج</h2>" : "<h2>No Result</h2>";
    });
}

function createCard(labelText, valueText) {
  let divCard = document.createElement("div");
  divCard.classList.add("card");

  let label = document.createElement("p");
  label.classList.add("label");
  label.textContent = labelText;

  let val = document.createElement("p");
  val.classList.add("value");
  val.textContent = valueText;

  divCard.appendChild(label);
  divCard.appendChild(val);

  return divCard;
}

// dark Mode

let isDarkMode = false;

if (localStorage.getItem("mode") === "true") {
  document.body.classList.add("darkMode");
  modeBtn.textContent =
    currentLang === "ar" ? "الوضع الداكن 🌙" : "Dark Mode 🌙";
  isDarkMode = true;
}

modeBtn.addEventListener("click", () => {
  if (isDarkMode) {
    document.body.classList.remove("darkMode");
    modeBtn.textContent =
      currentLang === "ar" ? "الوضع الداكن 🌙" : "Dark Mode 🌙";
    isDarkMode = false;
    localStorage.setItem("mode", "false");
  } else {
    document.body.classList.add("darkMode");
    modeBtn.textContent =
      currentLang === "ar" ? "الوضع النهاري ☀️" : "Light Mode ☀️";
    isDarkMode = true;
    localStorage.setItem("mode", "true");
  }
});
