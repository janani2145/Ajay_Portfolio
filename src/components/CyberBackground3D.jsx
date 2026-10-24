"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CyberBackground3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene & Fog Setup (Atmospheric Cyberspace Depth)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07070a, 0.00065);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    const startCamZ = 350;
    camera.position.set(0, 0, startCamZ);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    currentMount.appendChild(renderer.domElement);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 4. Corridor Dimensions & Security Gateways
    // User flies down from Z = 350 to Z = -4000 as they scroll top-to-bottom
    const corridorLength = 4200;
    const gateZPositions = [
      220, -250, -750, -1250, -1750, -2250, -2750, -3250, -3750,
    ];
    const gates = [];

    const hexGateGeo = new THREE.TorusGeometry(95, 1.3, 16, 6);
    const innerRingGeo = new THREE.TorusGeometry(72, 0.9, 16, 32);

    const gateMatRed = new THREE.MeshBasicMaterial({
      color: 0xff1e44,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const gateMatRuby = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.22,
    });

    gateZPositions.forEach((zPos, index) => {
      const gateGroup = new THREE.Group();
      gateGroup.position.set(0, 0, zPos);

      // Outer hexagonal firewall portal
      const hexMesh = new THREE.Mesh(hexGateGeo, gateMatRed);
      gateGroup.add(hexMesh);

      // Inner circular telemetry ring
      const innerMesh = new THREE.Mesh(innerRingGeo, gateMatRuby);
      gateGroup.add(innerMesh);

      // Peripheral corner tick markers
      const tickGeo = new THREE.BoxGeometry(4, 14, 2);
      const tickMat = new THREE.MeshBasicMaterial({
        color: index % 2 === 0 ? 0xff1e44 : 0xf59e0b,
        transparent: true,
        opacity: 0.45,
      });

      for (let i = 0; i < 4; i++) {
        const tick = new THREE.Mesh(tickGeo, tickMat);
        const angle = (i * Math.PI) / 2;
        tick.position.set(Math.cos(angle) * 105, Math.sin(angle) * 105, 0);
        tick.rotation.z = angle;
        gateGroup.add(tick);
      }

      worldGroup.add(gateGroup);
      gates.push({
        group: gateGroup,
        rotSpeed: (index % 2 === 0 ? 1 : -1) * 0.003,
      });
    });

    // 5. Dual Perspective Cyber Grids (Floor & Ceiling Matrix Rails)
    // Floor grid at Y = -200, Ceiling grid at Y = 200
    const createMatrixGrid = (yPos) => {
      const linePositions = [];
      const gridWidth = 450;
      const stepX = 50;
      const stepZ = 100;
      const zMin = -corridorLength - 200;
      const zMax = 500;

      // Longitudinal lines (running along depth Z)
      for (let x = -gridWidth; x <= gridWidth; x += stepX) {
        // Keep center corridor slightly more open for clarity
        if (Math.abs(x) < 40) continue;
        linePositions.push(x, yPos, zMax);
        linePositions.push(x, yPos, zMin);
      }

      // Transverse lines (horizontal cross rungs)
      for (let z = zMax; z >= zMin; z -= stepZ) {
        linePositions.push(-gridWidth, yPos, z);
        linePositions.push(gridWidth, yPos, z);
      }

      const gridGeo = new THREE.BufferGeometry();
      gridGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      const gridMat = new THREE.LineBasicMaterial({
        color: 0xff1e44,
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.LineSegments(gridGeo, gridMat);
    };

    const floorGrid = createMatrixGrid(-200);
    const ceilingGrid = createMatrixGrid(200);
    worldGroup.add(floorGrid);
    worldGroup.add(ceilingGrid);

    // 6. Peripheral Floating Cyber Threat Polyhedra & Vaults
    // Positioned along the left & right corridors so they never collide with text
    const shapeGeometries = [
      new THREE.OctahedronGeometry(13, 0),
      new THREE.IcosahedronGeometry(11, 0),
      new THREE.BoxGeometry(16, 16, 16),
      new THREE.TetrahedronGeometry(14, 0),
    ];

    const wireMatRed = new THREE.MeshBasicMaterial({
      color: 0xff1e44,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const wireMatRuby = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const wireMatAmber = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireMats = [wireMatRed, wireMatRuby, wireMatAmber];

    const coreGeo = new THREE.SphereGeometry(1.4, 6, 6);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
    });

    const floatingVaults = [];
    const vaultCount = 28;

    for (let i = 0; i < vaultCount; i++) {
      const geo = shapeGeometries[i % shapeGeometries.length];
      const mat = wireMats[i % wireMats.length];
      const mesh = new THREE.Mesh(geo, mat);

      // Core glowing seed
      const core = new THREE.Mesh(coreGeo, coreMat);
      mesh.add(core);

      // Flank distribution: either strictly left or strictly right
      const isLeft = i % 2 === 0;
      const x = isLeft
        ? -180 - Math.random() * 220
        : 180 + Math.random() * 220;
      const y = (Math.random() - 0.5) * 260;
      const z = 300 - (i / vaultCount) * (corridorLength + 400);

      mesh.position.set(x, y, z);
      worldGroup.add(mesh);

      floatingVaults.push({
        mesh,
        baseY: y,
        floatSpeed: 0.8 + Math.random() * 0.8,
        floatAmp: 12 + Math.random() * 18,
        offset: Math.random() * Math.PI * 2,
        rotX: (Math.random() - 0.5) * 0.014,
        rotY: (Math.random() - 0.5) * 0.016,
        rotZ: (Math.random() - 0.5) * 0.01,
      });
    }

    // 7. Cyber Defense Data Nodes & Dynamic Connecting Laser Mesh
    const nodeCount = 90;
    const nodeSpheres = [];
    const sphereGeo = new THREE.SphereGeometry(1.4, 6, 6);
    const nodeMatRed = new THREE.MeshBasicMaterial({
      color: 0xff1e44,
      transparent: true,
      opacity: 0.7,
    });
    const nodeMatRuby = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.65,
    });
    const nodeMats = [nodeMatRed, nodeMatRuby];

    for (let i = 0; i < nodeCount; i++) {
      const isLeft = Math.random() > 0.5;
      const x = isLeft
        ? -160 - Math.random() * 240
        : 160 + Math.random() * 240;
      const y = (Math.random() - 0.5) * 320;
      const z = 350 - Math.random() * (corridorLength + 400);

      const mesh = new THREE.Mesh(sphereGeo, nodeMats[i % nodeMats.length]);
      mesh.position.set(x, y, z);
      worldGroup.add(mesh);

      nodeSpheres.push({
        mesh,
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.35,
      });
    }

    // Dynamic Laser Connections
    const maxLines = 140;
    const linePositions = new Float32Array(maxLines * 6);
    const laserGeometry = new THREE.BufferGeometry();
    laserGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const laserMaterial = new THREE.LineBasicMaterial({
      color: 0xff1e44,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    const laserMesh = new THREE.LineSegments(laserGeometry, laserMaterial);
    worldGroup.add(laserMesh);

    // 8. Cyberspace Warp Stream Particles (Data Packets Drifting Past)
    const streamCount = 220;
    const streamGeo = new THREE.BufferGeometry();
    const streamPositions = new Float32Array(streamCount * 3);
    const streamVelocities = [];

    for (let i = 0; i < streamCount; i++) {
      streamPositions[i * 3] = (Math.random() - 0.5) * 700;
      streamPositions[i * 3 + 1] = (Math.random() - 0.5) * 450;
      streamPositions[i * 3 + 2] = 400 - Math.random() * (corridorLength + 600);

      streamVelocities.push({
        vz: 0.6 + Math.random() * 1.2,
        vy: (Math.random() - 0.5) * 0.15,
      });
    }

    streamGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(streamPositions, 3)
    );

    const streamMat = new THREE.PointsMaterial({
      color: 0xff3b5c,
      size: 2.2,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const streamPoints = new THREE.Points(streamGeo, streamMat);
    worldGroup.add(streamPoints);

    // 9. Scroll & Mouse Tracking (Smooth Cyber World Traversal)
    let targetProgress = 0;
    let currentProgress = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let camX = 0;
    let camY = 0;
    let camZ = startCamZ;

    const onScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        targetProgress = Math.min(
          Math.max(window.scrollY / scrollHeight, 0),
          1
        );
      }
    };

    const onMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onResize = () => {
      if (!currentMount) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Initial check
    onScroll();

    // 10. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();
    let isTabVisible = true;

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isTabVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp for scroll and mouse
      currentProgress += (targetProgress - currentProgress) * 0.06;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Camera Fly-Through Calculation along Cyberspace Corridor
      if (!prefersReducedMotion) {
        const destZ = startCamZ - currentProgress * corridorLength;
        // Subtle banking wave while traveling
        const destX =
          Math.sin(currentProgress * Math.PI * 2.5) * 50 + mouseX * 45;
        const destY =
          Math.cos(currentProgress * Math.PI * 2) * 30 - mouseY * 35;

        camZ += (destZ - camZ) * 0.07;
        camX += (destX - camX) * 0.07;
        camY += (destY - camY) * 0.07;

        camera.position.set(camX, camY, camZ);
        camera.lookAt(
          camX * 0.35 + mouseX * 80,
          camY * 0.35 - mouseY * 60,
          camZ - 360
        );
      }

      // Rotate Security Gateways
      gates.forEach((gate) => {
        if (!prefersReducedMotion) {
          gate.group.rotation.z += gate.rotSpeed;
        }
      });

      // Animate Floating Polyhedra Vaults
      if (!prefersReducedMotion) {
        floatingVaults.forEach((item) => {
          item.mesh.rotation.x += item.rotX;
          item.mesh.rotation.y += item.rotY;
          item.mesh.rotation.z += item.rotZ;

          item.mesh.position.y =
            item.baseY +
            Math.sin(elapsedTime * item.floatSpeed + item.offset) * item.floatAmp;
        });
      }

      // Animate Nodes & Dynamic Lasers
      if (!prefersReducedMotion) {
        nodeSpheres.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          node.z += node.vz;

          // Local corridor boundary bounce
          if (Math.abs(node.x) > 420) node.vx = -node.vx;
          if (Math.abs(node.y) > 180) node.vy = -node.vy;

          node.mesh.position.set(node.x, node.y, node.z);
        });

        // Update Laser Mesh between nearby nodes
        let lineIdx = 0;
        const posArray = laserGeometry.attributes.position.array;
        const connectDistSq = 95 * 95;

        for (let i = 0; i < nodeCount && lineIdx < maxLines; i++) {
          for (let j = i + 1; j < nodeCount && lineIdx < maxLines; j++) {
            const dx = nodeSpheres[i].x - nodeSpheres[j].x;
            const dy = nodeSpheres[i].y - nodeSpheres[j].y;
            const dz = nodeSpheres[i].z - nodeSpheres[j].z;
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < connectDistSq) {
              const p = lineIdx * 6;
              posArray[p] = nodeSpheres[i].x;
              posArray[p + 1] = nodeSpheres[i].y;
              posArray[p + 2] = nodeSpheres[i].z;
              posArray[p + 3] = nodeSpheres[j].x;
              posArray[p + 4] = nodeSpheres[j].y;
              posArray[p + 5] = nodeSpheres[j].z;
              lineIdx++;
            }
          }
        }
        laserGeometry.setDrawRange(0, lineIdx * 2);
        laserGeometry.attributes.position.needsUpdate = true;
      }

      // Animate Cyberspace Warp Stream Particles
      if (!prefersReducedMotion) {
        const positions = streamGeo.attributes.position.array;
        for (let i = 0; i < streamCount; i++) {
          positions[i * 3 + 2] += streamVelocities[i].vz;
          positions[i * 3 + 1] += streamVelocities[i].vy;

          // If particle passes the camera or goes out of boundary, reset behind
          if (positions[i * 3 + 2] > camZ + 150) {
            positions[i * 3 + 2] = camZ - 900 - Math.random() * 800;
          }
        }
        streamGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      hexGateGeo.dispose();
      innerRingGeo.dispose();
      gateMatRed.dispose();
      gateMatRuby.dispose();
      floorGrid.geometry.dispose();
      floorGrid.material.dispose();
      ceilingGrid.geometry.dispose();
      ceilingGrid.material.dispose();
      shapeGeometries.forEach((g) => g.dispose());
      wireMats.forEach((m) => m.dispose());
      coreGeo.dispose();
      coreMat.dispose();
      sphereGeo.dispose();
      nodeMats.forEach((m) => m.dispose());
      laserGeometry.dispose();
      laserMaterial.dispose();
      streamGeo.dispose();
      streamMat.dispose();
      renderer.dispose();

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        opacity: 0.95,
      }}
    />
  );
}
