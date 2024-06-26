import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import BookItem from "../components/BookItem";
import Item from "../components/Item";
import SearchBar from "../components/SearchBar";

import config from "../config";
const EachCollection = () => {
  const { collectionId } = useParams();
  const [collectionData, setCollectionData] = useState({});
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [loadingCollectionData, setLoadingCollectionData] = useState(true);
  const [loadingFeaturedArticles, setLoadingFeaturedArticles] = useState(true);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const handleLoadMoreClick = () => {};

  function openLearnMoreModal() {
    setModalIsOpen(true);
  }

  function closeLearnMoreModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    fetch(`${config["api"]["collections"]}/${collectionId}`)
      .then((response) => response.json())
      .then((data) => {
        setCollectionData(data["data"]);
        setLoadingCollectionData(false);
      })
      .catch(() => {
        setLoadingCollectionData(false);
      });
  }, [collectionId]);

  useEffect(() => {
    fetch(`${config["api"]["blogs"]}?related-collection=${collectionId}`)
      .then((response) => response.json())
      .then((data) => {
        setFeaturedArticles(data["data"]);
        setLoadingFeaturedArticles(false);
      })
      .catch(() => {
        setLoadingFeaturedArticles(false);
      });
  }, [collectionId]);

  return (
    <div className="flex flex-col items-center max-width">
      <div className="flex-col mb-20 mx-5">
        {/* Banner */}
        <section
          className="bg-no-repeat bg-cover bg-center w-full h-80 flex flex-col items-center justify-center rounded-lg"
          style={{
            backgroundImage: `url(${collectionData.image_url})`,
          }}
        >
          <h1>{collectionData.title}</h1>
          <p className="text-primary-blue mx-10">
            {collectionData.description}
          </p>
          {/* Learn more button */}
          <div className="flex flex-row justify-center my-5">
            <button className="" onClick={openLearnMoreModal}>
              Learn More
            </button>
          </div>
          {/* Information overlay */}
        </section>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeLearnMoreModal}
          contentLabel="Example Modal"
        >
          <button
            onClick={closeLearnMoreModal}
            className="absolute top-0 right-0 m-2 bg-white text-primary-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <p className="px-10 pt-5 items-start justify-start">
            {collectionData["information"]}
          </p>
        </Modal>

        {/* Search bar */}
        <SearchBar />

        {/* Loading indicator */}
        <div className="flex items-center justify-center mt-20">
          <div
            className={`loader ${
              loadingCollectionData || loadingFeaturedArticles
                ? "visible"
                : "hidden"
            } `}
          ></div>
        </div>

        {/* Item gallery */}
        <div>
          <h1>Our Volumes</h1>
          <div className="grid grid-cols-3 gap-8 mt-10">
            {collectionData &&
              collectionData.documents &&
              collectionData.documents.map((item) => (
                <BookItem
                  title={item.title}
                  description={""}
                  imageUrl={item.image_url}
                  link={`/our-collections/${collectionId}/${item.document_id}`}
                  key={`/our-collections/${collectionId}/${item.document_id}`}
                />
              ))}
          </div>

          {collectionData.documents && collectionData.documents.length === 0 && (
            <div className="flex mb-10">
              <p>No volumes found.</p>
            </div>
          )}

          {collectionData.documents && collectionData.documents.length > 0 && (
            <div className="flex flex-row justify-center my-5">
              <button className="" onClick={handleLoadMoreClick}>
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Featured articles */}
        <section>
          <h1>Featured Articles</h1>
          <div className="grid grid-cols-3 gap-8 mt-10">
            {featuredArticles &&
              featuredArticles &&
              featuredArticles.map((item) => (
                <Item
                  title={item.title}
                  description={""}
                  imageUrl={item.image_url}
                  link={`/blogs/${item.blog_id}`}
                  key={`/blogs/${item.blog_id}`}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EachCollection;
