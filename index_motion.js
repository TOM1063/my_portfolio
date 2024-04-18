// import { TWEEN } from "@tweenjs/tween.js";
import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js";

var sc_width = screen.width;
var sc_height = screen.height;

function animate() {
  requestAnimationFrame(animate);
  // [...]
  TWEEN.update();

  sc_width = screen.width;
  sc_height = screen.height;
  // [...]
}
requestAnimationFrame(animate);

var camera = document.getElementById("camera");
var pc = document.getElementById("pc");
var make = document.getElementById("make");
var random = document.getElementById("random");

var camera_pos = { x: 0, y: 0 };
var pc_pos = { x: 0, y: 0 };
var make_pos = { x: 0, y: 0 };
var random_pos = { x: 0, y: 0 };

var camera_motion = new TWEEN.Tween(camera_pos);
camera_motion.to({ x: 200, y: 200 }, 2000);
camera_motion.start();
camera_motion.onUpdate(function () {
  camera.style.setProperty(
    "transform",
    "translate(" + camera_pos.x + "px, " + camera_pos.y + "px)"
  );
});
var pc_motion = new TWEEN.Tween(pc_pos);
pc_motion.to({ x: 200, y: 200 }, 2000);
pc_motion.start();
pc_motion.onUpdate(function () {
  pc.style.setProperty(
    "transform",
    "translate(" + pc_pos.x + "px, " + pc_pos.y + "px)"
  );
});
var make_motion = new TWEEN.Tween(make_pos);
make_motion.to({ x: 500, y: 100 }, 2000);
make_motion.start();
make_motion.onUpdate(function () {
  make.style.setProperty(
    "transform",
    "translate(" + make_pos.x + "px, " + make_pos.y + "px)"
  );
});
var random_motion = new TWEEN.Tween(random_pos);
random_motion.to({ x: 600, y: 200 }, 2000);
random_motion.start();
random_motion.onUpdate(function () {
  random.style.setProperty(
    "transform",
    "translate(" + random_pos.x + "px, " + random_pos.y + "px)"
  );
});

camera_motion.repeat();
pc_motion.repeat();
make_motion.repeat();
random_motion.repeat();
