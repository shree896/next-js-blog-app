export default function BlogCard({ blog }) {
    return (
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
      </div>
    );
  }
  