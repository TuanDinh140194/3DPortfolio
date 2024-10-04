/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useGLTF, useAnimations, Float } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Time = ({ ...props }) => {
  const outerdecorationRef = useRef();
  const objectRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const sphereRef = [useRef(), useRef(), useRef()]; // Array of refs for multiple objects
  const { nodes, materials, animations } = useGLTF(
    "/models/broken_steampunk_clock.glb"
  );
  //   const { actions } = useAnimations(animations, group)

  //   const [hovered, setHovered] = useState(false);
  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
      })
      .to(outerdecorationRef.current.rotation, {
        z: "-=1.0472",
        duration: 2, // Original duration for the forward rotation
      })
      .to(outerdecorationRef.current.rotation, {
        z: "+=1.0472",
        duration: 0.5, // Faster return duration
      }); // "<" means to start this animation at the same time as the previous one
  });

  // Circular motion for multiple objects
  useGSAP(() => {
    const radius = 50;
    const angles = [0, Math.PI / 2, Math.PI]; // Initial angles for different objects
    const durations = [4, 6, 8]; // Different durations for each object to orbit

    sphereRef.forEach((sphereRef, index) => {
      let angle = angles[index]; // Starting angle for each object
      gsap.timeline({
        repeat: -1, // Infinite loop
        onUpdate: () => {
          sphereRef.current.position.x = radius * Math.cos(angle);
          sphereRef.current.position.z = radius * Math.sin(angle);

          // Increment the angle to create circular motion
          angle += Math.PI / 180; // You can adjust this value to control speed
        },
        duration: durations[index], // Different duration for each object
      });
    });
  });

  // Independent spinning for each object
  useGSAP(() => {
    objectRefs.forEach((objectRef, index) => {
      const duration = 3 + index * 2; // Different duration for each object's spin
      if (objectRef.current) {
        gsap.to(objectRef.current.rotation, {
          z: "+=2 * Math.PI", // Spin around the Y-axis by 360 degrees
          duration: duration, // Vary the duration for each object
          repeat: -1, // Infinite loop
          ease: "linear", // Smooth continuous spin
        });
      }
    });
  });

  return (
    <Float floatIntensity={1}>
      <group
        position={[8, 8, 0]}
        scale={0.03}
        name="Sketchfab_Scene"
        {...props}
      >
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="3152f1ac15c44e2290532c34a8b391fbfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cylinder004" scale={1.048}>
                  <mesh
                    name="Cylinder004_Material_#3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Cylinder004_Material_#3_0"].geometry}
                    material={materials.Material_3}
                  />
                </group>
                <group
                  name="outerdecoration"
                  rotation={[0, 0, -0.087]}
                  scale={1.048}
                >
                  <mesh
                    ref={outerdecorationRef}
                    name="outerdecoration_Material_#3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["outerdecoration_Material_#3_0"].geometry}
                    material={materials.Material_3}
                  />
                </group>
                <group
                  name="Object001"
                  position={[29.373, -18.223, 1.956]}
                  scale={1.048}
                  ref={objectRefs[0]}
                >
                  <group name="Object_9" position={[-28.024, 18.098, -1.866]}>
                    <mesh
                      // ref={objectRefs[0]}
                      name="Object001_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object001_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object002"
                  position={[33.735, -4.339, 2.005]}
                  scale={1.048}
                  ref={objectRefs[1]}
                >
                  <group name="Object_12" position={[-32.179, 4.139, -1.912]}>
                    <mesh
                      // ref={objectRef}
                      name="Object002_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object002_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object003"
                  position={[14.972, -2.375, -8.953]}
                  rotation={[0, 0, -Math.PI / 6]}
                  scale={1.048}
                  ref={objectRefs[2]}
                >
                  <group
                    name="Object_15"
                    position={[-13.501, -5.179, 8.54]}
                    rotation={[0, 0, Math.PI / 6]}
                  >
                    <mesh
                      name="Object003_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object003_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object004"
                  position={[-11.074, -24.842, 2.067]}
                  scale={1.048}
                  ref={objectRefs[3]}
                >
                  <group name="Object_18" position={[10.563, 23.696, -1.972]}>
                    <mesh
                     
                      name="Object004_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object005"
                  position={[6.496, -45.251, -9.367]}
                  scale={1.048}
                  ref={objectRefs[4]}
                >
                  <group name="Object_21" position={[-6.196, 43.163, 8.935]}>
                    <mesh
                      
                      name="Object005_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object005_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object006"
                  position={[3.674, -33.278, -3.912]}
                  scale={1.048}
                  ref={objectRefs[5]}
                >
                  <group name="Object_24" position={[-3.504, 31.743, 3.732]}>
                    <mesh
                      
                      name="Object006_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object006_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object007"
                  position={[-16.082, -3.117, -5.008]}
                  scale={1.048}
                  ref={objectRefs[6]}
                >
                  <group name="Object_27" position={[15.34, 2.974, 4.777]}>
                    <mesh
                      
                      name="Object007_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object007_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object008"
                  position={[6.555, -4.268, -3.078]}
                  scale={1.048}
                  ref={objectRefs[7]}
                >
                  <group name="Object_30" position={[-6.252, 4.071, 2.936]}>
                    <mesh
                      
                      name="Object008_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object008_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object009"
                  position={[25.951, -7.195, -4.921]}
                  scale={1.048}
                  ref={objectRefs[8]}
                >
                  <group name="Object_33" position={[-24.632, 6.441, 4.694]}>
                    <mesh
                     
                      name="Object009_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object009_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object010"
                  position={[11.202, 12.864, -5.024]}
                  scale={1.048}
                  ref={objectRefs[9]}
                >
                  <group name="Object_36" position={[-10.685, -12.271, 4.792]}>
                    <mesh
                     
                      name="Object010_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object010_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Sphere002"
                  position={[0, -1.263, 0]}
                  rotation={[-Math.PI / 2, 0, 0.182]}
                  ref={sphereRef[0]}
                  scale={1.463}
                >
                  <group name="Object_39" position={[-10, -5.428, 0.604]}>
                    <mesh
                      name="Sphere002_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Sphere002_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Sphere004"
                  rotation={[0.636, -0.427, -1.01]}
                  ref={sphereRef[1]}
                  scale={2.444}
                >
                  <group name="Object_42" position={[-5, 5.581, 6.305]}>
                    <mesh
                      name="Sphere004_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Sphere004_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Sphere005"
                  rotation={[-2.053, -0.42, -0.835]}
                  ref={sphereRef[2]}
                  scale={1.4}
                >
                  <group name="Object_45" position={[-10, -7.117, -18.261]}>
                    <mesh
                      name="Sphere005_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Sphere005_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group name="Object011" scale={1.048} ref={objectRefs[10]}>
                  <mesh
                    // ref={objectRef}
                    name="Object011_Material_#3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Object011_Material_#3_0"].geometry}
                    material={materials.Material_3}
                  />
                </group>
                <group
                  name="Object012"
                  position={[-0.995, -0.687, -1.026]}
                  rotation={[0, 0, -1.309]}
                  scale={1.048}
                  ref={objectRefs[11]}
                >
                  <group name="Object_50" position={[0.949, 0.656, -48]}>
                    <mesh
                      // ref={objectRef}
                      name="Object012_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object012_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object013"
                  position={[-0.986, -0.744, -1.026]}
                  rotation={[0, 0, -2.443]}
                  scale={1.048}
                  ref={objectRefs[12]}
                >
                  <group name="Object_53" position={[0.94, 0.709, 0]}>
                    <mesh
                      // ref={objectRef}
                      name="Object013_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object013_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
                <group
                  name="Object014"
                  position={[24.033, 18.696, -0.087]}
                  scale={1.048}
                  ref={objectRefs[13]}
                >
                  <mesh
                    // ref={objectRef}
                    name="Object014_Material_#3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Object014_Material_#3_0"].geometry}
                    material={materials.Material_3}
                  />
                </group>
                <group
                  name="Object015"
                  position={[23.048, 17.953, 0.603]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={0.737}
                  ref={objectRefs[14]}
                >
                  <group name="Object_58" position={[0.94, 0.709, 0]}>
                    <mesh
                      // ref={objectRef}
                      name="Object015_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object015_Material_#3_0"].geometry}
                      material={materials.Material_3}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/broken_steampunk_clock.glb");

export default Time;
