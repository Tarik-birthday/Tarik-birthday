const candle1 = document.getElementById("Candle1");
const candle2 = document.getElementById("Candle1_2");
const candle3 = document.getElementById("Candle1_3");
const candle4 = document.getElementById("Candle2");
const candle5 = document.getElementById("Candle1_4");
const candle6 = document.getElementById("Candle1_5");
const candle7 = document.getElementById("Candle2_2");

let activeCandleCount = 0;

function checkCandles() {
  if (this.classList.contains("active")) {
    activeCandleCount++;
  } else {
    activeCandleCount--;
  }

  if (activeCandleCount === 7) {
    document.querySelector(".message").style.top = "40px";
    toggleBalloons();
  } else {
    document.querySelector(".message").style.top = "-100vh";
  }
}

candle1.addEventListener("click", function () {
  this.classList.toggle("active");
  checkCandles.call(this);
  const flameBig = candle1.querySelector("#flame_big");
  const flameSmall = candle1.querySelector("#flame_small");
  flameBig.classList.toggle("animate-flame");
  flameSmall.classList.toggle("animate-flame");
});

candle2.addEventListener("click", function () {
  this.classList.toggle("active");
  checkCandles.call(this);
  const flameBig = candle2.querySelector("#flame_big_2");
  const flameSmall = candle2.querySelector("#flame_small_2");
  flameBig.classList.toggle("animate-flame");
  flameSmall.classList.toggle("animate-flame");
});

candle3.addEventListener("click", function () {
  this.classList.toggle("active");
  checkCandles.call(this);
  const flameBig = candle3.querySelector("#flame_big_3");
  const flameSmall = candle3.querySelector("#flame_small_3");
  flameBig.classList.toggle("animate-flame");
  flameSmall.classList.toggle("animate-flame");
});

candle4.addEventListener("click", function () {
  this.classList.toggle("active");
  checkCandles.call(this);
  const flameBig = candle4.querySelector("#flame_big_4");
  const flameSmall = candle4.querySelector("#flame_small_4");
  flameBig.classList.toggle("animate-flame");
  flameSmall.classList.toggle("animate-flame");
});

candle5.addEventListener("click", function () {
  this.classList.toggle("active");
  checkCandles.call(this);
  const flameBig = candle5.querySelector("#flame_big_5");
  const flameSmall = candle5.querySelector("#flame_small_5");
  flameBig.classList.toggle("animate-flame");
  flameSmall.classList.toggle("animate-flame");
});

candle6.addEventListener("click", function () {
  this.classList.toggle("active");
  checkCandles.call(this);
  const flameBig = candle6.querySelector("#flame_big_6");
  const flameSmall = candle6.querySelector("#flame_small_6");
  flameBig.classList.toggle("animate-flame");
  flameSmall.classList.toggle("animate-flame");
});

candle7.addEventListener("click", function () {
  this.classList.toggle("active");
  checkCandles.call(this);
  const flameBig = candle7.querySelector("#flame_big_7");
  const flameSmall = candle7.querySelector("#flame_small_7");
  flameBig.classList.toggle("animate-flame");
  flameSmall.classList.toggle("animate-flame");
});

//balloons & confetti by Steve Gardner (Twitter @steeevg)

function toggleBalloons() {
  let size = { width: 0, height: 0 };

  const svg = document.getElementById("svg");
  const behind_svg = document.getElementById("behind");
  const onResize = (e) => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
  };

  onResize();
  window.addEventListener("resize", () => onResize());

  const getColor = () => {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (100 + 70 * Math.random()) +
      "%," +
      (70 + 0 * Math.random()) +
      "%)"
    );
  };

  const createBalloon = () => {
    var useEl = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useEl.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "#balloon"
    );
    useEl.setAttribute("style", `--color:${getColor()}`);
    useEl.setAttribute("class", `balloon`);
    return useEl;
  };

  const popBalloon = (colorSettings, x, y, isBehind) => {
    var pop = document.createElementNS("http://www.w3.org/2000/svg", "use");
    pop.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#pop");
    pop.setAttribute("style", colorSettings);
    pop.setAttribute("class", `pop`);

    if (isBehind) behind_svg.appendChild(pop);
    else svg.appendChild(pop);

    gsap.set(pop, {
      scale: 0.5,
      x: x,
      y: y,
      rotation: Math.random() * 360,
      transformOrigin: "center",
    });
    gsap.to(pop, {
      duration: 0.2,
      scale: 3,
      opacity: 0,
      ease: "power3.out",
      onComplete: () =>
        isBehind ? behind_svg.removeChild(pop) : svg.removeChild(pop),
    });

    for (let i = 0; i <= 10; i++) {
      let confetti = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "use"
      );
      confetti.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `#confetti_${Math.ceil(Math.random() * 2)}`
      );
      confetti.setAttribute("style", `--color: ${getColor()}`);
      confetti.setAttribute("class", `confetti`);

      if (isBehind) behind_svg.appendChild(confetti);
      else svg.appendChild(confetti);

      let randomPos = {
        x: Math.random() * 500 - 250,
        y: Math.random() * 500 - 250,
      };
      gsap.set(confetti, {
        x: x,
        y: y,
        rotation: Math.random() * 360,
        transformOrigin: "center",
      });
      gsap.to(confetti, {
        duration: 3,
        scale: Math.random(),
        motionPath: {
          curviness: 2,
          path: [
            {
              x: x + randomPos.x,
              y: y + randomPos.y,
            },
            {
              x: x + randomPos.x + (Math.random() * 20 - 10),
              y: y + randomPos.y + Math.random() * 200,
            },
          ],
        },
        opacity: 0,
        rotation: Math.random() * 360 - 180,
        ease: "power4.out",
        onComplete: () =>
          isBehind
            ? behind_svg.removeChild(confetti)
            : svg.removeChild(confetti),
      });
    }
  };

  const animateBalloon = (balloon, isBehind = false) => {
    gsap.set(balloon, {
      x: size.width / 2,
      y: size.height + 20,
      transformOrigin: "center",
      scale: isBehind ? 1 : 1.5,
      alpha: 0.95,
      rotation: Math.random() * 180 - 90,
    });

    let centerPos = {
      x: size.width / 4 + Math.random() * (size.width / 2),
      y: size.height / 2,
    };

    let endPos = {
      x: centerPos.x + (Math.random() * 200 - 100),
      y: Math.random() * 50,
    };
    gsap.to(balloon, {
      duration: 5 + Math.random(),
      motionPath: {
        curviness: 1.5,
        path: [
          {
            x: centerPos.x,
            y: centerPos.y,
          },
          {
            x: endPos.x,
            y: endPos.y,
          },
        ],
      },
      scale: isBehind ? 0.5 : 1,
      rotation: 0,
      ease: "power1.in",
      onComplete: () => {
        onClick(endPos.x, endPos.y, balloon, isBehind);
      },
    });

    balloon.addEventListener("click", (e) => {
      onClick(e.clientX, e.clientY, balloon, isBehind);
    });
  };

  const onClick = (x, y, balloon, isBehind) => {
    gsap.killTweensOf(balloon);
    const colorSettings = balloon.getAttribute("style");
    isBehind ? behind_svg.removeChild(balloon) : svg.removeChild(balloon);
    popBalloon(colorSettings, x, y, isBehind);
  };

  let balloonGenerator = setInterval(() => {
    if (!document.hidden) {
      const newBalloon = createBalloon();
      const isBehind = Math.random() > 0.5 ? true : false;
      if (isBehind) behind_svg.appendChild(newBalloon);
      else svg.appendChild(newBalloon);
      animateBalloon(newBalloon, isBehind);
    }
  }, 400);
}
