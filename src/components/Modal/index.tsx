import React from "react";
import { useEffect, useRef } from "react";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    headerContent: React.ReactNode;
    bodyContent: React.ReactNode;
    footerContent: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, headerContent, bodyContent, footerContent }) => {

    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="fixed" ref={modalRef}>
                <div className="modal relative">

                    <button className="absolute right-5 top-5 cursor-pointer" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        {
                            headerContent && (
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    {headerContent}
                                </div>
                            )
                        }
                        {
                            bodyContent && (
                                <div className="p-4 md:p-5">
                                    {bodyContent}
                                </div>
                            )
                        }
                        {
                            footerContent && (
                                <div className="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                                    {footerContent}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;