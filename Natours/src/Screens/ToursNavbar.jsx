import React, { useContext} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CssFiles/ToursNavBar.css";
import { useEffect } from "react";
import { FilterContext } from "../Contexts/FilterContext";

const ToursNavBar = () => {
  const {setDifficulty,setSort,sort, difficulty}= useContext(FilterContext)
  useEffect(() => {
    setDifficulty("");
    setSort("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleDifficulty=(e)=>{
    setDifficulty(e.target.value)
    
  }
  const handleSort =(e)=>{
    setSort(e.target.value)
  }
  

  return (
    <div className="tours-nav-bar">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${isActive("/AllTours") ? "active" : ""}`}
          onClick={() => navigate("/AllTours")}
        >
          All Tours
        </button>
        <button
          className={`tab-btn ${isActive("/tours/top-5") ? "active" : ""}`}
          onClick={() => navigate("/tours/top-5")}
        >
          Top 5 Tours
        </button>
        <button
          className={`tab-btn ${isActive("/tours/monthly") ? "active" : ""}`}
          onClick={() => navigate("/tours/monthly")}
        >
          Monthly Plans
        </button>
      </div>

      {/* Filters only on AllTours page */}
      {isActive("/AllTours") && (
        <div className="filters">
          <select className="filter-select" value={difficulty} onChange={handleDifficulty}>
            <option value="">🎯 Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>

          <select className="filter-select" value={sort} onChange={handleSort}>
            <option value="">🔽 Sort By</option>
            <option value="price">💰 Price: Low to High</option>
            <option value="-price">💸 Price: High to Low</option>
            <option value="-ratingsAverage">⭐ Rating: High to Low</option>
            <option value="ratingsAverage">⭐ Rating: Low to High</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default ToursNavBar;
