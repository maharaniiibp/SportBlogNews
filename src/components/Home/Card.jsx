import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import classes from "../../styles/catalog.module.css";
import CatalogItem from "./CardItem";
import catalogData from "../../data/news.json";


  
  

const Catalog = () => {
  const [filter, setFilter] = useState("HotBadminton");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "HotBadminton") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "HotVolly") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
    if (filter === "HotBasketball") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "HotFootball") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab_btn_active}`;

  // useEffect test data
  // useEffect(() => {
  //   getcatalog();
  // }, []);

  return (
    <section id="catalog">
      <Container>
        <hr></hr>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <h4 className="mt-4 text-2xl">Hot News</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab_btns} text-end`}>
              <button
                className={` ${
                  filter === "HotBadminton" ? active : ""
                } secondary_btn text-black`}
                onClick={() => setFilter("HotBadminton")}
              >
              <strong>BADMINTON</strong>
              </button>
              <button
                className={`${
                  filter === "HotVolly" ? active : ""
                } secondary_btn text-black`}
                onClick={() => setFilter("HotVolly")}
              >
                <strong>VOLLY</strong>
              </button>
              <button
                className={` ${
                  filter === "HotBasketball" ? active : ""
                } secondary_btn text-black`}
                onClick={() => setFilter("HotBasketball")}
              >
                <strong>BASKETBALL</strong>
              </button>
              <button
                className={` ${
                  filter === "HotFootball" ? active : ""
                } secondary_btn text-black`}
                onClick={() => setFilter("HotFootball")}
              >
                <strong>FOOTBALL</strong>
              </button>
            </div>
          </Col>
        <div className="flex space-x-3 mt-3 justify-end">
          {data?.map((props) => (
            <Col lg="3  " md="4" sm="6" key={props.id}>
              <CatalogItem item={props} />
            </Col>
          ))}
          </div>
        </Row>
        <div className="flex justify-end">
            <button className="primary_btn">
                <Link href={'/Product'}>Berita lainnya</Link>
            </button>
        </div>
      </Container>
    </section>
  );
};


export default Catalog;
