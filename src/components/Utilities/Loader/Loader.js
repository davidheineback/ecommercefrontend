import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
@keyframes ldio-8jvuxvq08ud {
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
}
.ldio-8jvuxvq08ud div { box-sizing: border-box!important }
.ldio-8jvuxvq08ud > div {
  position: absolute;
  width: 72px;
  height: 72px;
  top: 14px;
  left: 14px;
  border-radius: 50%;
  border: 8px solid #000;
  border-color: #55c89d transparent #55c89d transparent;
  animation: ldio-8jvuxvq08ud 1s linear infinite;
}

.ldio-8jvuxvq08ud > div:nth-child(2), .ldio-8jvuxvq08ud > div:nth-child(4) {
  width: 54px;
  height: 54px;
  top: 23px;
  left: 23px;
  animation: ldio-8jvuxvq08ud 1s linear infinite reverse;
}
.ldio-8jvuxvq08ud > div:nth-child(2) {
  border-color: transparent #15212b transparent #15212b
}
.ldio-8jvuxvq08ud > div:nth-child(3) { border-color: transparent }
.ldio-8jvuxvq08ud > div:nth-child(3) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-8jvuxvq08ud > div:nth-child(3) div:before, .ldio-8jvuxvq08ud > div:nth-child(3) div:after { 
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: -8px;
  left: 24px;
  background: #55c89d;
  border-radius: 50%;
  box-shadow: 0 64px 0 0 #55c89d;
}
.ldio-8jvuxvq08ud > div:nth-child(3) div:after {
  left: -8px;
  top: 24px;
  box-shadow: 64px 0 0 0 #55c89d;
}

.ldio-8jvuxvq08ud > div:nth-child(4) { border-color: transparent; }
.ldio-8jvuxvq08ud > div:nth-child(4) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-8jvuxvq08ud > div:nth-child(4) div:before, .ldio-8jvuxvq08ud > div:nth-child(4) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: -8px;
  left: 15px;
  background: #15212b;
  border-radius: 50%;
  box-shadow: 0 46px 0 0 #15212b;
}
.ldio-8jvuxvq08ud > div:nth-child(4) div:after {
  left: -8px;
  top: 15px;
  box-shadow: 46px 0 0 0 #15212b;
}
.loadingio-spinner-double-ring-kduv6bxr7c {
  width: 74px;
  height: 74px;
  display: inline-block;
  overflow: hidden;
  background: #f1f2f3;
}
.ldio-8jvuxvq08ud {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.74);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-8jvuxvq08ud div { box-sizing: content-box; }
/* generated by https://loading.io/ */
`


function Loader() {
  return (
      <StyledLoader class="loadingio-spinner-double-ring-kduv6bxr7c">
        <div class="ldio-8jvuxvq08ud">
          <div></div>
          <div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </StyledLoader> 
  )
}



export default Loader