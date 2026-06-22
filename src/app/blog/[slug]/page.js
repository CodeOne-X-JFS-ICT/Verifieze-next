import Navbar from "@/components/Navbar";
import { blogs } from "@/data/blogs";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Shield,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | VERIFIEZE Blog`,
    description: blog.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  return (
    <>
      <Navbar />

      {/* Article Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary-light)] to-white pt-20 pb-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,155,181,0.1)_0%,_transparent_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category & meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[var(--color-primary-light)] text-[var(--color-primary)] font-semibold text-xs px-3 py-1.5 rounded-full">
              <Tag className="w-3 h-3" />
              {blog.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {blog.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {blog.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                {blog.author}
              </p>
              <p className="text-gray-400 text-xs">
                Background Verification Experts
              </p>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-t-2xl overflow-hidden shadow-xl h-64 md:h-96">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            {blog.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={idx}
                    className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={idx}
                    className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={idx} className="mb-6 space-y-3">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                        </div>
                        <span className="text-gray-700 text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "highlight") {
                return (
                  <div
                    key={idx}
                    className="my-8 pl-6 border-l-4 border-[var(--color-primary)] bg-gradient-to-r from-[var(--color-primary-light)] to-transparent p-6 rounded-r-xl"
                  >
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <p className="text-gray-800 font-semibold text-base md:text-lg leading-relaxed italic">
                        {block.text}
                      </p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Divider & CTA */}
          <div className="border-t border-gray-100 mt-16 pt-10">
            <div className="bg-gradient-to-br from-[var(--color-primary-light)] to-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to work with an ISO 27001:2022 certified provider?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                VERIFIEZE combines certified information security with Sri
                Lanka's most comprehensive background verification services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      {blogs.filter((b) => b.slug !== blog.slug).length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs
                .filter((b) => b.slug !== blog.slug)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={related.coverImage}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-[var(--color-primary)] font-semibold">
                        {related.category}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 mt-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
