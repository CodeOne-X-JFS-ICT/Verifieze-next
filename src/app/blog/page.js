import Navbar from "@/components/Navbar";
import { blogs } from "@/data/blogs";
import { ArrowRight, BookOpen, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog | VERIFIEZE — Background Verification Insights",
  description:
    "Expert insights on background verification, data security, compliance, and HR best practices from the VERIFIEZE team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary-light)] to-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(0,155,181,0.12)_0%,_transparent_70%)] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] font-semibold text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              VERIFIEZE BLOG
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Insights on{" "}
              <span className="text-[var(--color-primary)]">
                Verification & Security
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Expert perspectives on background verification, data security,
              compliance standards, and building safer workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.length === 0 ? (
            <div className="text-center py-24 text-gray-500">
              No articles yet. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Cover Image */}
                  <div className="relative h-52 overflow-hidden bg-[var(--color-primary-light)]">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[var(--color-primary)] font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">
                      <Tag className="w-3 h-3" />
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-2 mt-6 text-[var(--color-primary)] font-semibold text-sm">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
