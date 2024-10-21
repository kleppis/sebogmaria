import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WaterBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Gjør bakgrunnen gjennomsiktig
        mountRef.current?.appendChild(renderer.domElement);

        // Water geometry
        const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            flatShading: true,
            vertexColors: true
        });


        // Apply colors to vertices
        const color1 = new THREE.Color("#F3E7D8");
        const color2 = new THREE.Color("#F8B3CC");
        // Definer colors som en array av number-verdier
        const colors: number[] = [];
        for (let i = 0; i < geometry.attributes.position.count; i++) {
            const color = (i % 2 === 0) ? color1 : color2;
            colors.push(color.r, color.g, color.b);
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        const water = new THREE.Mesh(geometry, material as THREE.MeshPhongMaterial);
        scene.add(water);

        camera.position.set(0, 0, 5); // Bruker set-metoden for å sette posisjon

        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5); // Bruker set-metoden for lysposisjon
        scene.add(light);

        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);

            // Oppdater bølgeanimasjon
            const time = Date.now() * 0.001;
            for (let i = 0; i < geometry.attributes.position.count; i++) {
                const z = Math.sin(i + time) * 0.1;
                geometry.attributes.position.setZ(i, z);
            }
            geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Clean up on component unmount
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default WaterBackground;