import { useRouter } from 'next/router';
import styles from '../../styles/Blog.module.css';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const blog = {
    1: { title: "Next.js Basics", content: "Next.js is a React framework..." },
    2: { title: "Styling in Next.js", content: "Styling in Next.js can be done using..." },
  }[id];

  if (!blog) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.content}>{blog.content}</p>
    </div>
  );
}
