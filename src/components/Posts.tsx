import { motion } from "motion/react";

const posts = [
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7449416697159004160?collapsed=1", height: 566 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7462797987778490368?collapsed=1", height: 593 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7492806350201085952?collapsed=1", height: 597 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7492936968520155136?collapsed=1", height: 566 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7472828113870168066?compact=1", height: 399 }
];

export function Posts() {
  return (
    <section id="posts" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-content-muted mb-4">Latest Posts</h2>
          <p className="text-content-muted max-w-2xl text-sm">
            Insights, updates, and professional thoughts shared on LinkedIn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full bg-surface border border-border-line rounded-2xl overflow-hidden shadow-sm flex justify-center bg-surface-muted"
            >
              <iframe 
                src={post.src} 
                height={post.height} 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title={`Embedded LinkedIn post ${idx + 1}`}
                className="w-full max-w-[504px] bg-white"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
