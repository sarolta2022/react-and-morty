import React from "react";
import styles from "./singleItem.module.css";
function SingleItem({ data }) {
  return (
    <div className={styles.singleItem}>
      {data.image && <img src={data.image} alt="Rick and Morty" />}
      <div>
        <h2>{data?.name ?? "Shit happens"}</h2>
        <div className={styles.container}>
          {data.gender && <p>Gender {data.gender}</p>}
          {data?.location?.name && <p>Location: {data.location.name}</p>}
          {data?.origin?.name && <p>Origin: {data.origin.name}</p>}
          {data.species && <p>Species: {data.species}</p>}
          {data.status && <p>Status: {data.status}</p>}
          {data.dimension && <p>dimension: {data.dimension}</p>}
          {data.type && <p>Type: {data.type}</p>}
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
