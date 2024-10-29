// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ImgContentManage = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newImage, setNewImage] = useState(null); // State for the new image
//   const [currentPage, setCurrentPage] = useState(1); // State for pagination
//   const itemsPerPage = 10; // Limit of images per page

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get("http://localhost:7000/images"); // Adjust your API endpoint
//         setImages(response.data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch images");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append("image", file);

//       try {
//         const response = await axios.post("http://localhost:7000/images", formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setImages([...images, response.data]); // Append the new image to the list
//         setNewImage(null); // Reset the input field
//       } catch (err) {
//         setError("Failed to upload image");
//         console.error(err);
//       }
//     }
//   };

//   const handleDeleteImage = async (imageId) => {
//     try {
//       await axios.delete(`http://localhost:7000/images/${imageId}`);
//       setImages(images.filter(image => image._id !== imageId)); // Remove the deleted image
//     } catch (err) {
//       setError("Failed to delete image");
//       console.error(err);
//     }
//   };

//   // Pagination Logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(images.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className=" my-12">
//       <h1 className="mb-8 text-3xl font-bold">Manage Carousel Images</h1>
      
//       <input 
//         type="file" 
//         onChange={handleImageUpload} 
//         accept="image/*" 
//         className="mb-4" 
//       />
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-400">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-4 text-left text-gray-600">S.No</th>
//               <th className="py-2 px-4 text-left text-gray-600">Image</th>
//               <th className="py-2 px-4 text-left text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y">
//             {currentItems.length > 0 ? (
//               currentItems.map((image, index) => (
//                 <tr key={image._id}>
//                   <td className="py-2 px-4 text-gray-800">{indexOfFirstItem + index + 1}</td>
//                   <td className="py-2 px-4 text-gray-800">
//                     <img src={image.url} alt={image.name} className="w-20 h-auto" />
//                   </td>
//                   <td className="py-2 px-4">
//                     <button 
//                       onClick={() => handleDeleteImage(image._id)} 
//                       className="text-red-600 hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center py-4 text-gray-600">
//                   {error ? error : "No images available."}
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center mt-4">
//         <button 
//           onClick={() => handlePageChange(currentPage - 1)} 
//           disabled={currentPage === 1} 
//           className={`p-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
//         >
//           Previous
//         </button>
        
//         <div>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button 
//               key={index + 1} 
//               onClick={() => handlePageChange(index + 1)} 
//               className={`p-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>

//         <button 
//           onClick={() => handlePageChange(currentPage + 1)} 
//           disabled={currentPage === totalPages} 
//           className={`p-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImgContentManage;
