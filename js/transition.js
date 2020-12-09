import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    const tl = new TimelineLite();
    tl.fromTo(to, { left: "-100%", top: "50%" }, { left: "0%", duration: 0.5 })
      .fromTo(
        to,
        { height: "2vh" },
        {
          height: "90vh",
          top: "10vh",
          duration: 0.5,
          onComplete: () => {
            from.remove();
            done();
          },
        }
      )
      .fromTo(to.children[0], { opacity: 0 }, { opacity: 1, duration: 0.7 });
  }
  out({ done }) {
    done();
  }
}

class Fade2 extends Highway.Transition {
  in({ from, to, done }) {
    const tl = new TimelineLite();
    tl.fromTo(
      to,
      {
        left: "50%",
        top: "50%",
        width: "0%",
        height: "0%",
        borderRadius: "50%",
      },
      {
        left: "0%",
        top: "10%",
        width: "100%",
        height: "90vh",
        duration: 0.5,
      }
    )
      .fromTo(
        to,
        { borderRadius: "50%" },
        { borderRadius: "0%", duration: 0.6 },
        +0.2
      )
      .fromTo(
        to.children[0],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            from.remove();
            done();
          },
        }
      );
  }
  out({ done }) {
    done();
  }
}

export default Fade;

export { Fade2 };
