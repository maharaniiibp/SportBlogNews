import React from "react";
import classes from "../../styles/catalog-item.module.css";
import Image from "next/image";
import Link from "next/link";

const CatalogItem = (props) => {
  const { id ,Title, img } = props.item;
  return (
    <div className="flex">
    <div className={`${classes.catalog_item}`}>
      <div className="bg-transparent">
        <h6>{Title}</h6>
      </div>

      <div className={`${classes.catalog_img}`}>
        <Image alt="portfolio-img" src={img} width="280" height="280" />
      
      </div>

      <div className={`${classes.catalog_btn} bg-transparent`}>
        <button className="primary_btn">
          <Link href={`/${id}`}>Detail</Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default CatalogItem;
