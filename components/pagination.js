function Pagination({ currentPage, pageSize, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="flex justify-center mt-8">
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 px-3 py-1 rounded ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
}
export default Pagination;
