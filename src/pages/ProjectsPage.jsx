// src/pages/ProjectsPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Papa from "papaparse";
import Background from "../components/Background";
import "../main.css";

export default function ProjectsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category")
    ? queryParams.get("category").toUpperCase()
    : "PERSONAL";

  const [allProjects, setAllProjects] = useState([]);

  /* ====================================================
   * 1) FETCH & PARSE CSV
   * ==================================================== */
  useEffect(() => {
    fetch("/projects.csv")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch projects.csv");
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsed = results.data.map((row) => {
              let parsedDate = null;
              if (row.Date) {
                const parts = row.Date.split("-");
                if (parts.length === 2) {
                  const monthAbbr = parts[0].trim();
                  const yearPart = parts[1].trim();
                  const monthIndex = new Date(`${monthAbbr} 1, 2000`).getMonth();
                  let yearNum = parseInt(yearPart, 10);
                  if (yearPart.length === 2) yearNum += 2000;
                  parsedDate = new Date(yearNum, monthIndex, 1);
                }
              }

              return {
                Name: row.Name,
                Date: parsedDate,
                Category: row.Category.trim().toUpperCase(),
                Description: row.Description,
                Image: row.Image ? row.Image.trim() : "",
                percentCompleted: Number(row["Percent Completed"] || 0),
                Skills: row.Skills
                  ? row.Skills.split(";").map((s) => s.trim())
                  : [],
                Link: row.Link ? row.Link.trim() : "",
              };
            });

            setAllProjects(parsed);
          },
          error: (err) => {
            console.error("Error parsing CSV:", err);
          },
        });
      })
      .catch((err) => {
        console.error("Error loading CSV:", err);
      });
  }, []);

  /* ====================================================
   * 2) FILTER & SORT PROJECTS
   * ==================================================== */
  const filtered = allProjects
    .filter((proj) => proj.Category === selectedCategory)
    .sort((a, b) => {
      if (a.Date && b.Date) return b.Date - a.Date;
      return 0;
    });

  /* ====================================================
   * 3) RENDER COMPONENT
   * ==================================================== */
  return (
    <Background>
      <div className="page-content">
        <ul className="projects-list">
          {filtered.map((proj, index) => (
            <li key={index} className="project-item">
              {proj.Image && (
                <div className="project-image-container">
                  {proj.Link ? (
                    <a
                      href={proj.Link}
                      target={proj.Link.startsWith("http") ? "_blank" : "_self"}
                      rel={proj.Link.startsWith("http") ? "noopener noreferrer" : ""}
                    >
                      <img
                        src={proj.Image}
                        alt={`${proj.Name} screenshot`}
                        className="project-image"
                      />
                    </a>
                  ) : (
                    <img
                      src={proj.Image}
                      alt={`${proj.Name} screenshot`}
                      className="project-image"
                    />
                  )}
                </div>
              )}

              <div className="project-details">
                {proj.Link ? (
                  <h3 className="project-name">
                    <a
                      href={proj.Link}
                      className="project-link"
                      target={proj.Link.startsWith("http") ? "_blank" : "_self"}
                      rel={proj.Link.startsWith("http") ? "noopener noreferrer" : ""}
                    >
                      {proj.Name}
                    </a>
                  </h3>
                ) : (
                  <h3 className="project-name">{proj.Name}</h3>
                )}

                {proj.Date && (
                  <p className="project-date">
                    {proj.Date.toLocaleString(undefined, {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                )}

                <p className="project-description">{proj.Description}</p>

                <div className="project-progress">
                  <p>Progress: {proj.percentCompleted}%</p>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${proj.percentCompleted}%` }}
                    ></div>
                  </div>
                </div>

                {proj.Skills.length > 0 && (
                  <div className="project-skills">
                    {proj.Skills.map((skill, i) => (
                      <span key={i} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}

          {filtered.length === 0 && (
            <li className="no-projects">No projects found in this category.</li>
          )}
        </ul>
      </div>
    </Background>
  );
}
