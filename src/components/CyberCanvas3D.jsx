"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CyberCanvas3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReducedMotion = mediaQuery.matches;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = currentMount.clientWidth || 400;
    const height = currentMount.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 240;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Node particle network group
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Generate Network Nodes with Crimson & Ruby Colors
    const nodeCount = 100;
    const radius = 105;
    const positions = new Float32Array(nodeCount * 3);
    const nodeSpheres = [];

    const sphereGeo = new THREE.SphereGeometry(1.8, 8, 8);
    const redMat = new THREE.MeshBasicMaterial({ color: 0xff1e44 });
    const rubyMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const emberMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const darkRedMat = new THREE.MeshBasicMaterial({ color: 0x881337 });

    const materials = [redMat, rubyMat, emberMat, darkRedMat];

    for (let i = 0; i < nodeCount; i++) {
      // Golden ratio spherical node distribution
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi) + (Math.random() - 0.5) * 15;
      const y = radius * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * 15;
      const z = radius * Math.cos(phi) + (Math.random() - 0.5) * 15;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mesh = new THREE.Mesh(sphereGeo, materials[i % materials.length]);
      mesh.position.set(x, y, z);
      networkGroup.add(mesh);
      nodeSpheres.push(mesh);
    }

    // Connecting laser line segments
    const maxConnections = 240;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    let lineCount = 0;
    const connectDistance = 58;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectDistance && lineCount < maxConnections) {
          linePositions[lineCount * 6] = positions[i * 3];
          linePositions[lineCount * 6 + 1] = positions[i * 3 + 1];
          linePositions[lineCount * 6 + 2] = positions[i * 3 + 2];

          linePositions[lineCount * 6 + 3] = positions[j * 3];
          linePositions[lineCount * 6 + 4] = positions[j * 3 + 1];
          linePositions[lineCount * 6 + 5] = positions[j * 3 + 2];

          lineCount++;
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions.slice(0, lineCount * 6), 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff2a4b,
      transparent: true,
      opacity: 0.35,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    networkGroup.add(linesMesh);

    // Inner Glowing Cyber Ring
    const ringGeo = new THREE.TorusGeometry(62, 1.2, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff1e44,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    networkGroup.add(ringMesh);

    // Secondary Outer Ring
    const outerRingGeo = new THREE.TorusGeometry(98, 0.8, 16, 100);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const outerRingMesh = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRingMesh.rotation.y = Math.PI / 4;
    networkGroup.add(outerRingMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0006;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0006;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Animation Loop
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isReducedMotion) {
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        networkGroup.rotation.y += 0.0035;
        networkGroup.rotation.x += 0.0015;

        networkGroup.rotation.y += targetX * 0.5;
        networkGroup.rotation.x += targetY * 0.5;

        ringMesh.rotation.z += 0.007;
        outerRingMesh.rotation.z -= 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Cleanup
      sphereGeo.dispose();
      redMat.dispose();
      rubyMat.dispose();
      emberMat.dispose();
      darkRedMat.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      renderer.dispose();

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] flex items-center justify-center">
      {/* Background glow behind 3D visual */}
      <div className="absolute w-72 h-72 rounded-full bg-red-600/15 blur-[100px] pointer-events-none" />

      {/* Three.js Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Cyber status HUD */}
      <div className="absolute bottom-3 right-4 pointer-events-none font-mono text-[10px] text-red-400 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-red-500/30 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
        <span>3D CYBER THREAT MESH // REALTIME VIZ</span>
      </div>
    </div>
  );
}
