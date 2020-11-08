import react from 'react'
import styled from 'styled-components';

/*const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);*/

const Styles = styled.div`
    .layout{
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
    }
    .cookie-container{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #306973;
        z-index: 110;
    }
    
    .cookie-btn{
        background: #fff;
        border: 0;
        color: #f5f6fa;
        padding: 12px;
    }`;

export default () => {
    return(
<div className="layout">
    <div className="cookie-container">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <btn className="cookie-btn1" />
        <btn className="cookie-btn2" />
    </div>
</div>
)
};

