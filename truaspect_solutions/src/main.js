import "./styles.css";
import * as THREE from "three";

const heroSection = document.querySelector("#hero");
const sceneContainer = document.querySelector(
  "#threejs-container-ANIMATION_18",
);

if (heroSection && sceneContainer) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const root = document.createElement("div");
  root.className = "three-scene";
  sceneContainer.innerHTML = "";
  sceneContainer.appendChild(root);
  root.appendChild(renderer.domElement);

  const width = sceneContainer.clientWidth || window.innerWidth;
  const height = sceneContainer.clientHeight || window.innerHeight;
  renderer.setSize(width, height);
  camera.position.z = 6;

  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  const globeGroup = new THREE.Group();
  mainGroup.add(globeGroup);

  const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
  const globeMaterial = new THREE.MeshPhongMaterial({
    color: 0x00d2ff,
    emissive: 0x00d2ff,
    emissiveIntensity: 0.2,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  });
  const globe = new THREE.Mesh(globeGeometry, globeMaterial);
  globeGroup.add(globe);

  const nodes = [];
  const nodeCount = 150;

  for (let i = 0; i < nodeCount; i += 1) {
    const phi = Math.acos(-1 + (2 * i) / nodeCount);
    const theta = Math.sqrt(nodeCount * Math.PI) * phi;

    const node = new THREE.Mesh(
      new THREE.SphereGeometry(0.02, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x00ffff }),
    );

    const radius = 2.05;
    node.position.set(
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    );
    globeGroup.add(node);
    nodes.push(node);
  }

  const buildingGroup = new THREE.Group();
  buildingGroup.position.y = -15;
  mainGroup.add(buildingGroup);

  const floors = 6;
  for (let i = 0; i < floors; i += 1) {
    const floorGeometry = new THREE.BoxGeometry(3, 0.1, 3);
    const floorMaterial = new THREE.MeshPhongMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.6,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.2,
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = i * 0.8;
    buildingGroup.add(floor);
  }

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x00ffff, 2);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  let mouseX = 0;
  let mouseY = 0;
  let scrollY = 0;

  const onPointerMove = (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const onScroll = () => {
    scrollY = window.scrollY;
  };

  const onResize = () => {
    const width = sceneContainer.clientWidth || window.innerWidth;
    const height = sceneContainer.clientHeight || window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  const animate = () => {
    const targetX = mouseX * 0.5;
    const targetY = mouseY * 0.5;

    globeGroup.rotation.y += 0.002;
    globeGroup.rotation.x += (targetY - globeGroup.rotation.x) * 0.05;
    globeGroup.rotation.z += (targetX - globeGroup.rotation.z) * 0.05;

    const scrollFactor =
      scrollY / (document.body.scrollHeight - window.innerHeight);
    camera.position.y = -scrollFactor * 20;
    camera.lookAt(0, -scrollFactor * 20, 0);

    renderer.render(scene, camera);
  };

  renderer.setAnimationLoop(animate);

  window.addEventListener("beforeunload", () => {
    renderer.setAnimationLoop(null);
    renderer.dispose();
    globeGeometry.dispose();
    globeMaterial.dispose();
    nodes.forEach((node) => {
      node.geometry.dispose();
      node.material.dispose();
    });
  });
}
