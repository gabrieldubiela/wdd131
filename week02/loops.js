myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],

  };

const favoriteFoodList = document.querySelector("#favorite-foods");
function creatandAppendFood (food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    favoriteFoodList.appendChild(favoriteFood);
}

myInfo.favoriteFoods.forEach(creatandAppendFood);

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44]

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i = i + 1;
}

studentReport.forEach(function (i) {
    if (i < LIMIT) {
        console.log(i);
    }
});

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}
const today = document.querySelector("#today");
const todayDate = new Date();
today.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
  "en-US",
  {
    weekday: "long"
  }
).format(todayDate)}</span>`;

const nextDays = document.querySelector("#nextDays");
let j = 1;
while (j < 7) {
    let nextDay = new Date();
    nextDay.setDate(todayDate.getDate() + j);
    let next = document.createElement("li");
    next.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
        "en-US",
        {
          weekday: "long"
        }
      ).format(nextDay)}</span>`;
      nextDays.appendChild(next);
      j++;
}
