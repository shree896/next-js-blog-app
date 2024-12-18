import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const blogs = [
    { id: 1, title: "Next.js Basics", description: "Learn the basics of Next.js" },
    { id: 2, title: "Styling in Next.js", description: "Explore styling options" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Blog App</h1>
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`} className={styles.blogCard}>
            <div className={styles.cardContent}>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <span className={styles.readMore}>Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
