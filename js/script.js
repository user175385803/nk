const soundToggle=document.querySelector(".audio__icon"),audioControls=document.querySelector(".audio-controls"),soundOnToggle=document.querySelector(".audio__on"),soundOffToggle=document.querySelector(".audio__off"),play=document.querySelector(".button__play"),context=new AudioContext;soundToggle.addEventListener("click",(function(){soundOffToggle.classList.contains("visually-hidden")?(soundOnToggle.classList.add("visually-hidden"),soundOffToggle.classList.remove("visually-hidden"),audioControls.muted=!0):(soundOnToggle.classList.remove("visually-hidden"),soundOffToggle.classList.add("visually-hidden"),audioControls.muted=!1)}));