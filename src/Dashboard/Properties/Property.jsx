import axios from "axios";
import PropertyNavbar from "./PropertyNavbar";
const Property = () => {
  return (
    <div className="w-[1200px] ">
      <PropertyNavbar />
    </div>
  );
};
export default Property;




export const PropertyApartment=()=>{}
export const PropertyHouse=()=>{}
export const PropertyLand=()=>{}
export const PropertyProject=()=>{}
export const PropertyCommercial=()=>{}



// // Pagination states
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 10;

// // Filter and sort states
// const [filterText, setFilterText] = useState('');
// const [roleFilter, setRoleFilter] = useState(''); 
// const [sortMethod, setSortMethod] = useState('');

// // Pagination Logic
// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
// const totalPages = Math.ceil(filteredData.length / itemsPerPage);

// const handlePreviousPage = () => {
//   if (currentPage > 1) setCurrentPage(currentPage - 1);
// };

// const handleNextPage = () => {
//   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
// };

// const handlePageClick = (pageNumber) => {
//   setCurrentPage(pageNumber);
// };

// const handledelete=()=>{}
// const handleupdate=()=>{}
// <div className="w-[1200px] overflow-x-auto">
// <table className="min-w-full bg-white border border-gray-400">
//   <thead>
//     <tr className="bg-gray-100 border-b">
//       <th className="py-2 px-4 text-left text-gray-600">S.No</th>
//       <th className="py-2 px-4 text-left text-gray-600">Property Type</th>
//       <th className="py-2 px-4 text-left text-gray-600">Actions</th>
//     </tr>
//   </thead>
//  {/* Toggle for Create/Edit User */}
//  {showToggle && (
//   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded shadow-lg z-60">
//       <button 
//         onClick={handleToggle} 
//         className="mb-4 text-red-600 hover:underline"
//       >
//         Go Back
//       </button>
//       { onClose={handleToggle} /> :  onClose={handleToggle} />)}
   
//     </div>
//   </div>
// )}