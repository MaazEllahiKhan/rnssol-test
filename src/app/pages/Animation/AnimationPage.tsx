import anime from "animejs";
import React from "react"
import "./AnimationPage.css"

const AnimationPage = () => {
  const animationRef = React.useRef<any>({});
  const animationRef2 = React.useRef<any>({});

  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".css-selector-demo .el",
      translateY: {
        value: 250,
        duration: 800
      },
      // delay: function (el, i) {
      //   return i * 100;
      // },
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      backgroundColor: '#42f5d7',
      borderRadius: ['0%', '50%'],
      // rotateY: "1turn",
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      // scaleY: 3,
      // skewX: 3,
      // duration: 1000,
      delay: 500,
      endDelay: 500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",

    });
    animationRef2.current = anime({
      targets: '.basic-staggering-demo .el',
      translateX: 270,
      rotate: anime.stagger([-360, 360]), // increase delay by 100ms for each elements.
      easing: 'easeInOutQuad'
    });
  }, []);

  return (
    <div className="d-flex justify-content-around col-6">
      <div className="css-selector-demo ">
        <button onClick={() => animationRef.current.restart()}>Restart test</button>
        <div className="el" />
      </div>
      <div className="basic-staggering-demo ">
        <button onClick={() => animationRef2.current.restart()}>Restart</button>
        <div className="el mb-1" />
        <div className="el mb-1" />
        <div className="el mb-1" />
        <div className="el mb-1" />
        <div className="el mb-1" />
      </div>
    </div>
  );
}

export default AnimationPage;