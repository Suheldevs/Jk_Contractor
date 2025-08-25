import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryData } from "../redux/dataSlice";

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dispatch = useDispatch();

  const { galleryData, error, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (status == "loading") {
    return (
      <>
        <Breadcrumb
          title="Gallery"
          items={[
            { label: "Home", link: "/" },
            { label: "Gallery", link: "/gallery" },
          ]}
        />
        <div className="text-xl h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          Loading..
        </div>
      </>
    );
  }
  if (galleryData.length == 0) {
    return (
      <>
        <Breadcrumb
          title="Gallery"
          items={[
            { label: "Home", link: "/" },
            { label: "Gallery", link: "/gallery" },
          ]}
          // bgImage="/api/placeholder/1920/600"
        />
        <div className="text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          Gallery Data Not Found!
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Breadcrumb
          title="Gallery"
          items={[
            { label: "Home", link: "/" },
            { label: "Gallery", link: "/gallery" },
          ]}
          // bgImage="/api/placeholder/1920/600"
        />
        <div className="text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          {error}
        </div>
      </>
    );
  }
  return (
    <>
      <Breadcrumb
        title="Gallery"
        items={[{ name: "Gallery", path: "/gallery" }]}
      />
      <div className="min-h-screen bg-neutral-50/95 lg:p-8 lg:py-14 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryData?.map((image, index) => (
              <div
                key={image.id}
                className="relative overflow-hidden  shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.imageUrl || image.src}
                  alt={image.alt || "Gallery Image"}
                  className="h-[19.3rem] w-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30  flex items-center justify-center transition-all duration-300">
                  <div className="text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 text-center">
                    <span className="text-xl font-bold">
                      <ZoomIn size={50} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div className="relative max-w-5xl w-full max-h-screen p-4 flex items-center justify-center">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
                >
                  <X size={24} />
                </button>

                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
                >
                  <ChevronLeft size={32} />
                </button>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Image */}
                <div className="w-full flex items-center justify-center">
                  <img
                    src={galleryData[currentImageIndex].imageUrl}
                    alt={galleryData[currentImageIndex].alt || "Gallery Imnage"}
                    className="max-h-screen max-w-full object-contain rounded-md  shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
