import React, { useState, useEffect } from "react";

const ProjectCarousel = ({ text, images }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
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

    // Получаем текущее изображение
    const currentImage = images[currentImageIndex];

    return (
        <div className="project__item">
            <p className="project__text">{text}</p>
            <div className={images.length > 2 ? "project__carousel" : "project__two-high"}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        className="project__img"
                        src={src}
                        alt={`Изображение ${index + 1}`}
                        onClick={() => openModal(index)} // Передаем index здесь
                        style={{ cursor: 'pointer' }} // добавим указатель
                    />
                ))}
            </div>

            {isOpen && (
                <div className="project__modal" onClick={closeModal}>
                    <span style={{ color: 'white', cursor: 'pointer', position: 'absolute', top: 20, right: 20 }}>&times;</span>
                    <button onClick={prevImage} className="project__arrow-left">❮</button>
                    <img className="modal-content" src={currentImage} alt="Большое изображение" style={{ maxWidth: '80%', height: "auto", margin: "auto 0" }} />
                    <button onClick={nextImage} className="project__arrow-right">❯</button>
                </div>
            )}
        </div>
    );
};

export default ProjectCarousel;
