import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the activeTab
  const generateTabContent = () => {

    if (activeEditorTab === "colorpicker") {
      return <ColorPicker />;
    } else if (activeEditorTab === "filepicker") {

      return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
    } else {
      return null;
    }

  };

  /**
   * The function `handleDecals` updates the state with a given result and handles the active filter tab if necessary.
   */
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  /* The `handleActiveFilterTab` function is responsible for updating the state based on the selected
filter tab. It takes a `tabName` parameter, which represents the name of the selected filter tab. */
  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  /**
   * Reads a file and then calls the `handleDecals` function with the specified
   * type and the result of reading the file, and finally sets the active editor tab to an empty string.
   */
  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* left menu tabs */}
          <motion.div
            key="custom"
            className="colourtabs-container"
            {...slideAnimation("bottom")}
          >
            <div className="">
              <div className="flex space-x-2 justify-center">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                <div className="absolute top-14">
                  {generateTabContent()}
                </div>

              </div>
            </div>
          </motion.div>

          {/* filter tabs */}
          <motion.div
            className="filtertabs-container"
            {...fadeAnimation}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}

            {/* <button className="download-btn" onClick={downloadCanvasToImage}>
              <img
                src={download}
                alt="Download Image"
                className="w-3/5 h-3/5 object-contain"
              />
            </button> */}

          </motion.div>
        </>
      )
      }
    </AnimatePresence >
  );
};

export default Customizer;
