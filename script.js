// แสดงเนื้อหาหลังจากแอนิเมชันจบ
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("main-content").style.display = "block";
    }, 3000);
});

function showSurprise() {
    let surpriseDiv = document.getElementById("surprise");
    surpriseDiv.innerHTML = "🎆 เซอร์ไพรส์! รักเธอที่สุดในโลก! 🎆";
    surpriseDiv.style.fontSize = "24px";
    surpriseDiv.style.marginTop = "20px";

    // ดอกเหมยร่วง
    let flower = document.createElement("div");
    flower.innerHTML = "🌸";
    flower.style.position = "absolute";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "0px";
    flower.style.fontSize = "30px";
    flower.style.animation = "fall 3s linear infinite";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 3000);
}

// ข้อความอั่งเปา
function openAngPao() {
    let messages = [
        "วันนี้จะได้รับกอดฟรี 10 ครั้ง! 🤗",
        "แฟนจะต้องพาไปเดต! 💕",
        "โชคดีเรื่องความรักตลอดปี! ❤️",
        "เธอคือโชคลาภที่ยิ่งใหญ่ที่สุดของฉัน! 🧧",
    ];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("lucky-message").innerText = randomMessage;
}

// แกลเลอรีรูปภาพ
document.getElementById("upload").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        document.getElementById("gallery").appendChild(img);
    }
});
