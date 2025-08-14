
let citi = [
    { "ar": "المحمدية", "fr": "Mohammadia" },
    { "ar": "الدار البيضاء", "fr": "Casablanca" },
    { "ar": "زاكورة", "fr": "Zagora" },
    { "ar": "الرباط", "fr": "Rabat" },
    { "ar": "مكناس", "fr": "Meknès" },
    { "ar": "ورزازات", "fr": "Ouarzazate" },
    { "ar": "اسفي", "fr": "Safi" },
    { "ar": "سلا", "fr": "Salé" },
    { "ar": "تنغير", "fr": "Tinghir" },
    { "ar": "تطوان", "fr": "Tétouan" },
    { "ar": "القنيطرة", "fr": "Kénitra" },
    { "ar": "خريبكة", "fr": "Khouribga" },
    { "ar": "جرسيف", "fr": "Guercif" },
    { "ar": "تازة", "fr": "Taza" },
    { "ar": "برشيد", "fr": "Berrechid" },
    { "ar": "الراشيدية", "fr": "Errachidia" },
    { "ar": "أكادير", "fr": "Agadir" },
    { "ar": "إنزكان", "fr": "Inezgane" },
    { "ar": "العيون", "fr": "Laâyoune" },
    { "ar": "السمارة", "fr": "Es-Semara" },
    { "ar": "الداخلة", "fr": "Dakhla" },
    { "ar": "الناظور", "fr": "Nador" },
    { "ar": "الحسيمة", "fr": "Al Hoceïma" },
    { "ar": "وجدة", "fr": "Oujda" },
    { "ar": "فاس", "fr": "Fès" },
    { "ar": "صفرو", "fr": "Sefrou" },
    { "ar": "إفران", "fr": "Ifrane" },
    { "ar": "تاونات", "fr": "Taounate" },
    { "ar": "بني ملال", "fr": "Beni Mellal" },
    { "ar": "الفقيه بن صالح", "fr": "Fquih Ben Salah" },
    { "ar": "أزيلال", "fr": "Azilal" },
    { "ar": "كلميم", "fr": "Guelmim" },
    { "ar": "طانطان", "fr": "Tan-Tan" },
    { "ar": "طرفاية", "fr": "Tarfaya" },
    { "ar": "اليوسفية", "fr": "Youssoufia" },
    { "ar": "تاوريرت", "fr": "Taourirt" },
    { "ar": "بركان", "fr": "Berkane" },
    { "ar": "جرادة", "fr": "Jerada" },
    { "ar": "فكيك", "fr": "Figuig" },
    { "ar": "سيدي قاسم", "fr": "Sidi Kacem" },
    { "ar": "سيدي سليمان", "fr": "Sidi Slimane" },
    { "ar": "الصويرة", "fr": "Essaouira" },
    { "ar": "شيشاوة", "fr": "Chichaoua" },
    { "ar": "الحوز", "fr": "Al Haouz" },
    { "ar": "الرحامنة", "fr": "Rhamna" },
    { "ar": "قلعة السراغنة", "fr": "El Kelâa des Sraghna" },
    { "ar": "مراكش", "fr": "Marrakech" },
    { "ar": "السمارة", "fr": "Smara" },
    { "ar": "بولمان", "fr": "Boulemane" },
    { "ar": "وزان", "fr": "Ouezzane" },
    { "ar": "الشاون", "fr": "Chefchaouen" },
  { "ar": "تمارة", "fr": "Témara" },
  { "ar": "الجديدة", "fr": "El Jadida" },
  { "ar": "أيت ملول", "fr": "Aït Melloul" },
  { "ar": "سطات", "fr": "Settat" },
  { "ar": "العرائش", "fr": "Larache" },
  { "ar": "الخميسات", "fr": "Khemisset" },
  { "ar": "بوسكورة", "fr": "Bouskoura" },
  { "ar": "الشعيرة الجهادية", "fr": "Dcheira El Jihadia" },
  { "ar": "تارودانت", "fr": "Taroudant" },
  { "ar": "تازنيت", "fr": "Tiznit" },
  { "ar": "بن جرير", "fr": "Ben Guerir" },
  { "ar": "وادي زم", "fr": "Oued Zem" },
  { "ar": "دار بوعزة", "fr": "Dar Bouazza" },
  { "ar": "القلعية", "fr": "Lqliaa" },
  { "ar": "أولاد تايمة", "fr": "Oulad Teima" },
  { "ar": "تيفلت", "fr": "Tifelt" },
  { "ar": "الخيرات", "fr": "Skhirat" },
  { "ar": "سوق الأربعاء", "fr": "Souk El Arbaa" },
  { "ar": "فنيق", "fr": "Fnideq" },
  { "ar": "المديق", "fr": "M'diq" },
  { "ar": "بن سليمان", "fr": "Benslimane" },
  { "ar": "سيدي بنيور", "fr": "Sidi Bennour" },
  { "ar": "أزرو", "fr": "Azrou" },
  { "ar": "درارڨة", "fr": "Drargua" }

]

  let hour_fajr
  let hour_sunrise
  let hour_dhuhr
  let hour_asr
  let hour_sunset 
  let hour_isha  
  let min_fajr
  let min_sunrise
  let min_dhuhr
  let min_asr
  let min_sunset 
  let min_isha  
      const annee = new Date().getFullYear();
    const jour = new Date().getDate();
    const mois = new Date().getMonth() + 1;
    console.log(annee);
    console.log(jour);
    console.log(mois);
    
    
code(0)
for(let i=0;i<citi.length;i++) {
  document.getElementById('tout').innerHTML += `<p onclick="code(${i})" >${citi[i].ar}</p>`
}



function code(index) {
  let request = new XMLHttpRequest();
request.open(
    "GET",
    
    `https://api.aladhan.com/v1/timingsByCity/${jour}-${mois}-${annee}?city=${citi[index].fr}&country=MA`
);
request.responseType = "json";
request.send();
request.onload = function() {
  // console.log(request.response);
  
    document.getElementById('fajr-time').innerHTML = request.response.data.timings.Fajr
    document.getElementById('sobh-time').innerHTML = request.response.data.timings.Sunrise
    document.getElementById('dohr-time').innerHTML = request.response.data.timings.Dhuhr
    document.getElementById('asr-time').innerHTML = request.response.data.timings.Asr
    document.getElementById('mghrob-time').innerHTML = request.response.data.timings.Sunset
    document.getElementById('acha-time').innerHTML = request.response.data.timings.Isha
    document.getElementById('tarikh-miladi').innerHTML = request.response.data.date.gregorian.date
    document.getElementById('tarikh-hijri').innerHTML = request.response.data.date.hijri.date
    document.getElementById('grand-ville').innerHTML =  citi[index].ar
    document.getElementById('search').innerHTML =  citi[index].ar
  document.getElementById('tout').style.display = 'none'
  document.getElementById('icon').innerHTML = '<i class="fa-solid fa-angles-down"></i>'

 
  hour_fajr  = Number(request.response.data.timings.Fajr.substring(0,2))
  hour_sunrise  = Number(request.response.data.timings.Sunrise.substring(0,2))
  hour_dhuhr = Number(request.response.data.timings.Dhuhr.substring(0,2))
  hour_asr  = Number(request.response.data.timings.Asr.substring(0,2))
  hour_sunset  = Number(request.response.data.timings.Sunset.substring(0,2))
  hour_isha  = Number(request.response.data.timings.Isha.substring(0,2))
  min_fajr  = Number(request.response.data.timings.Fajr.substring(3,5))
  min_sunrise  = Number(request.response.data.timings.Sunrise.substring(3,5))
  min_dhuhr = Number(request.response.data.timings.Dhuhr.substring(3,5))
  min_asr  = Number(request.response.data.timings.Asr.substring(3,5))
  min_sunset  = Number(request.response.data.timings.Sunset.substring(3,5))
  min_isha  = Number(request.response.data.timings.Isha.substring(3,5))
  // console.log(request.response.data.timings.Fajr.substring(3,5));:

  
  
};
}


function updateTime() {
    let api = new XMLHttpRequest();
api.open(
    "GET",
    
    `https://timeapi.io/api/Time/current/zone?timeZone=Africa/Casablanca`
);
api.responseType = "json";
api.send();
api.onload = function() {
  // console.log(api.response);
  let heure = api.response.hour
  let minute = api.response.minute
  let seconde = api.response.seconds
 
 
  if (Number(heure) < 10) {
    heure = "0" + heure
  }
  if (Number(minute) < 10) {
    minute = "0" + minute
  }
  if (Number(seconde) < 10) {
    seconde = "0" + seconde
  }
  document.getElementById('para-2').innerHTML = ":" + minute
    document.getElementById('para-3').innerHTML = ":" + heure 
    document.getElementById('para-1').innerHTML =  seconde 
  
    
  //   if((heure >= hour_fajr && minute > min_fajr) && (heure <= hour_sunrise && minute < min_sunrise)) {
  //   document.getElementById('pre').innerHTML = "الصبح"
  // }
  //   if(api.response.hour >= hour_sunrise && api.response.minute > min_sunrise) {
  //   document.getElementById('pre').innerHTML = "الظهر"
  // }
  // if(api.response.hour >= hour_dhuhr && api.response.minute > min_dhuhr) {
  //   document.getElementById('pre').innerHTML = "العصر"
  // }
  // if(api.response.hour >= hour_asr && api.response.minute > min_asr) {
  //   document.getElementById('pre').innerHTML = "المغرب"
  // }
  // if(api.response.hour >= hour_sunset && api.response.minute > min_sunset) {
  //   document.getElementById('pre').innerHTML = "العشاء"
  // }
  // if(api.response.hour < hour_isha) {
  //   document.getElementById('pre').innerHTML = "الفجر"
  // }
};
}
updateTime();
setInterval(updateTime, 1000);


  let click = 0
document.getElementById('city').addEventListener("click",function() {
  if (click == 0) {
    document.getElementById('tout').style.display = 'block'
    document.getElementById('icon').innerHTML = '<i class="fa-solid fa-angles-up"></i>'
    click = 1
  } 
  else {
    document.getElementById('tout').style.display = 'none'
    document.getElementById('icon').innerHTML = '<i class="fa-solid fa-angles-down"></i>'
    click = 0
  }
  
})
 

  

