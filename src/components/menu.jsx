import React from "react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { Divider } from "@nextui-org/react";

import { useDisclosure } from "@nextui-org/react";

const Menu = ({ refs }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { home, aboutMe, technologiesDiv, projects, contact } = refs;

  const executeScroll = (ref) => {
    onClose();
    const headerHeight = document.querySelector(".header").offsetHeight;
    window.scrollTo({
      top: ref.current.offsetTop - headerHeight - 40,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div ref={btnRef} onClick={onOpen} className="mr-10 sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          width="30"
          viewBox="0 0 448 512"
        >
          <path
            fill="#ffffff"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="flex items-center bg-black justify-between">
            <DrawerHeader className="bg-black text-[#FCDC4D] inter600 flex items-center">
              rusher
            </DrawerHeader>
            <svg
              onClick={onClose}
              className="mr-5"
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              width="25"
              viewBox="0 0 384 512"
            >
              <path
                fill="#fcdc4d"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </div>

          <Divider className="bg-gray-900" />
          <DrawerBody className="bg-black">
            <div className="mt-3">
              <p
                onClick={() => {
                  executeScroll(home);
                }}
                className="text-white inter600 text-lg"
              >
                Home
              </p>
              <Divider className="bg-gray-600 mt-1 mb-1" />
              <p
                onClick={() => {
                  executeScroll(aboutMe);
                }}
                className="text-white inter600 text-lg"
              >
                About me
              </p>
              <Divider className="bg-gray-600 mt-1 mb-1" />
              <p
                onClick={() => {
                  executeScroll(technologiesDiv);
                }}
                className="text-white inter600 text-lg"
              >
                Technologies
              </p>
              <Divider className="bg-gray-600 mt-1 mb-1" />
              <p
                onClick={() => {
                  executeScroll(projects);
                }}
                className="text-white inter600 text-lg"
              >
                Projects
              </p>
              <Divider className="bg-gray-600 mt-1 mb-1" />
              <p
                onClick={() => {
                  executeScroll(contact);
                }}
                className="text-white inter600 text-lg"
              >
                Contact
              </p>
            </div>
            <div className="flex justify-center inter400">
              <p className="absolute bottom-5 text-white ">
                Hosted by <span className="text-[#FCDC4D]">Vercel</span>
              </p>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
