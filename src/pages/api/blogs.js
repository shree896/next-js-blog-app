export default function handler(req, res) {
    const blogs = [
      { id: 1, title: "Next.js Basics", description: "Learn the basics of Next.js" },
      { id: 2, title: "Styling in Next.js", description: "Explore styling options" },
    ];
    res.status(200).json(blogs);
  }
  