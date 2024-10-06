let btnnn = document.getElementById("btnnn");
let home = document.getElementById("home");
let about = document.getElementById("about");
let provinces = document.getElementById("provinces");
let Contact = document.getElementById("Contact");
let Support = document.getElementById("Support");
let Language = document.getElementById("Language");
let Signn = document.getElementById("Signn");
let bannerr = document.getElementById("bannerr");
let Service = document.getElementById("Service");
let inquiry = document.getElementById("inquiry");
let header = document.getElementById("header")
let nav = document.getElementById("nav")


let fot1 = document.getElementById("fot1");
let fot2 = document.getElementById("fot2");
let fot3 = document.getElementById("fot3");
let fot4 = document.getElementById("fot4");
let fot5 = document.getElementById("fot5");
let fot6 = document.getElementById("fot6");
let fot7 = document.getElementById("fot7");

let of1 = document.getElementById("of1");
let of2 = document.getElementById("of2");
let of3 = document.getElementById("of3");
let of4 = document.getElementById("of4");
let of5 = document.getElementById("of5");
let of6 = document.getElementById("of6");
let of7 = document.getElementById("of7");
let of8 = document.getElementById("of8");
let of9 = document.getElementById("of9");
let of10 = document.getElementById("of10");
let footer = document.getElementById("footer");
let form1 = document.getElementById("form1");



let rnd = Math.floor(Math.random() * 7);
document.body.style.backgroundImage = `url(img/${rnd}.jpg)`;
document.body.style.backgroundSize = "100%";
let flag = true;

// Event
btnnn.onclick = changeLang;

// Function
function changeLang() {
  if (flag) {
    home.textContent = "home";
    Language.textContent = "FA";
    about.textContent = "about US";
    provinces.textContent = "provinces";
    Contact.textContent = "Contact";
    Support.textContent = "Support";
    Signn.textContent = "Sign in";
    bannerr.textContent = "Service coverage check form";
    Service.textContent = "Service selection";
    inquiry.textContent = "inquiry";
    header.style.flexDirection = "row";
    nav.style.direction = "ltr";
    footer.style.textAlign = "left";

    fot1.textContent = "Sign in subscribers";
    fot2.textContent = "Register";
    fot3.textContent = "4G network coverage";
    fot4.textContent = "more information";
    fot5.textContent = "All rights reserved for Hai Web";
    fot6.textContent = "Tehran - Loizan - Martyr General Babaei Highway - Army Ground Forces Headquarters Blvd - Almas Iran Complex - Farda Innovation Center - Second Floor, Unit 5";
    fot7.textContent = "Holder of the license to create and operate the fixed communication network under the number 11-11-94-100 from the Ministry of Communications and Information Technology-Radio Communications Regulatory Organization";
    of9.style.textAlign = "left";
    of10.style.textAlign = "left";

    of1.textContent = "News";
    of2.textContent = "The web at a glance";
    of3.textContent = "social responsibility";
    of4.textContent = "Address and contact number";
    of5.textContent = "Invited to cooperate";
    of6.textContent = "customer's voice";
    of7.textContent = "connection with managers";
    of8.textContent = "Regulatory";

    form1.style.textAlign = "left";

    

    

    flag = false;

  } else {
    home.textContent = "خانه";
    Language.textContent = "EN";
    about.textContent = "درباره های وب";
    provinces.textContent = "استان ها";
    Contact.textContent = "ارتباط باما";
    Support.textContent = "پشتیبانی";
    Signn.textContent = "ورود مشترکین";
    bannerr.textContent = "فرم بررسی پوشش سرویس";
    Service.textContent = "انتخاب سرویس";
    inquiry.textContent = "استعلام";
    header.style.flexDirection = "row-reverse";
    nav.style.direction = "rtl";
    footer.style.textAlign = "right";

    fot1.textContent = "ورود مشترکین";
    fot2.textContent = "ثبت نام ";
    fot3.textContent = "پوشش شبکه 4G ";
    fot4.textContent = "اطلاعات بیشتر";
    fot5.textContent = "کلیه حقوق برای های وب محفوظ است";
    fot6.textContent = "تهران - لویزان - بزرگراه شهید سرلشگر بابائی- بلوار ستاد نیروی زمینی ارتش- مجتمع الماس ایران- مرکز نوآوری فردا-طبقه دوم واحد ۵";
    fot7.textContent = "دارنده پروانه ایجاد و بهره‌برداری از شبکه ارتباطات ثابت به شماره ۱۱-۹۴-۱۰۰ از وزارت ارتباطات و فناوری اطلاعات-سازمان تنظیم مقررات و ارتباطات رادیویی";
    

    of1.textContent = "اخبار";
    of2.textContent = "های وب دریک نگاه";
    of3.textContent = "مسئولیت اجتماعی";
    of4.textContent = "نشانی و شماره تماس";
    of5.textContent = "دعوت به همکاری";
    of6.textContent = "صدای مشتری";
    of7.textContent = "ارتباط با مدیران";
    of8.textContent = "رگلاتوری";
    of9.style.textAlign = "right";
    of10.style.textAlign = "right";

    form1.style.textAlign = "right";


    flag = true;

  }
}

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let in1 = document.getElementById("in1");
let in3 = document.getElementById("in3");
let in4 = document.getElementById("in4");

// Event
btn0.onclick = fibre;
btn1.onclick = adsl;
btn2.onclick = lte;
btn3.onclick = vps;

// Function
function fibre() {
  if (flag) {
    in1.textContent = "استان";
    document.getElementById("in3").style.display = "none";
    in4.textContent = "سرویس درخواستی";
  } else {
    in1.textContent = "State";
    document.getElementById("in3").style.display = "none";
    in4.textContent = "On-demand service";
  }
}

function adsl() {
  if (flag) {
    in1.textContent = "شماره تلفن";
    document.getElementById("in3").style.display = "none";
    in4.textContent = "سرویس درخواستی";
  } else {
    in1.textContent = "phone number";
    document.getElementById("in3").style.display = "none";
    in4.textContent = "On-demand service";
  }
}

function lte() {
  if (flag) {
    in1.textContent = "کدپستی";
    document.getElementById("in3").style.display = "";
    in4.textContent = "سرویس درخواستی";
  } else {
    in1.textContent = "Postal code";
    document.getElementById("in3").style.display = "";
    in4.textContent = "On-demand service";
  }
}

function vps() {
  if (flag) {
    in1.textContent = "کدملی";
    document.getElementById("in3").style.display = "";
    in4.textContent = "شماره مبایل";
  } else {
    in1.textContent = "National Code";
    document.getElementById("in3").style.display = "";
    in4.textContent = "phone number";
  }
}