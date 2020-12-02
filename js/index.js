import Highway from "@dogstudio/highway";
import Fade, { Fade2 } from "./transition";

const H = new Highway.Core({
  transitions: {
    default: Fade,
    about: Fade2,
    contact: Fade2,
  },
});
