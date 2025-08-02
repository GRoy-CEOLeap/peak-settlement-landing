import React from 'react';
import { BookOpen, Clock, Users, TrendingUp } from 'lucide-react';

const EducationalContent = () => {
  const articles = [
    {
      title: "Understanding Personal Injury Claims",
      excerpt: "Learn about the types of personal injury cases and what compensation you may be entitled to receive.",
      readTime: "5 min read",
      category: "Legal Basics"
    },
    {
      title: "What to Do After an Accident",
      excerpt: "Essential steps to take immediately after an accident to protect your health and legal rights.",
      readTime: "7 min read",
      category: "Emergency Guide"
    },
    {
      title: "Dealing with Insurance Companies",
      excerpt: "How to handle insurance adjusters and avoid common pitfalls that could hurt your claim.",
      readTime: "6 min read",
      category: "Insurance Tips"
    },
    {
      title: "Medical Documentation Importance",
      excerpt: "Why proper medical documentation is crucial for your personal injury case success.",
      readTime: "4 min read",
      category: "Medical Records"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "1,000+",
      label: "Clients Helped",
      description: "Successfully represented clients across various injury types"
    },
    {
      icon: TrendingUp,
      number: "$50M+",
      label: "Total Recovered",
      description: "In settlements and verdicts for our clients"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Availability",
      description: "Round-the-clock support when you need it most"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Educational Content */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Know Your Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your legal rights is the first step toward getting the compensation you deserve. 
              Our educational resources help you make informed decisions about your case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">{article.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h3>
            <p className="text-lg text-gray-600">
              Numbers that demonstrate our commitment to client success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600">
              Get answers to common questions about personal injury claims
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  How much does it cost to hire a personal injury lawyer?
                </h4>
                <p className="text-gray-600 text-sm">
                  We work on a contingency fee basis, which means you don't pay unless we win your case. 
                  There are no upfront costs or hidden fees.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  How long do I have to file a personal injury claim?
                </h4>
                <p className="text-gray-600 text-sm">
                  The statute of limitations varies by state and type of case. It's important to contact us 
                  as soon as possible to ensure your rights are protected.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  What types of compensation can I receive?
                </h4>
                <p className="text-gray-600 text-sm">
                  You may be entitled to compensation for medical expenses, lost wages, pain and suffering, 
                  and other damages related to your injury.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  How long does a personal injury case take?
                </h4>
                <p className="text-gray-600 text-sm">
                  Case duration varies depending on complexity and severity. Many cases settle within 
                  6-18 months, while others may take longer if they go to trial.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/quiz"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Your Free Case Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalContent;

