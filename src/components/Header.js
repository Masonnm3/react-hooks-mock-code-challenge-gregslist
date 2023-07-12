import React from "react";
import Search from "./Search";

function Header({setSearch , search , handleSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch}  search={search} handleSubmit={handleSubmit}/>
    </header>
  );
}

export default Header;
