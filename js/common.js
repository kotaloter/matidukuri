// -------- headerのスクロール検知 -----------
function siteScroll() {
    let scrollY = window.scrollY;
    const HeaderBlock = document.querySelector("header");
    const HeaderWrapper = document.querySelector(".header_wrapper");

    if (scrollY > 400) {
        HeaderBlock.classList.add("active");
    } else {
        HeaderBlock.classList.remove("active");
    }
}

window.addEventListener("scroll", siteScroll);

// ----------------------- ドロワーボタン -------------------------
const DrawerButton = document.getElementById("drawerbutton");
const Menu = document.querySelector(".navmenu");

function drawermenu() {
    DrawerButton.classList.toggle("close");
    Menu.classList.toggle("open");
}

DrawerButton.addEventListener("click", drawermenu);

// ---------------------------------------------------------------
const ComeButton = document.querySelector(".news_container_itemes-box");
const MoreButton = document.querySelector(".more_button");

function ComeNewsButton() {
    ComeButton.classList.toggle("active2");
}

MoreButton.addEventListener("click", ComeNewsButton);
