const Data = [
  {
    "id": "1",
    "title": "HTML va dasturlashga kirish",
    "audio": '/static/1dars.mp3'

  },
  {
    "id": 2,
    "title": "HTML elementlari va tuzilishi",
    "document": "Gipermatn belgilash tili yoki HTML — bu Internetda ko‘rsatiladigan hujjatlarning tuzilishini belgilash uchun ishlatiladigan standart belgilash tili. HTML hujjatdagi barcha tarkibiy qismlar va ularning tuzilishini belgilash uchun elementlar va atributlardan iborat.\n\nHTML hujjatlar aslida tugunlar daraxti (DOM) bo‘lib, HTML elementlari va matn tugunlarini o‘z ichiga oladi. HTML elementlari yordamida sahifaga paragraflar, ro‘yxatlar, jadvallar, rasmlar va formadagi elementlar joylashtiriladi. Har bir elementda atributlar bo‘lishi mumkin. Ba’zi elementlar ichiga boshqa elementlar yoki matn oladi, ba’zilar esa bo‘sh bo‘lib, faqat teg va atributlar orqali ishlaydi.\n\nHTML elementlari bir nechta toifalarga bo‘linadi: metadata, bo‘limlar, matn, o‘rnatilgan semantika, shakl, interaktivlik, media, komponentlar va skriptlar. Biz bu kurs davomida ularning ko‘pini ko‘rib chiqamiz. Ammo avval, element nima degani?\n\nElementlar\nHTML — sahifadagi kontentni o‘rash, ajratish yoki tuzish uchun ishlatiladigan teglar to‘plami. Har bir element < va > belgilar orasida yozilgan teglar bilan boshlanadi.\n\nMasalan, sahifadagi sarlavha uchun <h1> tegi ishlatiladi. Quyidagicha yoziladi:\n\n<h1>Machine Learning Workshop</h1>\n\nBu yerda \"Machine Learning Workshop\" — sarlavha matni, u ochuvchi va yopuvchi teglar orasida joylashgan. Ya’ni ochuvchi teg, yopuvchi teg va ularning orasidagi kontent — birga HTML elementi hisoblanadi.",
    "img": 'https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_1440.png?hl=ru'
  }
  ,
  {
    "id": "3",
    "title": "Matn teglar bilan ishlash",
    "document": "### 3-dars: Matn teglar\n\n#### Asosiy teglar:\n- `<h1>` dan `<h6>` — sarlavhalar (h1 — eng katta, h6 — eng kichik)\n- `<p>` — paragraf\n- `<br>` — qator o‘zgartirish\n- `<hr>` — gorizontal chiziq\n- `<strong>`, `<em>` — muhim va kursiv matn\n\n#### Misol:\n```html\n<h1>Mening blogim</h1>\n<p>Bu birinchi maqolam.</p>\n<strong>Ogohlantirish!</strong> Bu juda muhim.\n```\n\n#### Topshiriq:\n- O‘zingiz haqingizda `h1`, `p`, `strong` ishlatgan holda matn yozing"
  },
  {
    "id": "4",
    "title": "Ro'yxatlar",
    "document": "### 4-dars: Ro‘yxatlar\n\n#### Turlar:\n- `<ul>` — tartiblanmagan ro‘yxat\n- `<ol>` — tartiblangan ro‘yxat\n- `<li>` — ro‘yxat elementi\n\n#### Misol:\n```html\n<ul>\n  <li>Olma</li>\n  <li>Banan</li>\n</ul>\n\n<ol>\n  <li>Dasturlash</li>\n  <li>Matematika</li>\n</ol>\n```\n\n#### Topshiriq:\n- 3 ta sevimli ovqatingiz ro‘yxatini ul bilan yozing\n- 3 ta qadamli tartiblangan ro‘yxat yarating"
  },
  {
    "id": "5",
    "title": "Media va havolalar",
    "document": "### 5-dars: Rasm, video, audio va havolalar\n\n#### Teglar:\n- `<img src=\"...\">` — rasm qo‘yish\n- `<a href=\"...\">` — havola\n- `<video>` va `<audio>` — media kontent\n\n#### Misol:\n```html\n<img src=\"https://picsum.photos/200\" alt=\"Rasm\">\n<a href=\"https://google.com\">Google</a>\n```\n\n#### Topshiriq:\n- O‘zingizning rasmi va biografiyangizni joylang\n- 2 ta havola (YouTube va Wikipedia)"
  },
  {
    "id": "6",
    "title": "Jadvallar",
    "document": "### 6-dars: HTML jadvallar\n\n#### Teglar:\n- `<table>` — jadval\n- `<tr>` — qator\n- `<td>` — katakcha\n- `<th>` — sarlavhali katakcha\n- `colspan`, `rowspan` — ustun/qator birlashtirish\n\n#### Misol:\n```html\n<table border=\"1\">\n  <tr><th>Ism</th><th>Yosh</th></tr>\n  <tr><td>Ali</td><td>25</td></tr>\n</table>\n```\n\n#### Topshiriq:\n- O‘zingiz va 2 do‘stingiz haqida jadval yarating"
  },
  {
    "id": "7",
    "title": "Formalar",
    "document": "### 7-dars: HTML formalar\n\n#### Teglar:\n- `<form>` — forma konteyneri\n- `<input>` — matn kiritish, email, parol, tugma\n- `<label>` — input uchun matn\n- `<textarea>` — uzun matn\n- `<select>`, `<option>` — tanlash ro‘yxati\n\n#### Misol:\n```html\n<form>\n  <label>Ismingiz:</label>\n  <input type=\"text\">\n  <button>Yuborish</button>\n</form>\n```\n\n#### Topshiriq:\n- Login forma yarating"
  },
  {
    "id": "8",
    "title": "Atributlar bilan ishlash",
    "document": "### 8-dars: HTML atributlar\n\n#### Muhim atributlar:\n- `id`, `class` — elementni aniqlash uchun\n- `value`, `name`, `placeholder` — input uchun\n- `href`, `src`, `alt` — media va havolalar uchun\n- `required` — majburiy maydon\n\n#### Misol:\n```html\n<input type=\"text\" placeholder=\"Ismingiz\" required>\n```\n\n#### Topshiriq:\n- Formani `id`, `placeholder` bilan to‘ldiring"
  },
  {
    "id": "9",
    "title": "Block va inline elementlar",
    "document": "### 9-dars: Block va Inline farqi\n\n#### Block elementlar:\n- `<div>`, `<p>`, `<h1>` — yangi qatordan boshlanadi\n\n#### Inline elementlar:\n- `<span>`, `<a>`, `<strong>` — bir qatorda qoladi\n\n#### Misol:\n```html\n<div>Bu block</div>\n<span>Bu inline</span>\n```\n\n#### Topshiriq:\n- `div` va `span` yordamida 2 ta yozuv chiqaring"
  },
  {
    "id": "10",
    "title": "HTML5 semantik teglar",
    "document": "### 10-dars: HTML5 semantik teglar\n\n#### Asosiy teglar:\n- `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`\n\n#### Maqsad:\n- Semantik teglar sahifani tushunarli qiladi (SEO uchun muhim)\n\n#### Misol:\n```html\n<header>Header</header>\n<nav>Menu</nav>\n<main>Asosiy kontent</main>\n```\n\n#### Topshiriq:\n- Web sahifa tuzishda HTML5 semantik teglar ishlating"
  },
  {
    "id": "11",
    "title": "Meta teglar va SEO kirish",
    "document": "### 11-dars: Meta ma’lumotlar va SEO\n\n#### Teglar:\n- `<meta charset>`, `<meta name=\"description\">`\n- `<title>` — brauzer sarlavhasi\n- `<link rel=\"icon\">` — favicon\n\n#### Misol:\n```html\n<meta charset=\"UTF-8\">\n<title>Mening sayt</title>\n```\n\n#### Topshiriq:\n- Saytingizga meta ma’lumotlar yozing"
  },
  {
    "id": "12",
    "title": "Iframe, embed, object, canvas",
    "document": "### 12-dars: Kiritilgan kontentlar\n\n#### Teglar:\n- `<iframe>` — boshqa saytni ko‘rsatish\n- `<embed>` — fayl kiritish\n- `<object>` — media ko‘rsatish\n- `<canvas>` — rasm, animatsiya\n\n#### Misol:\n```html\n<iframe src=\"https://example.com\" width=\"400\"></iframe>\n```\n\n#### Topshiriq:\n- YouTube videosini iframe orqali sahifaga joylang"
  },
  {
    "id": "13",
    "title": "Imtihon",
    "document": "### 13-dars: Yakuniy test\n\n#### Topshiriq:\n- HTML hujjat yarating\n- Form, jadval, rasm, link, matn, iframe joylashtiring\n- Har bir teg uchun kamida 1 misol bo‘lsin\n\n✅ Bu darsdan so‘ng siz HTML’ni mustahkam bilasiz."
  }

]
export default Data