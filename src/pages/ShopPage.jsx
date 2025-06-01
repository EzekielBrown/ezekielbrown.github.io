// src/pages/ShopPage.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Papa from "papaparse";
import Background from "../components/Background";
import "../main.css";

export default function ShopPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category")
    ? queryParams.get("category").toUpperCase()
    : "GUITARS";

  const [allItems, setAllItems] = useState([]);

  /* ====================================================
   * 1) FETCH & PARSE CSV
   * ==================================================== */
  useEffect(() => {
    fetch("/shop.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch shop.csv");
        return res.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsed = results.data.map((row) => ({
              Name: row.Name,
              Price: parseFloat(row.Price) || 0,
              Category: row.Category.trim().toUpperCase(),
              Description: row.Description,
              Image: row.Image ? row.Image.trim() : "",
              inStock: parseInt(row["In Stock"], 10) || 0,
              // include Console column
              Console: row.Console ? row.Console.trim() : "",
              Skills: row.Skills
                ? row.Skills.split(",").map((s) => s.trim())
                : [],
            }));
            setAllItems(parsed);
          },
          error: (err) => {
            console.error("Error parsing shop.csv:", err);
          },
        });
      })
      .catch((err) => {
        console.error("Error loading shop.csv:", err);
      });
  }, []);

  /* ====================================================
   * 2) FILTER & SORT ITEMS
   * ==================================================== */
  const filtered = allItems
    .filter((item) => item.Category === selectedCategory)
    .sort((a, b) => {
      if (a.inStock === 0 && b.inStock > 0) return 1;
      if (a.inStock > 0 && b.inStock === 0) return -1;
      return a.Name.localeCompare(b.Name);
    });

  /* ====================================================
   * 3) RENDER COMPONENT
   * ==================================================== */
  return (
    <Background>
      <div className="page-content">
        <ul className="shop-list">
          {filtered.map((item, idx) => (
            <li key={idx} className="shop-item">
              {item.Image && (
                <div className="shop-image-container">
                  <img
                    src={item.Image}
                    alt={`${item.Name}`}
                    className="shop-image"
                  />
                </div>
              )}

              <div className="shop-details">
                <h3 className="shop-name">{item.Name}</h3>

                {item.inStock > 0 && (
                  <p className="shop-price">${item.Price.toFixed(2)}</p>
                )}

                <p className="shop-description">{item.Description}</p>

                {/* Render Skills as badges */}
                {item.Skills && item.Skills.length > 0 && (
                  <div className="project-skills">
                    {item.Skills.map((skill, i) => (
                      <span key={i} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Render Console as a badge (if present) */}
                {item.Console && (
                  <div className="project-skills">
                    <span className="skill-badge">{item.Console}</span>
                  </div>
                )}

                <p className="shop-stock">
                  {item.inStock > 0
                    ? `In Stock: ${item.inStock}`
                    : "Out of Stock"}
                </p>
              </div>
            </li>
          ))}

          {filtered.length === 0 && (
            <li className="no-shop-items">
              No items available in this category.
            </li>
          )}
        </ul>
      </div>
    </Background>
  );
}
