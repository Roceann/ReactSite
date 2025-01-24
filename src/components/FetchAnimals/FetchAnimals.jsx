import { useState } from "react";
import ApiFetch from "../../Api/ApiFetch";
import "./FetchAnimals.scss";
import { Comment } from "../Comments/Comments";

export default function FetchAnimals() {
  return (
    <>
      <div className="home-container">
        <ApiFetch url="https://api.thedogapi.com/v1/breeds">
          {(data) => (
            <div className="chien__list">
              {data
                .filter((chien) => chien.reference_image_id)
                .map((chien) => (
                  <div key={chien.id} className="chien__item">
                    <div
                      className="card-container"
                      onMouseEnter={(e) => {
                        e.currentTarget.querySelector(".chien-info").style.display = "block";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.querySelector(".chien-info").style.display = "none";
                      }}
                    >
                      <p>Nom: {chien.name}</p>
                      {chien.reference_image_id && (
                        <img
                          src={`https://cdn2.thedogapi.com/images/${chien.reference_image_id}.jpg`}
                          alt="image de chien"
                          className="imageChien"
                        />
                      )}
                      {chien.bred_for && <p>Elever pour : {chien.bred_for}</p>}
                      <div className="chien-info">
                        <p>Nom : {chien.name}</p>
                        {chien.country_code && <p>Country code : {chien.country_code}</p>}
                        {chien.origin && <p>Origine : {chien.origin}</p>}
                        {chien.breed_group && <p>Groupe de race : {chien.breed_group}</p>}
                        {chien.temperament && <p>Tempérament : {chien.temperament}</p>}
                        {chien.weight && <p>Poids : {chien.weight.metric} kg</p>}
                        {chien.height && <p>Taille : {chien.height.metric} cm</p>}
                        {chien.life_span && <p>Durée de vie : {chien.life_span}</p>}
                      </div>
                    </div>
                    <div className="comment-section">
                      <Comment />
                    </div>
                  </div>
                ))}
            </div>
          )}
        </ApiFetch>
      </div>
    </>
  );
}