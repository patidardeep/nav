 var icons = document.querySelectorAll(".icon")
 var shadows = document.querySelector("#shadow")


 icons.forEach(function(val,index){
dullandbright();
    val.addEventListener("click",function(){
shadows.style.transform = `translateX(${index*100}px)`

gsap.to("shadow",{
    x:index*100,
    ease:Expo.easeInOut,
    duration:0.23
})
gsap.to(this.children,{
    opacity:1,
})
    })
 })

 function dullandbright(){
gsap.to(".icon i",{
    opacity:0.3
})
 }