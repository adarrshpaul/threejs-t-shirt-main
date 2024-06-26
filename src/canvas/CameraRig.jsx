import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store";

/**
 * The CameraRig component is a React component that handles the positioning and rotation of a 3D model
 * based on the state and user input.
 * @returns The CameraRig component is returning a group element with a ref attribute set to the group
 * useRef() reference. The children of the CameraRig component are rendered inside this group element.
 */
const CameraRig = ({ children }) => {
  const group = useRef();

  /* Using the `useFrame` hook from the `@react-three/fiber` library to update the
position and rotation of a 3D model in a React component. */
  useFrame((state, delta) => {

  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
