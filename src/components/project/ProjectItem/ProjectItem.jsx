import React, { useState, useEffect } from "react";

const ProjectItem = ({ text, images }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleKeyDown = (e) => {
        if (isOpen) {
            if (e.key === "ArrowRight") {
                nextImage(e);
            } else if (e.key === "ArrowLeft") {
                prevImage(e);
            } else if (e.key === "Escape") {
                closeModal();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div className="project__item">
            <p className="project__text">{text}</p>
            <div className={images.length > 1 ? "project__two-img" : ""}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        className="project__img"
                        src={src}
                        alt={`Изображение ${index + 1}`}
                        onClick={() => openModal(index)}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
            </div>

            {isOpen && (
                <div className="project__modal" onClick={closeModal}>
                    <span style={{ color: 'white', cursor: 'pointer', position: 'absolute', top: 20, right: 20 }}>&times;</span>
                    <button onClick={prevImage} className="project__arrow-left">❮</button>
                    <img className="modal-content" src={images[currentImageIndex]} alt="Большое изображение" style={{ width: '80%', maxHeight: "auto", margin: "auto 0" }} />
                    <button onClick={nextImage} className="project__arrow-right">❯</button>
                </div>
            )}
        </div>
    );
};


export default ProjectItem;
