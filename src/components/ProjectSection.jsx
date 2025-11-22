import React, { useEffect, useState } from "react";
import { X, MapPin, Calendar, ArrowRight } from "lucide-react";
import { fetchProjectData } from "../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

 const dispatch = useDispatch()

  const {projectData, error, status} = useSelector((state)=>state.data)

  useEffect(()=>{
    dispatch(fetchProjectData())
  },[dispatch])


  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };
 if (status == "loading") {
    return (
      <>
        <div className="text-xl h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          Loading..
        </div>
      </>
    );
  }

  if (projectData.length == 0) {
    return (
      <>
        <div className="text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          Project Data Not Found!
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2">
          {error}
        </div>
      </>
    );
  }
    const formateDate = (date) => {
  if (!date) return "Date";

  try {
    // Ensure it's a Date object
    const newDate = new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return newDate;
  } catch (error) {
    console.error("Invalid date:", error);
    return "Date";
  }
};
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-red-50 rounded-full mb-4">
            <span className="text-red-600 font-medium text-sm">
              OUR PROJECTS
            </span>
          </div>
          <h2 className="text-4xl play font-bold text-gray-900 mb-4">
            Featured <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our portfolio of successful airport and facility projects
            that showcase our expertise, innovation, and commitment to
            excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.isArray(projectData) && [...projectData]?.reverse()?.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={project.mainImageUrl}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end ">
                  <p className="text-white text-sm line-clamp-2 mb-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin size={14} className="mr-1" />
                    <span>{project.location}</span>
                  </div>
                </div> */}

                {/* Category Badge */}
                <div className="absolute capitalize top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>

              {/* Project Title */}
              <div className="p-5 w-full bg-white/50 absolute bottom-0">
                <h3 className="text-lg font-bold text-gray-900 group-hover:underline underline-offset-2 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

    
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
                  {/* Close Button */}
                  <button 
                    className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors z-10"
                    onClick={closeModal}
                  >
                    <X size={24} />
                  </button>
                  
                  <div className="w-full h-full p-4 md:p-10 overflow-y-auto">
                    <div className="max-w-6xl h-[90%] mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
                      <div className="grid md:grid-cols-2">
                        <div className="h-full">
                          <img 
                            src={selectedProject.mainImageUrl} 
                            alt={selectedProject.title} 
                            className="w-full h-[90%] object-cover"
                          />
                        </div>
                        
                        <div className="p-6 md:p-10">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-4">
                            {selectedProject.category}
                          </div>
                          
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            {selectedProject.title}
                          </h2>
                          
                          <div className="flex items-center text-gray-500 mb-2">
                            <MapPin size={16} className="mr-2" />
                            <span>{selectedProject.location}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500 mb-6">
                            <Calendar size={16} className="mr-2" />
                            <span>{formateDate(selectedProject?.updatedAt)}</span>
                          </div>
                          
                          <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="font-semibold text-gray-900 mb-3">Project Overview</h3>
                            <p className="text-gray-600 h-72 overflow-auto" dangerouslySetInnerHTML={{ __html: selectedProject?.description || "" }}>
                              {/* Extended description for modal */}
                              {/* <br /><br />
                              JK Contractor successfully completed this project with a focus on quality, efficiency, and sustainability. 
                              The project was delivered on time and within budget, meeting all client specifications and exceeding expectations. */}
                            </p>
                          </div>
                          
                          {/* <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">Project Duration</div>
                              <div className="font-semibold">12 months</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">Project Value</div>
                              <div className="font-semibold">$24.5M</div>
                            </div>
                          </div> */}
                          
                          {/* <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <div className="flex-shrink-0 mr-2 mt-1 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                </div>
                                <span className="text-gray-600">Sustainable materials and energy-efficient systems</span>
                              </li>
                              <li className="flex items-start">
                                <div className="flex-shrink-0 mr-2 mt-1 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                </div>
                                <span className="text-gray-600">Advanced security and monitoring integration</span>
                              </li>
                              <li className="flex items-start">
                                <div className="flex-shrink-0 mr-2 mt-1 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                </div>
                                <span className="text-gray-600">Improved passenger flow and accessibility</span>
                              </li>
                            </ul>
                          </div> */}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      )}
    </section>
  );
};

export default ProjectsSection;
