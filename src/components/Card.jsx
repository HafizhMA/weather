import React from "react";

const Card = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu ketika tombol "Cari" ditekan, misalnya mengirimkan data pencarian ke server.
  };
  return (
    <section
      id="cardSection"
      className="h-screen flex justify-center items-center"
    >
      <div className="boxContainer container mx-auto rounded">
        <div className="searchBox w-64 mx-auto">
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-l-full focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              placeholder="Cari..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Cari
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Card;
