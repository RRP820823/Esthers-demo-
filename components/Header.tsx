import React, { useState } from "react";
import {
  FilterContainer,
  SingleFilterCard,
  HeadContainer,
  TitleContainer,
  OverlayDiv,
} from "./header.styles";
import Image from "next/image";
import beautypic from "public/images/beauty 1.jpg";
import fashionpic from "public/images/Fashion 1.png";
import homepic from "public/images/home 2 - alt 1.png";
import ImageGallery from "./ImageGallery";

interface Filter {
  label: string;
  imageSrc?: string | any;
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    console.log("Selected Tab:", tab);
  };

  const filters: Filter[] = [
    { label: "All" },
    { label: "Beauty", imageSrc: beautypic },
    { label: "Home", imageSrc: homepic },
    { label: "Fashion", imageSrc: fashionpic },
  ];

  const getTitleContent = (tab: string) => {
    switch (tab) {
      case "All":
        return "Explore";
      case "Beauty":
        return "Beauty Inspiration";
      case "Home":
        return "Home Inspiration";
      case "Fashion":
        return "Fashion Inspiration";
      default:
        return "Explore";
    }
  };

  return (
    <>
      <HeadContainer>
        <TitleContainer>{getTitleContent(selectedTab)}</TitleContainer>
        <FilterContainer>
          {filters.map((filter) => (
            <SingleFilterCard
              key={filter.label}
              onClick={() => handleTabClick(filter.label)}
            >
              {filter.imageSrc && (
                <Image
                  src={filter.imageSrc}
                  alt={`${filter.label} pic`}
                  style={{
                    opacity: selectedTab === filter.label ? "1" : "0.6",
                    borderRadius: "6px",
                  }}
                />
              )}
              <OverlayDiv
                style={{
                  backgroundColor:
                    selectedTab === "All"
                      ? "rgba(52, 85, 74, 0.7)"
                      : "transparent",
                }}
              >
                <p
                  style={{
                    color: "white",
                    margin: "0px",
                    fontSize: "32px",
                    fontWeight: "500",
                  }}
                >
                  {filter.label}
                </p>
              </OverlayDiv>
            </SingleFilterCard>
          ))}
        </FilterContainer>
      </HeadContainer>
    </>
  );
};

export default Header;
