import { Animation, Color, Colors, Duration, Icicles } from "icicles-animation";

// Define function that will compile our animation
const compile = async () => {
  // Define icicles size
  const iciclesCount = 20;
  const ledsPerIcicle = 30;

  // Helper class for creating animation frames.
  const icicles = new Icicles(iciclesCount, ledsPerIcicle);
  // Animation file representation
  const animation = new Animation({
    // Animation name. This will be displayed inside the app.
    name: "Przykładowa animacja",
    // This allows the compiler to try to optimize the frames to reduce their size
    optimize: true,
    // Define current dimensions of icicles
    xCount: iciclesCount,
    yCount: ledsPerIcicle,
    // How many times animation will be played
    loopsCount: 5,
  });

  // Create a function that will set icicles color from top to bottom
  const animateColorFromTopToBottom = (color: Color) => {
    for (let rowIndex = 0; rowIndex < ledsPerIcicle; rowIndex++) {
      // Set icicles row to provided color
      icicles.setRowColor(rowIndex, color);
      // Define frame duration
      const duration = new Duration({ milliseconds: 32 });
      // Get current icicles state as animation frame
      const frame = icicles.toFrame(duration);
      // Add a frame to the animation
      animation.addFrame(frame);
    }
  };

  // Run defined function for multiple colors
  animateColorFromTopToBottom(Colors.green);
  animateColorFromTopToBottom(Colors.blue);
  animateColorFromTopToBottom(Colors.magenta);
  animateColorFromTopToBottom(Colors.yellow);
  animateColorFromTopToBottom(Colors.violet);
  animateColorFromTopToBottom(Colors.red);
  animateColorFromTopToBottom(Colors.orange);
  animateColorFromTopToBottom(Colors.oceanBlue);
  animateColorFromTopToBottom(Colors.lawnGreen);
  animateColorFromTopToBottom(Colors.black);

  // Save the created animation to the file under the given path.
  await animation.toFile(`compiled/example.anim`);

  // Now run compilation: `npm run compile` or `yarn compile`.

  // GREAT! Now you can play the animation on https://icicles.intror.com/
};

// Compile animation
compile();
