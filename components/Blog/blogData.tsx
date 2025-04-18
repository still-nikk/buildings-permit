import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Total Permits Data",
    paragraph:
      "Shows the overall count of building permits issued over time, highlighting construction activity trends in Seattle.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },

    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Estimated Project Cost",
    paragraph:
      "Visualizes the cost distribution of projects, helping identify high-investment construction across different permit types and classes.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Average Processing Days",
    paragraph:
      "Displays monthly average approval times, revealing efficiency patterns and possible delays in the permit processing workflow.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
