function loadingAnimation(){
    var t1 = gsap.timeline()

    t1.from(".line h1",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5  
    })

    // var grow=0;

    t1.from("#l1p1, .line h2",{
        opacity:0,
        onStart: function(){
            var h5timer= document.querySelector("#l1p1 h5");
            var grow=0;
            setInterval(function(){
                if(grow<100){
                    h5timer.innerHTML=grow++;
                }
                else{
                    h5timer.innerHTML=grow;
                }
            },33);
        },
    });

    t1.to('.line h2',{
        animationName:"anime",
        opacity:1
    })


    t1.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:4
    });

    t1.from("#page1",{
        delay:0.2,
        y:1600,
        ease:Power4,
        duration:0.5,
        opacity:0  
    })

    t1.to("#loader",{
        display:"none"
    })
}

loadingAnimation()

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        // console.log(dets.x);
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4", {
      });
}

cursorAnimation()